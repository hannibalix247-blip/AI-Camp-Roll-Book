/* ==========================================================================
   AI 온(ON) 미래 캠프 셀프 출석부 - Application JavaScript
   ========================================================================== */

// 1. Initial Default Roster (45 Students Transcribed from User Image)
const DEFAULT_ROSTER = [
  // 4학년 (15명) - 일정: 8/10(월) ~ 8/14(금)
  { id: 'S01', seq: 1, grade: 4, class: '4가람', number: 13, name: '이서준' },
  { id: 'S02', seq: 2, grade: 4, class: '4나리', number: 7, name: '선하연' },
  { id: 'S03', seq: 3, grade: 4, class: '4나리', number: 19, name: '정윤소' },
  { id: 'S04', seq: 4, grade: 4, class: '4다솜', number: 1, name: '김고은' },
  { id: 'S05', seq: 5, grade: 4, class: '4마루', number: 6, name: '김하준' },
  { id: 'S06', seq: 6, grade: 4, class: '4마루', number: 12, name: '유예록' },
  { id: 'S07', seq: 7, grade: 4, class: '4마루', number: 19, name: '정하린' },
  { id: 'S08', seq: 8, grade: 4, class: '4바다', number: 1, name: '강래희' },
  { id: 'S09', seq: 9, grade: 4, class: '4바다', number: 2, name: '김서하' },
  { id: 'S10', seq: 10, grade: 4, class: '4바다', number: 5, name: '김하린' },
  { id: 'S11', seq: 11, grade: 4, class: '4바다', number: 12, name: '원도현' },
  { id: 'S12', seq: 12, grade: 4, class: '4사랑', number: 11, name: '송예린' },
  { id: 'S13', seq: 13, grade: 4, class: '4사랑', number: 15, name: '이리안' },
  { id: 'S14', seq: 14, grade: 4, class: '4사랑', number: 20, name: '진영민' },
  { id: 'S15', seq: 15, grade: 4, class: '4아람', number: 4, name: '김재윤' },

  // 5학년 (15명) - 일정: 8/3(월) ~ 8/7(금)
  { id: 'S16', seq: 16, grade: 5, class: '5나리', number: 14, name: '이채윤' },
  { id: 'S17', seq: 17, grade: 5, class: '5나리', number: 22, name: '한정아' },
  { id: 'S18', seq: 18, grade: 5, class: '5나리', number: 23, name: '김준용' },
  { id: 'S19', seq: 19, grade: 5, class: '5라온', number: 3, name: '김승찬' },
  { id: 'S20', seq: 20, grade: 5, class: '5라온', number: 6, name: '문시윤' },
  { id: 'S21', seq: 21, grade: 5, class: '5라온', number: 17, name: '이재권' },
  { id: 'S22', seq: 22, grade: 5, class: '5마루', number: 4, name: '김유안' },
  { id: 'S23', seq: 23, grade: 5, class: '5바다', number: 18, name: '장예준' },
  { id: 'S24', seq: 24, grade: 5, class: '5아람', number: 4, name: '김예빈' },
  { id: 'S25', seq: 25, grade: 5, class: '5자람', number: 6, name: '김채완' },
  { id: 'S26', seq: 26, grade: 5, class: '5자람', number: 19, name: '지연재' },
  { id: 'S27', seq: 27, grade: 5, class: '5차근', number: 6, name: '김예령' },
  { id: 'S28', seq: 28, grade: 5, class: '5차근', number: 15, name: '인유주' },
  { id: 'S29', seq: 29, grade: 5, class: '5차근', number: 16, name: '임재혁' },
  { id: 'S30', seq: 30, grade: 5, class: '5차근', number: 22, name: '최하윤' },

  // 6학년 (15명) - 일정: 7/27(월) ~ 7/31(금)
  { id: 'S31', seq: 31, grade: 6, class: '6나리', number: 23, name: '최윤빈' },
  { id: 'S32', seq: 32, grade: 6, class: '6다솜', number: 17, name: '이로운' },
  { id: 'S33', seq: 33, grade: 6, class: '6다솜', number: 21, name: '진영광' },
  { id: 'S34', seq: 34, grade: 6, class: '6다솜', number: 25, name: '황준현' },
  { id: 'S35', seq: 35, grade: 6, class: '6라온', number: 13, name: '박민준' },
  { id: 'S36', seq: 36, grade: 6, class: '6라온', number: 14, name: '오하준' },
  { id: 'S37', seq: 37, grade: 6, class: '6라온', number: 19, name: '임지한' },
  { id: 'S38', seq: 38, grade: 6, class: '6마루', number: 1, name: '김성언' },
  { id: 'S39', seq: 39, grade: 6, class: '6바다', number: 1, name: '공도언' },
  { id: 'S40', seq: 40, grade: 6, class: '6바다', number: 12, name: '오현진' },
  { id: 'S41', seq: 41, grade: 6, class: '6사랑', number: 11, name: '서예담' },
  { id: 'S42', seq: 42, grade: 6, class: '6아람', number: 10, name: '박범준' },
  { id: 'S43', seq: 43, grade: 6, class: '6아람', number: 16, name: '유성민' },
  { id: 'S44', seq: 44, grade: 6, class: '6아람', number: 19, name: '이재현' },
  { id: 'S45', seq: 45, grade: 6, class: '6아람', number: 22, name: '최재원' }
];

