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
        data: {"result": {"minY": 136.0, "minX": 0.0, "maxY": 836.0, "series": [{"data": [[0.0, 136.0], [0.1, 156.0], [0.2, 162.0], [0.3, 166.0], [0.4, 170.0], [0.5, 173.0], [0.6, 176.0], [0.7, 179.0], [0.8, 183.0], [0.9, 186.0], [1.0, 189.0], [1.1, 193.0], [1.2, 196.0], [1.3, 198.0], [1.4, 201.0], [1.5, 203.0], [1.6, 206.0], [1.7, 208.0], [1.8, 212.0], [1.9, 215.0], [2.0, 218.0], [2.1, 220.0], [2.2, 223.0], [2.3, 225.0], [2.4, 227.0], [2.5, 230.0], [2.6, 233.0], [2.7, 235.0], [2.8, 237.0], [2.9, 239.0], [3.0, 242.0], [3.1, 243.0], [3.2, 245.0], [3.3, 247.0], [3.4, 249.0], [3.5, 251.0], [3.6, 253.0], [3.7, 255.0], [3.8, 257.0], [3.9, 259.0], [4.0, 261.0], [4.1, 262.0], [4.2, 265.0], [4.3, 267.0], [4.4, 270.0], [4.5, 272.0], [4.6, 275.0], [4.7, 278.0], [4.8, 280.0], [4.9, 283.0], [5.0, 285.0], [5.1, 288.0], [5.2, 291.0], [5.3, 293.0], [5.4, 296.0], [5.5, 298.0], [5.6, 301.0], [5.7, 303.0], [5.8, 305.0], [5.9, 308.0], [6.0, 310.0], [6.1, 312.0], [6.2, 314.0], [6.3, 316.0], [6.4, 317.0], [6.5, 318.0], [6.6, 320.0], [6.7, 321.0], [6.8, 322.0], [6.9, 323.0], [7.0, 324.0], [7.1, 325.0], [7.2, 326.0], [7.3, 327.0], [7.4, 328.0], [7.5, 328.0], [7.6, 329.0], [7.7, 329.0], [7.8, 330.0], [7.9, 331.0], [8.0, 331.0], [8.1, 332.0], [8.2, 332.0], [8.3, 333.0], [8.4, 333.0], [8.5, 334.0], [8.6, 334.0], [8.7, 335.0], [8.8, 335.0], [8.9, 336.0], [9.0, 336.0], [9.1, 337.0], [9.2, 337.0], [9.3, 337.0], [9.4, 338.0], [9.5, 338.0], [9.6, 338.0], [9.7, 339.0], [9.8, 339.0], [9.9, 339.0], [10.0, 340.0], [10.1, 340.0], [10.2, 340.0], [10.3, 341.0], [10.4, 341.0], [10.5, 341.0], [10.6, 341.0], [10.7, 342.0], [10.8, 342.0], [10.9, 342.0], [11.0, 343.0], [11.1, 343.0], [11.2, 343.0], [11.3, 343.0], [11.4, 344.0], [11.5, 344.0], [11.6, 344.0], [11.7, 344.0], [11.8, 345.0], [11.9, 345.0], [12.0, 345.0], [12.1, 345.0], [12.2, 346.0], [12.3, 346.0], [12.4, 346.0], [12.5, 346.0], [12.6, 347.0], [12.7, 347.0], [12.8, 347.0], [12.9, 347.0], [13.0, 348.0], [13.1, 348.0], [13.2, 348.0], [13.3, 348.0], [13.4, 348.0], [13.5, 349.0], [13.6, 349.0], [13.7, 349.0], [13.8, 349.0], [13.9, 349.0], [14.0, 350.0], [14.1, 350.0], [14.2, 350.0], [14.3, 350.0], [14.4, 350.0], [14.5, 351.0], [14.6, 351.0], [14.7, 351.0], [14.8, 351.0], [14.9, 351.0], [15.0, 352.0], [15.1, 352.0], [15.2, 352.0], [15.3, 352.0], [15.4, 352.0], [15.5, 352.0], [15.6, 353.0], [15.7, 353.0], [15.8, 353.0], [15.9, 353.0], [16.0, 353.0], [16.1, 354.0], [16.2, 354.0], [16.3, 354.0], [16.4, 354.0], [16.5, 354.0], [16.6, 354.0], [16.7, 355.0], [16.8, 355.0], [16.9, 355.0], [17.0, 355.0], [17.1, 355.0], [17.2, 355.0], [17.3, 356.0], [17.4, 356.0], [17.5, 356.0], [17.6, 356.0], [17.7, 356.0], [17.8, 356.0], [17.9, 357.0], [18.0, 357.0], [18.1, 357.0], [18.2, 357.0], [18.3, 357.0], [18.4, 357.0], [18.5, 358.0], [18.6, 358.0], [18.7, 358.0], [18.8, 358.0], [18.9, 358.0], [19.0, 358.0], [19.1, 359.0], [19.2, 359.0], [19.3, 359.0], [19.4, 359.0], [19.5, 359.0], [19.6, 359.0], [19.7, 359.0], [19.8, 360.0], [19.9, 360.0], [20.0, 360.0], [20.1, 360.0], [20.2, 360.0], [20.3, 360.0], [20.4, 361.0], [20.5, 361.0], [20.6, 361.0], [20.7, 361.0], [20.8, 361.0], [20.9, 361.0], [21.0, 361.0], [21.1, 362.0], [21.2, 362.0], [21.3, 362.0], [21.4, 362.0], [21.5, 362.0], [21.6, 362.0], [21.7, 362.0], [21.8, 363.0], [21.9, 363.0], [22.0, 363.0], [22.1, 363.0], [22.2, 363.0], [22.3, 363.0], [22.4, 364.0], [22.5, 364.0], [22.6, 364.0], [22.7, 364.0], [22.8, 364.0], [22.9, 364.0], [23.0, 364.0], [23.1, 364.0], [23.2, 365.0], [23.3, 365.0], [23.4, 365.0], [23.5, 365.0], [23.6, 365.0], [23.7, 365.0], [23.8, 366.0], [23.9, 366.0], [24.0, 366.0], [24.1, 366.0], [24.2, 366.0], [24.3, 366.0], [24.4, 366.0], [24.5, 367.0], [24.6, 367.0], [24.7, 367.0], [24.8, 367.0], [24.9, 367.0], [25.0, 367.0], [25.1, 367.0], [25.2, 368.0], [25.3, 368.0], [25.4, 368.0], [25.5, 368.0], [25.6, 368.0], [25.7, 368.0], [25.8, 368.0], [25.9, 369.0], [26.0, 369.0], [26.1, 369.0], [26.2, 369.0], [26.3, 369.0], [26.4, 369.0], [26.5, 369.0], [26.6, 370.0], [26.7, 370.0], [26.8, 370.0], [26.9, 370.0], [27.0, 370.0], [27.1, 370.0], [27.2, 370.0], [27.3, 371.0], [27.4, 371.0], [27.5, 371.0], [27.6, 371.0], [27.7, 371.0], [27.8, 371.0], [27.9, 371.0], [28.0, 372.0], [28.1, 372.0], [28.2, 372.0], [28.3, 372.0], [28.4, 372.0], [28.5, 372.0], [28.6, 372.0], [28.7, 373.0], [28.8, 373.0], [28.9, 373.0], [29.0, 373.0], [29.1, 373.0], [29.2, 373.0], [29.3, 373.0], [29.4, 373.0], [29.5, 374.0], [29.6, 374.0], [29.7, 374.0], [29.8, 374.0], [29.9, 374.0], [30.0, 374.0], [30.1, 374.0], [30.2, 374.0], [30.3, 374.0], [30.4, 375.0], [30.5, 375.0], [30.6, 375.0], [30.7, 375.0], [30.8, 375.0], [30.9, 375.0], [31.0, 375.0], [31.1, 376.0], [31.2, 376.0], [31.3, 376.0], [31.4, 376.0], [31.5, 376.0], [31.6, 376.0], [31.7, 376.0], [31.8, 376.0], [31.9, 377.0], [32.0, 377.0], [32.1, 377.0], [32.2, 377.0], [32.3, 377.0], [32.4, 377.0], [32.5, 377.0], [32.6, 377.0], [32.7, 377.0], [32.8, 378.0], [32.9, 378.0], [33.0, 378.0], [33.1, 378.0], [33.2, 378.0], [33.3, 378.0], [33.4, 378.0], [33.5, 379.0], [33.6, 379.0], [33.7, 379.0], [33.8, 379.0], [33.9, 379.0], [34.0, 379.0], [34.1, 379.0], [34.2, 379.0], [34.3, 380.0], [34.4, 380.0], [34.5, 380.0], [34.6, 380.0], [34.7, 380.0], [34.8, 380.0], [34.9, 380.0], [35.0, 380.0], [35.1, 381.0], [35.2, 381.0], [35.3, 381.0], [35.4, 381.0], [35.5, 381.0], [35.6, 381.0], [35.7, 381.0], [35.8, 381.0], [35.9, 381.0], [36.0, 382.0], [36.1, 382.0], [36.2, 382.0], [36.3, 382.0], [36.4, 382.0], [36.5, 382.0], [36.6, 382.0], [36.7, 382.0], [36.8, 383.0], [36.9, 383.0], [37.0, 383.0], [37.1, 383.0], [37.2, 383.0], [37.3, 383.0], [37.4, 383.0], [37.5, 383.0], [37.6, 383.0], [37.7, 384.0], [37.8, 384.0], [37.9, 384.0], [38.0, 384.0], [38.1, 384.0], [38.2, 384.0], [38.3, 384.0], [38.4, 384.0], [38.5, 384.0], [38.6, 385.0], [38.7, 385.0], [38.8, 385.0], [38.9, 385.0], [39.0, 385.0], [39.1, 385.0], [39.2, 385.0], [39.3, 385.0], [39.4, 385.0], [39.5, 386.0], [39.6, 386.0], [39.7, 386.0], [39.8, 386.0], [39.9, 386.0], [40.0, 386.0], [40.1, 386.0], [40.2, 386.0], [40.3, 387.0], [40.4, 387.0], [40.5, 387.0], [40.6, 387.0], [40.7, 387.0], [40.8, 387.0], [40.9, 387.0], [41.0, 387.0], [41.1, 387.0], [41.2, 388.0], [41.3, 388.0], [41.4, 388.0], [41.5, 388.0], [41.6, 388.0], [41.7, 388.0], [41.8, 388.0], [41.9, 388.0], [42.0, 388.0], [42.1, 389.0], [42.2, 389.0], [42.3, 389.0], [42.4, 389.0], [42.5, 389.0], [42.6, 389.0], [42.7, 389.0], [42.8, 389.0], [42.9, 389.0], [43.0, 389.0], [43.1, 390.0], [43.2, 390.0], [43.3, 390.0], [43.4, 390.0], [43.5, 390.0], [43.6, 390.0], [43.7, 390.0], [43.8, 390.0], [43.9, 390.0], [44.0, 391.0], [44.1, 391.0], [44.2, 391.0], [44.3, 391.0], [44.4, 391.0], [44.5, 391.0], [44.6, 391.0], [44.7, 391.0], [44.8, 391.0], [44.9, 391.0], [45.0, 392.0], [45.1, 392.0], [45.2, 392.0], [45.3, 392.0], [45.4, 392.0], [45.5, 392.0], [45.6, 392.0], [45.7, 392.0], [45.8, 392.0], [45.9, 393.0], [46.0, 393.0], [46.1, 393.0], [46.2, 393.0], [46.3, 393.0], [46.4, 393.0], [46.5, 393.0], [46.6, 393.0], [46.7, 393.0], [46.8, 393.0], [46.9, 394.0], [47.0, 394.0], [47.1, 394.0], [47.2, 394.0], [47.3, 394.0], [47.4, 394.0], [47.5, 394.0], [47.6, 394.0], [47.7, 394.0], [47.8, 394.0], [47.9, 395.0], [48.0, 395.0], [48.1, 395.0], [48.2, 395.0], [48.3, 395.0], [48.4, 395.0], [48.5, 395.0], [48.6, 395.0], [48.7, 395.0], [48.8, 395.0], [48.9, 396.0], [49.0, 396.0], [49.1, 396.0], [49.2, 396.0], [49.3, 396.0], [49.4, 396.0], [49.5, 396.0], [49.6, 396.0], [49.7, 396.0], [49.8, 397.0], [49.9, 397.0], [50.0, 397.0], [50.1, 397.0], [50.2, 397.0], [50.3, 397.0], [50.4, 397.0], [50.5, 397.0], [50.6, 397.0], [50.7, 397.0], [50.8, 397.0], [50.9, 398.0], [51.0, 398.0], [51.1, 398.0], [51.2, 398.0], [51.3, 398.0], [51.4, 398.0], [51.5, 398.0], [51.6, 398.0], [51.7, 398.0], [51.8, 398.0], [51.9, 399.0], [52.0, 399.0], [52.1, 399.0], [52.2, 399.0], [52.3, 399.0], [52.4, 399.0], [52.5, 399.0], [52.6, 399.0], [52.7, 399.0], [52.8, 400.0], [52.9, 400.0], [53.0, 400.0], [53.1, 400.0], [53.2, 400.0], [53.3, 400.0], [53.4, 400.0], [53.5, 400.0], [53.6, 400.0], [53.7, 401.0], [53.8, 401.0], [53.9, 401.0], [54.0, 401.0], [54.1, 401.0], [54.2, 401.0], [54.3, 401.0], [54.4, 401.0], [54.5, 401.0], [54.6, 401.0], [54.7, 402.0], [54.8, 402.0], [54.9, 402.0], [55.0, 402.0], [55.1, 402.0], [55.2, 402.0], [55.3, 402.0], [55.4, 402.0], [55.5, 402.0], [55.6, 402.0], [55.7, 403.0], [55.8, 403.0], [55.9, 403.0], [56.0, 403.0], [56.1, 403.0], [56.2, 403.0], [56.3, 403.0], [56.4, 403.0], [56.5, 403.0], [56.6, 404.0], [56.7, 404.0], [56.8, 404.0], [56.9, 404.0], [57.0, 404.0], [57.1, 404.0], [57.2, 404.0], [57.3, 404.0], [57.4, 404.0], [57.5, 404.0], [57.6, 405.0], [57.7, 405.0], [57.8, 405.0], [57.9, 405.0], [58.0, 405.0], [58.1, 405.0], [58.2, 405.0], [58.3, 405.0], [58.4, 405.0], [58.5, 405.0], [58.6, 406.0], [58.7, 406.0], [58.8, 406.0], [58.9, 406.0], [59.0, 406.0], [59.1, 406.0], [59.2, 406.0], [59.3, 406.0], [59.4, 406.0], [59.5, 407.0], [59.6, 407.0], [59.7, 407.0], [59.8, 407.0], [59.9, 407.0], [60.0, 407.0], [60.1, 407.0], [60.2, 407.0], [60.3, 407.0], [60.4, 407.0], [60.5, 408.0], [60.6, 408.0], [60.7, 408.0], [60.8, 408.0], [60.9, 408.0], [61.0, 408.0], [61.1, 408.0], [61.2, 408.0], [61.3, 408.0], [61.4, 409.0], [61.5, 409.0], [61.6, 409.0], [61.7, 409.0], [61.8, 409.0], [61.9, 409.0], [62.0, 409.0], [62.1, 409.0], [62.2, 409.0], [62.3, 410.0], [62.4, 410.0], [62.5, 410.0], [62.6, 410.0], [62.7, 410.0], [62.8, 410.0], [62.9, 410.0], [63.0, 410.0], [63.1, 410.0], [63.2, 411.0], [63.3, 411.0], [63.4, 411.0], [63.5, 411.0], [63.6, 411.0], [63.7, 411.0], [63.8, 411.0], [63.9, 411.0], [64.0, 412.0], [64.1, 412.0], [64.2, 412.0], [64.3, 412.0], [64.4, 412.0], [64.5, 412.0], [64.6, 412.0], [64.7, 412.0], [64.8, 413.0], [64.9, 413.0], [65.0, 413.0], [65.1, 413.0], [65.2, 413.0], [65.3, 413.0], [65.4, 413.0], [65.5, 413.0], [65.6, 413.0], [65.7, 413.0], [65.8, 414.0], [65.9, 414.0], [66.0, 414.0], [66.1, 414.0], [66.2, 414.0], [66.3, 414.0], [66.4, 414.0], [66.5, 414.0], [66.6, 415.0], [66.7, 415.0], [66.8, 415.0], [66.9, 415.0], [67.0, 415.0], [67.1, 415.0], [67.2, 415.0], [67.3, 415.0], [67.4, 416.0], [67.5, 416.0], [67.6, 416.0], [67.7, 416.0], [67.8, 416.0], [67.9, 416.0], [68.0, 416.0], [68.1, 416.0], [68.2, 417.0], [68.3, 417.0], [68.4, 417.0], [68.5, 417.0], [68.6, 417.0], [68.7, 417.0], [68.8, 417.0], [68.9, 418.0], [69.0, 418.0], [69.1, 418.0], [69.2, 418.0], [69.3, 418.0], [69.4, 418.0], [69.5, 418.0], [69.6, 418.0], [69.7, 419.0], [69.8, 419.0], [69.9, 419.0], [70.0, 419.0], [70.1, 419.0], [70.2, 419.0], [70.3, 419.0], [70.4, 420.0], [70.5, 420.0], [70.6, 420.0], [70.7, 420.0], [70.8, 420.0], [70.9, 420.0], [71.0, 420.0], [71.1, 421.0], [71.2, 421.0], [71.3, 421.0], [71.4, 421.0], [71.5, 421.0], [71.6, 421.0], [71.7, 421.0], [71.8, 422.0], [71.9, 422.0], [72.0, 422.0], [72.1, 422.0], [72.2, 422.0], [72.3, 422.0], [72.4, 422.0], [72.5, 423.0], [72.6, 423.0], [72.7, 423.0], [72.8, 423.0], [72.9, 423.0], [73.0, 423.0], [73.1, 424.0], [73.2, 424.0], [73.3, 424.0], [73.4, 424.0], [73.5, 424.0], [73.6, 424.0], [73.7, 424.0], [73.8, 425.0], [73.9, 425.0], [74.0, 425.0], [74.1, 425.0], [74.2, 425.0], [74.3, 425.0], [74.4, 426.0], [74.5, 426.0], [74.6, 426.0], [74.7, 426.0], [74.8, 426.0], [74.9, 426.0], [75.0, 426.0], [75.1, 427.0], [75.2, 427.0], [75.3, 427.0], [75.4, 427.0], [75.5, 427.0], [75.6, 427.0], [75.7, 428.0], [75.8, 428.0], [75.9, 428.0], [76.0, 428.0], [76.1, 428.0], [76.2, 428.0], [76.3, 429.0], [76.4, 429.0], [76.5, 429.0], [76.6, 429.0], [76.7, 429.0], [76.8, 429.0], [76.9, 430.0], [77.0, 430.0], [77.1, 430.0], [77.2, 430.0], [77.3, 430.0], [77.4, 430.0], [77.5, 431.0], [77.6, 431.0], [77.7, 431.0], [77.8, 431.0], [77.9, 431.0], [78.0, 431.0], [78.1, 432.0], [78.2, 432.0], [78.3, 432.0], [78.4, 432.0], [78.5, 432.0], [78.6, 432.0], [78.7, 433.0], [78.8, 433.0], [78.9, 433.0], [79.0, 433.0], [79.1, 433.0], [79.2, 434.0], [79.3, 434.0], [79.4, 434.0], [79.5, 434.0], [79.6, 434.0], [79.7, 435.0], [79.8, 435.0], [79.9, 435.0], [80.0, 435.0], [80.1, 435.0], [80.2, 435.0], [80.3, 436.0], [80.4, 436.0], [80.5, 436.0], [80.6, 436.0], [80.7, 436.0], [80.8, 437.0], [80.9, 437.0], [81.0, 437.0], [81.1, 437.0], [81.2, 438.0], [81.3, 438.0], [81.4, 438.0], [81.5, 438.0], [81.6, 438.0], [81.7, 438.0], [81.8, 439.0], [81.9, 439.0], [82.0, 439.0], [82.1, 439.0], [82.2, 439.0], [82.3, 440.0], [82.4, 440.0], [82.5, 440.0], [82.6, 440.0], [82.7, 440.0], [82.8, 441.0], [82.9, 441.0], [83.0, 441.0], [83.1, 441.0], [83.2, 441.0], [83.3, 442.0], [83.4, 442.0], [83.5, 442.0], [83.6, 442.0], [83.7, 443.0], [83.8, 443.0], [83.9, 443.0], [84.0, 443.0], [84.1, 443.0], [84.2, 444.0], [84.3, 444.0], [84.4, 444.0], [84.5, 444.0], [84.6, 444.0], [84.7, 445.0], [84.8, 445.0], [84.9, 445.0], [85.0, 445.0], [85.1, 446.0], [85.2, 446.0], [85.3, 446.0], [85.4, 446.0], [85.5, 447.0], [85.6, 447.0], [85.7, 447.0], [85.8, 447.0], [85.9, 447.0], [86.0, 448.0], [86.1, 448.0], [86.2, 448.0], [86.3, 448.0], [86.4, 448.0], [86.5, 449.0], [86.6, 449.0], [86.7, 449.0], [86.8, 449.0], [86.9, 450.0], [87.0, 450.0], [87.1, 450.0], [87.2, 450.0], [87.3, 451.0], [87.4, 451.0], [87.5, 451.0], [87.6, 451.0], [87.7, 452.0], [87.8, 452.0], [87.9, 452.0], [88.0, 452.0], [88.1, 453.0], [88.2, 453.0], [88.3, 453.0], [88.4, 453.0], [88.5, 454.0], [88.6, 454.0], [88.7, 454.0], [88.8, 454.0], [88.9, 455.0], [89.0, 455.0], [89.1, 455.0], [89.2, 455.0], [89.3, 456.0], [89.4, 456.0], [89.5, 456.0], [89.6, 457.0], [89.7, 457.0], [89.8, 457.0], [89.9, 457.0], [90.0, 457.0], [90.1, 458.0], [90.2, 458.0], [90.3, 458.0], [90.4, 459.0], [90.5, 459.0], [90.6, 459.0], [90.7, 459.0], [90.8, 460.0], [90.9, 460.0], [91.0, 460.0], [91.1, 460.0], [91.2, 461.0], [91.3, 461.0], [91.4, 461.0], [91.5, 461.0], [91.6, 462.0], [91.7, 462.0], [91.8, 462.0], [91.9, 463.0], [92.0, 463.0], [92.1, 463.0], [92.2, 463.0], [92.3, 464.0], [92.4, 464.0], [92.5, 464.0], [92.6, 465.0], [92.7, 465.0], [92.8, 465.0], [92.9, 466.0], [93.0, 466.0], [93.1, 466.0], [93.2, 467.0], [93.3, 467.0], [93.4, 467.0], [93.5, 468.0], [93.6, 468.0], [93.7, 468.0], [93.8, 468.0], [93.9, 469.0], [94.0, 469.0], [94.1, 469.0], [94.2, 470.0], [94.3, 470.0], [94.4, 471.0], [94.5, 471.0], [94.6, 471.0], [94.7, 472.0], [94.8, 472.0], [94.9, 472.0], [95.0, 473.0], [95.1, 473.0], [95.2, 473.0], [95.3, 474.0], [95.4, 474.0], [95.5, 474.0], [95.6, 475.0], [95.7, 475.0], [95.8, 476.0], [95.9, 476.0], [96.0, 477.0], [96.1, 477.0], [96.2, 478.0], [96.3, 478.0], [96.4, 479.0], [96.5, 479.0], [96.6, 480.0], [96.7, 480.0], [96.8, 481.0], [96.9, 481.0], [97.0, 482.0], [97.1, 482.0], [97.2, 483.0], [97.3, 484.0], [97.4, 484.0], [97.5, 485.0], [97.6, 486.0], [97.7, 486.0], [97.8, 487.0], [97.9, 488.0], [98.0, 489.0], [98.1, 489.0], [98.2, 490.0], [98.3, 491.0], [98.4, 492.0], [98.5, 493.0], [98.6, 495.0], [98.7, 496.0], [98.8, 497.0], [98.9, 499.0], [99.0, 500.0], [99.1, 502.0], [99.2, 504.0], [99.3, 506.0], [99.4, 509.0], [99.5, 513.0], [99.6, 519.0], [99.7, 526.0], [99.8, 556.0], [99.9, 609.0], [100.0, 836.0]], "isOverall": false, "label": "extract", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 2.0, "minX": 100.0, "maxY": 30216.0, "series": [{"data": [[300.0, 30216.0], [600.0, 60.0], [700.0, 12.0], [400.0, 29569.0], [800.0, 2.0], [200.0, 2683.0], [100.0, 872.0], [500.0, 586.0]], "isOverall": false, "label": "extract", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 800.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 617.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 63383.0, "series": [{"data": [[0.0, 63383.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 617.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 26.01791841402978, "minX": 1.66608708E12, "maxY": 64.0, "series": [{"data": [[1.6660872E12, 64.0], [1.66608738E12, 64.0], [1.66608708E12, 63.87641487641473], [1.66608726E12, 64.0], [1.66608744E12, 59.145709430756085], [1.66608714E12, 64.0], [1.66608732E12, 64.0], [1.6660875E12, 26.01791841402978]], "isOverall": false, "label": "64", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6660875E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 169.55555555555554, "minX": 1.0, "maxY": 403.9196371169407, "series": [{"data": [[2.0, 180.05], [3.0, 169.55555555555554], [4.0, 174.13636363636365], [5.0, 174.6153846153846], [6.0, 179.56666666666666], [7.0, 182.9322033898306], [8.0, 206.5], [9.0, 188.3529411764706], [10.0, 178.83333333333331], [11.0, 190.2134831460674], [12.0, 193.7], [13.0, 192.32876712328766], [14.0, 196.72727272727275], [15.0, 191.22222222222223], [16.0, 191.55555555555554], [17.0, 197.85714285714286], [18.0, 194.7560975609757], [19.0, 195.64754098360655], [20.0, 200.1090909090909], [21.0, 198.96186440677965], [22.0, 203.74999999999997], [23.0, 201.375], [24.0, 208.79999999999998], [25.0, 208.88815789473688], [26.0, 212.32432432432432], [27.0, 225.54545454545453], [28.0, 219.02499999999986], [29.0, 222.0], [30.0, 225.68292682926827], [31.0, 244.66666666666663], [32.0, 257.3333333333333], [33.0, 240.83333333333334], [35.0, 247.68656716417908], [34.0, 242.68531468531467], [37.0, 259.0686274509804], [36.0, 255.91176470588238], [39.0, 285.37837837837844], [38.0, 267.6168224299066], [40.0, 278.4947916666667], [41.0, 291.0923076923077], [42.0, 289.92500000000007], [43.0, 290.92746113989637], [44.0, 299.8602150537637], [45.0, 311.88157894736844], [46.0, 320.05769230769243], [47.0, 333.9259259259259], [48.0, 323.8505434782611], [49.0, 334.8953488372093], [50.0, 339.9935483870966], [51.0, 342.1679389312977], [52.0, 345.58520900321537], [53.0, 355.02197802197804], [55.0, 360.09090909090907], [54.0, 365.17647058823525], [56.0, 388.2727272727272], [57.0, 385.06521739130443], [58.0, 376.30681818181796], [59.0, 378.63040791100167], [61.0, 389.5526315789473], [60.0, 385.955294117647], [62.0, 395.61290322580635], [63.0, 397.40953545232253], [64.0, 403.9196371169407], [1.0, 187.66666666666663]], "isOverall": false, "label": "extract", "isController": false}, {"data": [[61.72078125000034, 393.050593749997]], "isOverall": false, "label": "extract-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 64.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 0.0, "minX": 1.66608708E12, "maxY": 2.0200341083333332E7, "series": [{"data": [[1.6660872E12, 2.0200341083333332E7], [1.66608738E12, 2.0073479383333333E7], [1.66608708E12, 9143853.783333333], [1.66608726E12, 1.980951885E7], [1.66608744E12, 1.96697502E7], [1.66608714E12, 2.0145572816666666E7], [1.66608732E12, 1.976326585E7], [1.6660875E12, 5706118.033333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6660872E12, 0.0], [1.66608738E12, 0.0], [1.66608708E12, 0.0], [1.66608726E12, 0.0], [1.66608744E12, 0.0], [1.66608714E12, 0.0], [1.66608732E12, 0.0], [1.6660875E12, 0.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6660875E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 224.861227601982, "minX": 1.66608708E12, "maxY": 422.0868560868554, "series": [{"data": [[1.6660872E12, 401.33751568381393], [1.66608738E12, 395.7052577319576], [1.66608708E12, 422.0868560868554], [1.66608726E12, 410.99240154109606], [1.66608744E12, 376.31138487680585], [1.66608714E12, 402.5386389850063], [1.66608732E12, 404.63876884157327], [1.6660875E12, 224.861227601982]], "isOverall": false, "label": "extract", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6660875E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 222.87457110179136, "minX": 1.66608708E12, "maxY": 419.72095172095095, "series": [{"data": [[1.6660872E12, 399.2868046842331], [1.66608738E12, 393.72597938144435], [1.66608708E12, 419.72095172095095], [1.66608726E12, 408.934396404109], [1.66608744E12, 374.29874681393255], [1.66608714E12, 400.4805494390254], [1.66608732E12, 402.63423632338976], [1.6660875E12, 222.87457110179136]], "isOverall": false, "label": "extract", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6660875E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.66608708E12, "maxY": 4.9E-324, "series": [{"data": [[1.6660872E12, 0.0], [1.66608738E12, 0.0], [1.66608708E12, 0.0], [1.66608726E12, 0.0], [1.66608744E12, 0.0], [1.66608714E12, 0.0], [1.66608732E12, 0.0], [1.6660875E12, 0.0]], "isOverall": false, "label": "extract", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6660875E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 136.0, "minX": 1.66608708E12, "maxY": 836.0, "series": [{"data": [[1.6660872E12, 529.0], [1.66608738E12, 543.0], [1.66608708E12, 836.0], [1.66608726E12, 538.0], [1.66608744E12, 535.0], [1.66608714E12, 524.0], [1.66608732E12, 565.0], [1.6660875E12, 406.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6660872E12, 305.0], [1.66608738E12, 215.0], [1.66608708E12, 303.0], [1.66608726E12, 308.0], [1.66608744E12, 194.0], [1.66608714E12, 296.0], [1.66608732E12, 203.0], [1.6660875E12, 136.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6660872E12, 453.0], [1.66608738E12, 455.0], [1.66608708E12, 484.0], [1.66608726E12, 463.0], [1.66608744E12, 443.0], [1.66608714E12, 454.0], [1.66608732E12, 467.0], [1.6660875E12, 289.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6660872E12, 487.0], [1.66608738E12, 493.0], [1.66608708E12, 643.0], [1.66608726E12, 497.0], [1.66608744E12, 489.0], [1.66608714E12, 491.0], [1.66608732E12, 504.1200000000008], [1.6660875E12, 352.7999999999988]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6660872E12, 467.0], [1.66608738E12, 470.0], [1.66608708E12, 513.0], [1.66608726E12, 476.0], [1.66608744E12, 460.0], [1.66608714E12, 468.0], [1.66608732E12, 481.0], [1.6660875E12, 311.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6660875E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 169.0, "minX": 4.0, "maxY": 609.5, "series": [{"data": [[4.0, 203.5], [6.0, 179.0], [12.0, 181.0], [13.0, 169.0], [23.0, 173.0], [30.0, 180.5], [38.0, 178.5], [39.0, 182.0], [44.0, 181.0], [57.0, 191.0], [56.0, 181.0], [62.0, 473.5], [67.0, 195.0], [78.0, 191.0], [91.0, 194.0], [97.0, 193.0], [96.0, 203.0], [105.0, 199.0], [108.0, 609.5], [120.0, 211.5], [122.0, 209.0], [130.0, 340.5], [134.0, 238.5], [138.0, 465.0], [141.0, 273.0], [140.0, 242.0], [149.0, 406.0], [146.0, 371.0], [151.0, 409.0], [150.0, 410.0], [147.0, 360.0], [148.0, 364.0], [144.0, 366.0], [145.0, 268.0], [156.0, 402.0], [153.0, 406.0], [154.0, 407.5], [157.0, 399.0], [158.0, 397.0], [155.0, 399.0], [159.0, 398.0], [152.0, 409.0], [160.0, 397.0], [161.0, 397.0], [163.0, 395.0], [164.0, 396.0], [162.0, 396.0], [165.0, 396.0], [166.0, 396.5], [169.0, 395.0], [168.0, 394.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 169.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 167.0, "minX": 4.0, "maxY": 605.5, "series": [{"data": [[4.0, 201.0], [6.0, 177.0], [12.0, 179.5], [13.0, 167.0], [23.0, 172.0], [30.0, 179.5], [38.0, 176.5], [39.0, 180.0], [44.0, 179.0], [57.0, 189.0], [56.0, 179.0], [62.0, 459.0], [67.0, 192.0], [78.0, 189.0], [91.0, 193.0], [97.0, 191.0], [96.0, 200.5], [105.0, 197.0], [108.0, 605.5], [120.0, 209.5], [122.0, 207.0], [130.0, 338.5], [134.0, 236.5], [138.0, 463.0], [141.0, 272.0], [140.0, 240.0], [149.0, 404.0], [146.0, 369.0], [151.0, 407.0], [150.0, 408.0], [147.0, 358.0], [148.0, 362.0], [144.0, 363.0], [145.0, 266.0], [156.0, 400.0], [153.0, 404.5], [154.0, 406.0], [157.0, 397.0], [158.0, 395.0], [155.0, 397.0], [159.0, 396.0], [152.0, 406.5], [160.0, 395.0], [161.0, 395.0], [163.0, 393.0], [164.0, 394.0], [162.0, 393.0], [165.0, 394.0], [166.0, 395.0], [169.0, 393.0], [168.0, 392.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 169.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 43.016666666666666, "minX": 1.66608708E12, "maxY": 161.66666666666666, "series": [{"data": [[1.6660872E12, 159.4], [1.66608738E12, 161.66666666666666], [1.66608708E12, 73.21666666666667], [1.66608726E12, 155.73333333333332], [1.66608744E12, 156.56666666666666], [1.66608714E12, 158.95], [1.66608732E12, 158.11666666666667], [1.6660875E12, 43.016666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6660875E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 43.71666666666667, "minX": 1.66608708E12, "maxY": 161.66666666666666, "series": [{"data": [[1.6660872E12, 159.4], [1.66608738E12, 161.66666666666666], [1.66608708E12, 72.15], [1.66608726E12, 155.73333333333332], [1.66608744E12, 156.93333333333334], [1.66608714E12, 158.95], [1.66608732E12, 158.11666666666667], [1.6660875E12, 43.71666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6660875E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 43.71666666666667, "minX": 1.66608708E12, "maxY": 161.66666666666666, "series": [{"data": [[1.6660872E12, 159.4], [1.66608738E12, 161.66666666666666], [1.66608708E12, 72.15], [1.66608726E12, 155.73333333333332], [1.66608744E12, 156.93333333333334], [1.66608714E12, 158.95], [1.66608732E12, 158.11666666666667], [1.6660875E12, 43.71666666666667]], "isOverall": false, "label": "extract-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6660875E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 43.71666666666667, "minX": 1.66608708E12, "maxY": 161.66666666666666, "series": [{"data": [[1.6660872E12, 159.4], [1.66608738E12, 161.66666666666666], [1.66608708E12, 72.15], [1.66608726E12, 155.73333333333332], [1.66608744E12, 156.93333333333334], [1.66608714E12, 158.95], [1.66608732E12, 158.11666666666667], [1.6660875E12, 43.71666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6660875E12, "title": "Total Transactions Per Second"}},
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

