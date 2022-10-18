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
        data: {"result": {"minY": 110.0, "minX": 0.0, "maxY": 517.0, "series": [{"data": [[0.0, 110.0], [0.1, 150.0], [0.2, 154.0], [0.3, 157.0], [0.4, 160.0], [0.5, 163.0], [0.6, 165.0], [0.7, 167.0], [0.8, 169.0], [0.9, 171.0], [1.0, 173.0], [1.1, 175.0], [1.2, 177.0], [1.3, 178.0], [1.4, 180.0], [1.5, 181.0], [1.6, 183.0], [1.7, 184.0], [1.8, 186.0], [1.9, 188.0], [2.0, 189.0], [2.1, 190.0], [2.2, 192.0], [2.3, 193.0], [2.4, 194.0], [2.5, 196.0], [2.6, 197.0], [2.7, 198.0], [2.8, 200.0], [2.9, 201.0], [3.0, 202.0], [3.1, 203.0], [3.2, 205.0], [3.3, 206.0], [3.4, 207.0], [3.5, 208.0], [3.6, 210.0], [3.7, 211.0], [3.8, 212.0], [3.9, 213.0], [4.0, 215.0], [4.1, 216.0], [4.2, 218.0], [4.3, 220.0], [4.4, 221.0], [4.5, 222.0], [4.6, 223.0], [4.7, 224.0], [4.8, 226.0], [4.9, 227.0], [5.0, 229.0], [5.1, 230.0], [5.2, 232.0], [5.3, 233.0], [5.4, 234.0], [5.5, 236.0], [5.6, 237.0], [5.7, 239.0], [5.8, 240.0], [5.9, 241.0], [6.0, 242.0], [6.1, 243.0], [6.2, 245.0], [6.3, 246.0], [6.4, 247.0], [6.5, 248.0], [6.6, 250.0], [6.7, 251.0], [6.8, 252.0], [6.9, 253.0], [7.0, 254.0], [7.1, 255.0], [7.2, 256.0], [7.3, 257.0], [7.4, 258.0], [7.5, 258.0], [7.6, 259.0], [7.7, 260.0], [7.8, 261.0], [7.9, 262.0], [8.0, 262.0], [8.1, 263.0], [8.2, 264.0], [8.3, 264.0], [8.4, 265.0], [8.5, 266.0], [8.6, 266.0], [8.7, 267.0], [8.8, 268.0], [8.9, 268.0], [9.0, 269.0], [9.1, 269.0], [9.2, 270.0], [9.3, 270.0], [9.4, 270.0], [9.5, 271.0], [9.6, 271.0], [9.7, 272.0], [9.8, 272.0], [9.9, 273.0], [10.0, 273.0], [10.1, 274.0], [10.2, 274.0], [10.3, 274.0], [10.4, 275.0], [10.5, 275.0], [10.6, 275.0], [10.7, 276.0], [10.8, 276.0], [10.9, 277.0], [11.0, 277.0], [11.1, 277.0], [11.2, 277.0], [11.3, 278.0], [11.4, 278.0], [11.5, 278.0], [11.6, 279.0], [11.7, 279.0], [11.8, 279.0], [11.9, 280.0], [12.0, 280.0], [12.1, 280.0], [12.2, 280.0], [12.3, 281.0], [12.4, 281.0], [12.5, 281.0], [12.6, 282.0], [12.7, 282.0], [12.8, 282.0], [12.9, 282.0], [13.0, 283.0], [13.1, 283.0], [13.2, 283.0], [13.3, 283.0], [13.4, 284.0], [13.5, 284.0], [13.6, 284.0], [13.7, 284.0], [13.8, 285.0], [13.9, 285.0], [14.0, 285.0], [14.1, 285.0], [14.2, 286.0], [14.3, 286.0], [14.4, 286.0], [14.5, 286.0], [14.6, 286.0], [14.7, 287.0], [14.8, 287.0], [14.9, 287.0], [15.0, 287.0], [15.1, 288.0], [15.2, 288.0], [15.3, 288.0], [15.4, 288.0], [15.5, 288.0], [15.6, 289.0], [15.7, 289.0], [15.8, 289.0], [15.9, 289.0], [16.0, 289.0], [16.1, 290.0], [16.2, 290.0], [16.3, 290.0], [16.4, 290.0], [16.5, 291.0], [16.6, 291.0], [16.7, 291.0], [16.8, 291.0], [16.9, 291.0], [17.0, 292.0], [17.1, 292.0], [17.2, 292.0], [17.3, 292.0], [17.4, 292.0], [17.5, 293.0], [17.6, 293.0], [17.7, 293.0], [17.8, 293.0], [17.9, 293.0], [18.0, 294.0], [18.1, 294.0], [18.2, 294.0], [18.3, 294.0], [18.4, 294.0], [18.5, 295.0], [18.6, 295.0], [18.7, 295.0], [18.8, 295.0], [18.9, 295.0], [19.0, 295.0], [19.1, 296.0], [19.2, 296.0], [19.3, 296.0], [19.4, 296.0], [19.5, 296.0], [19.6, 297.0], [19.7, 297.0], [19.8, 297.0], [19.9, 297.0], [20.0, 297.0], [20.1, 298.0], [20.2, 298.0], [20.3, 298.0], [20.4, 298.0], [20.5, 298.0], [20.6, 299.0], [20.7, 299.0], [20.8, 299.0], [20.9, 299.0], [21.0, 299.0], [21.1, 299.0], [21.2, 300.0], [21.3, 300.0], [21.4, 300.0], [21.5, 300.0], [21.6, 300.0], [21.7, 300.0], [21.8, 301.0], [21.9, 301.0], [22.0, 301.0], [22.1, 301.0], [22.2, 301.0], [22.3, 301.0], [22.4, 302.0], [22.5, 302.0], [22.6, 302.0], [22.7, 302.0], [22.8, 302.0], [22.9, 302.0], [23.0, 303.0], [23.1, 303.0], [23.2, 303.0], [23.3, 303.0], [23.4, 303.0], [23.5, 303.0], [23.6, 304.0], [23.7, 304.0], [23.8, 304.0], [23.9, 304.0], [24.0, 304.0], [24.1, 304.0], [24.2, 305.0], [24.3, 305.0], [24.4, 305.0], [24.5, 305.0], [24.6, 305.0], [24.7, 305.0], [24.8, 305.0], [24.9, 306.0], [25.0, 306.0], [25.1, 306.0], [25.2, 306.0], [25.3, 306.0], [25.4, 306.0], [25.5, 307.0], [25.6, 307.0], [25.7, 307.0], [25.8, 307.0], [25.9, 307.0], [26.0, 307.0], [26.1, 307.0], [26.2, 308.0], [26.3, 308.0], [26.4, 308.0], [26.5, 308.0], [26.6, 308.0], [26.7, 308.0], [26.8, 309.0], [26.9, 309.0], [27.0, 309.0], [27.1, 309.0], [27.2, 309.0], [27.3, 309.0], [27.4, 310.0], [27.5, 310.0], [27.6, 310.0], [27.7, 310.0], [27.8, 310.0], [27.9, 310.0], [28.0, 311.0], [28.1, 311.0], [28.2, 311.0], [28.3, 311.0], [28.4, 311.0], [28.5, 311.0], [28.6, 311.0], [28.7, 312.0], [28.8, 312.0], [28.9, 312.0], [29.0, 312.0], [29.1, 312.0], [29.2, 312.0], [29.3, 312.0], [29.4, 313.0], [29.5, 313.0], [29.6, 313.0], [29.7, 313.0], [29.8, 313.0], [29.9, 313.0], [30.0, 314.0], [30.1, 314.0], [30.2, 314.0], [30.3, 314.0], [30.4, 314.0], [30.5, 314.0], [30.6, 314.0], [30.7, 315.0], [30.8, 315.0], [30.9, 315.0], [31.0, 315.0], [31.1, 315.0], [31.2, 315.0], [31.3, 315.0], [31.4, 316.0], [31.5, 316.0], [31.6, 316.0], [31.7, 316.0], [31.8, 316.0], [31.9, 316.0], [32.0, 317.0], [32.1, 317.0], [32.2, 317.0], [32.3, 317.0], [32.4, 317.0], [32.5, 317.0], [32.6, 317.0], [32.7, 317.0], [32.8, 318.0], [32.9, 318.0], [33.0, 318.0], [33.1, 318.0], [33.2, 318.0], [33.3, 318.0], [33.4, 318.0], [33.5, 319.0], [33.6, 319.0], [33.7, 319.0], [33.8, 319.0], [33.9, 319.0], [34.0, 319.0], [34.1, 319.0], [34.2, 320.0], [34.3, 320.0], [34.4, 320.0], [34.5, 320.0], [34.6, 320.0], [34.7, 320.0], [34.8, 320.0], [34.9, 320.0], [35.0, 321.0], [35.1, 321.0], [35.2, 321.0], [35.3, 321.0], [35.4, 321.0], [35.5, 321.0], [35.6, 321.0], [35.7, 322.0], [35.8, 322.0], [35.9, 322.0], [36.0, 322.0], [36.1, 322.0], [36.2, 322.0], [36.3, 322.0], [36.4, 322.0], [36.5, 323.0], [36.6, 323.0], [36.7, 323.0], [36.8, 323.0], [36.9, 323.0], [37.0, 323.0], [37.1, 323.0], [37.2, 323.0], [37.3, 324.0], [37.4, 324.0], [37.5, 324.0], [37.6, 324.0], [37.7, 324.0], [37.8, 324.0], [37.9, 324.0], [38.0, 325.0], [38.1, 325.0], [38.2, 325.0], [38.3, 325.0], [38.4, 325.0], [38.5, 325.0], [38.6, 325.0], [38.7, 325.0], [38.8, 326.0], [38.9, 326.0], [39.0, 326.0], [39.1, 326.0], [39.2, 326.0], [39.3, 326.0], [39.4, 326.0], [39.5, 326.0], [39.6, 327.0], [39.7, 327.0], [39.8, 327.0], [39.9, 327.0], [40.0, 327.0], [40.1, 327.0], [40.2, 327.0], [40.3, 327.0], [40.4, 327.0], [40.5, 328.0], [40.6, 328.0], [40.7, 328.0], [40.8, 328.0], [40.9, 328.0], [41.0, 328.0], [41.1, 328.0], [41.2, 328.0], [41.3, 329.0], [41.4, 329.0], [41.5, 329.0], [41.6, 329.0], [41.7, 329.0], [41.8, 329.0], [41.9, 329.0], [42.0, 330.0], [42.1, 330.0], [42.2, 330.0], [42.3, 330.0], [42.4, 330.0], [42.5, 330.0], [42.6, 330.0], [42.7, 330.0], [42.8, 331.0], [42.9, 331.0], [43.0, 331.0], [43.1, 331.0], [43.2, 331.0], [43.3, 331.0], [43.4, 331.0], [43.5, 331.0], [43.6, 331.0], [43.7, 332.0], [43.8, 332.0], [43.9, 332.0], [44.0, 332.0], [44.1, 332.0], [44.2, 332.0], [44.3, 332.0], [44.4, 332.0], [44.5, 333.0], [44.6, 333.0], [44.7, 333.0], [44.8, 333.0], [44.9, 333.0], [45.0, 333.0], [45.1, 333.0], [45.2, 333.0], [45.3, 333.0], [45.4, 334.0], [45.5, 334.0], [45.6, 334.0], [45.7, 334.0], [45.8, 334.0], [45.9, 334.0], [46.0, 334.0], [46.1, 334.0], [46.2, 335.0], [46.3, 335.0], [46.4, 335.0], [46.5, 335.0], [46.6, 335.0], [46.7, 335.0], [46.8, 335.0], [46.9, 335.0], [47.0, 336.0], [47.1, 336.0], [47.2, 336.0], [47.3, 336.0], [47.4, 336.0], [47.5, 336.0], [47.6, 336.0], [47.7, 336.0], [47.8, 336.0], [47.9, 337.0], [48.0, 337.0], [48.1, 337.0], [48.2, 337.0], [48.3, 337.0], [48.4, 337.0], [48.5, 337.0], [48.6, 337.0], [48.7, 338.0], [48.8, 338.0], [48.9, 338.0], [49.0, 338.0], [49.1, 338.0], [49.2, 338.0], [49.3, 338.0], [49.4, 338.0], [49.5, 338.0], [49.6, 339.0], [49.7, 339.0], [49.8, 339.0], [49.9, 339.0], [50.0, 339.0], [50.1, 339.0], [50.2, 339.0], [50.3, 339.0], [50.4, 339.0], [50.5, 340.0], [50.6, 340.0], [50.7, 340.0], [50.8, 340.0], [50.9, 340.0], [51.0, 340.0], [51.1, 340.0], [51.2, 340.0], [51.3, 340.0], [51.4, 341.0], [51.5, 341.0], [51.6, 341.0], [51.7, 341.0], [51.8, 341.0], [51.9, 341.0], [52.0, 341.0], [52.1, 341.0], [52.2, 341.0], [52.3, 342.0], [52.4, 342.0], [52.5, 342.0], [52.6, 342.0], [52.7, 342.0], [52.8, 342.0], [52.9, 342.0], [53.0, 342.0], [53.1, 343.0], [53.2, 343.0], [53.3, 343.0], [53.4, 343.0], [53.5, 343.0], [53.6, 343.0], [53.7, 343.0], [53.8, 343.0], [53.9, 344.0], [54.0, 344.0], [54.1, 344.0], [54.2, 344.0], [54.3, 344.0], [54.4, 344.0], [54.5, 344.0], [54.6, 344.0], [54.7, 344.0], [54.8, 344.0], [54.9, 345.0], [55.0, 345.0], [55.1, 345.0], [55.2, 345.0], [55.3, 345.0], [55.4, 345.0], [55.5, 345.0], [55.6, 345.0], [55.7, 346.0], [55.8, 346.0], [55.9, 346.0], [56.0, 346.0], [56.1, 346.0], [56.2, 346.0], [56.3, 346.0], [56.4, 346.0], [56.5, 346.0], [56.6, 347.0], [56.7, 347.0], [56.8, 347.0], [56.9, 347.0], [57.0, 347.0], [57.1, 347.0], [57.2, 347.0], [57.3, 347.0], [57.4, 348.0], [57.5, 348.0], [57.6, 348.0], [57.7, 348.0], [57.8, 348.0], [57.9, 348.0], [58.0, 348.0], [58.1, 348.0], [58.2, 348.0], [58.3, 349.0], [58.4, 349.0], [58.5, 349.0], [58.6, 349.0], [58.7, 349.0], [58.8, 349.0], [58.9, 349.0], [59.0, 349.0], [59.1, 350.0], [59.2, 350.0], [59.3, 350.0], [59.4, 350.0], [59.5, 350.0], [59.6, 350.0], [59.7, 350.0], [59.8, 350.0], [59.9, 350.0], [60.0, 351.0], [60.1, 351.0], [60.2, 351.0], [60.3, 351.0], [60.4, 351.0], [60.5, 351.0], [60.6, 351.0], [60.7, 351.0], [60.8, 352.0], [60.9, 352.0], [61.0, 352.0], [61.1, 352.0], [61.2, 352.0], [61.3, 352.0], [61.4, 352.0], [61.5, 352.0], [61.6, 353.0], [61.7, 353.0], [61.8, 353.0], [61.9, 353.0], [62.0, 353.0], [62.1, 353.0], [62.2, 353.0], [62.3, 354.0], [62.4, 354.0], [62.5, 354.0], [62.6, 354.0], [62.7, 354.0], [62.8, 354.0], [62.9, 354.0], [63.0, 354.0], [63.1, 355.0], [63.2, 355.0], [63.3, 355.0], [63.4, 355.0], [63.5, 355.0], [63.6, 355.0], [63.7, 355.0], [63.8, 355.0], [63.9, 356.0], [64.0, 356.0], [64.1, 356.0], [64.2, 356.0], [64.3, 356.0], [64.4, 356.0], [64.5, 356.0], [64.6, 356.0], [64.7, 357.0], [64.8, 357.0], [64.9, 357.0], [65.0, 357.0], [65.1, 357.0], [65.2, 357.0], [65.3, 357.0], [65.4, 358.0], [65.5, 358.0], [65.6, 358.0], [65.7, 358.0], [65.8, 358.0], [65.9, 358.0], [66.0, 358.0], [66.1, 359.0], [66.2, 359.0], [66.3, 359.0], [66.4, 359.0], [66.5, 359.0], [66.6, 359.0], [66.7, 359.0], [66.8, 359.0], [66.9, 360.0], [67.0, 360.0], [67.1, 360.0], [67.2, 360.0], [67.3, 360.0], [67.4, 360.0], [67.5, 360.0], [67.6, 361.0], [67.7, 361.0], [67.8, 361.0], [67.9, 361.0], [68.0, 361.0], [68.1, 361.0], [68.2, 361.0], [68.3, 362.0], [68.4, 362.0], [68.5, 362.0], [68.6, 362.0], [68.7, 362.0], [68.8, 362.0], [68.9, 362.0], [69.0, 362.0], [69.1, 363.0], [69.2, 363.0], [69.3, 363.0], [69.4, 363.0], [69.5, 363.0], [69.6, 363.0], [69.7, 363.0], [69.8, 364.0], [69.9, 364.0], [70.0, 364.0], [70.1, 364.0], [70.2, 364.0], [70.3, 364.0], [70.4, 365.0], [70.5, 365.0], [70.6, 365.0], [70.7, 365.0], [70.8, 365.0], [70.9, 365.0], [71.0, 365.0], [71.1, 366.0], [71.2, 366.0], [71.3, 366.0], [71.4, 366.0], [71.5, 366.0], [71.6, 366.0], [71.7, 367.0], [71.8, 367.0], [71.9, 367.0], [72.0, 367.0], [72.1, 367.0], [72.2, 367.0], [72.3, 368.0], [72.4, 368.0], [72.5, 368.0], [72.6, 368.0], [72.7, 368.0], [72.8, 368.0], [72.9, 368.0], [73.0, 369.0], [73.1, 369.0], [73.2, 369.0], [73.3, 369.0], [73.4, 369.0], [73.5, 369.0], [73.6, 370.0], [73.7, 370.0], [73.8, 370.0], [73.9, 370.0], [74.0, 370.0], [74.1, 370.0], [74.2, 371.0], [74.3, 371.0], [74.4, 371.0], [74.5, 371.0], [74.6, 371.0], [74.7, 371.0], [74.8, 371.0], [74.9, 372.0], [75.0, 372.0], [75.1, 372.0], [75.2, 372.0], [75.3, 372.0], [75.4, 373.0], [75.5, 373.0], [75.6, 373.0], [75.7, 373.0], [75.8, 373.0], [75.9, 373.0], [76.0, 374.0], [76.1, 374.0], [76.2, 374.0], [76.3, 374.0], [76.4, 374.0], [76.5, 374.0], [76.6, 375.0], [76.7, 375.0], [76.8, 375.0], [76.9, 375.0], [77.0, 375.0], [77.1, 376.0], [77.2, 376.0], [77.3, 376.0], [77.4, 376.0], [77.5, 376.0], [77.6, 377.0], [77.7, 377.0], [77.8, 377.0], [77.9, 377.0], [78.0, 377.0], [78.1, 377.0], [78.2, 378.0], [78.3, 378.0], [78.4, 378.0], [78.5, 378.0], [78.6, 378.0], [78.7, 379.0], [78.8, 379.0], [78.9, 379.0], [79.0, 379.0], [79.1, 380.0], [79.2, 380.0], [79.3, 380.0], [79.4, 380.0], [79.5, 380.0], [79.6, 381.0], [79.7, 381.0], [79.8, 381.0], [79.9, 381.0], [80.0, 381.0], [80.1, 382.0], [80.2, 382.0], [80.3, 382.0], [80.4, 382.0], [80.5, 382.0], [80.6, 383.0], [80.7, 383.0], [80.8, 383.0], [80.9, 383.0], [81.0, 384.0], [81.1, 384.0], [81.2, 384.0], [81.3, 384.0], [81.4, 384.0], [81.5, 385.0], [81.6, 385.0], [81.7, 385.0], [81.8, 385.0], [81.9, 386.0], [82.0, 386.0], [82.1, 386.0], [82.2, 386.0], [82.3, 386.0], [82.4, 387.0], [82.5, 387.0], [82.6, 387.0], [82.7, 387.0], [82.8, 388.0], [82.9, 388.0], [83.0, 388.0], [83.1, 388.0], [83.2, 389.0], [83.3, 389.0], [83.4, 389.0], [83.5, 389.0], [83.6, 389.0], [83.7, 390.0], [83.8, 390.0], [83.9, 390.0], [84.0, 390.0], [84.1, 390.0], [84.2, 391.0], [84.3, 391.0], [84.4, 391.0], [84.5, 392.0], [84.6, 392.0], [84.7, 392.0], [84.8, 392.0], [84.9, 392.0], [85.0, 393.0], [85.1, 393.0], [85.2, 393.0], [85.3, 393.0], [85.4, 394.0], [85.5, 394.0], [85.6, 394.0], [85.7, 394.0], [85.8, 395.0], [85.9, 395.0], [86.0, 395.0], [86.1, 395.0], [86.2, 395.0], [86.3, 396.0], [86.4, 396.0], [86.5, 396.0], [86.6, 396.0], [86.7, 397.0], [86.8, 397.0], [86.9, 397.0], [87.0, 397.0], [87.1, 398.0], [87.2, 398.0], [87.3, 398.0], [87.4, 399.0], [87.5, 399.0], [87.6, 399.0], [87.7, 399.0], [87.8, 400.0], [87.9, 400.0], [88.0, 400.0], [88.1, 400.0], [88.2, 401.0], [88.3, 401.0], [88.4, 401.0], [88.5, 401.0], [88.6, 402.0], [88.7, 402.0], [88.8, 402.0], [88.9, 403.0], [89.0, 403.0], [89.1, 403.0], [89.2, 403.0], [89.3, 404.0], [89.4, 404.0], [89.5, 404.0], [89.6, 405.0], [89.7, 405.0], [89.8, 405.0], [89.9, 406.0], [90.0, 406.0], [90.1, 406.0], [90.2, 406.0], [90.3, 407.0], [90.4, 407.0], [90.5, 407.0], [90.6, 408.0], [90.7, 408.0], [90.8, 408.0], [90.9, 409.0], [91.0, 409.0], [91.1, 409.0], [91.2, 410.0], [91.3, 410.0], [91.4, 410.0], [91.5, 411.0], [91.6, 411.0], [91.7, 411.0], [91.8, 412.0], [91.9, 412.0], [92.0, 412.0], [92.1, 413.0], [92.2, 413.0], [92.3, 413.0], [92.4, 414.0], [92.5, 414.0], [92.6, 414.0], [92.7, 415.0], [92.8, 415.0], [92.9, 415.0], [93.0, 416.0], [93.1, 416.0], [93.2, 416.0], [93.3, 417.0], [93.4, 417.0], [93.5, 417.0], [93.6, 418.0], [93.7, 418.0], [93.8, 419.0], [93.9, 419.0], [94.0, 419.0], [94.1, 420.0], [94.2, 420.0], [94.3, 421.0], [94.4, 421.0], [94.5, 421.0], [94.6, 422.0], [94.7, 422.0], [94.8, 423.0], [94.9, 423.0], [95.0, 424.0], [95.1, 424.0], [95.2, 424.0], [95.3, 425.0], [95.4, 425.0], [95.5, 426.0], [95.6, 426.0], [95.7, 427.0], [95.8, 427.0], [95.9, 428.0], [96.0, 428.0], [96.1, 428.0], [96.2, 429.0], [96.3, 430.0], [96.4, 430.0], [96.5, 431.0], [96.6, 431.0], [96.7, 432.0], [96.8, 432.0], [96.9, 433.0], [97.0, 434.0], [97.1, 434.0], [97.2, 435.0], [97.3, 435.0], [97.4, 436.0], [97.5, 437.0], [97.6, 437.0], [97.7, 438.0], [97.8, 439.0], [97.9, 440.0], [98.0, 441.0], [98.1, 441.0], [98.2, 443.0], [98.3, 444.0], [98.4, 445.0], [98.5, 445.0], [98.6, 446.0], [98.7, 448.0], [98.8, 449.0], [98.9, 451.0], [99.0, 452.0], [99.1, 454.0], [99.2, 456.0], [99.3, 458.0], [99.4, 460.0], [99.5, 463.0], [99.6, 466.0], [99.7, 470.0], [99.8, 474.0], [99.9, 482.0], [100.0, 517.0]], "isOverall": false, "label": "extract", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 11.0, "minX": 100.0, "maxY": 42638.0, "series": [{"data": [[300.0, 42638.0], [100.0, 1789.0], [200.0, 11745.0], [400.0, 7817.0], [500.0, 11.0]], "isOverall": false, "label": "extract", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 10.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 63990.0, "series": [{"data": [[0.0, 63990.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 10.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 5.583916083916083, "minX": 1.66608804E12, "maxY": 64.0, "series": [{"data": [[1.66608816E12, 64.0], [1.66608834E12, 45.81492898821968], [1.66608804E12, 63.77665168754157], [1.66608822E12, 64.0], [1.6660884E12, 5.583916083916083], [1.6660881E12, 64.0], [1.66608828E12, 63.929756097560954]], "isOverall": false, "label": "64", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6660884E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 152.25, "minX": 1.0, "maxY": 347.5525801589221, "series": [{"data": [[2.0, 179.7], [3.0, 170.9090909090909], [4.0, 177.1935483870968], [5.0, 168.25], [6.0, 177.80000000000004], [7.0, 177.27368421052634], [8.0, 178.75], [9.0, 173.16666666666669], [10.0, 188.83333333333343], [11.0, 187.5254237288135], [12.0, 187.66071428571428], [13.0, 186.84848484848482], [14.0, 184.71212121212122], [15.0, 189.1466666666667], [16.0, 152.25], [17.0, 194.17910447761196], [18.0, 189.07407407407413], [19.0, 192.0582524271845], [20.0, 199.52941176470588], [21.0, 196.65473145780055], [22.0, 200.78947368421055], [23.0, 200.40909090909093], [24.0, 203.35937499999994], [25.0, 207.5490196078431], [26.0, 199.33333333333334], [27.0, 210.74647887323957], [28.0, 213.1168831168831], [29.0, 218.4], [30.0, 217.57142857142858], [31.0, 228.3125], [32.0, 226.8947368421053], [33.0, 238.3076923076923], [34.0, 231.95075757575768], [35.0, 230.9583333333333], [36.0, 230.35632183908046], [37.0, 233.625], [39.0, 237.7741935483871], [38.0, 230.6], [40.0, 236.96815286624212], [41.0, 242.7862068965517], [42.0, 237.57894736842104], [43.0, 253.5872483221476], [44.0, 257.74703557312245], [45.0, 262.17880794701995], [47.0, 276.24074074074093], [46.0, 273.8134328358208], [48.0, 279.57478632478615], [49.0, 283.9166666666667], [50.0, 289.9716312056737], [51.0, 292.28472222222206], [53.0, 294.5694444444445], [52.0, 299.3381924198251], [55.0, 314.4000000000001], [54.0, 310.1583333333334], [56.0, 313.15000000000003], [57.0, 331.2105263157895], [58.0, 317.9411764705881], [59.0, 326.04814636494945], [60.0, 331.9673405909799], [61.0, 333.16153846153844], [62.0, 340.4], [63.0, 340.74102079395084], [64.0, 347.5525801589221], [1.0, 198.26666666666668]], "isOverall": false, "label": "extract", "isController": false}, {"data": [[61.10921875000037, 336.52792187499847]], "isOverall": false, "label": "extract-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 64.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 0.0, "minX": 1.66608804E12, "maxY": 2.3389511633333333E7, "series": [{"data": [[1.66608816E12, 2.3013478683333334E7], [1.66608834E12, 1.9288994366666667E7], [1.66608804E12, 2.207207625E7], [1.66608822E12, 2.2808454566666666E7], [1.6660884E12, 651161.3833333333], [1.6660881E12, 2.3389511633333333E7], [1.66608828E12, 2.3288223116666667E7]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.66608816E12, 0.0], [1.66608834E12, 0.0], [1.66608804E12, 0.0], [1.66608822E12, 0.0], [1.6660884E12, 0.0], [1.6660881E12, 0.0], [1.66608828E12, 0.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6660884E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 178.10139860139853, "minX": 1.66608804E12, "maxY": 353.2779823269529, "series": [{"data": [[1.66608816E12, 353.2779823269529], [1.66608834E12, 277.249036661896], [1.66608804E12, 345.7066641170285], [1.66608822E12, 350.7480818414319], [1.6660884E12, 178.10139860139853], [1.6660881E12, 346.401804239965], [1.66608828E12, 340.1317073170737]], "isOverall": false, "label": "extract", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6660884E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 176.29720279720297, "minX": 1.66608804E12, "maxY": 351.222385861561, "series": [{"data": [[1.66608816E12, 351.222385861561], [1.66608834E12, 275.2423208191122], [1.66608804E12, 343.6582847308525], [1.66608822E12, 348.73657289002495], [1.6660884E12, 176.29720279720297], [1.6660881E12, 344.35182679296224], [1.66608828E12, 338.13791574279446]], "isOverall": false, "label": "extract", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6660884E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.66608804E12, "maxY": 4.9E-324, "series": [{"data": [[1.66608816E12, 0.0], [1.66608834E12, 0.0], [1.66608804E12, 0.0], [1.66608822E12, 0.0], [1.6660884E12, 0.0], [1.6660881E12, 0.0], [1.66608828E12, 0.0]], "isOverall": false, "label": "extract", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6660884E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 110.0, "minX": 1.66608804E12, "maxY": 517.0, "series": [{"data": [[1.66608816E12, 508.0], [1.66608834E12, 473.0], [1.66608804E12, 493.0], [1.66608822E12, 517.0], [1.6660884E12, 243.0], [1.6660881E12, 498.0], [1.66608828E12, 507.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.66608816E12, 230.0], [1.66608834E12, 133.0], [1.66608804E12, 110.0], [1.66608822E12, 142.0], [1.6660884E12, 137.0], [1.6660881E12, 236.0], [1.66608828E12, 126.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.66608816E12, 411.0], [1.66608834E12, 362.0], [1.66608804E12, 405.0], [1.66608822E12, 421.0], [1.6660884E12, 208.3], [1.6660881E12, 402.0], [1.66608828E12, 407.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.66608816E12, 452.0], [1.66608834E12, 422.15999999999985], [1.66608804E12, 446.0], [1.66608822E12, 466.5100000000002], [1.6660884E12, 240.0], [1.6660881E12, 448.0], [1.66608828E12, 453.2399999999998]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.66608816E12, 426.0], [1.66608834E12, 386.0], [1.66608804E12, 421.0], [1.66608822E12, 437.0], [1.6660884E12, 218.0], [1.6660881E12, 420.0], [1.66608828E12, 425.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6660884E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 122.0, "minX": 2.0, "maxY": 360.0, "series": [{"data": [[2.0, 122.0], [3.0, 211.0], [5.0, 206.0], [6.0, 193.5], [9.0, 176.0], [11.0, 176.0], [12.0, 168.5], [20.0, 169.5], [25.0, 169.0], [36.0, 180.5], [39.0, 171.0], [41.0, 173.0], [40.0, 176.0], [44.0, 185.5], [59.0, 185.0], [63.0, 186.0], [72.0, 187.5], [79.0, 188.0], [85.0, 200.0], [94.0, 189.0], [95.0, 188.0], [100.0, 191.0], [106.0, 198.0], [107.0, 198.0], [105.0, 195.0], [110.0, 201.5], [116.0, 205.5], [126.0, 217.5], [132.0, 210.0], [141.0, 233.0], [140.0, 220.0], [148.0, 227.5], [147.0, 231.0], [146.0, 227.5], [155.0, 228.0], [167.0, 250.0], [165.0, 231.0], [175.0, 344.0], [171.0, 302.0], [174.0, 347.0], [173.0, 323.0], [170.0, 311.5], [172.0, 344.5], [169.0, 279.0], [179.0, 339.0], [178.0, 360.0], [182.0, 343.0], [181.0, 344.0], [183.0, 345.0], [180.0, 335.0], [177.0, 339.0], [176.0, 357.0], [191.0, 340.0], [187.0, 342.0], [186.0, 342.0], [184.0, 343.0], [188.0, 342.0], [190.0, 339.5], [185.0, 340.5], [189.0, 340.0], [193.0, 340.0], [192.0, 340.0], [194.0, 339.0], [196.0, 333.0], [195.0, 337.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 196.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 120.5, "minX": 2.0, "maxY": 358.0, "series": [{"data": [[2.0, 120.5], [3.0, 207.0], [5.0, 205.0], [6.0, 190.5], [9.0, 175.0], [11.0, 174.0], [12.0, 167.0], [20.0, 168.0], [25.0, 167.0], [36.0, 179.0], [39.0, 168.0], [41.0, 172.0], [40.0, 174.0], [44.0, 183.5], [59.0, 183.0], [63.0, 184.0], [72.0, 185.0], [79.0, 186.0], [85.0, 198.0], [94.0, 187.0], [95.0, 187.0], [100.0, 190.0], [106.0, 196.0], [107.0, 196.0], [105.0, 193.0], [110.0, 199.5], [116.0, 204.0], [126.0, 215.0], [132.0, 208.0], [141.0, 231.0], [140.0, 218.0], [148.0, 226.0], [147.0, 229.0], [146.0, 226.0], [155.0, 226.0], [167.0, 248.0], [165.0, 229.0], [175.0, 342.0], [171.0, 300.0], [174.0, 345.0], [173.0, 321.0], [170.0, 309.5], [172.0, 342.0], [169.0, 277.0], [179.0, 337.0], [178.0, 358.0], [182.0, 341.0], [181.0, 342.0], [183.0, 343.0], [180.0, 333.0], [177.0, 337.0], [176.0, 355.0], [191.0, 338.0], [187.0, 340.0], [186.0, 340.0], [184.0, 341.0], [188.0, 340.0], [190.0, 337.0], [185.0, 339.0], [189.0, 338.0], [193.0, 338.0], [192.0, 337.0], [194.0, 337.0], [196.0, 332.0], [195.0, 335.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 196.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 4.65, "minX": 1.66608804E12, "maxY": 187.9, "series": [{"data": [[1.66608816E12, 181.06666666666666], [1.66608834E12, 150.45], [1.66608804E12, 175.38333333333333], [1.66608822E12, 182.46666666666667], [1.6660884E12, 4.65], [1.6660881E12, 184.75], [1.66608828E12, 187.9]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6660884E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 4.766666666666667, "minX": 1.66608804E12, "maxY": 187.91666666666666, "series": [{"data": [[1.66608816E12, 181.06666666666666], [1.66608834E12, 151.38333333333333], [1.66608804E12, 174.31666666666666], [1.66608822E12, 182.46666666666667], [1.6660884E12, 4.766666666666667], [1.6660881E12, 184.75], [1.66608828E12, 187.91666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6660884E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 4.766666666666667, "minX": 1.66608804E12, "maxY": 187.91666666666666, "series": [{"data": [[1.66608816E12, 181.06666666666666], [1.66608834E12, 151.38333333333333], [1.66608804E12, 174.31666666666666], [1.66608822E12, 182.46666666666667], [1.6660884E12, 4.766666666666667], [1.6660881E12, 184.75], [1.66608828E12, 187.91666666666666]], "isOverall": false, "label": "extract-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6660884E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 4.766666666666667, "minX": 1.66608804E12, "maxY": 187.91666666666666, "series": [{"data": [[1.66608816E12, 181.06666666666666], [1.66608834E12, 151.38333333333333], [1.66608804E12, 174.31666666666666], [1.66608822E12, 182.46666666666667], [1.6660884E12, 4.766666666666667], [1.6660881E12, 184.75], [1.66608828E12, 187.91666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6660884E12, "title": "Total Transactions Per Second"}},
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

