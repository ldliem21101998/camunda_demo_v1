// import { C8, Tasklist } from 'camunda-8-sdk'
// import * as path from 'path'
// import chalk from 'chalk'
// import { config } from 'dotenv'
// config()

// const zbc = new C8.ZBClient()
// const operate = new C8.OperateApiClient()
// const tasklist = new C8.TasklistApiClient()

// async function main() {

//     try {
//         // const res = await zbc.deployProcess("./resources/twilio_v1.bpmn")
//         // const processInstance = (await zbc.createProcessInstance("absence-request-process-1dfcdhr", {
//         const processInstance = (await zbc.createProcessInstance("Process_6osiomr", {
//         // // "employeeID": "LiemLD",
//         //     // "leaveStartTime": "dev",
//         //     // "leaveEndTime": "dev_1",
//         //     // "reason": "HEHE"
//             "empID": "LiemLD",
//             "leaveStartTime": "123456"
//         }))
//         // const processInstanceKey = processInstance.processInstanceKey
//         // const processDefinitionKey = processInstance.processDefinitionKey

//         // const variablesForProcess = await operate.getVariablesforProcess(processInstanceKey)
//         // console.log(variablesForProcess);

//         setTimeout( async () => {
//             const unCompleteTask = await tasklist.getTasks({
//                 state: Tasklist.TaskState.CREATED,
//             })
//             console.log(unCompleteTask);
//             if (unCompleteTask.tasks.length > 0) {
//                 unCompleteTask.tasks.forEach(async task => {
//                     // console.log(task);

//                     // console.log(task.variables);
//                     // console.log(processInstanceKey);
//                     // console.log(task.processInstanceId == processInstanceKey);

//                     // if (task.processInstanceId == processInstanceKey) {
//                     const { claimTask: t } = await tasklist.claimTask(task.id, 'demobot', true)
//                     await tasklist.completeTask(t.id, {
//                         // humanTaskStatus: 'Got done',
//                         // assignedLineManager: "Liem"
//                     })
//                     // }
//                 })
//             }
//        }, 5000);

//     } catch (error) {
//         console.log(error)
//     }
// }

// main()