// Grade-specific Date Schedules
const GRADE_SCHEDULES = {
  6: {
    label: '6학년 (7월 27일 ~ 7월 31일)',
    dates: ['2026-07-27', '2026-07-28', '2026-07-29', '2026-07-30', '2026-07-31']
  },
  5: {
    label: '5학년 (8월 3일 ~ 8월 7일)',
    dates: ['2026-08-03', '2026-08-04', '2026-08-05', '2026-08-06', '2026-08-07']
  },
  4: {
    label: '4학년 (8월 10일 ~ 8월 14일)',
    dates: ['2026-08-10', '2026-08-11', '2026-08-12', '2026-08-13', '2026-08-14']
  }
};

// App State Management
let roster = [];
let attendanceData = {}; 
let activeKioskGrade = 'ALL';
let isUsingRealTime = false;
let audioCtx = null;

function playFuturisticAiSound(isLate = false) {
  const soundChk = document.getElementById('sound-chk');
  if (soundChk && !soundChk.checked) return;

  try {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    
    const now = audioCtx.currentTime;
    const osc1 = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    if (!isLate) {
      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(523.25, now); // C5
      osc1.frequency.setValueAtTime(659.25, now + 0.08); // E5
      osc1.frequency.setValueAtTime(783.99, now + 0.16); // G5
      osc1.frequency.setValueAtTime(1046.50, now + 0.24); // C6
      gain.gain.setValueAtTime(0.25, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.45);
    } else {
      osc1.type = 'sawtooth';
      osc1.frequency.setValueAtTime(440, now);
      osc1.frequency.setValueAtTime(330, now + 0.15);
      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);
    }

    osc1.connect(gain);
    gain.connect(audioCtx.destination);
    osc1.start(now);
    osc1.stop(now + 0.45);
  } catch (e) {
    console.log("Audio error:", e);
  }
}

// Initialization
document.addEventListener('DOMContentLoaded', () => {
  loadDataFromStorage();
  initNavigation();
  initKioskControls();
  populateKioskDateDropdown();
  renderStudentTouchGrid();
  renderAttendanceTable();
  updateStats();
  renderRosterTable();
  initModalAndForms();
});

// Storage Management
function loadDataFromStorage() {
  const savedRoster = localStorage.getItem('ai_camp_roster_v2');
  if (savedRoster) {
    try {
      roster = JSON.parse(savedRoster);
    } catch (e) {
      roster = [...DEFAULT_ROSTER];
    }
  } else {
    roster = [...DEFAULT_ROSTER];
    saveRosterToStorage();
  }

  const savedAttendance = localStorage.getItem('ai_camp_attendance_v2');
  if (savedAttendance) {
    try {
      attendanceData = JSON.parse(savedAttendance);
    } catch (e) {
      attendanceData = {};
    }
  } else {
    attendanceData = {};
    saveAttendanceToStorage();
  }

  document.getElementById('header-student-count').textContent = roster.length;
}

function saveRosterToStorage() {
  localStorage.setItem('ai_camp_roster_v2', JSON.stringify(roster));
  document.getElementById('header-student-count').textContent = roster.length;
}

function saveAttendanceToStorage() {
  localStorage.setItem('ai_camp_attendance_v2', JSON.stringify(attendanceData));
}

