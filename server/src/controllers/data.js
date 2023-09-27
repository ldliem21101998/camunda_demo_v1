import { C8, Tasklist } from "camunda-8-sdk";
import { config } from "dotenv";
config();

const zbc = new C8.ZBClient();
const operate = new C8.OperateApiClient();
const tasklist = new C8.TasklistApiClient();

export const getData = async (req, res) => {
  try {
    // const res = await zbc.deployProcess("./resources/twilio_v1.bpmn")
    // const processInstance = (await zbc.createProcessInstance("absence-request-process-1dfcdhr", {
    const processInstance = await zbc.createProcessInstance(
      "Process_AbsenceRequest",
      {
        "employeeName": req.body.employeeName,
        "startTime": req.body.startTime,
        "endTime": req.body.endTime,
        "reason": req.body.reason,
      }
    );

    setTimeout(async () => {
      const unCompleteTask = await tasklist.getTasks({
        state: Tasklist.TaskState.CREATED,
      });
      if (unCompleteTask.tasks.length > 0) {
        unCompleteTask.tasks.forEach(async (task) => {

          const { claimTask: t } = await tasklist.claimTask(
            task.id,
            "demobot",
            true
          );
          await tasklist.completeTask(t.id, {
            // "startTime": req.body.startTime,
          });
          // }
        });
      }
    }, 7000);

    res.status(200).json({ message: "Request sent" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getUnApproval = async (req, res) => {
  try {
    const unCompleteTask = await tasklist.getTasks({
      state: Tasklist.TaskState.CREATED,
    });
    console.log(unCompleteTask);

    res.status(200).json({ message: "Success", data: unCompleteTask });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const approveAbsenceRequest = async (req, res) => {
  try {
    const { claimTask: t } = await tasklist.claimTask(
      req.body.id,
      "demobot",
      true
    );
    await tasklist.completeTask(t.id, {
      approvalResult: req.body.approvalStatus,
    });

    res.status(200).json({ message: "Success" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
