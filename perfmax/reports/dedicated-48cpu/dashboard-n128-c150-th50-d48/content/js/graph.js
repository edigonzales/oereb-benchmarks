/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 145.0, "minX": 0.0, "maxY": 1352.0, "series": [{"data": [[0.0, 145.0], [0.1, 177.0], [0.2, 191.0], [0.3, 201.0], [0.4, 209.0], [0.5, 215.0], [0.6, 222.0], [0.7, 229.0], [0.8, 239.0], [0.9, 246.0], [1.0, 256.0], [1.1, 264.0], [1.2, 272.0], [1.3, 278.0], [1.4, 285.0], [1.5, 293.0], [1.6, 301.0], [1.7, 310.0], [1.8, 320.0], [1.9, 328.0], [2.0, 338.0], [2.1, 346.0], [2.2, 355.0], [2.3, 365.0], [2.4, 373.0], [2.5, 381.0], [2.6, 386.0], [2.7, 392.0], [2.8, 397.0], [2.9, 401.0], [3.0, 405.0], [3.1, 408.0], [3.2, 411.0], [3.3, 413.0], [3.4, 416.0], [3.5, 418.0], [3.6, 420.0], [3.7, 422.0], [3.8, 424.0], [3.9, 426.0], [4.0, 428.0], [4.1, 430.0], [4.2, 431.0], [4.3, 433.0], [4.4, 435.0], [4.5, 437.0], [4.6, 439.0], [4.7, 440.0], [4.8, 442.0], [4.9, 444.0], [5.0, 446.0], [5.1, 448.0], [5.2, 450.0], [5.3, 452.0], [5.4, 454.0], [5.5, 458.0], [5.6, 460.0], [5.7, 463.0], [5.8, 466.0], [5.9, 470.0], [6.0, 474.0], [6.1, 478.0], [6.2, 482.0], [6.3, 487.0], [6.4, 492.0], [6.5, 495.0], [6.6, 499.0], [6.7, 502.0], [6.8, 505.0], [6.9, 507.0], [7.0, 510.0], [7.1, 511.0], [7.2, 513.0], [7.3, 515.0], [7.4, 516.0], [7.5, 518.0], [7.6, 519.0], [7.7, 520.0], [7.8, 521.0], [7.9, 522.0], [8.0, 523.0], [8.1, 524.0], [8.2, 525.0], [8.3, 526.0], [8.4, 527.0], [8.5, 528.0], [8.6, 529.0], [8.7, 529.0], [8.8, 530.0], [8.9, 531.0], [9.0, 531.0], [9.1, 532.0], [9.2, 533.0], [9.3, 533.0], [9.4, 534.0], [9.5, 534.0], [9.6, 535.0], [9.7, 536.0], [9.8, 536.0], [9.9, 537.0], [10.0, 537.0], [10.1, 538.0], [10.2, 538.0], [10.3, 539.0], [10.4, 539.0], [10.5, 540.0], [10.6, 540.0], [10.7, 541.0], [10.8, 541.0], [10.9, 542.0], [11.0, 542.0], [11.1, 543.0], [11.2, 543.0], [11.3, 543.0], [11.4, 544.0], [11.5, 544.0], [11.6, 545.0], [11.7, 545.0], [11.8, 545.0], [11.9, 546.0], [12.0, 546.0], [12.1, 547.0], [12.2, 547.0], [12.3, 547.0], [12.4, 548.0], [12.5, 548.0], [12.6, 548.0], [12.7, 549.0], [12.8, 549.0], [12.9, 549.0], [13.0, 550.0], [13.1, 550.0], [13.2, 550.0], [13.3, 551.0], [13.4, 551.0], [13.5, 551.0], [13.6, 552.0], [13.7, 552.0], [13.8, 552.0], [13.9, 553.0], [14.0, 553.0], [14.1, 553.0], [14.2, 554.0], [14.3, 554.0], [14.4, 554.0], [14.5, 554.0], [14.6, 555.0], [14.7, 555.0], [14.8, 555.0], [14.9, 555.0], [15.0, 556.0], [15.1, 556.0], [15.2, 556.0], [15.3, 557.0], [15.4, 557.0], [15.5, 557.0], [15.6, 558.0], [15.7, 558.0], [15.8, 558.0], [15.9, 558.0], [16.0, 559.0], [16.1, 559.0], [16.2, 559.0], [16.3, 559.0], [16.4, 560.0], [16.5, 560.0], [16.6, 560.0], [16.7, 560.0], [16.8, 561.0], [16.9, 561.0], [17.0, 561.0], [17.1, 561.0], [17.2, 562.0], [17.3, 562.0], [17.4, 562.0], [17.5, 562.0], [17.6, 563.0], [17.7, 563.0], [17.8, 563.0], [17.9, 563.0], [18.0, 564.0], [18.1, 564.0], [18.2, 564.0], [18.3, 564.0], [18.4, 565.0], [18.5, 565.0], [18.6, 565.0], [18.7, 565.0], [18.8, 565.0], [18.9, 566.0], [19.0, 566.0], [19.1, 566.0], [19.2, 566.0], [19.3, 567.0], [19.4, 567.0], [19.5, 567.0], [19.6, 567.0], [19.7, 568.0], [19.8, 568.0], [19.9, 568.0], [20.0, 568.0], [20.1, 568.0], [20.2, 569.0], [20.3, 569.0], [20.4, 569.0], [20.5, 569.0], [20.6, 569.0], [20.7, 570.0], [20.8, 570.0], [20.9, 570.0], [21.0, 570.0], [21.1, 570.0], [21.2, 571.0], [21.3, 571.0], [21.4, 571.0], [21.5, 571.0], [21.6, 571.0], [21.7, 572.0], [21.8, 572.0], [21.9, 572.0], [22.0, 572.0], [22.1, 572.0], [22.2, 573.0], [22.3, 573.0], [22.4, 573.0], [22.5, 573.0], [22.6, 573.0], [22.7, 574.0], [22.8, 574.0], [22.9, 574.0], [23.0, 574.0], [23.1, 574.0], [23.2, 575.0], [23.3, 575.0], [23.4, 575.0], [23.5, 575.0], [23.6, 575.0], [23.7, 575.0], [23.8, 576.0], [23.9, 576.0], [24.0, 576.0], [24.1, 576.0], [24.2, 576.0], [24.3, 576.0], [24.4, 577.0], [24.5, 577.0], [24.6, 577.0], [24.7, 577.0], [24.8, 577.0], [24.9, 577.0], [25.0, 578.0], [25.1, 578.0], [25.2, 578.0], [25.3, 578.0], [25.4, 578.0], [25.5, 578.0], [25.6, 579.0], [25.7, 579.0], [25.8, 579.0], [25.9, 579.0], [26.0, 579.0], [26.1, 579.0], [26.2, 580.0], [26.3, 580.0], [26.4, 580.0], [26.5, 580.0], [26.6, 580.0], [26.7, 580.0], [26.8, 581.0], [26.9, 581.0], [27.0, 581.0], [27.1, 581.0], [27.2, 581.0], [27.3, 582.0], [27.4, 582.0], [27.5, 582.0], [27.6, 582.0], [27.7, 582.0], [27.8, 582.0], [27.9, 583.0], [28.0, 583.0], [28.1, 583.0], [28.2, 583.0], [28.3, 583.0], [28.4, 583.0], [28.5, 584.0], [28.6, 584.0], [28.7, 584.0], [28.8, 584.0], [28.9, 584.0], [29.0, 584.0], [29.1, 585.0], [29.2, 585.0], [29.3, 585.0], [29.4, 585.0], [29.5, 585.0], [29.6, 585.0], [29.7, 585.0], [29.8, 586.0], [29.9, 586.0], [30.0, 586.0], [30.1, 586.0], [30.2, 586.0], [30.3, 586.0], [30.4, 587.0], [30.5, 587.0], [30.6, 587.0], [30.7, 587.0], [30.8, 587.0], [30.9, 587.0], [31.0, 587.0], [31.1, 588.0], [31.2, 588.0], [31.3, 588.0], [31.4, 588.0], [31.5, 588.0], [31.6, 588.0], [31.7, 589.0], [31.8, 589.0], [31.9, 589.0], [32.0, 589.0], [32.1, 589.0], [32.2, 589.0], [32.3, 589.0], [32.4, 590.0], [32.5, 590.0], [32.6, 590.0], [32.7, 590.0], [32.8, 590.0], [32.9, 590.0], [33.0, 591.0], [33.1, 591.0], [33.2, 591.0], [33.3, 591.0], [33.4, 591.0], [33.5, 591.0], [33.6, 592.0], [33.7, 592.0], [33.8, 592.0], [33.9, 592.0], [34.0, 592.0], [34.1, 592.0], [34.2, 592.0], [34.3, 593.0], [34.4, 593.0], [34.5, 593.0], [34.6, 593.0], [34.7, 593.0], [34.8, 593.0], [34.9, 593.0], [35.0, 594.0], [35.1, 594.0], [35.2, 594.0], [35.3, 594.0], [35.4, 594.0], [35.5, 594.0], [35.6, 594.0], [35.7, 595.0], [35.8, 595.0], [35.9, 595.0], [36.0, 595.0], [36.1, 595.0], [36.2, 595.0], [36.3, 595.0], [36.4, 596.0], [36.5, 596.0], [36.6, 596.0], [36.7, 596.0], [36.8, 596.0], [36.9, 596.0], [37.0, 596.0], [37.1, 597.0], [37.2, 597.0], [37.3, 597.0], [37.4, 597.0], [37.5, 597.0], [37.6, 597.0], [37.7, 597.0], [37.8, 598.0], [37.9, 598.0], [38.0, 598.0], [38.1, 598.0], [38.2, 598.0], [38.3, 598.0], [38.4, 598.0], [38.5, 599.0], [38.6, 599.0], [38.7, 599.0], [38.8, 599.0], [38.9, 599.0], [39.0, 599.0], [39.1, 599.0], [39.2, 600.0], [39.3, 600.0], [39.4, 600.0], [39.5, 600.0], [39.6, 600.0], [39.7, 600.0], [39.8, 600.0], [39.9, 601.0], [40.0, 601.0], [40.1, 601.0], [40.2, 601.0], [40.3, 601.0], [40.4, 601.0], [40.5, 601.0], [40.6, 602.0], [40.7, 602.0], [40.8, 602.0], [40.9, 602.0], [41.0, 602.0], [41.1, 602.0], [41.2, 602.0], [41.3, 603.0], [41.4, 603.0], [41.5, 603.0], [41.6, 603.0], [41.7, 603.0], [41.8, 603.0], [41.9, 603.0], [42.0, 604.0], [42.1, 604.0], [42.2, 604.0], [42.3, 604.0], [42.4, 604.0], [42.5, 604.0], [42.6, 604.0], [42.7, 604.0], [42.8, 605.0], [42.9, 605.0], [43.0, 605.0], [43.1, 605.0], [43.2, 605.0], [43.3, 605.0], [43.4, 605.0], [43.5, 606.0], [43.6, 606.0], [43.7, 606.0], [43.8, 606.0], [43.9, 606.0], [44.0, 606.0], [44.1, 606.0], [44.2, 607.0], [44.3, 607.0], [44.4, 607.0], [44.5, 607.0], [44.6, 607.0], [44.7, 607.0], [44.8, 607.0], [44.9, 608.0], [45.0, 608.0], [45.1, 608.0], [45.2, 608.0], [45.3, 608.0], [45.4, 608.0], [45.5, 608.0], [45.6, 608.0], [45.7, 609.0], [45.8, 609.0], [45.9, 609.0], [46.0, 609.0], [46.1, 609.0], [46.2, 609.0], [46.3, 609.0], [46.4, 610.0], [46.5, 610.0], [46.6, 610.0], [46.7, 610.0], [46.8, 610.0], [46.9, 610.0], [47.0, 611.0], [47.1, 611.0], [47.2, 611.0], [47.3, 611.0], [47.4, 611.0], [47.5, 611.0], [47.6, 611.0], [47.7, 612.0], [47.8, 612.0], [47.9, 612.0], [48.0, 612.0], [48.1, 612.0], [48.2, 612.0], [48.3, 612.0], [48.4, 613.0], [48.5, 613.0], [48.6, 613.0], [48.7, 613.0], [48.8, 613.0], [48.9, 613.0], [49.0, 613.0], [49.1, 614.0], [49.2, 614.0], [49.3, 614.0], [49.4, 614.0], [49.5, 614.0], [49.6, 614.0], [49.7, 614.0], [49.8, 615.0], [49.9, 615.0], [50.0, 615.0], [50.1, 615.0], [50.2, 615.0], [50.3, 615.0], [50.4, 615.0], [50.5, 616.0], [50.6, 616.0], [50.7, 616.0], [50.8, 616.0], [50.9, 616.0], [51.0, 616.0], [51.1, 616.0], [51.2, 617.0], [51.3, 617.0], [51.4, 617.0], [51.5, 617.0], [51.6, 617.0], [51.7, 617.0], [51.8, 617.0], [51.9, 618.0], [52.0, 618.0], [52.1, 618.0], [52.2, 618.0], [52.3, 618.0], [52.4, 618.0], [52.5, 618.0], [52.6, 619.0], [52.7, 619.0], [52.8, 619.0], [52.9, 619.0], [53.0, 619.0], [53.1, 619.0], [53.2, 619.0], [53.3, 619.0], [53.4, 620.0], [53.5, 620.0], [53.6, 620.0], [53.7, 620.0], [53.8, 620.0], [53.9, 620.0], [54.0, 621.0], [54.1, 621.0], [54.2, 621.0], [54.3, 621.0], [54.4, 621.0], [54.5, 621.0], [54.6, 621.0], [54.7, 622.0], [54.8, 622.0], [54.9, 622.0], [55.0, 622.0], [55.1, 622.0], [55.2, 622.0], [55.3, 623.0], [55.4, 623.0], [55.5, 623.0], [55.6, 623.0], [55.7, 623.0], [55.8, 623.0], [55.9, 623.0], [56.0, 624.0], [56.1, 624.0], [56.2, 624.0], [56.3, 624.0], [56.4, 624.0], [56.5, 624.0], [56.6, 624.0], [56.7, 625.0], [56.8, 625.0], [56.9, 625.0], [57.0, 625.0], [57.1, 625.0], [57.2, 625.0], [57.3, 626.0], [57.4, 626.0], [57.5, 626.0], [57.6, 626.0], [57.7, 626.0], [57.8, 626.0], [57.9, 626.0], [58.0, 627.0], [58.1, 627.0], [58.2, 627.0], [58.3, 627.0], [58.4, 627.0], [58.5, 627.0], [58.6, 628.0], [58.7, 628.0], [58.8, 628.0], [58.9, 628.0], [59.0, 628.0], [59.1, 628.0], [59.2, 629.0], [59.3, 629.0], [59.4, 629.0], [59.5, 629.0], [59.6, 629.0], [59.7, 629.0], [59.8, 629.0], [59.9, 630.0], [60.0, 630.0], [60.1, 630.0], [60.2, 630.0], [60.3, 630.0], [60.4, 630.0], [60.5, 631.0], [60.6, 631.0], [60.7, 631.0], [60.8, 631.0], [60.9, 631.0], [61.0, 631.0], [61.1, 632.0], [61.2, 632.0], [61.3, 632.0], [61.4, 632.0], [61.5, 632.0], [61.6, 632.0], [61.7, 633.0], [61.8, 633.0], [61.9, 633.0], [62.0, 633.0], [62.1, 633.0], [62.2, 633.0], [62.3, 634.0], [62.4, 634.0], [62.5, 634.0], [62.6, 634.0], [62.7, 634.0], [62.8, 635.0], [62.9, 635.0], [63.0, 635.0], [63.1, 635.0], [63.2, 635.0], [63.3, 635.0], [63.4, 636.0], [63.5, 636.0], [63.6, 636.0], [63.7, 636.0], [63.8, 636.0], [63.9, 636.0], [64.0, 637.0], [64.1, 637.0], [64.2, 637.0], [64.3, 637.0], [64.4, 637.0], [64.5, 637.0], [64.6, 638.0], [64.7, 638.0], [64.8, 638.0], [64.9, 638.0], [65.0, 638.0], [65.1, 638.0], [65.2, 639.0], [65.3, 639.0], [65.4, 639.0], [65.5, 639.0], [65.6, 639.0], [65.7, 639.0], [65.8, 640.0], [65.9, 640.0], [66.0, 640.0], [66.1, 640.0], [66.2, 640.0], [66.3, 641.0], [66.4, 641.0], [66.5, 641.0], [66.6, 641.0], [66.7, 641.0], [66.8, 641.0], [66.9, 642.0], [67.0, 642.0], [67.1, 642.0], [67.2, 642.0], [67.3, 642.0], [67.4, 643.0], [67.5, 643.0], [67.6, 643.0], [67.7, 643.0], [67.8, 643.0], [67.9, 643.0], [68.0, 644.0], [68.1, 644.0], [68.2, 644.0], [68.3, 644.0], [68.4, 644.0], [68.5, 645.0], [68.6, 645.0], [68.7, 645.0], [68.8, 645.0], [68.9, 645.0], [69.0, 646.0], [69.1, 646.0], [69.2, 646.0], [69.3, 646.0], [69.4, 646.0], [69.5, 647.0], [69.6, 647.0], [69.7, 647.0], [69.8, 647.0], [69.9, 647.0], [70.0, 648.0], [70.1, 648.0], [70.2, 648.0], [70.3, 648.0], [70.4, 648.0], [70.5, 649.0], [70.6, 649.0], [70.7, 649.0], [70.8, 649.0], [70.9, 649.0], [71.0, 649.0], [71.1, 650.0], [71.2, 650.0], [71.3, 650.0], [71.4, 650.0], [71.5, 650.0], [71.6, 651.0], [71.7, 651.0], [71.8, 651.0], [71.9, 651.0], [72.0, 651.0], [72.1, 652.0], [72.2, 652.0], [72.3, 652.0], [72.4, 652.0], [72.5, 652.0], [72.6, 653.0], [72.7, 653.0], [72.8, 653.0], [72.9, 653.0], [73.0, 653.0], [73.1, 654.0], [73.2, 654.0], [73.3, 654.0], [73.4, 654.0], [73.5, 654.0], [73.6, 655.0], [73.7, 655.0], [73.8, 655.0], [73.9, 655.0], [74.0, 656.0], [74.1, 656.0], [74.2, 656.0], [74.3, 656.0], [74.4, 656.0], [74.5, 657.0], [74.6, 657.0], [74.7, 657.0], [74.8, 657.0], [74.9, 657.0], [75.0, 658.0], [75.1, 658.0], [75.2, 658.0], [75.3, 658.0], [75.4, 659.0], [75.5, 659.0], [75.6, 659.0], [75.7, 659.0], [75.8, 659.0], [75.9, 660.0], [76.0, 660.0], [76.1, 660.0], [76.2, 660.0], [76.3, 660.0], [76.4, 661.0], [76.5, 661.0], [76.6, 661.0], [76.7, 661.0], [76.8, 662.0], [76.9, 662.0], [77.0, 662.0], [77.1, 662.0], [77.2, 662.0], [77.3, 663.0], [77.4, 663.0], [77.5, 663.0], [77.6, 663.0], [77.7, 664.0], [77.8, 664.0], [77.9, 664.0], [78.0, 664.0], [78.1, 664.0], [78.2, 665.0], [78.3, 665.0], [78.4, 665.0], [78.5, 665.0], [78.6, 666.0], [78.7, 666.0], [78.8, 666.0], [78.9, 666.0], [79.0, 666.0], [79.1, 667.0], [79.2, 667.0], [79.3, 667.0], [79.4, 667.0], [79.5, 668.0], [79.6, 668.0], [79.7, 668.0], [79.8, 668.0], [79.9, 669.0], [80.0, 669.0], [80.1, 669.0], [80.2, 669.0], [80.3, 669.0], [80.4, 670.0], [80.5, 670.0], [80.6, 670.0], [80.7, 670.0], [80.8, 671.0], [80.9, 671.0], [81.0, 671.0], [81.1, 671.0], [81.2, 672.0], [81.3, 672.0], [81.4, 672.0], [81.5, 672.0], [81.6, 673.0], [81.7, 673.0], [81.8, 673.0], [81.9, 673.0], [82.0, 674.0], [82.1, 674.0], [82.2, 674.0], [82.3, 674.0], [82.4, 675.0], [82.5, 675.0], [82.6, 675.0], [82.7, 676.0], [82.8, 676.0], [82.9, 676.0], [83.0, 676.0], [83.1, 677.0], [83.2, 677.0], [83.3, 677.0], [83.4, 677.0], [83.5, 678.0], [83.6, 678.0], [83.7, 678.0], [83.8, 679.0], [83.9, 679.0], [84.0, 679.0], [84.1, 679.0], [84.2, 680.0], [84.3, 680.0], [84.4, 680.0], [84.5, 681.0], [84.6, 681.0], [84.7, 681.0], [84.8, 681.0], [84.9, 682.0], [85.0, 682.0], [85.1, 682.0], [85.2, 683.0], [85.3, 683.0], [85.4, 683.0], [85.5, 683.0], [85.6, 684.0], [85.7, 684.0], [85.8, 684.0], [85.9, 685.0], [86.0, 685.0], [86.1, 685.0], [86.2, 685.0], [86.3, 686.0], [86.4, 686.0], [86.5, 686.0], [86.6, 687.0], [86.7, 687.0], [86.8, 687.0], [86.9, 688.0], [87.0, 688.0], [87.1, 688.0], [87.2, 688.0], [87.3, 689.0], [87.4, 689.0], [87.5, 689.0], [87.6, 690.0], [87.7, 690.0], [87.8, 690.0], [87.9, 691.0], [88.0, 691.0], [88.1, 691.0], [88.2, 692.0], [88.3, 692.0], [88.4, 692.0], [88.5, 693.0], [88.6, 693.0], [88.7, 693.0], [88.8, 694.0], [88.9, 694.0], [89.0, 694.0], [89.1, 695.0], [89.2, 695.0], [89.3, 696.0], [89.4, 696.0], [89.5, 696.0], [89.6, 697.0], [89.7, 697.0], [89.8, 697.0], [89.9, 698.0], [90.0, 698.0], [90.1, 699.0], [90.2, 699.0], [90.3, 699.0], [90.4, 700.0], [90.5, 700.0], [90.6, 700.0], [90.7, 701.0], [90.8, 701.0], [90.9, 702.0], [91.0, 702.0], [91.1, 703.0], [91.2, 703.0], [91.3, 703.0], [91.4, 704.0], [91.5, 704.0], [91.6, 705.0], [91.7, 705.0], [91.8, 706.0], [91.9, 706.0], [92.0, 707.0], [92.1, 707.0], [92.2, 708.0], [92.3, 708.0], [92.4, 708.0], [92.5, 709.0], [92.6, 709.0], [92.7, 710.0], [92.8, 710.0], [92.9, 711.0], [93.0, 712.0], [93.1, 712.0], [93.2, 713.0], [93.3, 713.0], [93.4, 714.0], [93.5, 714.0], [93.6, 715.0], [93.7, 715.0], [93.8, 716.0], [93.9, 716.0], [94.0, 717.0], [94.1, 718.0], [94.2, 718.0], [94.3, 719.0], [94.4, 720.0], [94.5, 720.0], [94.6, 721.0], [94.7, 722.0], [94.8, 722.0], [94.9, 723.0], [95.0, 724.0], [95.1, 724.0], [95.2, 725.0], [95.3, 726.0], [95.4, 726.0], [95.5, 727.0], [95.6, 728.0], [95.7, 729.0], [95.8, 730.0], [95.9, 730.0], [96.0, 731.0], [96.1, 732.0], [96.2, 733.0], [96.3, 734.0], [96.4, 735.0], [96.5, 736.0], [96.6, 737.0], [96.7, 738.0], [96.8, 739.0], [96.9, 740.0], [97.0, 742.0], [97.1, 743.0], [97.2, 744.0], [97.3, 745.0], [97.4, 747.0], [97.5, 748.0], [97.6, 750.0], [97.7, 752.0], [97.8, 754.0], [97.9, 756.0], [98.0, 757.0], [98.1, 759.0], [98.2, 762.0], [98.3, 764.0], [98.4, 767.0], [98.5, 770.0], [98.6, 773.0], [98.7, 776.0], [98.8, 781.0], [98.9, 784.0], [99.0, 789.0], [99.1, 795.0], [99.2, 802.0], [99.3, 811.0], [99.4, 824.0], [99.5, 847.0], [99.6, 883.0], [99.7, 936.0], [99.8, 998.0], [99.9, 1068.0]], "isOverall": false, "label": "extract", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 4.0, "minX": 100.0, "maxY": 52406.0, "series": [{"data": [[600.0, 52406.0], [700.0, 9047.0], [800.0, 480.0], [200.0, 1338.0], [900.0, 169.0], [1000.0, 129.0], [1100.0, 52.0], [1200.0, 17.0], [300.0, 1308.0], [1300.0, 4.0], [400.0, 3859.0], [100.0, 288.0], [500.0, 33303.0]], "isOverall": false, "label": "extract", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1300.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 6820.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 95580.0, "series": [{"data": [[0.0, 6820.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 95580.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 1.2999999999999998, "minX": 1.66608852E12, "maxY": 128.0, "series": [{"data": [[1.66608882E12, 128.0], [1.66608864E12, 128.0], [1.6660887E12, 128.0], [1.66608852E12, 127.9810088119115], [1.666089E12, 88.39147774978996], [1.66608906E12, 1.2999999999999998], [1.66608888E12, 128.0], [1.66608858E12, 128.0], [1.66608894E12, 125.62881370022482], [1.66608876E12, 128.0]], "isOverall": false, "label": "128", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66608906E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 182.5, "minX": 1.0, "maxY": 655.0, "series": [{"data": [[2.0, 205.84], [3.0, 206.0], [4.0, 192.47619047619045], [5.0, 196.0], [6.0, 182.5], [7.0, 189.6842105263158], [8.0, 188.94117647058823], [9.0, 192.61702127659572], [10.0, 186.76190476190476], [11.0, 194.8358208955224], [12.0, 199.98461538461535], [13.0, 188.66666666666666], [14.0, 205.14285714285714], [15.0, 209.0], [16.0, 210.3846153846154], [17.0, 217.2], [18.0, 206.24999999999997], [19.0, 212.04878048780486], [20.0, 216.0], [21.0, 217.74999999999997], [22.0, 221.7], [23.0, 226.26666666666668], [24.0, 227.01724137931038], [25.0, 231.49230769230772], [26.0, 232.9], [27.0, 238.92307692307696], [28.0, 229.8], [29.0, 253.0], [30.0, 251.66666666666663], [31.0, 251.23529411764704], [33.0, 253.04347826086956], [32.0, 258.9512195121951], [35.0, 266.39130434782606], [34.0, 250.3636363636364], [37.0, 265.33333333333337], [36.0, 272.50000000000006], [39.0, 273.875], [38.0, 268.8947368421052], [41.0, 281.46808510638306], [40.0, 260.66666666666663], [43.0, 274.87500000000006], [42.0, 281.0000000000001], [45.0, 278.8709677419355], [44.0, 267.8888888888889], [47.0, 279.09090909090895], [46.0, 283.0483870967742], [49.0, 293.8], [48.0, 291.31428571428575], [51.0, 295.6973684210527], [50.0, 335.3333333333333], [53.0, 310.35897435897436], [52.0, 285.2448979591836], [55.0, 317.0816326530612], [54.0, 298.8349514563107], [57.0, 320.8095238095237], [56.0, 298.61111111111114], [59.0, 331.4264705882353], [58.0, 310.7500000000001], [61.0, 359.63636363636357], [60.0, 335.8245614035088], [63.0, 361.3], [62.0, 339.61290322580646], [67.0, 363.5], [66.0, 361.6941176470589], [65.0, 356.79555555555544], [64.0, 344.1145833333335], [71.0, 388.2], [70.0, 375.1666666666667], [69.0, 388.3076923076922], [68.0, 382.45762711864404], [75.0, 435.3333333333333], [74.0, 414.7619047619047], [73.0, 403.57142857142856], [72.0, 397.3790322580645], [79.0, 430.4959999999999], [78.0, 419.2947976878613], [77.0, 428.25], [76.0, 430.3076923076923], [83.0, 445.9726027397261], [82.0, 438.7276422764228], [81.0, 443.88888888888897], [80.0, 432.4782608695652], [87.0, 485.0], [86.0, 452.39215686274514], [85.0, 449.86170212765967], [84.0, 455.1612903225807], [91.0, 473.9276018099548], [90.0, 472.3039215686274], [89.0, 467.01398601398625], [88.0, 466.93846153846147], [95.0, 493.05555555555554], [94.0, 503.73529411764696], [93.0, 494.9740259740259], [92.0, 468.875], [97.0, 515.6727272727273], [99.0, 508.53488372093017], [98.0, 511.0168067226893], [96.0, 498.3333333333333], [103.0, 557.8620689655172], [102.0, 550.1111111111112], [101.0, 538.6268656716416], [100.0, 519.3394495412842], [106.0, 547.6541353383457], [107.0, 553.8039215686276], [105.0, 546.5294117647056], [104.0, 553.3770491803278], [111.0, 583.0000000000002], [110.0, 563.2500000000007], [109.0, 558.0071942446045], [108.0, 521.2727272727273], [114.0, 655.0], [115.0, 599.9685039370081], [113.0, 595.1547619047622], [112.0, 593.25], [119.0, 619.0806451612905], [118.0, 608.8072289156627], [117.0, 599.8000000000002], [116.0, 591.4761904761905], [120.0, 615.4654654654663], [122.0, 626.4493996569464], [123.0, 620.4167916041989], [121.0, 609.8630778232879], [124.0, 625.6143312101924], [125.0, 644.5846153846152], [126.0, 631.1728971962617], [127.0, 637.913043478261], [128.0, 624.2415854997402], [1.0, 206.71428571428572]], "isOverall": false, "label": "extract", "isController": false}, {"data": [[124.02241210937498, 610.401621093751]], "isOverall": false, "label": "extract-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 128.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 0.0, "minX": 1.66608852E12, "maxY": 2.64458673E7, "series": [{"data": [[1.66608882E12, 2.60424114E7], [1.66608864E12, 2.64458673E7], [1.6660887E12, 2.6323032066666666E7], [1.66608852E12, 1.3777508966666667E7], [1.666089E12, 2.087368835E7], [1.66608906E12, 26496.333333333332], [1.66608888E12, 2.6093115E7], [1.66608858E12, 2.63357118E7], [1.66608894E12, 2.57318219E7], [1.66608876E12, 2.539549355E7]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.66608882E12, 0.0], [1.66608864E12, 0.0], [1.6660887E12, 0.0], [1.66608852E12, 0.0], [1.666089E12, 0.0], [1.66608906E12, 0.0], [1.66608888E12, 0.0], [1.66608858E12, 0.0], [1.66608894E12, 0.0], [1.66608876E12, 0.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66608906E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 206.99999999999997, "minX": 1.66608852E12, "maxY": 664.1118201154673, "series": [{"data": [[1.66608882E12, 626.3745003670772], [1.66608864E12, 607.492679066091], [1.6660887E12, 612.0928787637392], [1.66608852E12, 664.1118201154673], [1.666089E12, 474.58144416456673], [1.66608906E12, 206.99999999999997], [1.66608888E12, 624.8309607093478], [1.66608858E12, 610.4445592560216], [1.66608894E12, 626.3984537368003], [1.66608876E12, 643.4281163551008]], "isOverall": false, "label": "extract", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66608906E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 204.6, "minX": 1.66608852E12, "maxY": 661.311759343664, "series": [{"data": [[1.66608882E12, 624.0832041765208], [1.66608864E12, 605.2108428967188], [1.6660887E12, 609.8159949020234], [1.66608852E12, 661.311759343664], [1.666089E12, 472.2335222502112], [1.66608906E12, 204.6], [1.66608888E12, 622.5132189050681], [1.66608858E12, 608.112153246959], [1.66608894E12, 624.0435613932993], [1.66608876E12, 641.1135049040175]], "isOverall": false, "label": "extract", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66608906E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.0, "minX": 1.66608852E12, "maxY": 4.9E-324, "series": [{"data": [[1.66608882E12, 0.0], [1.66608864E12, 0.0], [1.6660887E12, 0.0], [1.66608852E12, 0.0], [1.666089E12, 0.0], [1.66608906E12, 0.0], [1.66608888E12, 0.0], [1.66608858E12, 0.0], [1.66608894E12, 0.0], [1.66608876E12, 0.0]], "isOverall": false, "label": "extract", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66608906E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 145.0, "minX": 1.66608852E12, "maxY": 1352.0, "series": [{"data": [[1.66608882E12, 885.0], [1.66608864E12, 904.0], [1.6660887E12, 848.0], [1.66608852E12, 1352.0], [1.666089E12, 803.0], [1.66608906E12, 230.0], [1.66608888E12, 883.0], [1.66608858E12, 961.0], [1.66608894E12, 900.0], [1.66608876E12, 923.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.66608882E12, 376.0], [1.66608864E12, 381.0], [1.6660887E12, 377.0], [1.66608852E12, 384.0], [1.666089E12, 145.0], [1.66608906E12, 181.0], [1.66608888E12, 381.0], [1.66608858E12, 391.0], [1.66608894E12, 373.0], [1.66608876E12, 393.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.66608882E12, 707.0], [1.66608864E12, 678.0], [1.6660887E12, 683.0], [1.66608852E12, 787.0], [1.666089E12, 644.0], [1.66608906E12, 229.6], [1.66608888E12, 703.0], [1.66608858E12, 682.0], [1.66608894E12, 701.0], [1.66608876E12, 718.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.66608882E12, 775.0], [1.66608864E12, 743.0], [1.6660887E12, 753.0], [1.66608852E12, 1106.3400000000001], [1.666089E12, 718.0], [1.66608906E12, 230.0], [1.66608888E12, 771.0], [1.66608858E12, 754.0], [1.66608894E12, 766.0], [1.66608876E12, 785.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.66608882E12, 729.0], [1.66608864E12, 700.0], [1.6660887E12, 706.0], [1.66608852E12, 925.0], [1.666089E12, 672.0], [1.66608906E12, 230.0], [1.66608888E12, 725.0], [1.66608858E12, 705.0], [1.66608894E12, 721.0], [1.66608876E12, 739.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66608906E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 183.0, "minX": 4.0, "maxY": 1064.5, "series": [{"data": [[4.0, 202.0], [6.0, 216.5], [10.0, 210.0], [12.0, 827.0], [19.0, 187.0], [31.0, 183.0], [43.0, 193.0], [42.0, 185.5], [53.0, 189.0], [57.0, 194.0], [59.0, 199.0], [76.0, 207.5], [96.0, 216.0], [102.0, 224.5], [111.0, 233.0], [113.0, 938.0], [124.0, 1064.5], [126.0, 254.0], [132.0, 992.5], [144.0, 273.0], [165.0, 854.0], [162.0, 283.0], [174.0, 746.0], [175.0, 296.0], [168.0, 289.5], [178.0, 712.5], [181.0, 440.5], [182.0, 396.5], [183.0, 352.0], [187.0, 696.0], [189.0, 610.0], [191.0, 621.0], [190.0, 656.0], [188.0, 431.5], [185.0, 444.0], [184.0, 303.0], [192.0, 648.0], [199.0, 628.0], [194.0, 624.0], [198.0, 630.0], [196.0, 635.0], [195.0, 620.0], [197.0, 621.0], [193.0, 583.0], [200.0, 630.0], [204.0, 621.0], [206.0, 617.0], [205.0, 618.0], [203.0, 623.0], [202.0, 622.0], [207.0, 615.0], [201.0, 626.0], [208.0, 613.0], [211.0, 606.0], [209.0, 610.0], [210.0, 613.0], [213.0, 604.0], [215.0, 601.0], [214.0, 603.0], [212.0, 604.0], [218.0, 603.0], [216.0, 603.0], [217.0, 601.0], [219.0, 591.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 219.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 181.0, "minX": 4.0, "maxY": 1056.0, "series": [{"data": [[4.0, 198.0], [6.0, 214.5], [10.0, 208.0], [12.0, 807.5], [19.0, 185.0], [31.0, 181.0], [43.0, 190.0], [42.0, 183.0], [53.0, 188.0], [57.0, 192.0], [59.0, 197.0], [76.0, 205.0], [96.0, 213.5], [102.0, 222.0], [111.0, 230.0], [113.0, 927.0], [124.0, 1056.0], [126.0, 251.5], [132.0, 989.0], [144.0, 271.0], [165.0, 852.0], [162.0, 281.0], [174.0, 743.0], [175.0, 294.0], [168.0, 287.0], [178.0, 710.0], [181.0, 438.0], [182.0, 394.5], [183.0, 350.0], [187.0, 693.0], [189.0, 608.0], [191.0, 619.0], [190.0, 654.0], [188.0, 429.0], [185.0, 441.0], [184.0, 301.0], [192.0, 646.0], [199.0, 625.5], [194.0, 622.0], [198.0, 627.0], [196.0, 632.0], [195.0, 618.0], [197.0, 619.0], [193.0, 581.0], [200.0, 628.0], [204.0, 619.0], [206.0, 614.0], [205.0, 616.0], [203.0, 620.0], [202.0, 620.0], [207.0, 613.0], [201.0, 624.0], [208.0, 611.0], [211.0, 604.0], [209.0, 607.0], [210.0, 611.0], [213.0, 601.0], [215.0, 598.0], [214.0, 601.0], [212.0, 602.0], [218.0, 600.5], [216.0, 601.0], [217.0, 598.0], [219.0, 589.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 219.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 0.13333333333333333, "minX": 1.66608852E12, "maxY": 210.58333333333334, "series": [{"data": [[1.66608882E12, 204.31666666666666], [1.66608864E12, 210.58333333333334], [1.6660887E12, 209.23333333333332], [1.66608852E12, 111.83333333333333], [1.666089E12, 156.78333333333333], [1.66608906E12, 0.13333333333333333], [1.66608888E12, 204.86666666666667], [1.66608858E12, 209.68333333333334], [1.66608894E12, 200.41666666666666], [1.66608876E12, 198.81666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66608906E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.16666666666666666, "minX": 1.66608852E12, "maxY": 210.58333333333334, "series": [{"data": [[1.66608882E12, 204.31666666666666], [1.66608864E12, 210.58333333333334], [1.6660887E12, 209.23333333333332], [1.66608852E12, 109.7], [1.666089E12, 158.8], [1.66608906E12, 0.16666666666666666], [1.66608888E12, 204.88333333333333], [1.66608858E12, 209.68333333333334], [1.66608894E12, 200.48333333333332], [1.66608876E12, 198.81666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66608906E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.16666666666666666, "minX": 1.66608852E12, "maxY": 210.58333333333334, "series": [{"data": [[1.66608882E12, 204.31666666666666], [1.66608864E12, 210.58333333333334], [1.6660887E12, 209.23333333333332], [1.66608852E12, 109.7], [1.666089E12, 158.8], [1.66608906E12, 0.16666666666666666], [1.66608888E12, 204.88333333333333], [1.66608858E12, 209.68333333333334], [1.66608894E12, 200.48333333333332], [1.66608876E12, 198.81666666666666]], "isOverall": false, "label": "extract-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66608906E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.16666666666666666, "minX": 1.66608852E12, "maxY": 210.58333333333334, "series": [{"data": [[1.66608882E12, 204.31666666666666], [1.66608864E12, 210.58333333333334], [1.6660887E12, 209.23333333333332], [1.66608852E12, 109.7], [1.666089E12, 158.8], [1.66608906E12, 0.16666666666666666], [1.66608888E12, 204.88333333333333], [1.66608858E12, 209.68333333333334], [1.66608894E12, 200.48333333333332], [1.66608876E12, 198.81666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66608906E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