// Navigation Tabs
function initNavigation() {
  const navBtns = document.querySelectorAll('.nav-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  navBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetTab = btn.getAttribute('data-tab');

      navBtns.forEach(b => b.classList.remove('active'));
      tabContents.forEach(c => c.classList.remove('active'));

      btn.classList.add('active');
      document.getElementById(targetTab).classList.add('active');

      if (targetTab === 'tab-stats') {
        updateStats();
      } else if (targetTab === 'tab-self-checkin') {
        renderStudentTouchGrid();
      } else if (targetTab === 'tab-attendance') {
        renderAttendanceTable();
      }
    });
  });
}

// Populate Date Dropdown based on active grade filter in Kiosk
function populateKioskDateDropdown() {
  const dateSelect = document.getElementById('checkin-date-select');
  if (!dateSelect) return;

  dateSelect.innerHTML = '';

  const daysKo = ['월', '화', '수', '목', '금'];

  if (activeKioskGrade === '6' || activeKioskGrade === '5' || activeKioskGrade === '4') {
    const gradeNum = parseInt(activeKioskGrade, 10);
    const sched = GRADE_SCHEDULES[gradeNum];
    
    sched.dates.forEach((dStr, idx) => {
      const option = document.createElement('option');
      option.value = dStr;
      const dateParts = dStr.split('-');
      option.textContent = `${gradeNum}학년 Day ${idx + 1} : ${parseInt(dateParts[1])}월 ${parseInt(dateParts[2])}일 (${daysKo[idx]})`;
      dateSelect.appendChild(option);
    });
  } else {
    // ALL Grades selected - show all dates grouped
    [6, 5, 4].forEach(gNum => {
      const sched = GRADE_SCHEDULES[gNum];
      const optGroup = document.createElement('optgroup');
      optGroup.label = sched.label;

      sched.dates.forEach((dStr, idx) => {
        const option = document.createElement('option');
        option.value = dStr;
        const dateParts = dStr.split('-');
        option.textContent = `${gNum}학년 Day ${idx + 1} : ${parseInt(dateParts[1])}월 ${parseInt(dateParts[2])}일 (${daysKo[idx]})`;
        optGroup.appendChild(option);
      });
      dateSelect.appendChild(optGroup);
    });
  }

  // Set today's date automatically if matches any camp date
  const todayStr = new Date().toISOString().split('T')[0];
  const allDates = [...GRADE_SCHEDULES[6].dates, ...GRADE_SCHEDULES[5].dates, ...GRADE_SCHEDULES[4].dates];
  if (allDates.includes(todayStr)) {
    dateSelect.value = todayStr;
  }
}

// Kiosk Controls
function initKioskControls() {
  const dateSelect = document.getElementById('checkin-date-select');
  const searchInput = document.getElementById('kiosk-search-input');
  const gradePills = document.querySelectorAll('.grade-pill');
  const simTimeInput = document.getElementById('sim-time-input');
  const btnRealTime = document.getElementById('btn-use-real-time');

  dateSelect?.addEventListener('change', () => {
    renderStudentTouchGrid();
    renderAttendanceTable();
    updateStats();
  });

  searchInput?.addEventListener('input', () => {
    renderStudentTouchGrid();
  });

  gradePills.forEach(pill => {
    pill.addEventListener('click', () => {
      gradePills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      activeKioskGrade = pill.getAttribute('data-grade');
      
      populateKioskDateDropdown();
      renderStudentTouchGrid();
    });
  });

  simTimeInput?.addEventListener('change', () => {
    isUsingRealTime = false;
    btnRealTime.className = 'btn btn-outline btn-sm';
  });

  btnRealTime?.addEventListener('click', () => {
    isUsingRealTime = true;
    const now = new Date();
    const h = String(now.getHours()).padStart(2, '0');
    const m = String(now.getMinutes()).padStart(2, '0');
    simTimeInput.value = `${h}:${m}`;
    btnRealTime.className = 'btn btn-primary btn-sm';
    alert(`현재 실제 시각(${h}:${m})으로 설정되었습니다.`);
  });

  document.getElementById('btn-confirm-checkin')?.addEventListener('click', () => {
    document.getElementById('checkin-modal').classList.add('hidden');
  });
}

