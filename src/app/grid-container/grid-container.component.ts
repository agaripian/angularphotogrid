import { Component, OnInit, Renderer} from '@angular/core';
import {DragulaService} from 'ng2-dragula/ng2-dragula';

@Component({
  selector: 'app-grid-container',
  templateUrl: './grid-container.component.html',
  styleUrls: ['./grid-container.component.scss', 'dragula.css'],
  viewProviders: [DragulaService]
})
export class GridContainerComponent implements OnInit {

  images = [
  {
    "url": "photo-103450229.jpg",
    "width": 675,
    "height": 900
  },
  {
    "url": "photo-108273877.jpg",
    "width": 1170,
    "height": 780
  },
  {
    "url": "photo-115203323.jpg",
    "width": 1170,
    "height": 780
  },
  {
    "url": "photo-23583825.jpg",
    "width": 2048,
    "height": 1536
  },
  {
    "url": "stock-photo-123942383.jpg",
    "width": 2000,
    "height": 1333
  },
  {
    "url": "stock-photo-124559545.jpg",
    "width": 2000,
    "height": 1333
  },
  {
    "url": "stock-photo-132046989.jpg",
    "width": 1170,
    "height": 780
  },
  {
    "url": "stock-photo-132118343.jpg",
    "width": 2000,
    "height": 1339
  },
  {
    "url": "stock-photo-132311221.jpg",
    "width": 1920,
    "height": 1080
  },
  {
    "url": "stock-photo-132586903.jpg",
    "width": 2000,
    "height": 1334
  },
  {
    "url": "stock-photo-135203031.jpg",
    "width": 1000,
    "height": 668
  },
  {
    "url": "stock-photo-135626379.jpg",
    "width": 2000,
    "height": 1500
  },
  {
    "url": "stock-photo-136947953.jpg",
    "width": 2000,
    "height": 1348
  },
  {
    "url": "stock-photo-138378295.jpg",
    "width": 2000,
    "height": 1333
  },
  {
    "url": "stock-photo-138436811.jpg",
    "width": 2000,
    "height": 1333
  },
  {
    "url": "stock-photo-142950305.jpg",
    "width": 2000,
    "height": 1125
  },
  {
    "url": "stock-photo-143046061.jpg",
    "width": 843,
    "height": 1000
  },
  {
    "url": "stock-photo-143181649.jpg",
    "width": 2000,
    "height": 1298
  },
  {
    "url": "stock-photo-144530143.jpg",
    "width": 2000,
    "height": 1333
  },
  {
    "url": "stock-photo-144730939.jpg",
    "width": 1000,
    "height": 1000
  },
  {
    "url": "stock-photo-145414771.jpg",
    "width": 780,
    "height": 1170
  },
  {
    "url": "stock-photo-146038669.jpg",
    "width": 2000,
    "height": 1335
  },
  {
    "url": "stock-photo-146231033.jpg",
    "width": 2000,
    "height": 1335
  },
  {
    "url": "stock-photo-146914861.jpg",
    "width": 843,
    "height": 1000
  },
  {
    "url": "stock-photo-147877407.jpg",
    "width": 2000,
    "height": 1334
  },
  {
    "url": "stock-photo-147969173.jpg",
    "width": 2000,
    "height": 1333
  },
  {
    "url": "stock-photo-148015373.jpg",
    "width": 1170,
    "height": 781
  },
  {
    "url": "stock-photo-148704233.jpg",
    "width": 1170,
    "height": 884
  },
  {
    "url": "stock-photo-148928293.jpg",
    "width": 1170,
    "height": 781
  },
  {
    "url": "stock-photo-148950715.jpg",
    "width": 1170,
    "height": 775
  },
  {
    "url": "stock-photo-21951271.jpg",
    "width": 2000,
    "height": 1333
  },
  {
    "url": "stock-photo-21964829.jpg",
    "width": 2000,
    "height": 1333
  },
  {
    "url": "stock-photo-22618399.jpg",
    "width": 2000,
    "height": 1333
  },
  {
    "url": "stock-photo-31201539.jpg",
    "width": 2000,
    "height": 1333
  },
  {
    "url": "stock-photo-34598868.jpg",
    "width": 542,
    "height": 768
  },
  {
    "url": "stock-photo-47252094.jpg",
    "width": 2000,
    "height": 1333
  },
  {
    "url": "stock-photo-51980510.jpg",
    "width": 666,
    "height": 1000
  },
  {
    "url": "stock-photo-55601508.jpg",
    "width": 666,
    "height": 1000
  },
  {
    "url": "stock-photo-65681789.jpg",
    "width": 1840,
    "height": 1232
  },
  {
    "url": "stock-photo-70461471.jpg",
    "width": 1000,
    "height": 1000
  },
  {
    "url": "stock-photo-71801901.jpg",
    "width": 2000,
    "height": 1335
  },
  {
    "url": "stock-photo-71913567.jpg",
    "width": 2000,
    "height": 1328
  },
  {
    "url": "stock-photo-72223295.jpg",
    "width": 2000,
    "height": 1335
  },
  {
    "url": "stock-photo-72620185.jpg",
    "width": 2000,
    "height": 1333
  },
  {
    "url": "stock-photo-74402039.jpg",
    "width": 666,
    "height": 1000
  },
  {
    "url": "stock-photo-75097491.jpg",
    "width": 2000,
    "height": 1333
  },
  {
    "url": "stock-photo-75186237.jpg",
    "width": 2000,
    "height": 1333
  },
  {
    "url": "stock-photo-79250373.jpg",
    "width": 2000,
    "height": 1325
  },
  {
    "url": "stock-photo-79692589.jpg",
    "width": 670,
    "height": 1000
  },
  {
    "url": "stock-photo-7979718.jpg",
    "width": 1024,
    "height": 680
  },
  {
    "url": "stock-photo-7980252.jpg",
    "width": 1024,
    "height": 680
  },
  {
    "url": "stock-photo-81390687.jpg",
    "width": 2000,
    "height": 1591
  },
  {
    "url": "stock-photo-81988949.jpg",
    "width": 667,
    "height": 1000
  },
  {
    "url": "stock-photo-83149705.jpg",
    "width": 775,
    "height": 1170
  },{
    "url": "photo-103450229.jpg",
    "width": 675,
    "height": 900
  },
  {
    "url": "photo-108273877.jpg",
    "width": 1170,
    "height": 780
  },
  {
    "url": "photo-115203323.jpg",
    "width": 1170,
    "height": 780
  },
  {
    "url": "photo-23583825.jpg",
    "width": 2048,
    "height": 1536
  },
  {
    "url": "stock-photo-123942383.jpg",
    "width": 2000,
    "height": 1333
  },
  {
    "url": "stock-photo-124559545.jpg",
    "width": 2000,
    "height": 1333
  },
  {
    "url": "stock-photo-132046989.jpg",
    "width": 1170,
    "height": 780
  },
  {
    "url": "stock-photo-132118343.jpg",
    "width": 2000,
    "height": 1339
  },
  {
    "url": "stock-photo-132311221.jpg",
    "width": 1920,
    "height": 1080
  },
  {
    "url": "stock-photo-132586903.jpg",
    "width": 2000,
    "height": 1334
  },
  {
    "url": "stock-photo-135203031.jpg",
    "width": 1000,
    "height": 668
  },
  {
    "url": "stock-photo-135626379.jpg",
    "width": 2000,
    "height": 1500
  },
  {
    "url": "stock-photo-136947953.jpg",
    "width": 2000,
    "height": 1348
  },
  {
    "url": "stock-photo-138378295.jpg",
    "width": 2000,
    "height": 1333
  },
  {
    "url": "stock-photo-138436811.jpg",
    "width": 2000,
    "height": 1333
  },
  {
    "url": "stock-photo-142950305.jpg",
    "width": 2000,
    "height": 1125
  },
  {
    "url": "stock-photo-143046061.jpg",
    "width": 843,
    "height": 1000
  },
  {
    "url": "stock-photo-143181649.jpg",
    "width": 2000,
    "height": 1298
  },
  {
    "url": "stock-photo-144530143.jpg",
    "width": 2000,
    "height": 1333
  },
  {
    "url": "stock-photo-144730939.jpg",
    "width": 1000,
    "height": 1000
  },
  {
    "url": "stock-photo-145414771.jpg",
    "width": 780,
    "height": 1170
  },
  {
    "url": "stock-photo-146038669.jpg",
    "width": 2000,
    "height": 1335
  },
  {
    "url": "stock-photo-146231033.jpg",
    "width": 2000,
    "height": 1335
  },
  {
    "url": "stock-photo-146914861.jpg",
    "width": 843,
    "height": 1000
  },
  {
    "url": "stock-photo-147877407.jpg",
    "width": 2000,
    "height": 1334
  },
  {
    "url": "stock-photo-147969173.jpg",
    "width": 2000,
    "height": 1333
  },
  {
    "url": "stock-photo-148015373.jpg",
    "width": 1170,
    "height": 781
  },
  {
    "url": "stock-photo-148704233.jpg",
    "width": 1170,
    "height": 884
  },
  {
    "url": "stock-photo-148928293.jpg",
    "width": 1170,
    "height": 781
  },
  {
    "url": "stock-photo-148950715.jpg",
    "width": 1170,
    "height": 775
  },
  {
    "url": "stock-photo-21951271.jpg",
    "width": 2000,
    "height": 1333
  },
  {
    "url": "stock-photo-21964829.jpg",
    "width": 2000,
    "height": 1333
  },
  {
    "url": "stock-photo-22618399.jpg",
    "width": 2000,
    "height": 1333
  },
  {
    "url": "stock-photo-31201539.jpg",
    "width": 2000,
    "height": 1333
  },
  {
    "url": "stock-photo-34598868.jpg",
    "width": 542,
    "height": 768
  },
  {
    "url": "stock-photo-47252094.jpg",
    "width": 2000,
    "height": 1333
  },
  {
    "url": "stock-photo-51980510.jpg",
    "width": 666,
    "height": 1000
  },
  {
    "url": "stock-photo-55601508.jpg",
    "width": 666,
    "height": 1000
  },
  {
    "url": "stock-photo-65681789.jpg",
    "width": 1840,
    "height": 1232
  },
  {
    "url": "stock-photo-70461471.jpg",
    "width": 1000,
    "height": 1000
  },
  {
    "url": "stock-photo-71801901.jpg",
    "width": 2000,
    "height": 1335
  },
  {
    "url": "stock-photo-71913567.jpg",
    "width": 2000,
    "height": 1328
  },
  {
    "url": "stock-photo-72223295.jpg",
    "width": 2000,
    "height": 1335
  },
  {
    "url": "stock-photo-72620185.jpg",
    "width": 2000,
    "height": 1333
  },
  {
    "url": "stock-photo-74402039.jpg",
    "width": 666,
    "height": 1000
  },
  {
    "url": "stock-photo-75097491.jpg",
    "width": 2000,
    "height": 1333
  },
  {
    "url": "stock-photo-75186237.jpg",
    "width": 2000,
    "height": 1333
  },
  {
    "url": "stock-photo-79250373.jpg",
    "width": 2000,
    "height": 1325
  },
  {
    "url": "stock-photo-79692589.jpg",
    "width": 670,
    "height": 1000
  },
  {
    "url": "stock-photo-7979718.jpg",
    "width": 1024,
    "height": 680
  },
  {
    "url": "stock-photo-7980252.jpg",
    "width": 1024,
    "height": 680
  },
  {
    "url": "stock-photo-81390687.jpg",
    "width": 2000,
    "height": 1591
  },
  {
    "url": "stock-photo-81988949.jpg",
    "width": 667,
    "height": 1000
  },
  {
    "url": "stock-photo-83149705.jpg",
    "width": 775,
    "height": 1170
  },{
    "url": "photo-103450229.jpg",
    "width": 675,
    "height": 900
  },
  {
    "url": "photo-108273877.jpg",
    "width": 1170,
    "height": 780
  },
  {
    "url": "photo-115203323.jpg",
    "width": 1170,
    "height": 780
  },
  {
    "url": "photo-23583825.jpg",
    "width": 2048,
    "height": 1536
  },
  {
    "url": "stock-photo-123942383.jpg",
    "width": 2000,
    "height": 1333
  },
  {
    "url": "stock-photo-124559545.jpg",
    "width": 2000,
    "height": 1333
  },
  {
    "url": "stock-photo-132046989.jpg",
    "width": 1170,
    "height": 780
  },
  {
    "url": "stock-photo-132118343.jpg",
    "width": 2000,
    "height": 1339
  },
  {
    "url": "stock-photo-132311221.jpg",
    "width": 1920,
    "height": 1080
  },
  {
    "url": "stock-photo-132586903.jpg",
    "width": 2000,
    "height": 1334
  },
  {
    "url": "stock-photo-135203031.jpg",
    "width": 1000,
    "height": 668
  },
  {
    "url": "stock-photo-135626379.jpg",
    "width": 2000,
    "height": 1500
  },
  {
    "url": "stock-photo-136947953.jpg",
    "width": 2000,
    "height": 1348
  },
  {
    "url": "stock-photo-138378295.jpg",
    "width": 2000,
    "height": 1333
  },
  {
    "url": "stock-photo-138436811.jpg",
    "width": 2000,
    "height": 1333
  },
  {
    "url": "stock-photo-142950305.jpg",
    "width": 2000,
    "height": 1125
  },
  {
    "url": "stock-photo-143046061.jpg",
    "width": 843,
    "height": 1000
  },
  {
    "url": "stock-photo-143181649.jpg",
    "width": 2000,
    "height": 1298
  },
  {
    "url": "stock-photo-144530143.jpg",
    "width": 2000,
    "height": 1333
  },
  {
    "url": "stock-photo-144730939.jpg",
    "width": 1000,
    "height": 1000
  },
  {
    "url": "stock-photo-145414771.jpg",
    "width": 780,
    "height": 1170
  },
  {
    "url": "stock-photo-146038669.jpg",
    "width": 2000,
    "height": 1335
  },
  {
    "url": "stock-photo-146231033.jpg",
    "width": 2000,
    "height": 1335
  },
  {
    "url": "stock-photo-146914861.jpg",
    "width": 843,
    "height": 1000
  },
  {
    "url": "stock-photo-147877407.jpg",
    "width": 2000,
    "height": 1334
  },
  {
    "url": "stock-photo-147969173.jpg",
    "width": 2000,
    "height": 1333
  },
  {
    "url": "stock-photo-148015373.jpg",
    "width": 1170,
    "height": 781
  },
  {
    "url": "stock-photo-148704233.jpg",
    "width": 1170,
    "height": 884
  },
  {
    "url": "stock-photo-148928293.jpg",
    "width": 1170,
    "height": 781
  },
  {
    "url": "stock-photo-148950715.jpg",
    "width": 1170,
    "height": 775
  },
  {
    "url": "stock-photo-21951271.jpg",
    "width": 2000,
    "height": 1333
  },
  {
    "url": "stock-photo-21964829.jpg",
    "width": 2000,
    "height": 1333
  },
  {
    "url": "stock-photo-22618399.jpg",
    "width": 2000,
    "height": 1333
  },
  {
    "url": "stock-photo-31201539.jpg",
    "width": 2000,
    "height": 1333
  },
  {
    "url": "stock-photo-34598868.jpg",
    "width": 542,
    "height": 768
  },
  {
    "url": "stock-photo-47252094.jpg",
    "width": 2000,
    "height": 1333
  },
  {
    "url": "stock-photo-51980510.jpg",
    "width": 666,
    "height": 1000
  },
  {
    "url": "stock-photo-55601508.jpg",
    "width": 666,
    "height": 1000
  },
  {
    "url": "stock-photo-65681789.jpg",
    "width": 1840,
    "height": 1232
  },
  {
    "url": "stock-photo-70461471.jpg",
    "width": 1000,
    "height": 1000
  },
  {
    "url": "stock-photo-71801901.jpg",
    "width": 2000,
    "height": 1335
  },
  {
    "url": "stock-photo-71913567.jpg",
    "width": 2000,
    "height": 1328
  },
  {
    "url": "stock-photo-72223295.jpg",
    "width": 2000,
    "height": 1335
  },
  {
    "url": "stock-photo-72620185.jpg",
    "width": 2000,
    "height": 1333
  },
  {
    "url": "stock-photo-74402039.jpg",
    "width": 666,
    "height": 1000
  },
  {
    "url": "stock-photo-75097491.jpg",
    "width": 2000,
    "height": 1333
  },
  {
    "url": "stock-photo-75186237.jpg",
    "width": 2000,
    "height": 1333
  },
  {
    "url": "stock-photo-79250373.jpg",
    "width": 2000,
    "height": 1325
  },
  {
    "url": "stock-photo-79692589.jpg",
    "width": 670,
    "height": 1000
  },
  {
    "url": "stock-photo-7979718.jpg",
    "width": 1024,
    "height": 680
  },
  {
    "url": "stock-photo-7980252.jpg",
    "width": 1024,
    "height": 680
  },
  {
    "url": "stock-photo-81390687.jpg",
    "width": 2000,
    "height": 1591
  },
  {
    "url": "stock-photo-81988949.jpg",
    "width": 667,
    "height": 1000
  },
  {
    "url": "stock-photo-83149705.jpg",
    "width": 775,
    "height": 1170
  },{
    "url": "photo-103450229.jpg",
    "width": 675,
    "height": 900
  },
  {
    "url": "photo-108273877.jpg",
    "width": 1170,
    "height": 780
  },
  {
    "url": "photo-115203323.jpg",
    "width": 1170,
    "height": 780
  },
  {
    "url": "photo-23583825.jpg",
    "width": 2048,
    "height": 1536
  },
  {
    "url": "stock-photo-123942383.jpg",
    "width": 2000,
    "height": 1333
  },
  {
    "url": "stock-photo-124559545.jpg",
    "width": 2000,
    "height": 1333
  },
  {
    "url": "stock-photo-132046989.jpg",
    "width": 1170,
    "height": 780
  },
  {
    "url": "stock-photo-132118343.jpg",
    "width": 2000,
    "height": 1339
  },
  {
    "url": "stock-photo-132311221.jpg",
    "width": 1920,
    "height": 1080
  },
  {
    "url": "stock-photo-132586903.jpg",
    "width": 2000,
    "height": 1334
  },
  {
    "url": "stock-photo-135203031.jpg",
    "width": 1000,
    "height": 668
  },
  {
    "url": "stock-photo-135626379.jpg",
    "width": 2000,
    "height": 1500
  },
  {
    "url": "stock-photo-136947953.jpg",
    "width": 2000,
    "height": 1348
  },
  {
    "url": "stock-photo-138378295.jpg",
    "width": 2000,
    "height": 1333
  },
  {
    "url": "stock-photo-138436811.jpg",
    "width": 2000,
    "height": 1333
  },
  {
    "url": "stock-photo-142950305.jpg",
    "width": 2000,
    "height": 1125
  },
  {
    "url": "stock-photo-143046061.jpg",
    "width": 843,
    "height": 1000
  },
  {
    "url": "stock-photo-143181649.jpg",
    "width": 2000,
    "height": 1298
  },
  {
    "url": "stock-photo-144530143.jpg",
    "width": 2000,
    "height": 1333
  },
  {
    "url": "stock-photo-144730939.jpg",
    "width": 1000,
    "height": 1000
  },
  {
    "url": "stock-photo-145414771.jpg",
    "width": 780,
    "height": 1170
  },
  {
    "url": "stock-photo-146038669.jpg",
    "width": 2000,
    "height": 1335
  },
  {
    "url": "stock-photo-146231033.jpg",
    "width": 2000,
    "height": 1335
  },
  {
    "url": "stock-photo-146914861.jpg",
    "width": 843,
    "height": 1000
  },
  {
    "url": "stock-photo-147877407.jpg",
    "width": 2000,
    "height": 1334
  },
  {
    "url": "stock-photo-147969173.jpg",
    "width": 2000,
    "height": 1333
  },
  {
    "url": "stock-photo-148015373.jpg",
    "width": 1170,
    "height": 781
  },
  {
    "url": "stock-photo-148704233.jpg",
    "width": 1170,
    "height": 884
  },
  {
    "url": "stock-photo-148928293.jpg",
    "width": 1170,
    "height": 781
  },
  {
    "url": "stock-photo-148950715.jpg",
    "width": 1170,
    "height": 775
  },
  {
    "url": "stock-photo-21951271.jpg",
    "width": 2000,
    "height": 1333
  },
  {
    "url": "stock-photo-21964829.jpg",
    "width": 2000,
    "height": 1333
  },
  {
    "url": "stock-photo-22618399.jpg",
    "width": 2000,
    "height": 1333
  },
  {
    "url": "stock-photo-31201539.jpg",
    "width": 2000,
    "height": 1333
  },
  {
    "url": "stock-photo-34598868.jpg",
    "width": 542,
    "height": 768
  },
  {
    "url": "stock-photo-47252094.jpg",
    "width": 2000,
    "height": 1333
  },
  {
    "url": "stock-photo-51980510.jpg",
    "width": 666,
    "height": 1000
  },
  {
    "url": "stock-photo-55601508.jpg",
    "width": 666,
    "height": 1000
  },
  {
    "url": "stock-photo-65681789.jpg",
    "width": 1840,
    "height": 1232
  },
  {
    "url": "stock-photo-70461471.jpg",
    "width": 1000,
    "height": 1000
  },
  {
    "url": "stock-photo-71801901.jpg",
    "width": 2000,
    "height": 1335
  },
  {
    "url": "stock-photo-71913567.jpg",
    "width": 2000,
    "height": 1328
  },
  {
    "url": "stock-photo-72223295.jpg",
    "width": 2000,
    "height": 1335
  },
  {
    "url": "stock-photo-72620185.jpg",
    "width": 2000,
    "height": 1333
  },
  {
    "url": "stock-photo-74402039.jpg",
    "width": 666,
    "height": 1000
  },
  {
    "url": "stock-photo-75097491.jpg",
    "width": 2000,
    "height": 1333
  },
  {
    "url": "stock-photo-75186237.jpg",
    "width": 2000,
    "height": 1333
  },
  {
    "url": "stock-photo-79250373.jpg",
    "width": 2000,
    "height": 1325
  },
  {
    "url": "stock-photo-79692589.jpg",
    "width": 670,
    "height": 1000
  },
  {
    "url": "stock-photo-7979718.jpg",
    "width": 1024,
    "height": 680
  },
  {
    "url": "stock-photo-7980252.jpg",
    "width": 1024,
    "height": 680
  },
  {
    "url": "stock-photo-81390687.jpg",
    "width": 2000,
    "height": 1591
  },
  {
    "url": "stock-photo-81988949.jpg",
    "width": 667,
    "height": 1000
  },
  {
    "url": "stock-photo-83149705.jpg",
    "width": 775,
    "height": 1170
  },{
    "url": "photo-103450229.jpg",
    "width": 675,
    "height": 900
  },
  {
    "url": "photo-108273877.jpg",
    "width": 1170,
    "height": 780
  },
  {
    "url": "photo-115203323.jpg",
    "width": 1170,
    "height": 780
  },
  {
    "url": "photo-23583825.jpg",
    "width": 2048,
    "height": 1536
  },
  {
    "url": "stock-photo-123942383.jpg",
    "width": 2000,
    "height": 1333
  },
  {
    "url": "stock-photo-124559545.jpg",
    "width": 2000,
    "height": 1333
  },
  {
    "url": "stock-photo-132046989.jpg",
    "width": 1170,
    "height": 780
  },
  {
    "url": "stock-photo-132118343.jpg",
    "width": 2000,
    "height": 1339
  },
  {
    "url": "stock-photo-132311221.jpg",
    "width": 1920,
    "height": 1080
  },
  {
    "url": "stock-photo-132586903.jpg",
    "width": 2000,
    "height": 1334
  },
  {
    "url": "stock-photo-135203031.jpg",
    "width": 1000,
    "height": 668
  },
  {
    "url": "stock-photo-135626379.jpg",
    "width": 2000,
    "height": 1500
  },
  {
    "url": "stock-photo-136947953.jpg",
    "width": 2000,
    "height": 1348
  },
  {
    "url": "stock-photo-138378295.jpg",
    "width": 2000,
    "height": 1333
  },
  {
    "url": "stock-photo-138436811.jpg",
    "width": 2000,
    "height": 1333
  },
  {
    "url": "stock-photo-142950305.jpg",
    "width": 2000,
    "height": 1125
  },
  {
    "url": "stock-photo-143046061.jpg",
    "width": 843,
    "height": 1000
  },
  {
    "url": "stock-photo-143181649.jpg",
    "width": 2000,
    "height": 1298
  },
  {
    "url": "stock-photo-144530143.jpg",
    "width": 2000,
    "height": 1333
  },
  {
    "url": "stock-photo-144730939.jpg",
    "width": 1000,
    "height": 1000
  },
  {
    "url": "stock-photo-145414771.jpg",
    "width": 780,
    "height": 1170
  },
  {
    "url": "stock-photo-146038669.jpg",
    "width": 2000,
    "height": 1335
  },
  {
    "url": "stock-photo-146231033.jpg",
    "width": 2000,
    "height": 1335
  },
  {
    "url": "stock-photo-146914861.jpg",
    "width": 843,
    "height": 1000
  },
  {
    "url": "stock-photo-147877407.jpg",
    "width": 2000,
    "height": 1334
  },
  {
    "url": "stock-photo-147969173.jpg",
    "width": 2000,
    "height": 1333
  },
  {
    "url": "stock-photo-148015373.jpg",
    "width": 1170,
    "height": 781
  },
  {
    "url": "stock-photo-148704233.jpg",
    "width": 1170,
    "height": 884
  },
  {
    "url": "stock-photo-148928293.jpg",
    "width": 1170,
    "height": 781
  },
  {
    "url": "stock-photo-148950715.jpg",
    "width": 1170,
    "height": 775
  },
  {
    "url": "stock-photo-21951271.jpg",
    "width": 2000,
    "height": 1333
  },
  {
    "url": "stock-photo-21964829.jpg",
    "width": 2000,
    "height": 1333
  },
  {
    "url": "stock-photo-22618399.jpg",
    "width": 2000,
    "height": 1333
  },
  {
    "url": "stock-photo-31201539.jpg",
    "width": 2000,
    "height": 1333
  },
  {
    "url": "stock-photo-34598868.jpg",
    "width": 542,
    "height": 768
  },
  {
    "url": "stock-photo-47252094.jpg",
    "width": 2000,
    "height": 1333
  },
  {
    "url": "stock-photo-51980510.jpg",
    "width": 666,
    "height": 1000
  },
  {
    "url": "stock-photo-55601508.jpg",
    "width": 666,
    "height": 1000
  },
  {
    "url": "stock-photo-65681789.jpg",
    "width": 1840,
    "height": 1232
  },
  {
    "url": "stock-photo-70461471.jpg",
    "width": 1000,
    "height": 1000
  },
  {
    "url": "stock-photo-71801901.jpg",
    "width": 2000,
    "height": 1335
  },
  {
    "url": "stock-photo-71913567.jpg",
    "width": 2000,
    "height": 1328
  },
  {
    "url": "stock-photo-72223295.jpg",
    "width": 2000,
    "height": 1335
  },
  {
    "url": "stock-photo-72620185.jpg",
    "width": 2000,
    "height": 1333
  },
  {
    "url": "stock-photo-74402039.jpg",
    "width": 666,
    "height": 1000
  },
  {
    "url": "stock-photo-75097491.jpg",
    "width": 2000,
    "height": 1333
  },
  {
    "url": "stock-photo-75186237.jpg",
    "width": 2000,
    "height": 1333
  },
  {
    "url": "stock-photo-79250373.jpg",
    "width": 2000,
    "height": 1325
  },
  {
    "url": "stock-photo-79692589.jpg",
    "width": 670,
    "height": 1000
  },
  {
    "url": "stock-photo-7979718.jpg",
    "width": 1024,
    "height": 680
  },
  {
    "url": "stock-photo-7980252.jpg",
    "width": 1024,
    "height": 680
  },
  {
    "url": "stock-photo-81390687.jpg",
    "width": 2000,
    "height": 1591
  },
  {
    "url": "stock-photo-81988949.jpg",
    "width": 667,
    "height": 1000
  },
  {
    "url": "stock-photo-83149705.jpg",
    "width": 775,
    "height": 1170
  },{
    "url": "photo-103450229.jpg",
    "width": 675,
    "height": 900
  },
  {
    "url": "photo-108273877.jpg",
    "width": 1170,
    "height": 780
  },
  {
    "url": "photo-115203323.jpg",
    "width": 1170,
    "height": 780
  },
  {
    "url": "photo-23583825.jpg",
    "width": 2048,
    "height": 1536
  },
  {
    "url": "stock-photo-123942383.jpg",
    "width": 2000,
    "height": 1333
  },
  {
    "url": "stock-photo-124559545.jpg",
    "width": 2000,
    "height": 1333
  },
  {
    "url": "stock-photo-132046989.jpg",
    "width": 1170,
    "height": 780
  },
  {
    "url": "stock-photo-132118343.jpg",
    "width": 2000,
    "height": 1339
  },
  {
    "url": "stock-photo-132311221.jpg",
    "width": 1920,
    "height": 1080
  },
  {
    "url": "stock-photo-132586903.jpg",
    "width": 2000,
    "height": 1334
  },
  {
    "url": "stock-photo-135203031.jpg",
    "width": 1000,
    "height": 668
  },
  {
    "url": "stock-photo-135626379.jpg",
    "width": 2000,
    "height": 1500
  },
  {
    "url": "stock-photo-136947953.jpg",
    "width": 2000,
    "height": 1348
  },
  {
    "url": "stock-photo-138378295.jpg",
    "width": 2000,
    "height": 1333
  },
  {
    "url": "stock-photo-138436811.jpg",
    "width": 2000,
    "height": 1333
  },
  {
    "url": "stock-photo-142950305.jpg",
    "width": 2000,
    "height": 1125
  },
  {
    "url": "stock-photo-143046061.jpg",
    "width": 843,
    "height": 1000
  },
  {
    "url": "stock-photo-143181649.jpg",
    "width": 2000,
    "height": 1298
  },
  {
    "url": "stock-photo-144530143.jpg",
    "width": 2000,
    "height": 1333
  },
  {
    "url": "stock-photo-144730939.jpg",
    "width": 1000,
    "height": 1000
  },
  {
    "url": "stock-photo-145414771.jpg",
    "width": 780,
    "height": 1170
  },
  {
    "url": "stock-photo-146038669.jpg",
    "width": 2000,
    "height": 1335
  },
  {
    "url": "stock-photo-146231033.jpg",
    "width": 2000,
    "height": 1335
  },
  {
    "url": "stock-photo-146914861.jpg",
    "width": 843,
    "height": 1000
  },
  {
    "url": "stock-photo-147877407.jpg",
    "width": 2000,
    "height": 1334
  },
  {
    "url": "stock-photo-147969173.jpg",
    "width": 2000,
    "height": 1333
  },
  {
    "url": "stock-photo-148015373.jpg",
    "width": 1170,
    "height": 781
  },
  {
    "url": "stock-photo-148704233.jpg",
    "width": 1170,
    "height": 884
  },
  {
    "url": "stock-photo-148928293.jpg",
    "width": 1170,
    "height": 781
  },
  {
    "url": "stock-photo-148950715.jpg",
    "width": 1170,
    "height": 775
  },
  {
    "url": "stock-photo-21951271.jpg",
    "width": 2000,
    "height": 1333
  },
  {
    "url": "stock-photo-21964829.jpg",
    "width": 2000,
    "height": 1333
  },
  {
    "url": "stock-photo-22618399.jpg",
    "width": 2000,
    "height": 1333
  },
  {
    "url": "stock-photo-31201539.jpg",
    "width": 2000,
    "height": 1333
  },
  {
    "url": "stock-photo-34598868.jpg",
    "width": 542,
    "height": 768
  },
  {
    "url": "stock-photo-47252094.jpg",
    "width": 2000,
    "height": 1333
  },
  {
    "url": "stock-photo-51980510.jpg",
    "width": 666,
    "height": 1000
  },
  {
    "url": "stock-photo-55601508.jpg",
    "width": 666,
    "height": 1000
  },
  {
    "url": "stock-photo-65681789.jpg",
    "width": 1840,
    "height": 1232
  },
  {
    "url": "stock-photo-70461471.jpg",
    "width": 1000,
    "height": 1000
  },
  {
    "url": "stock-photo-71801901.jpg",
    "width": 2000,
    "height": 1335
  },
  {
    "url": "stock-photo-71913567.jpg",
    "width": 2000,
    "height": 1328
  },
  {
    "url": "stock-photo-72223295.jpg",
    "width": 2000,
    "height": 1335
  },
  {
    "url": "stock-photo-72620185.jpg",
    "width": 2000,
    "height": 1333
  },
  {
    "url": "stock-photo-74402039.jpg",
    "width": 666,
    "height": 1000
  },
  {
    "url": "stock-photo-75097491.jpg",
    "width": 2000,
    "height": 1333
  },
  {
    "url": "stock-photo-75186237.jpg",
    "width": 2000,
    "height": 1333
  },
  {
    "url": "stock-photo-79250373.jpg",
    "width": 2000,
    "height": 1325
  },
  {
    "url": "stock-photo-79692589.jpg",
    "width": 670,
    "height": 1000
  },
  {
    "url": "stock-photo-7979718.jpg",
    "width": 1024,
    "height": 680
  },
  {
    "url": "stock-photo-7980252.jpg",
    "width": 1024,
    "height": 680
  },
  {
    "url": "stock-photo-81390687.jpg",
    "width": 2000,
    "height": 1591
  },
  {
    "url": "stock-photo-81988949.jpg",
    "width": 667,
    "height": 1000
  },
  {
    "url": "stock-photo-83149705.jpg",
    "width": 775,
    "height": 1170
  },{
    "url": "photo-103450229.jpg",
    "width": 675,
    "height": 900
  },
  {
    "url": "photo-108273877.jpg",
    "width": 1170,
    "height": 780
  },
  {
    "url": "photo-115203323.jpg",
    "width": 1170,
    "height": 780
  },
  {
    "url": "photo-23583825.jpg",
    "width": 2048,
    "height": 1536
  },
  {
    "url": "stock-photo-123942383.jpg",
    "width": 2000,
    "height": 1333
  },
  {
    "url": "stock-photo-124559545.jpg",
    "width": 2000,
    "height": 1333
  },
  {
    "url": "stock-photo-132046989.jpg",
    "width": 1170,
    "height": 780
  },
  {
    "url": "stock-photo-132118343.jpg",
    "width": 2000,
    "height": 1339
  },
  {
    "url": "stock-photo-132311221.jpg",
    "width": 1920,
    "height": 1080
  },
  {
    "url": "stock-photo-132586903.jpg",
    "width": 2000,
    "height": 1334
  },
  {
    "url": "stock-photo-135203031.jpg",
    "width": 1000,
    "height": 668
  },
  {
    "url": "stock-photo-135626379.jpg",
    "width": 2000,
    "height": 1500
  },
  {
    "url": "stock-photo-136947953.jpg",
    "width": 2000,
    "height": 1348
  },
  {
    "url": "stock-photo-138378295.jpg",
    "width": 2000,
    "height": 1333
  },
  {
    "url": "stock-photo-138436811.jpg",
    "width": 2000,
    "height": 1333
  },
  {
    "url": "stock-photo-142950305.jpg",
    "width": 2000,
    "height": 1125
  },
  {
    "url": "stock-photo-143046061.jpg",
    "width": 843,
    "height": 1000
  },
  {
    "url": "stock-photo-143181649.jpg",
    "width": 2000,
    "height": 1298
  },
  {
    "url": "stock-photo-144530143.jpg",
    "width": 2000,
    "height": 1333
  },
  {
    "url": "stock-photo-144730939.jpg",
    "width": 1000,
    "height": 1000
  },
  {
    "url": "stock-photo-145414771.jpg",
    "width": 780,
    "height": 1170
  },
  {
    "url": "stock-photo-146038669.jpg",
    "width": 2000,
    "height": 1335
  },
  {
    "url": "stock-photo-146231033.jpg",
    "width": 2000,
    "height": 1335
  },
  {
    "url": "stock-photo-146914861.jpg",
    "width": 843,
    "height": 1000
  },
  {
    "url": "stock-photo-147877407.jpg",
    "width": 2000,
    "height": 1334
  },
  {
    "url": "stock-photo-147969173.jpg",
    "width": 2000,
    "height": 1333
  },
  {
    "url": "stock-photo-148015373.jpg",
    "width": 1170,
    "height": 781
  },
  {
    "url": "stock-photo-148704233.jpg",
    "width": 1170,
    "height": 884
  },
  {
    "url": "stock-photo-148928293.jpg",
    "width": 1170,
    "height": 781
  },
  {
    "url": "stock-photo-148950715.jpg",
    "width": 1170,
    "height": 775
  },
  {
    "url": "stock-photo-21951271.jpg",
    "width": 2000,
    "height": 1333
  },
  {
    "url": "stock-photo-21964829.jpg",
    "width": 2000,
    "height": 1333
  },
  {
    "url": "stock-photo-22618399.jpg",
    "width": 2000,
    "height": 1333
  },
  {
    "url": "stock-photo-31201539.jpg",
    "width": 2000,
    "height": 1333
  },
  {
    "url": "stock-photo-34598868.jpg",
    "width": 542,
    "height": 768
  },
  {
    "url": "stock-photo-47252094.jpg",
    "width": 2000,
    "height": 1333
  },
  {
    "url": "stock-photo-51980510.jpg",
    "width": 666,
    "height": 1000
  },
  {
    "url": "stock-photo-55601508.jpg",
    "width": 666,
    "height": 1000
  },
  {
    "url": "stock-photo-65681789.jpg",
    "width": 1840,
    "height": 1232
  },
  {
    "url": "stock-photo-70461471.jpg",
    "width": 1000,
    "height": 1000
  },
  {
    "url": "stock-photo-71801901.jpg",
    "width": 2000,
    "height": 1335
  },
  {
    "url": "stock-photo-71913567.jpg",
    "width": 2000,
    "height": 1328
  },
  {
    "url": "stock-photo-72223295.jpg",
    "width": 2000,
    "height": 1335
  },
  {
    "url": "stock-photo-72620185.jpg",
    "width": 2000,
    "height": 1333
  },
  {
    "url": "stock-photo-74402039.jpg",
    "width": 666,
    "height": 1000
  },
  {
    "url": "stock-photo-75097491.jpg",
    "width": 2000,
    "height": 1333
  },
  {
    "url": "stock-photo-75186237.jpg",
    "width": 2000,
    "height": 1333
  },
  {
    "url": "stock-photo-79250373.jpg",
    "width": 2000,
    "height": 1325
  },
  {
    "url": "stock-photo-79692589.jpg",
    "width": 670,
    "height": 1000
  },
  {
    "url": "stock-photo-7979718.jpg",
    "width": 1024,
    "height": 680
  },
  {
    "url": "stock-photo-7980252.jpg",
    "width": 1024,
    "height": 680
  },
  {
    "url": "stock-photo-81390687.jpg",
    "width": 2000,
    "height": 1591
  },
  {
    "url": "stock-photo-81988949.jpg",
    "width": 667,
    "height": 1000
  },
  {
    "url": "stock-photo-83149705.jpg",
    "width": 775,
    "height": 1170
  }
];

// images = [
//    {
//     "url": "stock-photo-81390687.jpg",
//     "width": 2000,
//     "height": 1591
//   },
//   {
//     "url": "stock-photo-81988949.jpg",
//     "width": 667,
//     "height": 1000
//   },
//   {
//     "url": "stock-photo-83149705.jpg",
//     "width": 775,
//     "height": 1170
//   }
// ]

