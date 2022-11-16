/* eslint-disable */
import * as TaskDispatchService from './TaskDispatchService'
import * as AgvDeviceService from './AgvDeviceService'
import * as AppUpgradeService from './AppUpgradeService'
import * as BroadcastService from './BroadcastService'
import * as ChargeService from './ChargeService'
import * as DevicePropertyService from './DevicePropertyService'
import * as ErrorLogService from './ErrorLogService'
import * as IcescreenGroupService from './IcescreenGroupService'
import * as IcescreenVideoService from './IcescreenVideoService'
import * as SensorDeviceService from './SensorDeviceService'
import * as StreamService from './StreamService'
import * as TaskRecordService from './TaskRecordService'
import * as TaskService from './TaskService'
export default {
  ...TaskDispatchService,
  ...AgvDeviceService,
  ...AppUpgradeService,
  ...BroadcastService,
  ...ChargeService,
  ...DevicePropertyService,
  ...ErrorLogService,
  ...IcescreenGroupService,
  ...IcescreenVideoService,
  ...SensorDeviceService,
  ...StreamService,
  ...TaskRecordService,
  ...TaskService,
  }
