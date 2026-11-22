const banner=document.querySelector("#status-banner");
const counter=document.querySelector("#attendance-counter");
const summary=document.querySelector("#summary-marked");
const buttons=document.querySelectorAll(".status-btn");
const rows=document.querySelectorAll(".learner-row");
const total=rows.length;
function updateCount(){const count=document.querySelectorAll('.learner-status[data-marked="true"]').length;counter.textContent=`Marked learners: ${count} of ${total}`;if(summary)summary.textContent=`${count} / ${total}`;}
function handleStatusClick(event){const button=event.currentTarget;const status=button.dataset.status;const row=button.closest(".learner-row");if(!row)return;row.querySelectorAll(".status-btn").forEach(item=>item.classList.remove("is-selected"));button.classList.add("is-selected");const badge=row.querySelector('[data-role="status"]');badge.textContent=status;badge.dataset.marked="true";badge.classList.remove("is-present","is-absent","is-excused");badge.classList.add(`is-${status.toLowerCase()}`);banner.textContent=`Updated ${row.dataset.learner} to ${status}.`;updateCount();}
buttons.forEach(button=>button.addEventListener("click",handleStatusClick));
document.querySelector("#save-attendance").addEventListener("click",()=>{const marked=document.querySelectorAll('.learner-status[data-marked="true"]').length;if(marked<total){banner.textContent=`Please mark attendance for all ${total} learners before saving. ${marked} of ${total} marked.`;return;}banner.textContent="Attendance saved for all learners. This demo does not connect to a database.";});