 styles:any = [];
 shadow = null;
 shouldScroll:boolean = false;
 _renderer:Renderer;
 mouseMoveListener: Function;
 mouseUpListener: Function;

  constructor(private dragulaService: DragulaService, renderer: Renderer) {
    this._renderer = renderer;
    this.
    dragulaService.setOptions('first-bag', {
      //copy: true,
      copySortSource: true,
      removeOnSpill: true
    });
    dragulaService.drag.subscribe((value) => {
      this.onDrag(value.slice(1));
    });
    dragulaService.dragend.subscribe((value) => {
      this.onDragEnd(value.slice(1));
    });
     dragulaService.shadow.subscribe((value) => {
      this.onShadow(value.slice(1));
    });
    dragulaService.drop.subscribe((value) => {
      this.onDrop(value.slice(1));
    });
    dragulaService.over.subscribe((value) => {
      this.onOver(value.slice(1));
    });
    dragulaService.out.subscribe((value) => {
      this.onOut(value.slice(1));
    });
  }

  private hasClass(el: any, name: string) {
    return new RegExp('(?:^|\\s+)' + name + '(?:\\s+|$)').test(el.className);
  }

  private addClass(el: any, name: string) {
    if (!this.hasClass(el, name)) {
      el.className = el.className ? [el.className, name].join(' ') : name;
    }
  }

