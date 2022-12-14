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
        data: {"result": {"minY": 123.0, "minX": 0.0, "maxY": 562.0, "series": [{"data": [[0.0, 123.0], [0.1, 147.0], [0.2, 153.0], [0.3, 157.0], [0.4, 159.0], [0.5, 161.0], [0.6, 164.0], [0.7, 166.0], [0.8, 167.0], [0.9, 169.0], [1.0, 170.0], [1.1, 172.0], [1.2, 173.0], [1.3, 174.0], [1.4, 175.0], [1.5, 176.0], [1.6, 177.0], [1.7, 179.0], [1.8, 180.0], [1.9, 181.0], [2.0, 182.0], [2.1, 183.0], [2.2, 183.0], [2.3, 184.0], [2.4, 185.0], [2.5, 186.0], [2.6, 187.0], [2.7, 187.0], [2.8, 188.0], [2.9, 189.0], [3.0, 189.0], [3.1, 190.0], [3.2, 191.0], [3.3, 191.0], [3.4, 192.0], [3.5, 192.0], [3.6, 193.0], [3.7, 193.0], [3.8, 194.0], [3.9, 194.0], [4.0, 195.0], [4.1, 195.0], [4.2, 196.0], [4.3, 196.0], [4.4, 197.0], [4.5, 198.0], [4.6, 198.0], [4.7, 199.0], [4.8, 199.0], [4.9, 199.0], [5.0, 200.0], [5.1, 200.0], [5.2, 201.0], [5.3, 201.0], [5.4, 202.0], [5.5, 202.0], [5.6, 203.0], [5.7, 203.0], [5.8, 203.0], [5.9, 204.0], [6.0, 204.0], [6.1, 205.0], [6.2, 205.0], [6.3, 205.0], [6.4, 205.0], [6.5, 206.0], [6.6, 206.0], [6.7, 206.0], [6.8, 207.0], [6.9, 207.0], [7.0, 208.0], [7.1, 208.0], [7.2, 208.0], [7.3, 209.0], [7.4, 209.0], [7.5, 209.0], [7.6, 210.0], [7.7, 210.0], [7.8, 210.0], [7.9, 211.0], [8.0, 211.0], [8.1, 211.0], [8.2, 212.0], [8.3, 212.0], [8.4, 212.0], [8.5, 213.0], [8.6, 213.0], [8.7, 213.0], [8.8, 213.0], [8.9, 214.0], [9.0, 214.0], [9.1, 214.0], [9.2, 214.0], [9.3, 215.0], [9.4, 215.0], [9.5, 215.0], [9.6, 216.0], [9.7, 216.0], [9.8, 216.0], [9.9, 216.0], [10.0, 217.0], [10.1, 217.0], [10.2, 217.0], [10.3, 217.0], [10.4, 217.0], [10.5, 218.0], [10.6, 218.0], [10.7, 218.0], [10.8, 219.0], [10.9, 219.0], [11.0, 219.0], [11.1, 219.0], [11.2, 219.0], [11.3, 220.0], [11.4, 220.0], [11.5, 220.0], [11.6, 220.0], [11.7, 221.0], [11.8, 221.0], [11.9, 221.0], [12.0, 221.0], [12.1, 222.0], [12.2, 222.0], [12.3, 222.0], [12.4, 222.0], [12.5, 222.0], [12.6, 223.0], [12.7, 223.0], [12.8, 223.0], [12.9, 223.0], [13.0, 224.0], [13.1, 224.0], [13.2, 224.0], [13.3, 224.0], [13.4, 224.0], [13.5, 225.0], [13.6, 225.0], [13.7, 225.0], [13.8, 225.0], [13.9, 226.0], [14.0, 226.0], [14.1, 226.0], [14.2, 226.0], [14.3, 226.0], [14.4, 227.0], [14.5, 227.0], [14.6, 227.0], [14.7, 227.0], [14.8, 228.0], [14.9, 228.0], [15.0, 228.0], [15.1, 228.0], [15.2, 229.0], [15.3, 229.0], [15.4, 229.0], [15.5, 229.0], [15.6, 229.0], [15.7, 229.0], [15.8, 230.0], [15.9, 230.0], [16.0, 230.0], [16.1, 230.0], [16.2, 230.0], [16.3, 231.0], [16.4, 231.0], [16.5, 231.0], [16.6, 231.0], [16.7, 231.0], [16.8, 232.0], [16.9, 232.0], [17.0, 232.0], [17.1, 232.0], [17.2, 232.0], [17.3, 232.0], [17.4, 233.0], [17.5, 233.0], [17.6, 233.0], [17.7, 233.0], [17.8, 233.0], [17.9, 234.0], [18.0, 234.0], [18.1, 234.0], [18.2, 234.0], [18.3, 234.0], [18.4, 234.0], [18.5, 235.0], [18.6, 235.0], [18.7, 235.0], [18.8, 235.0], [18.9, 235.0], [19.0, 235.0], [19.1, 236.0], [19.2, 236.0], [19.3, 236.0], [19.4, 236.0], [19.5, 236.0], [19.6, 237.0], [19.7, 237.0], [19.8, 237.0], [19.9, 237.0], [20.0, 237.0], [20.1, 237.0], [20.2, 237.0], [20.3, 238.0], [20.4, 238.0], [20.5, 238.0], [20.6, 238.0], [20.7, 238.0], [20.8, 238.0], [20.9, 239.0], [21.0, 239.0], [21.1, 239.0], [21.2, 239.0], [21.3, 239.0], [21.4, 239.0], [21.5, 240.0], [21.6, 240.0], [21.7, 240.0], [21.8, 240.0], [21.9, 240.0], [22.0, 240.0], [22.1, 240.0], [22.2, 241.0], [22.3, 241.0], [22.4, 241.0], [22.5, 241.0], [22.6, 241.0], [22.7, 241.0], [22.8, 242.0], [22.9, 242.0], [23.0, 242.0], [23.1, 242.0], [23.2, 242.0], [23.3, 242.0], [23.4, 242.0], [23.5, 242.0], [23.6, 243.0], [23.7, 243.0], [23.8, 243.0], [23.9, 243.0], [24.0, 243.0], [24.1, 243.0], [24.2, 243.0], [24.3, 244.0], [24.4, 244.0], [24.5, 244.0], [24.6, 244.0], [24.7, 244.0], [24.8, 244.0], [24.9, 244.0], [25.0, 244.0], [25.1, 245.0], [25.2, 245.0], [25.3, 245.0], [25.4, 245.0], [25.5, 245.0], [25.6, 245.0], [25.7, 245.0], [25.8, 246.0], [25.9, 246.0], [26.0, 246.0], [26.1, 246.0], [26.2, 246.0], [26.3, 246.0], [26.4, 247.0], [26.5, 247.0], [26.6, 247.0], [26.7, 247.0], [26.8, 247.0], [26.9, 247.0], [27.0, 247.0], [27.1, 247.0], [27.2, 248.0], [27.3, 248.0], [27.4, 248.0], [27.5, 248.0], [27.6, 248.0], [27.7, 248.0], [27.8, 248.0], [27.9, 248.0], [28.0, 249.0], [28.1, 249.0], [28.2, 249.0], [28.3, 249.0], [28.4, 249.0], [28.5, 249.0], [28.6, 249.0], [28.7, 249.0], [28.8, 250.0], [28.9, 250.0], [29.0, 250.0], [29.1, 250.0], [29.2, 250.0], [29.3, 250.0], [29.4, 250.0], [29.5, 251.0], [29.6, 251.0], [29.7, 251.0], [29.8, 251.0], [29.9, 251.0], [30.0, 251.0], [30.1, 251.0], [30.2, 251.0], [30.3, 252.0], [30.4, 252.0], [30.5, 252.0], [30.6, 252.0], [30.7, 252.0], [30.8, 252.0], [30.9, 252.0], [31.0, 252.0], [31.1, 253.0], [31.2, 253.0], [31.3, 253.0], [31.4, 253.0], [31.5, 253.0], [31.6, 253.0], [31.7, 253.0], [31.8, 253.0], [31.9, 254.0], [32.0, 254.0], [32.1, 254.0], [32.2, 254.0], [32.3, 254.0], [32.4, 254.0], [32.5, 254.0], [32.6, 254.0], [32.7, 255.0], [32.8, 255.0], [32.9, 255.0], [33.0, 255.0], [33.1, 255.0], [33.2, 255.0], [33.3, 255.0], [33.4, 255.0], [33.5, 256.0], [33.6, 256.0], [33.7, 256.0], [33.8, 256.0], [33.9, 256.0], [34.0, 256.0], [34.1, 256.0], [34.2, 257.0], [34.3, 257.0], [34.4, 257.0], [34.5, 257.0], [34.6, 257.0], [34.7, 257.0], [34.8, 257.0], [34.9, 257.0], [35.0, 257.0], [35.1, 258.0], [35.2, 258.0], [35.3, 258.0], [35.4, 258.0], [35.5, 258.0], [35.6, 258.0], [35.7, 258.0], [35.8, 259.0], [35.9, 259.0], [36.0, 259.0], [36.1, 259.0], [36.2, 259.0], [36.3, 259.0], [36.4, 259.0], [36.5, 259.0], [36.6, 259.0], [36.7, 259.0], [36.8, 260.0], [36.9, 260.0], [37.0, 260.0], [37.1, 260.0], [37.2, 260.0], [37.3, 260.0], [37.4, 260.0], [37.5, 260.0], [37.6, 260.0], [37.7, 260.0], [37.8, 261.0], [37.9, 261.0], [38.0, 261.0], [38.1, 261.0], [38.2, 261.0], [38.3, 261.0], [38.4, 261.0], [38.5, 261.0], [38.6, 262.0], [38.7, 262.0], [38.8, 262.0], [38.9, 262.0], [39.0, 262.0], [39.1, 262.0], [39.2, 262.0], [39.3, 262.0], [39.4, 262.0], [39.5, 263.0], [39.6, 263.0], [39.7, 263.0], [39.8, 263.0], [39.9, 263.0], [40.0, 263.0], [40.1, 263.0], [40.2, 263.0], [40.3, 263.0], [40.4, 264.0], [40.5, 264.0], [40.6, 264.0], [40.7, 264.0], [40.8, 264.0], [40.9, 264.0], [41.0, 264.0], [41.1, 264.0], [41.2, 264.0], [41.3, 264.0], [41.4, 265.0], [41.5, 265.0], [41.6, 265.0], [41.7, 265.0], [41.8, 265.0], [41.9, 265.0], [42.0, 265.0], [42.1, 265.0], [42.2, 265.0], [42.3, 266.0], [42.4, 266.0], [42.5, 266.0], [42.6, 266.0], [42.7, 266.0], [42.8, 266.0], [42.9, 266.0], [43.0, 266.0], [43.1, 266.0], [43.2, 267.0], [43.3, 267.0], [43.4, 267.0], [43.5, 267.0], [43.6, 267.0], [43.7, 267.0], [43.8, 267.0], [43.9, 267.0], [44.0, 267.0], [44.1, 268.0], [44.2, 268.0], [44.3, 268.0], [44.4, 268.0], [44.5, 268.0], [44.6, 268.0], [44.7, 268.0], [44.8, 268.0], [44.9, 268.0], [45.0, 269.0], [45.1, 269.0], [45.2, 269.0], [45.3, 269.0], [45.4, 269.0], [45.5, 269.0], [45.6, 269.0], [45.7, 270.0], [45.8, 270.0], [45.9, 270.0], [46.0, 270.0], [46.1, 270.0], [46.2, 270.0], [46.3, 270.0], [46.4, 270.0], [46.5, 270.0], [46.6, 271.0], [46.7, 271.0], [46.8, 271.0], [46.9, 271.0], [47.0, 271.0], [47.1, 271.0], [47.2, 271.0], [47.3, 271.0], [47.4, 271.0], [47.5, 272.0], [47.6, 272.0], [47.7, 272.0], [47.8, 272.0], [47.9, 272.0], [48.0, 272.0], [48.1, 272.0], [48.2, 272.0], [48.3, 272.0], [48.4, 273.0], [48.5, 273.0], [48.6, 273.0], [48.7, 273.0], [48.8, 273.0], [48.9, 273.0], [49.0, 273.0], [49.1, 273.0], [49.2, 274.0], [49.3, 274.0], [49.4, 274.0], [49.5, 274.0], [49.6, 274.0], [49.7, 274.0], [49.8, 274.0], [49.9, 274.0], [50.0, 274.0], [50.1, 274.0], [50.2, 275.0], [50.3, 275.0], [50.4, 275.0], [50.5, 275.0], [50.6, 275.0], [50.7, 275.0], [50.8, 275.0], [50.9, 275.0], [51.0, 275.0], [51.1, 276.0], [51.2, 276.0], [51.3, 276.0], [51.4, 276.0], [51.5, 276.0], [51.6, 276.0], [51.7, 276.0], [51.8, 276.0], [51.9, 277.0], [52.0, 277.0], [52.1, 277.0], [52.2, 277.0], [52.3, 277.0], [52.4, 277.0], [52.5, 277.0], [52.6, 277.0], [52.7, 278.0], [52.8, 278.0], [52.9, 278.0], [53.0, 278.0], [53.1, 278.0], [53.2, 278.0], [53.3, 278.0], [53.4, 278.0], [53.5, 278.0], [53.6, 279.0], [53.7, 279.0], [53.8, 279.0], [53.9, 279.0], [54.0, 279.0], [54.1, 279.0], [54.2, 279.0], [54.3, 279.0], [54.4, 279.0], [54.5, 280.0], [54.6, 280.0], [54.7, 280.0], [54.8, 280.0], [54.9, 280.0], [55.0, 280.0], [55.1, 280.0], [55.2, 280.0], [55.3, 281.0], [55.4, 281.0], [55.5, 281.0], [55.6, 281.0], [55.7, 281.0], [55.8, 281.0], [55.9, 281.0], [56.0, 281.0], [56.1, 281.0], [56.2, 282.0], [56.3, 282.0], [56.4, 282.0], [56.5, 282.0], [56.6, 282.0], [56.7, 282.0], [56.8, 282.0], [56.9, 283.0], [57.0, 283.0], [57.1, 283.0], [57.2, 283.0], [57.3, 283.0], [57.4, 283.0], [57.5, 283.0], [57.6, 283.0], [57.7, 284.0], [57.8, 284.0], [57.9, 284.0], [58.0, 284.0], [58.1, 284.0], [58.2, 284.0], [58.3, 284.0], [58.4, 284.0], [58.5, 284.0], [58.6, 285.0], [58.7, 285.0], [58.8, 285.0], [58.9, 285.0], [59.0, 285.0], [59.1, 285.0], [59.2, 285.0], [59.3, 285.0], [59.4, 285.0], [59.5, 286.0], [59.6, 286.0], [59.7, 286.0], [59.8, 286.0], [59.9, 286.0], [60.0, 286.0], [60.1, 286.0], [60.2, 286.0], [60.3, 287.0], [60.4, 287.0], [60.5, 287.0], [60.6, 287.0], [60.7, 287.0], [60.8, 287.0], [60.9, 287.0], [61.0, 287.0], [61.1, 288.0], [61.2, 288.0], [61.3, 288.0], [61.4, 288.0], [61.5, 288.0], [61.6, 288.0], [61.7, 288.0], [61.8, 288.0], [61.9, 289.0], [62.0, 289.0], [62.1, 289.0], [62.2, 289.0], [62.3, 289.0], [62.4, 289.0], [62.5, 289.0], [62.6, 289.0], [62.7, 290.0], [62.8, 290.0], [62.9, 290.0], [63.0, 290.0], [63.1, 290.0], [63.2, 290.0], [63.3, 290.0], [63.4, 290.0], [63.5, 291.0], [63.6, 291.0], [63.7, 291.0], [63.8, 291.0], [63.9, 291.0], [64.0, 291.0], [64.1, 291.0], [64.2, 292.0], [64.3, 292.0], [64.4, 292.0], [64.5, 292.0], [64.6, 292.0], [64.7, 292.0], [64.8, 292.0], [64.9, 292.0], [65.0, 293.0], [65.1, 293.0], [65.2, 293.0], [65.3, 293.0], [65.4, 293.0], [65.5, 293.0], [65.6, 293.0], [65.7, 294.0], [65.8, 294.0], [65.9, 294.0], [66.0, 294.0], [66.1, 294.0], [66.2, 294.0], [66.3, 294.0], [66.4, 295.0], [66.5, 295.0], [66.6, 295.0], [66.7, 295.0], [66.8, 295.0], [66.9, 295.0], [67.0, 295.0], [67.1, 295.0], [67.2, 296.0], [67.3, 296.0], [67.4, 296.0], [67.5, 296.0], [67.6, 296.0], [67.7, 296.0], [67.8, 296.0], [67.9, 297.0], [68.0, 297.0], [68.1, 297.0], [68.2, 297.0], [68.3, 297.0], [68.4, 297.0], [68.5, 297.0], [68.6, 298.0], [68.7, 298.0], [68.8, 298.0], [68.9, 298.0], [69.0, 298.0], [69.1, 298.0], [69.2, 298.0], [69.3, 298.0], [69.4, 299.0], [69.5, 299.0], [69.6, 299.0], [69.7, 299.0], [69.8, 299.0], [69.9, 299.0], [70.0, 299.0], [70.1, 300.0], [70.2, 300.0], [70.3, 300.0], [70.4, 300.0], [70.5, 300.0], [70.6, 300.0], [70.7, 300.0], [70.8, 300.0], [70.9, 301.0], [71.0, 301.0], [71.1, 301.0], [71.2, 301.0], [71.3, 301.0], [71.4, 301.0], [71.5, 301.0], [71.6, 302.0], [71.7, 302.0], [71.8, 302.0], [71.9, 302.0], [72.0, 302.0], [72.1, 302.0], [72.2, 302.0], [72.3, 303.0], [72.4, 303.0], [72.5, 303.0], [72.6, 303.0], [72.7, 303.0], [72.8, 303.0], [72.9, 304.0], [73.0, 304.0], [73.1, 304.0], [73.2, 304.0], [73.3, 304.0], [73.4, 304.0], [73.5, 304.0], [73.6, 305.0], [73.7, 305.0], [73.8, 305.0], [73.9, 305.0], [74.0, 305.0], [74.1, 305.0], [74.2, 306.0], [74.3, 306.0], [74.4, 306.0], [74.5, 306.0], [74.6, 306.0], [74.7, 306.0], [74.8, 306.0], [74.9, 307.0], [75.0, 307.0], [75.1, 307.0], [75.2, 307.0], [75.3, 307.0], [75.4, 307.0], [75.5, 307.0], [75.6, 308.0], [75.7, 308.0], [75.8, 308.0], [75.9, 308.0], [76.0, 308.0], [76.1, 308.0], [76.2, 309.0], [76.3, 309.0], [76.4, 309.0], [76.5, 309.0], [76.6, 309.0], [76.7, 309.0], [76.8, 310.0], [76.9, 310.0], [77.0, 310.0], [77.1, 310.0], [77.2, 310.0], [77.3, 310.0], [77.4, 310.0], [77.5, 311.0], [77.6, 311.0], [77.7, 311.0], [77.8, 311.0], [77.9, 311.0], [78.0, 312.0], [78.1, 312.0], [78.2, 312.0], [78.3, 312.0], [78.4, 312.0], [78.5, 312.0], [78.6, 313.0], [78.7, 313.0], [78.8, 313.0], [78.9, 313.0], [79.0, 313.0], [79.1, 314.0], [79.2, 314.0], [79.3, 314.0], [79.4, 314.0], [79.5, 314.0], [79.6, 315.0], [79.7, 315.0], [79.8, 315.0], [79.9, 315.0], [80.0, 315.0], [80.1, 315.0], [80.2, 316.0], [80.3, 316.0], [80.4, 316.0], [80.5, 316.0], [80.6, 316.0], [80.7, 317.0], [80.8, 317.0], [80.9, 317.0], [81.0, 317.0], [81.1, 317.0], [81.2, 318.0], [81.3, 318.0], [81.4, 318.0], [81.5, 318.0], [81.6, 318.0], [81.7, 319.0], [81.8, 319.0], [81.9, 319.0], [82.0, 319.0], [82.1, 319.0], [82.2, 320.0], [82.3, 320.0], [82.4, 320.0], [82.5, 320.0], [82.6, 320.0], [82.7, 321.0], [82.8, 321.0], [82.9, 321.0], [83.0, 321.0], [83.1, 321.0], [83.2, 322.0], [83.3, 322.0], [83.4, 322.0], [83.5, 322.0], [83.6, 322.0], [83.7, 322.0], [83.8, 323.0], [83.9, 323.0], [84.0, 323.0], [84.1, 323.0], [84.2, 324.0], [84.3, 324.0], [84.4, 324.0], [84.5, 324.0], [84.6, 324.0], [84.7, 325.0], [84.8, 325.0], [84.9, 325.0], [85.0, 325.0], [85.1, 325.0], [85.2, 326.0], [85.3, 326.0], [85.4, 326.0], [85.5, 326.0], [85.6, 327.0], [85.7, 327.0], [85.8, 327.0], [85.9, 327.0], [86.0, 327.0], [86.1, 327.0], [86.2, 328.0], [86.3, 328.0], [86.4, 328.0], [86.5, 329.0], [86.6, 329.0], [86.7, 329.0], [86.8, 329.0], [86.9, 330.0], [87.0, 330.0], [87.1, 330.0], [87.2, 331.0], [87.3, 331.0], [87.4, 331.0], [87.5, 331.0], [87.6, 331.0], [87.7, 332.0], [87.8, 332.0], [87.9, 332.0], [88.0, 332.0], [88.1, 333.0], [88.2, 333.0], [88.3, 333.0], [88.4, 333.0], [88.5, 334.0], [88.6, 334.0], [88.7, 334.0], [88.8, 335.0], [88.9, 335.0], [89.0, 335.0], [89.1, 336.0], [89.2, 336.0], [89.3, 336.0], [89.4, 337.0], [89.5, 337.0], [89.6, 337.0], [89.7, 338.0], [89.8, 338.0], [89.9, 338.0], [90.0, 338.0], [90.1, 339.0], [90.2, 339.0], [90.3, 339.0], [90.4, 340.0], [90.5, 340.0], [90.6, 340.0], [90.7, 341.0], [90.8, 341.0], [90.9, 341.0], [91.0, 341.0], [91.1, 342.0], [91.2, 342.0], [91.3, 342.0], [91.4, 343.0], [91.5, 343.0], [91.6, 343.0], [91.7, 344.0], [91.8, 344.0], [91.9, 344.0], [92.0, 345.0], [92.1, 345.0], [92.2, 345.0], [92.3, 346.0], [92.4, 346.0], [92.5, 346.0], [92.6, 347.0], [92.7, 347.0], [92.8, 348.0], [92.9, 348.0], [93.0, 348.0], [93.1, 349.0], [93.2, 349.0], [93.3, 350.0], [93.4, 350.0], [93.5, 351.0], [93.6, 351.0], [93.7, 352.0], [93.8, 352.0], [93.9, 353.0], [94.0, 353.0], [94.1, 354.0], [94.2, 354.0], [94.3, 355.0], [94.4, 355.0], [94.5, 355.0], [94.6, 356.0], [94.7, 356.0], [94.8, 357.0], [94.9, 357.0], [95.0, 358.0], [95.1, 359.0], [95.2, 359.0], [95.3, 360.0], [95.4, 360.0], [95.5, 361.0], [95.6, 361.0], [95.7, 362.0], [95.8, 362.0], [95.9, 363.0], [96.0, 364.0], [96.1, 364.0], [96.2, 365.0], [96.3, 366.0], [96.4, 367.0], [96.5, 367.0], [96.6, 368.0], [96.7, 369.0], [96.8, 369.0], [96.9, 370.0], [97.0, 371.0], [97.1, 371.0], [97.2, 372.0], [97.3, 373.0], [97.4, 374.0], [97.5, 375.0], [97.6, 376.0], [97.7, 377.0], [97.8, 378.0], [97.9, 379.0], [98.0, 380.0], [98.1, 381.0], [98.2, 382.0], [98.3, 384.0], [98.4, 385.0], [98.5, 387.0], [98.6, 389.0], [98.7, 390.0], [98.8, 392.0], [98.9, 394.0], [99.0, 396.0], [99.1, 399.0], [99.2, 401.0], [99.3, 404.0], [99.4, 408.0], [99.5, 411.0], [99.6, 414.0], [99.7, 422.0], [99.8, 432.0], [99.9, 450.0]], "isOverall": false, "label": "extract", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 5.0, "minX": 100.0, "maxY": 20850.0, "series": [{"data": [[300.0, 9296.0], [100.0, 1572.0], [200.0, 20850.0], [400.0, 277.0], [500.0, 5.0]], "isOverall": false, "label": "extract", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 5.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 31995.0, "series": [{"data": [[0.0, 31995.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 5.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 4.538461538461536, "minX": 1.66602732E12, "maxY": 16.0, "series": [{"data": [[1.66602792E12, 4.538461538461536], [1.66602774E12, 16.0], [1.66602756E12, 16.0], [1.66602738E12, 16.0], [1.66602786E12, 12.665685312397775], [1.66602768E12, 16.0], [1.6660275E12, 16.0], [1.66602732E12, 15.859327217125385], [1.6660278E12, 15.613325031133229], [1.66602762E12, 16.0], [1.66602744E12, 16.0]], "isOverall": false, "label": "16", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66602792E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 189.27272727272722, "minX": 1.0, "maxY": 283.1979291267948, "series": [{"data": [[8.0, 196.00000000000003], [2.0, 199.43333333333334], [9.0, 204.90099009900982], [10.0, 206.60407239818989], [11.0, 213.46979865771812], [12.0, 224.69841269841274], [3.0, 197.6851851851851], [13.0, 235.5925155925155], [14.0, 256.5801354401807], [15.0, 273.83853054250324], [4.0, 192.9375], [16.0, 283.1979291267948], [1.0, 189.27272727272722], [5.0, 192.4583333333333], [6.0, 195.38189533239049], [7.0, 207.0]], "isOverall": false, "label": "extract", "isController": false}, {"data": [[15.30775000000005, 276.3575937499988]], "isOverall": false, "label": "extract-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 16.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 0.0, "minX": 1.66602732E12, "maxY": 7318446.133333334, "series": [{"data": [[1.66602792E12, 2029528.6], [1.66602774E12, 6818785.516666667], [1.66602756E12, 7305508.116666666], [1.66602738E12, 7284806.933333334], [1.66602786E12, 6493621.483333333], [1.66602768E12, 7068599.866666666], [1.6660275E12, 7318446.133333334], [1.66602732E12, 2065300.2], [1.6660278E12, 6772709.466666667], [1.66602762E12, 7046970.516666667], [1.66602744E12, 7307589.833333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.66602792E12, 0.0], [1.66602774E12, 0.0], [1.66602756E12, 0.0], [1.66602738E12, 0.0], [1.66602786E12, 0.0], [1.66602768E12, 0.0], [1.6660275E12, 0.0], [1.66602732E12, 0.0], [1.6660278E12, 0.0], [1.66602762E12, 0.0], [1.66602744E12, 0.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66602792E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 195.47453954496206, "minX": 1.66602732E12, "maxY": 295.0774907749071, "series": [{"data": [[1.66602792E12, 195.47453954496206], [1.66602774E12, 295.0774907749071], [1.66602756E12, 276.318548387097], [1.66602738E12, 277.1173410404628], [1.66602786E12, 241.39417729800508], [1.66602768E12, 284.95543672014156], [1.6660275E12, 275.98130572332445], [1.66602732E12, 277.544342507645], [1.6660278E12, 291.68462017434564], [1.66602762E12, 288.46033653846155], [1.66602744E12, 276.3182603686633]], "isOverall": false, "label": "extract", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66602792E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 193.25135427952358, "minX": 1.66602732E12, "maxY": 293.17158671586736, "series": [{"data": [[1.66602792E12, 193.25135427952358], [1.66602774E12, 293.17158671586736], [1.66602756E12, 274.6589861751152], [1.66602738E12, 275.4390173410412], [1.66602786E12, 239.52404317958852], [1.66602768E12, 283.11497326203147], [1.6660275E12, 274.30687374173067], [1.66602732E12, 275.9133537206939], [1.6660278E12, 289.79514321295255], [1.66602762E12, 286.65144230769226], [1.66602744E12, 274.6471774193546]], "isOverall": false, "label": "extract", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66602792E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.66602732E12, "maxY": 4.9E-324, "series": [{"data": [[1.66602792E12, 0.0], [1.66602774E12, 0.0], [1.66602756E12, 0.0], [1.66602738E12, 0.0], [1.66602786E12, 0.0], [1.66602768E12, 0.0], [1.6660275E12, 0.0], [1.66602732E12, 0.0], [1.6660278E12, 0.0], [1.66602762E12, 0.0], [1.66602744E12, 0.0]], "isOverall": false, "label": "extract", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66602792E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 123.0, "minX": 1.66602732E12, "maxY": 562.0, "series": [{"data": [[1.66602792E12, 283.0], [1.66602774E12, 490.0], [1.66602756E12, 428.0], [1.66602738E12, 476.0], [1.66602786E12, 432.0], [1.66602768E12, 457.0], [1.6660275E12, 459.0], [1.66602732E12, 445.0], [1.6660278E12, 562.0], [1.66602762E12, 467.0], [1.66602744E12, 462.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.66602792E12, 135.0], [1.66602774E12, 173.0], [1.66602756E12, 145.0], [1.66602738E12, 159.0], [1.66602786E12, 123.0], [1.66602768E12, 148.0], [1.6660275E12, 161.0], [1.66602732E12, 132.0], [1.6660278E12, 163.0], [1.66602762E12, 163.0], [1.66602744E12, 166.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.66602792E12, 224.0], [1.66602774E12, 357.0], [1.66602756E12, 330.7000000000003], [1.66602738E12, 331.0], [1.66602786E12, 303.0], [1.66602768E12, 346.0], [1.6660275E12, 331.0], [1.66602732E12, 336.0], [1.6660278E12, 356.0], [1.66602762E12, 346.0], [1.66602744E12, 331.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.66602792E12, 256.76], [1.66602774E12, 410.0], [1.66602756E12, 383.0], [1.66602738E12, 380.0], [1.66602786E12, 356.4200000000001], [1.66602768E12, 401.0], [1.6660275E12, 385.0], [1.66602732E12, 395.17999999999995], [1.6660278E12, 435.0], [1.66602762E12, 397.0], [1.66602744E12, 386.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.66602792E12, 233.79999999999995], [1.66602774E12, 376.3499999999999], [1.66602756E12, 350.0], [1.66602738E12, 348.0], [1.66602786E12, 321.0], [1.66602768E12, 364.0], [1.6660275E12, 350.0999999999999], [1.66602732E12, 355.0], [1.6660278E12, 379.0], [1.66602762E12, 364.0], [1.66602744E12, 349.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66602792E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 185.0, "minX": 5.0, "maxY": 384.5, "series": [{"data": [[32.0, 197.0], [33.0, 190.0], [38.0, 194.5], [40.0, 191.5], [43.0, 280.0], [42.0, 384.5], [45.0, 258.0], [47.0, 205.5], [48.0, 213.0], [49.0, 271.0], [50.0, 295.0], [51.0, 276.0], [52.0, 295.0], [53.0, 291.0], [55.0, 280.0], [54.0, 283.0], [56.0, 277.0], [57.0, 276.0], [58.0, 274.0], [59.0, 271.0], [60.0, 269.0], [61.0, 267.0], [62.0, 267.5], [63.0, 260.0], [5.0, 193.0], [6.0, 185.0], [9.0, 198.0], [10.0, 202.5], [11.0, 195.0], [12.0, 188.0], [13.0, 205.0], [15.0, 195.0], [16.0, 204.0], [17.0, 200.0], [20.0, 198.5], [21.0, 196.0], [22.0, 195.5], [28.0, 198.0], [29.0, 199.0], [30.0, 202.5], [31.0, 199.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 63.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 182.0, "minX": 5.0, "maxY": 382.5, "series": [{"data": [[32.0, 195.0], [33.0, 189.0], [38.0, 192.0], [40.0, 190.0], [43.0, 279.0], [42.0, 382.5], [45.0, 256.0], [47.0, 204.0], [48.0, 211.0], [49.0, 269.0], [50.0, 293.0], [51.0, 274.0], [52.0, 294.0], [53.0, 289.0], [55.0, 278.0], [54.0, 282.0], [56.0, 275.0], [57.0, 275.0], [58.0, 272.0], [59.0, 269.0], [60.0, 268.0], [61.0, 266.0], [62.0, 266.0], [63.0, 258.0], [5.0, 191.0], [6.0, 182.0], [9.0, 196.0], [10.0, 200.0], [11.0, 192.5], [12.0, 187.0], [13.0, 204.0], [15.0, 192.0], [16.0, 201.5], [17.0, 197.0], [20.0, 196.5], [21.0, 192.5], [22.0, 193.0], [28.0, 195.5], [29.0, 197.0], [30.0, 200.5], [31.0, 198.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 63.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 15.283333333333333, "minX": 1.66602732E12, "maxY": 57.95, "series": [{"data": [[1.66602792E12, 15.283333333333333], [1.66602774E12, 54.2], [1.66602756E12, 57.86666666666667], [1.66602738E12, 57.68333333333333], [1.66602786E12, 50.8], [1.66602768E12, 56.1], [1.6660275E12, 57.95], [1.66602732E12, 16.6], [1.6660278E12, 53.516666666666666], [1.66602762E12, 55.46666666666667], [1.66602744E12, 57.86666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66602792E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 15.383333333333333, "minX": 1.66602732E12, "maxY": 57.95, "series": [{"data": [[1.66602792E12, 15.383333333333333], [1.66602774E12, 54.2], [1.66602756E12, 57.86666666666667], [1.66602738E12, 57.666666666666664], [1.66602786E12, 50.95], [1.66602768E12, 56.1], [1.6660275E12, 57.95], [1.66602732E12, 16.35], [1.6660278E12, 53.53333333333333], [1.66602762E12, 55.46666666666667], [1.66602744E12, 57.86666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66602792E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 15.383333333333333, "minX": 1.66602732E12, "maxY": 57.95, "series": [{"data": [[1.66602792E12, 15.383333333333333], [1.66602774E12, 54.2], [1.66602756E12, 57.86666666666667], [1.66602738E12, 57.666666666666664], [1.66602786E12, 50.95], [1.66602768E12, 56.1], [1.6660275E12, 57.95], [1.66602732E12, 16.35], [1.6660278E12, 53.53333333333333], [1.66602762E12, 55.46666666666667], [1.66602744E12, 57.86666666666667]], "isOverall": false, "label": "extract-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66602792E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 15.383333333333333, "minX": 1.66602732E12, "maxY": 57.95, "series": [{"data": [[1.66602792E12, 15.383333333333333], [1.66602774E12, 54.2], [1.66602756E12, 57.86666666666667], [1.66602738E12, 57.666666666666664], [1.66602786E12, 50.95], [1.66602768E12, 56.1], [1.6660275E12, 57.95], [1.66602732E12, 16.35], [1.6660278E12, 53.53333333333333], [1.66602762E12, 55.46666666666667], [1.66602744E12, 57.86666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66602792E12, "title": "Total Transactions Per Second"}},
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