// Time-based Attendance Logic for 09:00 ~ 11:50 Session
function evaluateAttendanceTime() {
  let hours, minutes, secondsStr;

  if (isUsingRealTime) {
    const now = new Date();
    hours = now.getHours();
    minutes = now.getMinutes();
    const sec = now.getSeconds();
    secondsStr = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
  } else {
    const timeVal = document.getElementById('sim-time-input').value || '09:05';
    const parts = timeVal.split(':');
    hours = parseInt(parts[0], 10);
    minutes = parseInt(parts[1], 10);
    secondsStr = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:00`;
  }

  const totalMinutes = hours * 60 + minutes;
  // Threshold 1: 09:10 = 550 minutes (9*60 + 10)
  // Threshold 2: 11:50 = 710 minutes (11*60 + 50)

  let determinedStatus = 'present';
  let statusReason = '';

  if (totalMinutes <= 550) { // On time (09:10 or earlier)
    determinedStatus = 'present';
    statusReason = '🟢 09:10 이전 입실하여 [정상 출석] 처리되었습니다.';
  } else if (totalMinutes > 550 && totalMinutes <= 710) { // Late (09:11 ~ 11:50)
    determinedStatus = 'late';
    statusReason = '🟡 09:10 이후 입실하여 [지각 처리]되었습니다.';
  } else { // After 11:50
    determinedStatus = 'late';
    statusReason = '🟡 캠프 종료 시간(11:50) 이후 체크인하여 [지각/기타] 처리되었습니다.';
  }

  return {
    status: determinedStatus,
    timeStr: secondsStr,
    reason: statusReason
  };
}

// Render Student Touch Grid (45 Student Cards)
function renderStudentTouchGrid() {
  const container = document.getElementById('student-touch-grid');
  if (!container) return;

  const dateStr = document.getElementById('checkin-date-select').value;
  const searchQuery = document.getElementById('kiosk-search-input').value.trim().toLowerCase();

  container.innerHTML = '';

  const filtered = roster.filter(student => {
    if (activeKioskGrade !== 'ALL' && String(student.grade) !== activeKioskGrade) return false;
    if (searchQuery) {
      const match = `${student.name} ${student.class} ${student.number} ${student.grade}`.toLowerCase();
      if (!match.includes(searchQuery)) return false;
    }
    return true;
  });

  filtered.forEach(student => {
    const attRecord = attendanceData[student.id] && attendanceData[student.id][dateStr];
    const status = attRecord?.status;
    const isChecked = (status === 'present' || status === 'late');
    const checkinTime = attRecord?.time;

    const card = document.createElement('div');
    
    let cardClass = 'student-touch-card';
    if (isChecked) {
      cardClass += status === 'present' ? ' is-checked status-present-card' : ' is-checked status-late-card';
    }

    card.className = cardClass;

    let btnHtml = '';
    if (!isChecked) {
      btnHtml = `<button class="btn-touch-checkin action-checkin" onclick="handleStudentTouch('${student.id}')"><i class="fa-solid fa-hand-pointer"></i> 👆 터치하여 출석</button>`;
    } else if (status === 'present') {
      btnHtml = `<button class="btn-touch-checkin action-checked-present" onclick="handleStudentTouch('${student.id}')"><i class="fa-solid fa-circle-check"></i> 🟢 정상 출석 완료</button>`;
    } else {
      btnHtml = `<button class="btn-touch-checkin action-checked-late" onclick="handleStudentTouch('${student.id}')"><i class="fa-solid fa-triangle-exclamation"></i> 🟡 지각 처리됨</button>`;
    }

    const timeClass = status === 'present' ? 'time-present' : 'time-late';

    card.innerHTML = `
      <div class="card-class-badge">${student.class} ${student.number}번</div>
      <div class="card-student-name">${student.name}</div>
      <div class="card-student-sub">${student.grade}학년 &bull; AI 온 미래 캠프</div>
      ${btnHtml}
      ${isChecked && checkinTime ? `<div class="checkin-timestamp ${timeClass}">체크인 시각: ${checkinTime}</div>` : ''}
    `;

    container.appendChild(card);
  });
}

// Handle Student Card Touch Click
window.handleStudentTouch = function(studentId) {
  const student = roster.find(s => s.id === studentId);
  if (!student) return;

  const dateStr = document.getElementById('checkin-date-select').value;
  const attRecord = attendanceData[student.id] && attendanceData[student.id][dateStr];
  const isChecked = (attRecord?.status === 'present' || attRecord?.status === 'late');

  if (isChecked) {
    const currentLabel = attRecord.status === 'present' ? '🟢정상출석' : '🟡지각';
    if (confirm(`[${student.name}] 학생은 현재 [${currentLabel}] 상태입니다.\n출석 취소(미체크 상태)로 변경하시겠습니까?`)) {
      delete attendanceData[student.id][dateStr];
      saveAttendanceToStorage();
      renderStudentTouchGrid();
      renderAttendanceTable();
      updateStats();
    }
  } else {
    const result = evaluateAttendanceTime();

    if (!attendanceData[student.id]) attendanceData[student.id] = {};
    attendanceData[student.id][dateStr] = {
      status: result.status,
      time: result.timeStr
    };

    saveAttendanceToStorage();
    playFuturisticAiSound(result.status === 'late');

    const dateFormatted = dateStr.replace('2026-', '').replace('-', '/');
    const statusTitle = result.status === 'present' ? '🟢 출석 완료!' : '🟡 지각 체결!';
    
    document.getElementById('modal-checkin-title').textContent = `${student.name} 학생 ${statusTitle}`;
    document.getElementById('modal-checkin-sub').innerHTML = `
      ${student.class} ${student.number}번 (${dateFormatted})<br>
      <strong>체크인 시각: ${result.timeStr}</strong><br>
      <span style="font-size:14px; color:#cbd5e1; display:inline-block; margin-top:6px;">${result.reason}</span>
    `;
    document.getElementById('modal-class-no').textContent = `${student.class} ${student.number}번`;

    const iconWrap = document.querySelector('.success-icon-wrap');
    if (result.status === 'late') {
      iconWrap.className = 'success-icon-wrap is-late-icon';
      iconWrap.innerHTML = '<i class="fa-solid fa-clock"></i>';
    } else {
      iconWrap.className = 'success-icon-wrap';
      iconWrap.innerHTML = '<i class="fa-solid fa-robot"></i>';
    }

    document.getElementById('checkin-modal').classList.remove('hidden');

    renderStudentTouchGrid();
    renderAttendanceTable();
    updateStats();
  }
};

// Render 5-Day Attendance Table Grid with dynamic dates based on grade filter
function renderAttendanceTable() {
  const tbody = document.getElementById('attendance-tbody');
  const thead = document.getElementById('attendance-thead');
  if (!tbody || !thead) return;

  const gradeFilter = document.getElementById('attendance-grade-filter').value;
  const searchQuery = document.getElementById('attendance-search-input').value.trim().toLowerCase();

  // Determine target dates and roster
  let targetDates = [];
  const daysKo = ['월', '화', '수', '목', '금'];

  if (gradeFilter === '6' || gradeFilter === '5' || gradeFilter === '4') {
    targetDates = GRADE_SCHEDULES[parseInt(gradeFilter)].dates;
  } else {
    // Show 4학년 dates default or combined
    targetDates = GRADE_SCHEDULES[6].dates; // Default view for all
  }

  // Render Table Header
  let thHtml = `
    <tr>
      <th style="width: 50px;">연번</th>
      <th style="width: 80px;">학급</th>
      <th style="width: 60px;">번호</th>
      <th style="width: 100px;">성명</th>
  `;
  targetDates.forEach((dStr, idx) => {
    const parts = dStr.split('-');
    thHtml += `<th class="day-col" data-date="${dStr}">${parseInt(parts[1])}/${parseInt(parts[2])} (${daysKo[idx]})</th>`;
  });
  thHtml += `<th style="width: 90px;">총 출석률</th></tr>`;
  thead.innerHTML = thHtml;

  // Render Table Rows
  tbody.innerHTML = '';

  const filteredRoster = roster.filter(student => {
    if (gradeFilter !== 'ALL' && String(student.grade) !== gradeFilter) return false;
    if (searchQuery) {
      const target = `${student.name} ${student.class} ${student.number}`.toLowerCase();
      if (!target.includes(searchQuery)) return false;
    }
    return true;
  });

  filteredRoster.forEach((student, idx) => {
    const tr = document.createElement('tr');

    let rowHtml = `
      <td><strong>${student.seq || (idx + 1)}</strong></td>
      <td>${student.class}</td>
      <td>${student.number}번</td>
      <td><strong>${student.name}</strong></td>
    `;

    // Use student's own grade schedule dates if viewing ALL
    const studentDates = GRADE_SCHEDULES[student.grade] ? GRADE_SCHEDULES[student.grade].dates : targetDates;
    const datesToRender = (gradeFilter === 'ALL') ? studentDates : targetDates;

    let presentDaysCount = 0;

    datesToRender.forEach(dateStr => {
      const attInfo = (attendanceData[student.id] && attendanceData[student.id][dateStr]) || { status: 'none', time: '' };
      if (attInfo.status === 'present' || attInfo.status === 'late') {
        presentDaysCount++;
      }

      const statusMap = {
        'present': { label: '출석', class: 'status-present' },
        'late': { label: '지각', class: 'status-late' },
        'absent': { label: '결석', class: 'status-absent' },
        'excused': { label: '공결', class: 'status-excused' },
        'none': { label: '미체크', class: 'status-none' }
      };

      const curr = statusMap[attInfo.status] || statusMap['none'];

      rowHtml += `
        <td class="day-cell" data-date="${dateStr}">
          <button class="btn-status-toggle ${curr.class}" onclick="toggleAttendanceStatus('${student.id}', '${dateStr}')">
            <span>${curr.label}</span>
            ${attInfo.time ? `<span class="cell-time">${attInfo.time}</span>` : ''}
          </button>
        </td>
      `;
    });

    const attPercentage = Math.round((presentDaysCount / datesToRender.length) * 100);
    rowHtml += `<td><strong>${attPercentage}%</strong></td>`;

    tr.innerHTML = rowHtml;
    tbody.appendChild(tr);
  });
}

function toggleAttendanceStatus(studentId, dateStr) {
  if (!attendanceData[studentId]) {
    attendanceData[studentId] = {};
  }

  const currentStatus = attendanceData[studentId][dateStr]?.status || 'none';
  const statusCycle = ['present', 'late', 'absent', 'excused', 'none'];
  const nextIdx = (statusCycle.indexOf(currentStatus) + 1) % statusCycle.length;
  const nextStatus = statusCycle[nextIdx];

  const timeStr = (nextStatus === 'present' || nextStatus === 'late') ? new Date().toLocaleTimeString('ko-KR', { hour12: false }) : '';

  attendanceData[studentId][dateStr] = {
    status: nextStatus,
    time: timeStr
  };

  saveAttendanceToStorage();
  renderAttendanceTable();
  renderStudentTouchGrid();
  updateStats();
}

// Mark all students present for selected day
document.getElementById('btn-mark-all-present')?.addEventListener('click', () => {
  const selectedDate = document.getElementById('checkin-date-select').value;
  const dateLabel = selectedDate.replace('2026-', '').replace('-', '/');
  if (!confirm(`[${dateLabel}] 날짜의 모든 학생을 출석(Present)으로 처리하시겠습니까?`)) return;

  const timeStr = new Date().toLocaleTimeString('ko-KR', { hour12: false });
  roster.forEach(student => {
    if (!attendanceData[student.id]) attendanceData[student.id] = {};
    attendanceData[student.id][selectedDate] = {
      status: 'present',
      time: timeStr
    };
  });

  saveAttendanceToStorage();
  renderAttendanceTable();
  renderStudentTouchGrid();
  updateStats();
  alert('선택한 날짜의 전체 출석 처리가 완료되었습니다.');
});

document.getElementById('attendance-grade-filter')?.addEventListener('change', renderAttendanceTable);
document.getElementById('attendance-search-input')?.addEventListener('input', renderAttendanceTable);

// Analytics & Dashboard Update
function updateStats() {
  const totalStudents = roster.length;
  document.getElementById('stat-total-students').textContent = `${totalStudents}명`;

  const selectedDate = document.getElementById('checkin-date-select').value;

  let todayPresent = 0;
  roster.forEach(s => {
    const st = attendanceData[s.id] && attendanceData[s.id][selectedDate]?.status;
    if (st === 'present' || st === 'late') {
      todayPresent++;
    }
  });

  const todayAbsent = totalStudents - todayPresent;
  document.getElementById('stat-today-present').textContent = `${todayPresent}명`;
  document.getElementById('stat-today-absent').textContent = `${todayAbsent}명`;

  // Calculate overall camp attendance rate
  let totalCellCount = 0;
  let totalAttendedCount = 0;

  roster.forEach(s => {
    const sched = GRADE_SCHEDULES[s.grade] ? GRADE_SCHEDULES[s.grade].dates : GRADE_SCHEDULES[4].dates;
    totalCellCount += sched.length;
    sched.forEach(d => {
      const st = attendanceData[s.id] && attendanceData[s.id][d]?.status;
      if (st === 'present' || st === 'late') {
        totalAttendedCount++;
      }
    });
  });

  const overallRate = totalCellCount > 0 ? Math.round((totalAttendedCount / totalCellCount) * 100) : 0;
  document.getElementById('stat-avg-rate').textContent = `${overallRate}%`;

  // Grade Breakdown Bars
  const gradeList = document.getElementById('grade-bar-list');
  if (gradeList) {
    gradeList.innerHTML = '';

    [6, 5, 4].forEach(grade => {
      const gradeStudents = roster.filter(s => s.grade === grade);
      const sched = GRADE_SCHEDULES[grade].dates;
      const gTotal = gradeStudents.length * sched.length;
      let gAtt = 0;

      gradeStudents.forEach(s => {
        sched.forEach(d => {
          const st = attendanceData[s.id] && attendanceData[s.id][d]?.status;
          if (st === 'present' || st === 'late') gAtt++;
        });
      });

      const gRate = gTotal > 0 ? Math.round((gAtt / gTotal) * 100) : 0;

      const item = document.createElement('div');
      item.className = 'grade-bar-item';
      item.innerHTML = `
        <div class="grade-bar-head">
          <span>${grade}학년 (${GRADE_SCHEDULES[grade].label})</span>
          <span>${gRate}%</span>
        </div>
        <div class="progress-track">
          <div class="progress-fill" style="width: ${gRate}%"></div>
        </div>
      `;
      gradeList.appendChild(item);
    });
  }
}

// Export CSV / Excel Functionality with UTF-8 BOM
document.getElementById('btn-export-excel')?.addEventListener('click', () => {
  let csvContent = "\uFEFF"; // UTF-8 BOM for perfect Excel Korean encoding
  csvContent += "연번,학년,학급,번호,성명,캠프일정,Day1,Day2,Day3,Day4,Day5,출석율(%)\n";

  roster.forEach((student, idx) => {
    const sched = GRADE_SCHEDULES[student.grade] || GRADE_SCHEDULES[4];
    let pCount = 0;
    let daysStr = sched.dates.map((dateStr, i) => {
      const info = (attendanceData[student.id] && attendanceData[student.id][dateStr]) || { status: '미체크', time: '' };
      const statusMap = { 'present': '출석', 'late': '지각', 'absent': '결석', 'excused': '공결', 'none': '미체크' };
      const label = statusMap[info.status] || '미체크';
      if (info.status === 'present' || info.status === 'late') pCount++;
      return `${label}${info.time ? '(' + info.time + ')' : ''}`;
    }).join(",");

    const rate = Math.round((pCount / sched.dates.length) * 100);

    csvContent += `${idx + 1},${student.grade}학년,${student.class},${student.number}번,${student.name},${sched.label},${daysStr},${rate}%\n`;
  });

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', `AI온미래캠프_출석부_${new Date().toISOString().split('T')[0]}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});