  private removeClass(el: any, name: string) {
    if (this.hasClass(el, name)) {
      el.className = el.className.replace(new RegExp('(?:^|\\s+)' + name + '(?:\\s+|$)', 'g'), '');
    }
  }

 private onShadow(args) {
    console.log('on shadowwww');

    let [el] = args;
     if (!this.shadow){
        this.shadow = this.makeElement();
      //  this.shadow.classList.add("gu-transit");
    }
    el.style.display = 'none';
    el.parentNode.insertBefore(this.shadow, el);
  }

  private offsetCalc(el) {
      var rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
  }

  private onDrag(args) {
    var self = this;
    console.log(args);
    console.log('ondrag');
    let [el, container] = args;
    // const mask = container;
    //     var h = mask.clientHeight;
    //     mask.addEventListener('touchend',function(e){
    //       mask.removeEventListener('touchmove');
    //     });

    //     ['mousemove', 'touchmove'].forEach(function(e){
    //       document.addEventListener(e, moveHandler);
    //     });

    //     function moveHandler(e) {
    //       console.log('insinde move')
    //       const offset = self.offsetCalc(mask).top;
    //       // if(DRRR.isMobile){
    //       //   e.clientY = e.originalEvent.targetTouches[0].clientY;
    //       // }
    //       var mousePosition = e.clientY - offset;
    //       //alert(mousePosition);
    //       var topRegion = 0.65 * h;
    //       var bottomRegion = 0.35 * h;
    //   //if((DRRR.isMobile || e.which == 1) && (mousePosition < topRegion || mousePosition > bottomRegion)){    // e.which = 1 => click down !
    //       if((e.which == 1) && (mousePosition < topRegion || mousePosition > bottomRegion)){    // e.which = 1 => click down !
    //         var distance = mousePosition - h / 2;
    //         distance = distance * 0.1; // <- velocity
    //         mask.scrollTop = distance + mask.scrollTop;
    //       }else{
    //         mask.removeEventListener('mousemove touchmove');
    //       }
    //     };

         this.mouseMoveListener = this._renderer.listenGlobal('document', 'mousemove', (event) => this.handleMouseMove(event));
  }

