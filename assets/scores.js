
function checkOrCreateStudent() {
    let data = localStorage.getItem('student_profile');
    
    if (data) {
        // --- حالة التلميذ العائد ---
        let profile = JSON.parse(data);
        profile.isNew = false;
        
        // تحديث تاريخ الزيارة الحالية قبل العرض
        profile.info.lastVisit = new Date().toLocaleString('ar-DZ');
        
        // حفظ التحديث في الذاكرة
        localStorage.setItem('student_profile', JSON.stringify(profile));
        
        return profile;
    } else {
        // --- حالة التلميذ الجديد ---
        let newProfile = {
            isNew: true,
            info: {
                creationDate: new Date().toLocaleString('ar-DZ'),
                lastVisit: new Date().toLocaleString('ar-DZ') // أول زيارة هي نفسها تاريخ الإنشاء
            },
            records: {} 
        };
        localStorage.setItem('student_profile', JSON.stringify(newProfile));
        return newProfile;
    }
}


window.addEventListener('DOMContentLoaded', () => {
    const statusDiv = document.getElementById('debug-status');
    
    // فحص التلميذ
    let student = checkOrCreateStudent();

    // تحديث الواجهة للمعاينة على اللوحي
    if (student.isNew) {
        statusDiv.className = "alert alert-success text-center small";
        statusDiv.innerHTML = `<i class="bi bi-person-plus"></i> تلميذ جديد: تم إنشاء ملفك بنجاح (${student.info.creationDate})`;
    } else {
        statusDiv.className = "alert alert-info text-center small";
        statusDiv.innerHTML = `<i class="bi bi-person-check"></i> أهلاً بك مجدداً! آخر زيارة لك كانت: ${student.info.lastVisit}`;
    }
});


function updateParentScores(fullID, delta) {
    // نفكك المعرف باستخدام الشرطة "-"
    let parts = fullID.split('-'); 
    
    // نتحرك من الأسفل إلى الأعلى (حذف جزء في كل مرة)
    // مثال: math-anal-limits-exem-ex-2-1-1 -> math-anal-limits-exem-ex-2-1
    while (parts.length > 1) {
        parts.pop(); // حذف الجزء الأخير
        let parentID = parts.join('-');
        
        let data = localStorage.getItem('student_profile');
        let profile = JSON.parse(data);
        
        if (!profile.records[parentID]) {
            profile.records[parentID] = { avg: 0, count: 0 };
        }
        
        // تحديث المجموع التراكمي للأب بناءً على الفارق (Delta)
        // ملاحظة: الأباء (الفصول والمجالات) نحدث مجموع نقاطهم مباشرة
        profile.records[parentID].avg += delta; 
        
        localStorage.setItem('student_profile', JSON.stringify(profile));
        
        // تحديث الشاشة للأب إذا كان له عنصر ID
        let parentElement = document.getElementById(parentID);
        if (parentElement) {
            parentElement.innerHTML = `درجة الإتقان: ${Math.round(profile.records[parentID].avg)}`;
        }
    }
}



function recordResult(exerciseID, newScore) {
    let data = localStorage.getItem('student_profile');
    let profile = JSON.parse(data);
    let delta = 0;

    if (!profile.records[exerciseID]) {
        profile.records[exerciseID] = { avg: newScore, count: 1 };
        delta = newScore; // الفارق هو القيمة كاملة لأنها أول مرة
    } else {
        let record = profile.records[exerciseID];
        let oldAvg = record.avg;
        
        // حساب المعدل الجديد
        record.count++;
        record.avg = ((oldAvg * (record.count - 1)) + newScore) / record.count;
        
        // الفارق الذي سيؤثر على المجموع الكلي هو (المعدل الجديد - المعدل القديم)
        delta = record.avg - oldAvg;
    }

    localStorage.setItem('student_profile', JSON.stringify(profile));
    
    // --- هنا المحرك الرئيسي للتحديث التصاعدي ---
    updateParentScores(exerciseID, delta);

    return profile.records[exerciseID];
}










    
    