// JSON Backup Export
document.getElementById('btn-export-json')?.addEventListener('click', () => {
  const exportObject = {
    version: '2.0',
    exportDate: new Date().toISOString(),
    roster: roster,
    attendanceData: attendanceData
  };

  const jsonStr = JSON.stringify(exportObject, null, 2);
  const blob = new Blob([jsonStr], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', `AI온미래캠프_출석백업_${new Date().toISOString().split('T')[0]}.json`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});

// JSON File Import
document.getElementById('import-json-file')?.addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (event) => {
    try {
      const imported = JSON.parse(event.target.result);
      if (imported.roster && imported.attendanceData) {
        roster = imported.roster;
        attendanceData = imported.attendanceData;
        saveRosterToStorage();
        saveAttendanceToStorage();
        renderAttendanceTable();
        renderStudentTouchGrid();
        updateStats();
        renderRosterTable();
        alert('백업 파일에서 데이터가 성공적으로 복원되었습니다.');
      } else {
        alert('올바른 백업 파일 형식이 아닙니다.');
      }
    } catch (err) {
      alert('파일을 읽는 도중 오류가 발생했습니다.');
    }
  };
  reader.readAsText(file);
});

// Data Reset
document.getElementById('btn-reset-data')?.addEventListener('click', () => {
  if (confirm('모든 출석 기록을 정말 초기화하시겠습니까? (이 작업은 되돌릴 수 없습니다.)')) {
    attendanceData = {};
    saveAttendanceToStorage();
    renderAttendanceTable();
    renderStudentTouchGrid();
    updateStats();
    alert('출석 기록이 초기화되었습니다.');
  }
});

// Roster Table & CRUD Management
function renderRosterTable() {
  const tbody = document.getElementById('roster-tbody');
  if (!tbody) return;

  tbody.innerHTML = '';

  roster.forEach((student, idx) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><strong>${idx + 1}</strong></td>
      <td>${student.class}</td>
      <td>${student.number}번</td>
      <td><strong>${student.name}</strong></td>
      <td>
        <button class="btn btn-outline btn-sm" onclick="editStudent('${student.id}')"><i class="fa-solid fa-pen"></i> 수정</button>
        <button class="btn btn-danger-outline btn-sm" onclick="deleteStudent('${student.id}')"><i class="fa-solid fa-trash"></i></button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

document.getElementById('btn-reset-roster')?.addEventListener('click', () => {
  if (confirm('학생 명단을 기본 45명 명단으로 되돌리시겠습니까?')) {
    roster = JSON.parse(JSON.stringify(DEFAULT_ROSTER));
    saveRosterToStorage();
    renderRosterTable();
    renderAttendanceTable();
    renderStudentTouchGrid();
    updateStats();
    alert('기본 45명 명단으로 초기화되었습니다.');
  }
});

// Modal Logic
function initModalAndForms() {
  const modal = document.getElementById('student-modal');
  const btnOpenAdd = document.getElementById('btn-open-add-student');
  const btnCloseModal = document.getElementById('btn-close-modal');
  const btnCancelModal = document.getElementById('btn-cancel-modal');
  const studentForm = document.getElementById('student-form');

  btnOpenAdd?.addEventListener('click', () => {
    document.getElementById('modal-title').innerHTML = '<i class="fa-solid fa-user-plus"></i> 새 학생 추가';
    document.getElementById('student-id-field').value = '';
    document.getElementById('input-name').value = '';
    document.getElementById('input-grade').value = '6';
    document.getElementById('input-class').value = '6아람';
    document.getElementById('input-number').value = 1;
    modal.classList.remove('hidden');
  });

  const closeModal = () => modal.classList.add('hidden');

  btnCloseModal?.addEventListener('click', closeModal);
  btnCancelModal?.addEventListener('click', closeModal);

  studentForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const id = document.getElementById('student-id-field').value;
    const name = document.getElementById('input-name').value.trim();
    const grade = parseInt(document.getElementById('input-grade').value);
    const className = document.getElementById('input-class').value.trim();
    const number = parseInt(document.getElementById('input-number').value);

    if (id) {
      const student = roster.find(s => s.id === id);
      if (student) {
        student.name = name;
        student.grade = grade;
        student.class = className;
        student.number = number;
      }
    } else {
      const newId = `S${String(roster.length + 1).padStart(2, '0')}`;
      roster.push({
        id: newId,
        seq: roster.length + 1,
        grade: grade,
        class: className,
        number: number,
        name: name
      });
    }

    saveRosterToStorage();
    renderRosterTable();
    renderAttendanceTable();
    renderStudentTouchGrid();
    updateStats();
    closeModal();
  });
}

window.editStudent = function(studentId) {
  const student = roster.find(s => s.id === studentId);
  if (!student) return;

  document.getElementById('modal-title').innerHTML = '<i class="fa-solid fa-pen"></i> 학생 정보 수정';
  document.getElementById('student-id-field').value = student.id;
  document.getElementById('input-name').value = student.name;
  document.getElementById('input-grade').value = String(student.grade);
  document.getElementById('input-class').value = student.class;
  document.getElementById('input-number').value = student.number;

  document.getElementById('student-modal').classList.remove('hidden');
};

window.deleteStudent = function(studentId) {
  const student = roster.find(s => s.id === studentId);
  if (!student) return;

  if (confirm(`[${student.name}] 학생을 명단에서 삭제하시겠습니까?`)) {
    roster = roster.filter(s => s.id !== studentId);
    saveRosterToStorage();
    renderRosterTable();
    renderAttendanceTable();
    renderStudentTouchGrid();
    updateStats();
  }
};