  private handleMouseMove(e){
    var h = window.innerHeight;
    var mousePosition = e.pageY - (window.pageYOffset || document.documentElement.scrollTop);
    var topRegion = 50;
    var bottomRegion = h - 50;
    if(e.which == 1 && (mousePosition < topRegion || mousePosition > bottomRegion)){    // e.wich = 1 => click down !
        if (this.shouldScroll) { return; }
        let ammount = mousePosition - h / 2;
        ammount = ammount * 0.2; // <- velocity
        this.shouldScroll = true;               
        this.autoScroll(ammount)
    }else{
        console.warn('no more mouse move')
        this.shouldScroll = false;
    }
  }

  private autoScroll(ammount) {
    // TODO stop scrolling when you reached bottom of page or top
    if (!this.shouldScroll) { return; }
        console.error('autoScroll')
    document.documentElement.scrollTop = document.body.scrollTop += ammount;

    setTimeout(() =>
      this.autoScroll(ammount), 10);
  }

  private onDragEnd(args) {
    console.log('onDragEnddd')
    this.shouldScroll = false;

    this.mouseMoveListener();

    this.shadow.remove();
    this.shadow = null;
  }

  private insertAfter(el, referenceNode) {
    referenceNode.parentNode.insertBefore(el, referenceNode);
  }

