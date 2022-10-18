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
        data: {"result": {"minY": 113.0, "minX": 0.0, "maxY": 870.0, "series": [{"data": [[0.0, 113.0], [0.1, 148.0], [0.2, 153.0], [0.3, 157.0], [0.4, 160.0], [0.5, 163.0], [0.6, 165.0], [0.7, 167.0], [0.8, 170.0], [0.9, 172.0], [1.0, 174.0], [1.1, 176.0], [1.2, 178.0], [1.3, 179.0], [1.4, 180.0], [1.5, 182.0], [1.6, 184.0], [1.7, 185.0], [1.8, 186.0], [1.9, 188.0], [2.0, 189.0], [2.1, 191.0], [2.2, 192.0], [2.3, 193.0], [2.4, 195.0], [2.5, 196.0], [2.6, 198.0], [2.7, 199.0], [2.8, 201.0], [2.9, 202.0], [3.0, 203.0], [3.1, 204.0], [3.2, 206.0], [3.3, 207.0], [3.4, 209.0], [3.5, 210.0], [3.6, 211.0], [3.7, 212.0], [3.8, 213.0], [3.9, 215.0], [4.0, 216.0], [4.1, 217.0], [4.2, 219.0], [4.3, 220.0], [4.4, 221.0], [4.5, 223.0], [4.6, 224.0], [4.7, 226.0], [4.8, 227.0], [4.9, 229.0], [5.0, 231.0], [5.1, 232.0], [5.2, 233.0], [5.3, 235.0], [5.4, 236.0], [5.5, 237.0], [5.6, 239.0], [5.7, 240.0], [5.8, 241.0], [5.9, 242.0], [6.0, 244.0], [6.1, 246.0], [6.2, 247.0], [6.3, 248.0], [6.4, 249.0], [6.5, 250.0], [6.6, 251.0], [6.7, 252.0], [6.8, 253.0], [6.9, 254.0], [7.0, 255.0], [7.1, 256.0], [7.2, 257.0], [7.3, 258.0], [7.4, 258.0], [7.5, 259.0], [7.6, 260.0], [7.7, 261.0], [7.8, 262.0], [7.9, 262.0], [8.0, 263.0], [8.1, 264.0], [8.2, 264.0], [8.3, 265.0], [8.4, 266.0], [8.5, 266.0], [8.6, 267.0], [8.7, 267.0], [8.8, 268.0], [8.9, 269.0], [9.0, 269.0], [9.1, 270.0], [9.2, 270.0], [9.3, 271.0], [9.4, 271.0], [9.5, 271.0], [9.6, 272.0], [9.7, 272.0], [9.8, 273.0], [9.9, 273.0], [10.0, 273.0], [10.1, 274.0], [10.2, 274.0], [10.3, 275.0], [10.4, 275.0], [10.5, 275.0], [10.6, 276.0], [10.7, 276.0], [10.8, 276.0], [10.9, 277.0], [11.0, 277.0], [11.1, 278.0], [11.2, 278.0], [11.3, 278.0], [11.4, 279.0], [11.5, 279.0], [11.6, 279.0], [11.7, 280.0], [11.8, 280.0], [11.9, 280.0], [12.0, 281.0], [12.1, 281.0], [12.2, 281.0], [12.3, 282.0], [12.4, 282.0], [12.5, 282.0], [12.6, 282.0], [12.7, 283.0], [12.8, 283.0], [12.9, 283.0], [13.0, 284.0], [13.1, 284.0], [13.2, 284.0], [13.3, 284.0], [13.4, 285.0], [13.5, 285.0], [13.6, 285.0], [13.7, 285.0], [13.8, 286.0], [13.9, 286.0], [14.0, 286.0], [14.1, 286.0], [14.2, 287.0], [14.3, 287.0], [14.4, 287.0], [14.5, 287.0], [14.6, 288.0], [14.7, 288.0], [14.8, 288.0], [14.9, 288.0], [15.0, 289.0], [15.1, 289.0], [15.2, 289.0], [15.3, 289.0], [15.4, 290.0], [15.5, 290.0], [15.6, 290.0], [15.7, 290.0], [15.8, 291.0], [15.9, 291.0], [16.0, 291.0], [16.1, 291.0], [16.2, 291.0], [16.3, 292.0], [16.4, 292.0], [16.5, 292.0], [16.6, 292.0], [16.7, 292.0], [16.8, 293.0], [16.9, 293.0], [17.0, 293.0], [17.1, 293.0], [17.2, 294.0], [17.3, 294.0], [17.4, 294.0], [17.5, 294.0], [17.6, 294.0], [17.7, 295.0], [17.8, 295.0], [17.9, 295.0], [18.0, 295.0], [18.1, 295.0], [18.2, 296.0], [18.3, 296.0], [18.4, 296.0], [18.5, 296.0], [18.6, 296.0], [18.7, 296.0], [18.8, 297.0], [18.9, 297.0], [19.0, 297.0], [19.1, 297.0], [19.2, 297.0], [19.3, 298.0], [19.4, 298.0], [19.5, 298.0], [19.6, 298.0], [19.7, 298.0], [19.8, 298.0], [19.9, 299.0], [20.0, 299.0], [20.1, 299.0], [20.2, 299.0], [20.3, 299.0], [20.4, 300.0], [20.5, 300.0], [20.6, 300.0], [20.7, 300.0], [20.8, 300.0], [20.9, 300.0], [21.0, 301.0], [21.1, 301.0], [21.2, 301.0], [21.3, 301.0], [21.4, 301.0], [21.5, 301.0], [21.6, 302.0], [21.7, 302.0], [21.8, 302.0], [21.9, 302.0], [22.0, 302.0], [22.1, 303.0], [22.2, 303.0], [22.3, 303.0], [22.4, 303.0], [22.5, 303.0], [22.6, 303.0], [22.7, 304.0], [22.8, 304.0], [22.9, 304.0], [23.0, 304.0], [23.1, 304.0], [23.2, 304.0], [23.3, 305.0], [23.4, 305.0], [23.5, 305.0], [23.6, 305.0], [23.7, 305.0], [23.8, 305.0], [23.9, 306.0], [24.0, 306.0], [24.1, 306.0], [24.2, 306.0], [24.3, 306.0], [24.4, 306.0], [24.5, 306.0], [24.6, 307.0], [24.7, 307.0], [24.8, 307.0], [24.9, 307.0], [25.0, 307.0], [25.1, 307.0], [25.2, 308.0], [25.3, 308.0], [25.4, 308.0], [25.5, 308.0], [25.6, 308.0], [25.7, 308.0], [25.8, 309.0], [25.9, 309.0], [26.0, 309.0], [26.1, 309.0], [26.2, 309.0], [26.3, 309.0], [26.4, 310.0], [26.5, 310.0], [26.6, 310.0], [26.7, 310.0], [26.8, 310.0], [26.9, 310.0], [27.0, 311.0], [27.1, 311.0], [27.2, 311.0], [27.3, 311.0], [27.4, 311.0], [27.5, 311.0], [27.6, 311.0], [27.7, 312.0], [27.8, 312.0], [27.9, 312.0], [28.0, 312.0], [28.1, 312.0], [28.2, 312.0], [28.3, 312.0], [28.4, 313.0], [28.5, 313.0], [28.6, 313.0], [28.7, 313.0], [28.8, 313.0], [28.9, 313.0], [29.0, 313.0], [29.1, 314.0], [29.2, 314.0], [29.3, 314.0], [29.4, 314.0], [29.5, 314.0], [29.6, 314.0], [29.7, 315.0], [29.8, 315.0], [29.9, 315.0], [30.0, 315.0], [30.1, 315.0], [30.2, 315.0], [30.3, 315.0], [30.4, 316.0], [30.5, 316.0], [30.6, 316.0], [30.7, 316.0], [30.8, 316.0], [30.9, 316.0], [31.0, 316.0], [31.1, 317.0], [31.2, 317.0], [31.3, 317.0], [31.4, 317.0], [31.5, 317.0], [31.6, 317.0], [31.7, 317.0], [31.8, 317.0], [31.9, 318.0], [32.0, 318.0], [32.1, 318.0], [32.2, 318.0], [32.3, 318.0], [32.4, 318.0], [32.5, 318.0], [32.6, 319.0], [32.7, 319.0], [32.8, 319.0], [32.9, 319.0], [33.0, 319.0], [33.1, 319.0], [33.2, 319.0], [33.3, 320.0], [33.4, 320.0], [33.5, 320.0], [33.6, 320.0], [33.7, 320.0], [33.8, 320.0], [33.9, 320.0], [34.0, 321.0], [34.1, 321.0], [34.2, 321.0], [34.3, 321.0], [34.4, 321.0], [34.5, 321.0], [34.6, 321.0], [34.7, 321.0], [34.8, 322.0], [34.9, 322.0], [35.0, 322.0], [35.1, 322.0], [35.2, 322.0], [35.3, 322.0], [35.4, 322.0], [35.5, 323.0], [35.6, 323.0], [35.7, 323.0], [35.8, 323.0], [35.9, 323.0], [36.0, 323.0], [36.1, 323.0], [36.2, 323.0], [36.3, 324.0], [36.4, 324.0], [36.5, 324.0], [36.6, 324.0], [36.7, 324.0], [36.8, 324.0], [36.9, 324.0], [37.0, 324.0], [37.1, 325.0], [37.2, 325.0], [37.3, 325.0], [37.4, 325.0], [37.5, 325.0], [37.6, 325.0], [37.7, 325.0], [37.8, 325.0], [37.9, 326.0], [38.0, 326.0], [38.1, 326.0], [38.2, 326.0], [38.3, 326.0], [38.4, 326.0], [38.5, 326.0], [38.6, 326.0], [38.7, 327.0], [38.8, 327.0], [38.9, 327.0], [39.0, 327.0], [39.1, 327.0], [39.2, 327.0], [39.3, 327.0], [39.4, 327.0], [39.5, 328.0], [39.6, 328.0], [39.7, 328.0], [39.8, 328.0], [39.9, 328.0], [40.0, 328.0], [40.1, 328.0], [40.2, 329.0], [40.3, 329.0], [40.4, 329.0], [40.5, 329.0], [40.6, 329.0], [40.7, 329.0], [40.8, 329.0], [40.9, 329.0], [41.0, 330.0], [41.1, 330.0], [41.2, 330.0], [41.3, 330.0], [41.4, 330.0], [41.5, 330.0], [41.6, 330.0], [41.7, 330.0], [41.8, 331.0], [41.9, 331.0], [42.0, 331.0], [42.1, 331.0], [42.2, 331.0], [42.3, 331.0], [42.4, 331.0], [42.5, 331.0], [42.6, 332.0], [42.7, 332.0], [42.8, 332.0], [42.9, 332.0], [43.0, 332.0], [43.1, 332.0], [43.2, 332.0], [43.3, 332.0], [43.4, 333.0], [43.5, 333.0], [43.6, 333.0], [43.7, 333.0], [43.8, 333.0], [43.9, 333.0], [44.0, 333.0], [44.1, 333.0], [44.2, 334.0], [44.3, 334.0], [44.4, 334.0], [44.5, 334.0], [44.6, 334.0], [44.7, 334.0], [44.8, 334.0], [44.9, 334.0], [45.0, 335.0], [45.1, 335.0], [45.2, 335.0], [45.3, 335.0], [45.4, 335.0], [45.5, 335.0], [45.6, 335.0], [45.7, 335.0], [45.8, 336.0], [45.9, 336.0], [46.0, 336.0], [46.1, 336.0], [46.2, 336.0], [46.3, 336.0], [46.4, 336.0], [46.5, 336.0], [46.6, 337.0], [46.7, 337.0], [46.8, 337.0], [46.9, 337.0], [47.0, 337.0], [47.1, 337.0], [47.2, 337.0], [47.3, 337.0], [47.4, 338.0], [47.5, 338.0], [47.6, 338.0], [47.7, 338.0], [47.8, 338.0], [47.9, 338.0], [48.0, 338.0], [48.1, 338.0], [48.2, 339.0], [48.3, 339.0], [48.4, 339.0], [48.5, 339.0], [48.6, 339.0], [48.7, 339.0], [48.8, 339.0], [48.9, 339.0], [49.0, 340.0], [49.1, 340.0], [49.2, 340.0], [49.3, 340.0], [49.4, 340.0], [49.5, 340.0], [49.6, 340.0], [49.7, 340.0], [49.8, 340.0], [49.9, 341.0], [50.0, 341.0], [50.1, 341.0], [50.2, 341.0], [50.3, 341.0], [50.4, 341.0], [50.5, 341.0], [50.6, 341.0], [50.7, 342.0], [50.8, 342.0], [50.9, 342.0], [51.0, 342.0], [51.1, 342.0], [51.2, 342.0], [51.3, 342.0], [51.4, 342.0], [51.5, 343.0], [51.6, 343.0], [51.7, 343.0], [51.8, 343.0], [51.9, 343.0], [52.0, 343.0], [52.1, 343.0], [52.2, 343.0], [52.3, 343.0], [52.4, 344.0], [52.5, 344.0], [52.6, 344.0], [52.7, 344.0], [52.8, 344.0], [52.9, 344.0], [53.0, 344.0], [53.1, 344.0], [53.2, 345.0], [53.3, 345.0], [53.4, 345.0], [53.5, 345.0], [53.6, 345.0], [53.7, 345.0], [53.8, 345.0], [53.9, 345.0], [54.0, 346.0], [54.1, 346.0], [54.2, 346.0], [54.3, 346.0], [54.4, 346.0], [54.5, 346.0], [54.6, 346.0], [54.7, 346.0], [54.8, 346.0], [54.9, 347.0], [55.0, 347.0], [55.1, 347.0], [55.2, 347.0], [55.3, 347.0], [55.4, 347.0], [55.5, 347.0], [55.6, 347.0], [55.7, 348.0], [55.8, 348.0], [55.9, 348.0], [56.0, 348.0], [56.1, 348.0], [56.2, 348.0], [56.3, 348.0], [56.4, 348.0], [56.5, 349.0], [56.6, 349.0], [56.7, 349.0], [56.8, 349.0], [56.9, 349.0], [57.0, 349.0], [57.1, 349.0], [57.2, 349.0], [57.3, 350.0], [57.4, 350.0], [57.5, 350.0], [57.6, 350.0], [57.7, 350.0], [57.8, 350.0], [57.9, 350.0], [58.0, 351.0], [58.1, 351.0], [58.2, 351.0], [58.3, 351.0], [58.4, 351.0], [58.5, 351.0], [58.6, 351.0], [58.7, 351.0], [58.8, 352.0], [58.9, 352.0], [59.0, 352.0], [59.1, 352.0], [59.2, 352.0], [59.3, 352.0], [59.4, 352.0], [59.5, 352.0], [59.6, 353.0], [59.7, 353.0], [59.8, 353.0], [59.9, 353.0], [60.0, 353.0], [60.1, 353.0], [60.2, 353.0], [60.3, 353.0], [60.4, 353.0], [60.5, 354.0], [60.6, 354.0], [60.7, 354.0], [60.8, 354.0], [60.9, 354.0], [61.0, 354.0], [61.1, 354.0], [61.2, 355.0], [61.3, 355.0], [61.4, 355.0], [61.5, 355.0], [61.6, 355.0], [61.7, 355.0], [61.8, 355.0], [61.9, 355.0], [62.0, 356.0], [62.1, 356.0], [62.2, 356.0], [62.3, 356.0], [62.4, 356.0], [62.5, 356.0], [62.6, 356.0], [62.7, 356.0], [62.8, 357.0], [62.9, 357.0], [63.0, 357.0], [63.1, 357.0], [63.2, 357.0], [63.3, 357.0], [63.4, 357.0], [63.5, 357.0], [63.6, 358.0], [63.7, 358.0], [63.8, 358.0], [63.9, 358.0], [64.0, 358.0], [64.1, 358.0], [64.2, 358.0], [64.3, 359.0], [64.4, 359.0], [64.5, 359.0], [64.6, 359.0], [64.7, 359.0], [64.8, 359.0], [64.9, 359.0], [65.0, 359.0], [65.1, 360.0], [65.2, 360.0], [65.3, 360.0], [65.4, 360.0], [65.5, 360.0], [65.6, 360.0], [65.7, 360.0], [65.8, 361.0], [65.9, 361.0], [66.0, 361.0], [66.1, 361.0], [66.2, 361.0], [66.3, 361.0], [66.4, 361.0], [66.5, 362.0], [66.6, 362.0], [66.7, 362.0], [66.8, 362.0], [66.9, 362.0], [67.0, 362.0], [67.1, 362.0], [67.2, 363.0], [67.3, 363.0], [67.4, 363.0], [67.5, 363.0], [67.6, 363.0], [67.7, 363.0], [67.8, 363.0], [67.9, 364.0], [68.0, 364.0], [68.1, 364.0], [68.2, 364.0], [68.3, 364.0], [68.4, 364.0], [68.5, 364.0], [68.6, 365.0], [68.7, 365.0], [68.8, 365.0], [68.9, 365.0], [69.0, 365.0], [69.1, 365.0], [69.2, 365.0], [69.3, 366.0], [69.4, 366.0], [69.5, 366.0], [69.6, 366.0], [69.7, 366.0], [69.8, 366.0], [69.9, 367.0], [70.0, 367.0], [70.1, 367.0], [70.2, 367.0], [70.3, 367.0], [70.4, 367.0], [70.5, 367.0], [70.6, 368.0], [70.7, 368.0], [70.8, 368.0], [70.9, 368.0], [71.0, 368.0], [71.1, 368.0], [71.2, 369.0], [71.3, 369.0], [71.4, 369.0], [71.5, 369.0], [71.6, 369.0], [71.7, 369.0], [71.8, 369.0], [71.9, 370.0], [72.0, 370.0], [72.1, 370.0], [72.2, 370.0], [72.3, 370.0], [72.4, 370.0], [72.5, 371.0], [72.6, 371.0], [72.7, 371.0], [72.8, 371.0], [72.9, 371.0], [73.0, 371.0], [73.1, 372.0], [73.2, 372.0], [73.3, 372.0], [73.4, 372.0], [73.5, 372.0], [73.6, 372.0], [73.7, 373.0], [73.8, 373.0], [73.9, 373.0], [74.0, 373.0], [74.1, 373.0], [74.2, 373.0], [74.3, 374.0], [74.4, 374.0], [74.5, 374.0], [74.6, 374.0], [74.7, 374.0], [74.8, 374.0], [74.9, 375.0], [75.0, 375.0], [75.1, 375.0], [75.2, 375.0], [75.3, 375.0], [75.4, 376.0], [75.5, 376.0], [75.6, 376.0], [75.7, 376.0], [75.8, 376.0], [75.9, 376.0], [76.0, 377.0], [76.1, 377.0], [76.2, 377.0], [76.3, 377.0], [76.4, 377.0], [76.5, 378.0], [76.6, 378.0], [76.7, 378.0], [76.8, 378.0], [76.9, 378.0], [77.0, 379.0], [77.1, 379.0], [77.2, 379.0], [77.3, 379.0], [77.4, 379.0], [77.5, 380.0], [77.6, 380.0], [77.7, 380.0], [77.8, 380.0], [77.9, 380.0], [78.0, 380.0], [78.1, 381.0], [78.2, 381.0], [78.3, 381.0], [78.4, 381.0], [78.5, 381.0], [78.6, 382.0], [78.7, 382.0], [78.8, 382.0], [78.9, 382.0], [79.0, 382.0], [79.1, 383.0], [79.2, 383.0], [79.3, 383.0], [79.4, 383.0], [79.5, 383.0], [79.6, 384.0], [79.7, 384.0], [79.8, 384.0], [79.9, 384.0], [80.0, 384.0], [80.1, 385.0], [80.2, 385.0], [80.3, 385.0], [80.4, 385.0], [80.5, 385.0], [80.6, 386.0], [80.7, 386.0], [80.8, 386.0], [80.9, 386.0], [81.0, 386.0], [81.1, 387.0], [81.2, 387.0], [81.3, 387.0], [81.4, 387.0], [81.5, 387.0], [81.6, 388.0], [81.7, 388.0], [81.8, 388.0], [81.9, 388.0], [82.0, 388.0], [82.1, 389.0], [82.2, 389.0], [82.3, 389.0], [82.4, 389.0], [82.5, 389.0], [82.6, 390.0], [82.7, 390.0], [82.8, 390.0], [82.9, 390.0], [83.0, 391.0], [83.1, 391.0], [83.2, 391.0], [83.3, 391.0], [83.4, 392.0], [83.5, 392.0], [83.6, 392.0], [83.7, 392.0], [83.8, 392.0], [83.9, 393.0], [84.0, 393.0], [84.1, 393.0], [84.2, 393.0], [84.3, 394.0], [84.4, 394.0], [84.5, 394.0], [84.6, 394.0], [84.7, 395.0], [84.8, 395.0], [84.9, 395.0], [85.0, 395.0], [85.1, 396.0], [85.2, 396.0], [85.3, 396.0], [85.4, 396.0], [85.5, 397.0], [85.6, 397.0], [85.7, 397.0], [85.8, 397.0], [85.9, 398.0], [86.0, 398.0], [86.1, 398.0], [86.2, 398.0], [86.3, 399.0], [86.4, 399.0], [86.5, 399.0], [86.6, 399.0], [86.7, 400.0], [86.8, 400.0], [86.9, 400.0], [87.0, 400.0], [87.1, 401.0], [87.2, 401.0], [87.3, 401.0], [87.4, 401.0], [87.5, 402.0], [87.6, 402.0], [87.7, 402.0], [87.8, 402.0], [87.9, 403.0], [88.0, 403.0], [88.1, 403.0], [88.2, 404.0], [88.3, 404.0], [88.4, 404.0], [88.5, 405.0], [88.6, 405.0], [88.7, 405.0], [88.8, 406.0], [88.9, 406.0], [89.0, 406.0], [89.1, 406.0], [89.2, 407.0], [89.3, 407.0], [89.4, 407.0], [89.5, 408.0], [89.6, 408.0], [89.7, 408.0], [89.8, 409.0], [89.9, 409.0], [90.0, 409.0], [90.1, 409.0], [90.2, 410.0], [90.3, 410.0], [90.4, 410.0], [90.5, 411.0], [90.6, 411.0], [90.7, 411.0], [90.8, 412.0], [90.9, 412.0], [91.0, 412.0], [91.1, 413.0], [91.2, 413.0], [91.3, 413.0], [91.4, 414.0], [91.5, 414.0], [91.6, 414.0], [91.7, 415.0], [91.8, 415.0], [91.9, 415.0], [92.0, 416.0], [92.1, 416.0], [92.2, 417.0], [92.3, 417.0], [92.4, 417.0], [92.5, 418.0], [92.6, 418.0], [92.7, 418.0], [92.8, 419.0], [92.9, 419.0], [93.0, 420.0], [93.1, 420.0], [93.2, 420.0], [93.3, 421.0], [93.4, 421.0], [93.5, 422.0], [93.6, 422.0], [93.7, 422.0], [93.8, 423.0], [93.9, 423.0], [94.0, 423.0], [94.1, 424.0], [94.2, 424.0], [94.3, 425.0], [94.4, 425.0], [94.5, 425.0], [94.6, 426.0], [94.7, 426.0], [94.8, 427.0], [94.9, 427.0], [95.0, 428.0], [95.1, 428.0], [95.2, 429.0], [95.3, 429.0], [95.4, 430.0], [95.5, 430.0], [95.6, 431.0], [95.7, 431.0], [95.8, 432.0], [95.9, 432.0], [96.0, 433.0], [96.1, 434.0], [96.2, 434.0], [96.3, 435.0], [96.4, 435.0], [96.5, 436.0], [96.6, 437.0], [96.7, 437.0], [96.8, 438.0], [96.9, 439.0], [97.0, 440.0], [97.1, 440.0], [97.2, 441.0], [97.3, 442.0], [97.4, 443.0], [97.5, 443.0], [97.6, 444.0], [97.7, 445.0], [97.8, 446.0], [97.9, 447.0], [98.0, 448.0], [98.1, 449.0], [98.2, 451.0], [98.3, 452.0], [98.4, 453.0], [98.5, 455.0], [98.6, 456.0], [98.7, 458.0], [98.8, 460.0], [98.9, 462.0], [99.0, 465.0], [99.1, 467.0], [99.2, 471.0], [99.3, 474.0], [99.4, 480.0], [99.5, 487.0], [99.6, 500.0], [99.7, 519.0], [99.8, 554.0], [99.9, 602.0], [100.0, 870.0]], "isOverall": false, "label": "extract", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 3.0, "minX": 100.0, "maxY": 42451.0, "series": [{"data": [[300.0, 42451.0], [600.0, 51.0], [700.0, 14.0], [200.0, 11279.0], [400.0, 8262.0], [800.0, 3.0], [100.0, 1750.0], [500.0, 190.0]], "isOverall": false, "label": "extract", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 800.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 250.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 63750.0, "series": [{"data": [[0.0, 63750.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 250.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 34.0075386355069, "minX": 1.66608756E12, "maxY": 64.0, "series": [{"data": [[1.66608768E12, 64.0], [1.66608786E12, 61.88704588479227], [1.66608756E12, 63.862191780821924], [1.66608774E12, 64.0], [1.66608792E12, 34.0075386355069], [1.66608762E12, 64.0], [1.6660878E12, 64.0]], "isOverall": false, "label": "64", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66608792E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 168.20000000000002, "minX": 1.0, "maxY": 372.2068965517242, "series": [{"data": [[2.0, 170.24999999999997], [3.0, 171.33333333333331], [4.0, 168.20000000000002], [5.0, 176.60000000000002], [6.0, 175.90740740740736], [7.0, 178.67088607594937], [8.0, 185.33333333333334], [9.0, 181.5], [10.0, 181.94444444444446], [11.0, 184.7686567164179], [12.0, 186.39285714285714], [13.0, 184.95652173913044], [14.0, 186.1034482758621], [15.0, 189.0769230769231], [16.0, 207.3], [17.0, 170.0], [18.0, 192.5382165605096], [19.0, 198.6734693877551], [20.0, 187.47058823529414], [21.0, 196.19736842105272], [22.0, 211.73333333333332], [23.0, 206.48387096774195], [24.0, 203.93750000000003], [25.0, 205.27192982456134], [26.0, 215.375], [27.0, 212.132911392405], [28.0, 220.26315789473682], [29.0, 213.79999999999998], [30.0, 220.67796610169492], [31.0, 228.1891891891892], [33.0, 233.86111111111114], [32.0, 224.0], [35.0, 234.13043478260866], [34.0, 232.0935960591132], [36.0, 238.53061224489792], [37.0, 249.13513513513502], [39.0, 227.14285714285714], [38.0, 238.05999999999997], [41.0, 248.20833333333337], [40.0, 236.46905537459273], [43.0, 250.98954703832757], [42.0, 252.2254098360656], [44.0, 269.31404958677683], [45.0, 261.59090909090907], [47.0, 277.4770642201836], [46.0, 265.7777777777777], [49.0, 352.42857142857144], [48.0, 279.28989361702156], [50.0, 290.2696629213482], [51.0, 297.06574394463655], [53.0, 309.2346938775512], [52.0, 300.3031249999996], [54.0, 316.54368932038835], [55.0, 311.0225563909774], [56.0, 337.2424242424243], [57.0, 319.8333333333333], [59.0, 326.7400295420975], [58.0, 324.37267080745346], [61.0, 372.2068965517242], [60.0, 332.192307692308], [62.0, 339.15289256198344], [63.0, 344.8837719298244], [64.0, 350.19750978827966], [1.0, 189.9]], "isOverall": false, "label": "extract", "isController": false}, {"data": [[61.13934375000004, 339.12787500000195]], "isOverall": false, "label": "extract-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 64.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 0.0, "minX": 1.66608756E12, "maxY": 2.3365376716666665E7, "series": [{"data": [[1.66608768E12, 2.3365376716666665E7], [1.66608786E12, 2.3027345066666666E7], [1.66608756E12, 7701381.816666666], [1.66608774E12, 2.257315495E7], [1.66608792E12, 1.1437326283333333E7], [1.66608762E12, 2.3161871366666667E7], [1.6660878E12, 2.32454438E7]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.66608768E12, 0.0], [1.66608786E12, 0.0], [1.66608756E12, 0.0], [1.66608774E12, 0.0], [1.66608792E12, 0.0], [1.66608762E12, 0.0], [1.6660878E12, 0.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66608792E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 235.53957783641113, "minX": 1.66608756E12, "maxY": 380.10547945205417, "series": [{"data": [[1.66608768E12, 346.705590174298], [1.66608786E12, 334.4952672856756], [1.66608756E12, 380.10547945205417], [1.66608774E12, 360.309150633505], [1.66608792E12, 235.53957783641113], [1.66608762E12, 349.71170842824665], [1.6660878E12, 341.4134957325754]], "isOverall": false, "label": "extract", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66608792E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 233.5271390878249, "minX": 1.66608756E12, "maxY": 377.5035616438359, "series": [{"data": [[1.66608768E12, 344.680664679851], [1.66608786E12, 332.4823762733241], [1.66608756E12, 377.5035616438359], [1.66608774E12, 358.2528390427047], [1.66608792E12, 233.5271390878249], [1.66608762E12, 347.6366287015938], [1.6660878E12, 339.4567034139412]], "isOverall": false, "label": "extract", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66608792E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.66608756E12, "maxY": 4.9E-324, "series": [{"data": [[1.66608768E12, 0.0], [1.66608786E12, 0.0], [1.66608756E12, 0.0], [1.66608774E12, 0.0], [1.66608792E12, 0.0], [1.66608762E12, 0.0], [1.6660878E12, 0.0]], "isOverall": false, "label": "extract", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66608792E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 113.0, "minX": 1.66608756E12, "maxY": 870.0, "series": [{"data": [[1.66608768E12, 515.0], [1.66608786E12, 509.0], [1.66608756E12, 870.0], [1.66608774E12, 522.0], [1.66608792E12, 411.0], [1.66608762E12, 500.0], [1.6660878E12, 529.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.66608768E12, 218.0], [1.66608786E12, 139.0], [1.66608756E12, 257.0], [1.66608774E12, 238.0], [1.66608792E12, 128.0], [1.66608762E12, 236.0], [1.6660878E12, 113.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.66608768E12, 403.0], [1.66608786E12, 401.0], [1.66608756E12, 462.9000000000001], [1.66608774E12, 422.0], [1.66608792E12, 304.0], [1.66608762E12, 406.0], [1.6660878E12, 410.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.66608768E12, 447.0], [1.66608786E12, 450.0], [1.66608756E12, 651.0], [1.66608774E12, 464.0], [1.66608792E12, 363.0], [1.66608762E12, 451.0], [1.6660878E12, 457.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.66608768E12, 421.0], [1.66608786E12, 418.2999999999993], [1.66608756E12, 523.8999999999996], [1.66608774E12, 437.0], [1.66608792E12, 325.0], [1.66608762E12, 423.0], [1.6660878E12, 428.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66608792E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 168.0, "minX": 1.0, "maxY": 594.0, "series": [{"data": [[5.0, 195.0], [6.0, 186.0], [7.0, 183.0], [12.0, 170.0], [16.0, 168.0], [27.0, 174.0], [30.0, 173.0], [35.0, 170.0], [39.0, 176.0], [38.0, 179.0], [40.0, 176.0], [60.0, 179.0], [61.0, 183.0], [62.0, 185.5], [68.0, 508.0], [72.0, 185.5], [85.0, 191.0], [92.0, 191.5], [93.0, 196.0], [96.0, 191.0], [100.0, 196.5], [106.0, 194.5], [107.0, 199.0], [111.0, 594.0], [108.0, 197.0], [113.0, 200.0], [124.0, 215.0], [126.0, 209.0], [133.0, 217.0], [136.0, 497.0], [145.0, 318.0], [147.0, 225.0], [146.0, 228.5], [154.0, 415.0], [157.0, 231.0], [155.0, 232.0], [163.0, 304.0], [161.0, 362.0], [166.0, 247.0], [170.0, 282.0], [175.0, 341.0], [174.0, 342.0], [171.0, 306.0], [169.0, 367.5], [172.0, 367.0], [173.0, 328.0], [177.0, 356.0], [176.0, 351.0], [179.0, 351.0], [181.0, 347.0], [180.0, 348.0], [178.0, 341.0], [182.0, 345.0], [183.0, 342.0], [184.0, 342.0], [187.0, 343.0], [185.0, 343.0], [186.0, 343.0], [188.0, 341.0], [189.0, 338.0], [190.0, 343.0], [191.0, 338.0], [192.0, 338.0], [197.0, 334.0], [194.0, 335.0], [193.0, 335.0], [196.0, 336.5], [1.0, 238.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 197.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 165.0, "minX": 1.0, "maxY": 587.0, "series": [{"data": [[5.0, 192.5], [6.0, 183.0], [7.0, 181.0], [12.0, 168.0], [16.0, 165.0], [27.0, 172.0], [30.0, 171.5], [35.0, 169.0], [39.0, 174.5], [38.0, 177.0], [40.0, 174.5], [60.0, 178.0], [61.0, 181.0], [62.0, 184.0], [68.0, 497.0], [72.0, 184.0], [85.0, 189.0], [92.0, 190.0], [93.0, 194.0], [96.0, 189.5], [100.0, 194.5], [106.0, 192.0], [107.0, 197.0], [111.0, 587.0], [108.0, 195.0], [113.0, 199.0], [124.0, 213.5], [126.0, 207.0], [133.0, 215.0], [136.0, 493.5], [145.0, 316.0], [147.0, 223.0], [146.0, 226.5], [154.0, 413.0], [157.0, 230.0], [155.0, 230.0], [163.0, 301.5], [161.0, 360.0], [166.0, 244.0], [170.0, 280.0], [175.0, 339.0], [174.0, 340.0], [171.0, 304.0], [169.0, 365.0], [172.0, 365.0], [173.0, 326.0], [177.0, 354.0], [176.0, 349.0], [179.0, 349.0], [181.0, 345.0], [180.0, 346.0], [178.0, 339.0], [182.0, 343.0], [183.0, 340.0], [184.0, 340.0], [187.0, 341.0], [185.0, 341.0], [186.0, 341.0], [188.0, 339.0], [189.0, 336.0], [190.0, 341.0], [191.0, 336.0], [192.0, 336.0], [197.0, 332.0], [194.0, 333.0], [193.0, 333.0], [196.0, 334.5], [1.0, 231.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 197.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 61.9, "minX": 1.66608756E12, "maxY": 187.46666666666667, "series": [{"data": [[1.66608768E12, 184.56666666666666], [1.66608786E12, 184.66666666666666], [1.66608756E12, 61.9], [1.66608774E12, 177.58333333333334], [1.66608792E12, 87.58333333333333], [1.66608762E12, 182.9], [1.6660878E12, 187.46666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66608792E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 60.833333333333336, "minX": 1.66608756E12, "maxY": 187.46666666666667, "series": [{"data": [[1.66608768E12, 184.55], [1.66608786E12, 184.88333333333333], [1.66608756E12, 60.833333333333336], [1.66608774E12, 177.58333333333334], [1.66608792E12, 88.43333333333334], [1.66608762E12, 182.91666666666666], [1.6660878E12, 187.46666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66608792E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 60.833333333333336, "minX": 1.66608756E12, "maxY": 187.46666666666667, "series": [{"data": [[1.66608768E12, 184.55], [1.66608786E12, 184.88333333333333], [1.66608756E12, 60.833333333333336], [1.66608774E12, 177.58333333333334], [1.66608792E12, 88.43333333333334], [1.66608762E12, 182.91666666666666], [1.6660878E12, 187.46666666666667]], "isOverall": false, "label": "extract-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66608792E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 60.833333333333336, "minX": 1.66608756E12, "maxY": 187.46666666666667, "series": [{"data": [[1.66608768E12, 184.55], [1.66608786E12, 184.88333333333333], [1.66608756E12, 60.833333333333336], [1.66608774E12, 177.58333333333334], [1.66608792E12, 88.43333333333334], [1.66608762E12, 182.91666666666666], [1.6660878E12, 187.46666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66608792E12, "title": "Total Transactions Per Second"}},
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