  private onDrop(args) {
      console.log(args);
    console.log('onDrop');
    let [e, el, container, dropElm] = args;
    if (dropElm) {
        const image = e.cloneNode(true);
        image.style.display = '';
         this.removeClass(image, 'gu-transit');;
        e.parentNode.replaceChild(image, e);
          

       // this.insertAfter(image, dropElm)
    }

  //  this.addClass(e, 'ex-moved');
  }

  private onOver(args) {
      console.log(args);
    console.log('onOver');

    // var guMirror = document.getElementsByClassName('gu-mirror')
    // console.log('adding class scaleDown')
    // setTimeout(function() { guMirror[0].classList.add('scaleDown'); }, 0);
    let [e, el, container] = args;
   // this.addClass(el, 'ex-over');
  }

  private onOut(args) {
      console.log(args);
    console.log('onOut');
    let [e, el, container] = args;
    this.removeClass(el, 'ex-over');
  }

  getStyles(name) {
    return  this.styles[name];
  }

  makeElement(){
    const newNode = document.createElement("div");
    newNode.classList.add( "separator");
    return newNode;
  }


  ngOnInit() {

   this.images.forEach(element => {
     const calcWidth: number = element.width*200/element.height;
     this.styles[element.url] = {
      'width':  calcWidth + 'px',
      'flex-grow': calcWidth,
    };
  });
  }

   ngOnDestroy() {
    
    // Remove the listeners!
   this.mouseMoveListener();
  }

}
