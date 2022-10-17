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
        data: {"result": {"minY": 122.0, "minX": 0.0, "maxY": 1949.0, "series": [{"data": [[0.0, 122.0], [0.1, 138.0], [0.2, 144.0], [0.3, 147.0], [0.4, 149.0], [0.5, 151.0], [0.6, 152.0], [0.7, 153.0], [0.8, 154.0], [0.9, 155.0], [1.0, 156.0], [1.1, 156.0], [1.2, 157.0], [1.3, 158.0], [1.4, 158.0], [1.5, 159.0], [1.6, 159.0], [1.7, 160.0], [1.8, 160.0], [1.9, 161.0], [2.0, 161.0], [2.1, 162.0], [2.2, 162.0], [2.3, 163.0], [2.4, 163.0], [2.5, 164.0], [2.6, 164.0], [2.7, 165.0], [2.8, 165.0], [2.9, 165.0], [3.0, 166.0], [3.1, 166.0], [3.2, 167.0], [3.3, 167.0], [3.4, 167.0], [3.5, 168.0], [3.6, 168.0], [3.7, 168.0], [3.8, 169.0], [3.9, 169.0], [4.0, 170.0], [4.1, 170.0], [4.2, 170.0], [4.3, 170.0], [4.4, 171.0], [4.5, 171.0], [4.6, 171.0], [4.7, 172.0], [4.8, 172.0], [4.9, 172.0], [5.0, 172.0], [5.1, 173.0], [5.2, 173.0], [5.3, 173.0], [5.4, 174.0], [5.5, 174.0], [5.6, 174.0], [5.7, 175.0], [5.8, 175.0], [5.9, 175.0], [6.0, 176.0], [6.1, 176.0], [6.2, 176.0], [6.3, 176.0], [6.4, 177.0], [6.5, 177.0], [6.6, 177.0], [6.7, 178.0], [6.8, 178.0], [6.9, 178.0], [7.0, 178.0], [7.1, 179.0], [7.2, 179.0], [7.3, 179.0], [7.4, 179.0], [7.5, 180.0], [7.6, 180.0], [7.7, 180.0], [7.8, 180.0], [7.9, 181.0], [8.0, 181.0], [8.1, 181.0], [8.2, 182.0], [8.3, 182.0], [8.4, 182.0], [8.5, 182.0], [8.6, 183.0], [8.7, 183.0], [8.8, 183.0], [8.9, 183.0], [9.0, 184.0], [9.1, 184.0], [9.2, 184.0], [9.3, 185.0], [9.4, 185.0], [9.5, 185.0], [9.6, 185.0], [9.7, 185.0], [9.8, 186.0], [9.9, 186.0], [10.0, 186.0], [10.1, 186.0], [10.2, 186.0], [10.3, 187.0], [10.4, 187.0], [10.5, 187.0], [10.6, 187.0], [10.7, 188.0], [10.8, 188.0], [10.9, 188.0], [11.0, 188.0], [11.1, 188.0], [11.2, 189.0], [11.3, 189.0], [11.4, 189.0], [11.5, 189.0], [11.6, 189.0], [11.7, 190.0], [11.8, 190.0], [11.9, 190.0], [12.0, 190.0], [12.1, 190.0], [12.2, 191.0], [12.3, 191.0], [12.4, 191.0], [12.5, 191.0], [12.6, 191.0], [12.7, 191.0], [12.8, 192.0], [12.9, 192.0], [13.0, 192.0], [13.1, 192.0], [13.2, 192.0], [13.3, 193.0], [13.4, 193.0], [13.5, 193.0], [13.6, 193.0], [13.7, 193.0], [13.8, 193.0], [13.9, 194.0], [14.0, 194.0], [14.1, 194.0], [14.2, 194.0], [14.3, 194.0], [14.4, 194.0], [14.5, 195.0], [14.6, 195.0], [14.7, 195.0], [14.8, 195.0], [14.9, 195.0], [15.0, 195.0], [15.1, 195.0], [15.2, 196.0], [15.3, 196.0], [15.4, 196.0], [15.5, 196.0], [15.6, 196.0], [15.7, 196.0], [15.8, 197.0], [15.9, 197.0], [16.0, 197.0], [16.1, 197.0], [16.2, 197.0], [16.3, 197.0], [16.4, 198.0], [16.5, 198.0], [16.6, 198.0], [16.7, 198.0], [16.8, 198.0], [16.9, 198.0], [17.0, 198.0], [17.1, 199.0], [17.2, 199.0], [17.3, 199.0], [17.4, 199.0], [17.5, 199.0], [17.6, 199.0], [17.7, 199.0], [17.8, 199.0], [17.9, 200.0], [18.0, 200.0], [18.1, 200.0], [18.2, 200.0], [18.3, 200.0], [18.4, 200.0], [18.5, 200.0], [18.6, 200.0], [18.7, 201.0], [18.8, 201.0], [18.9, 201.0], [19.0, 201.0], [19.1, 201.0], [19.2, 201.0], [19.3, 201.0], [19.4, 202.0], [19.5, 202.0], [19.6, 202.0], [19.7, 202.0], [19.8, 202.0], [19.9, 202.0], [20.0, 202.0], [20.1, 202.0], [20.2, 203.0], [20.3, 203.0], [20.4, 203.0], [20.5, 203.0], [20.6, 203.0], [20.7, 203.0], [20.8, 203.0], [20.9, 203.0], [21.0, 203.0], [21.1, 204.0], [21.2, 204.0], [21.3, 204.0], [21.4, 204.0], [21.5, 204.0], [21.6, 204.0], [21.7, 204.0], [21.8, 204.0], [21.9, 204.0], [22.0, 205.0], [22.1, 205.0], [22.2, 205.0], [22.3, 205.0], [22.4, 205.0], [22.5, 205.0], [22.6, 205.0], [22.7, 205.0], [22.8, 206.0], [22.9, 206.0], [23.0, 206.0], [23.1, 206.0], [23.2, 206.0], [23.3, 206.0], [23.4, 206.0], [23.5, 206.0], [23.6, 206.0], [23.7, 207.0], [23.8, 207.0], [23.9, 207.0], [24.0, 207.0], [24.1, 207.0], [24.2, 207.0], [24.3, 207.0], [24.4, 207.0], [24.5, 207.0], [24.6, 208.0], [24.7, 208.0], [24.8, 208.0], [24.9, 208.0], [25.0, 208.0], [25.1, 208.0], [25.2, 208.0], [25.3, 208.0], [25.4, 208.0], [25.5, 209.0], [25.6, 209.0], [25.7, 209.0], [25.8, 209.0], [25.9, 209.0], [26.0, 209.0], [26.1, 209.0], [26.2, 209.0], [26.3, 209.0], [26.4, 209.0], [26.5, 209.0], [26.6, 210.0], [26.7, 210.0], [26.8, 210.0], [26.9, 210.0], [27.0, 210.0], [27.1, 210.0], [27.2, 210.0], [27.3, 210.0], [27.4, 210.0], [27.5, 210.0], [27.6, 210.0], [27.7, 211.0], [27.8, 211.0], [27.9, 211.0], [28.0, 211.0], [28.1, 211.0], [28.2, 211.0], [28.3, 211.0], [28.4, 211.0], [28.5, 211.0], [28.6, 212.0], [28.7, 212.0], [28.8, 212.0], [28.9, 212.0], [29.0, 212.0], [29.1, 212.0], [29.2, 212.0], [29.3, 212.0], [29.4, 212.0], [29.5, 212.0], [29.6, 212.0], [29.7, 213.0], [29.8, 213.0], [29.9, 213.0], [30.0, 213.0], [30.1, 213.0], [30.2, 213.0], [30.3, 213.0], [30.4, 213.0], [30.5, 213.0], [30.6, 213.0], [30.7, 213.0], [30.8, 214.0], [30.9, 214.0], [31.0, 214.0], [31.1, 214.0], [31.2, 214.0], [31.3, 214.0], [31.4, 214.0], [31.5, 214.0], [31.6, 214.0], [31.7, 214.0], [31.8, 214.0], [31.9, 215.0], [32.0, 215.0], [32.1, 215.0], [32.2, 215.0], [32.3, 215.0], [32.4, 215.0], [32.5, 215.0], [32.6, 215.0], [32.7, 215.0], [32.8, 215.0], [32.9, 215.0], [33.0, 216.0], [33.1, 216.0], [33.2, 216.0], [33.3, 216.0], [33.4, 216.0], [33.5, 216.0], [33.6, 216.0], [33.7, 216.0], [33.8, 216.0], [33.9, 216.0], [34.0, 216.0], [34.1, 217.0], [34.2, 217.0], [34.3, 217.0], [34.4, 217.0], [34.5, 217.0], [34.6, 217.0], [34.7, 217.0], [34.8, 217.0], [34.9, 217.0], [35.0, 217.0], [35.1, 217.0], [35.2, 217.0], [35.3, 218.0], [35.4, 218.0], [35.5, 218.0], [35.6, 218.0], [35.7, 218.0], [35.8, 218.0], [35.9, 218.0], [36.0, 218.0], [36.1, 218.0], [36.2, 218.0], [36.3, 218.0], [36.4, 219.0], [36.5, 219.0], [36.6, 219.0], [36.7, 219.0], [36.8, 219.0], [36.9, 219.0], [37.0, 219.0], [37.1, 219.0], [37.2, 219.0], [37.3, 219.0], [37.4, 220.0], [37.5, 220.0], [37.6, 220.0], [37.7, 220.0], [37.8, 220.0], [37.9, 220.0], [38.0, 220.0], [38.1, 220.0], [38.2, 220.0], [38.3, 220.0], [38.4, 220.0], [38.5, 221.0], [38.6, 221.0], [38.7, 221.0], [38.8, 221.0], [38.9, 221.0], [39.0, 221.0], [39.1, 221.0], [39.2, 221.0], [39.3, 221.0], [39.4, 221.0], [39.5, 221.0], [39.6, 222.0], [39.7, 222.0], [39.8, 222.0], [39.9, 222.0], [40.0, 222.0], [40.1, 222.0], [40.2, 222.0], [40.3, 222.0], [40.4, 222.0], [40.5, 222.0], [40.6, 222.0], [40.7, 223.0], [40.8, 223.0], [40.9, 223.0], [41.0, 223.0], [41.1, 223.0], [41.2, 223.0], [41.3, 223.0], [41.4, 223.0], [41.5, 223.0], [41.6, 223.0], [41.7, 223.0], [41.8, 224.0], [41.9, 224.0], [42.0, 224.0], [42.1, 224.0], [42.2, 224.0], [42.3, 224.0], [42.4, 224.0], [42.5, 224.0], [42.6, 224.0], [42.7, 224.0], [42.8, 225.0], [42.9, 225.0], [43.0, 225.0], [43.1, 225.0], [43.2, 225.0], [43.3, 225.0], [43.4, 225.0], [43.5, 225.0], [43.6, 225.0], [43.7, 225.0], [43.8, 225.0], [43.9, 226.0], [44.0, 226.0], [44.1, 226.0], [44.2, 226.0], [44.3, 226.0], [44.4, 226.0], [44.5, 226.0], [44.6, 226.0], [44.7, 226.0], [44.8, 226.0], [44.9, 227.0], [45.0, 227.0], [45.1, 227.0], [45.2, 227.0], [45.3, 227.0], [45.4, 227.0], [45.5, 227.0], [45.6, 227.0], [45.7, 227.0], [45.8, 227.0], [45.9, 228.0], [46.0, 228.0], [46.1, 228.0], [46.2, 228.0], [46.3, 228.0], [46.4, 228.0], [46.5, 228.0], [46.6, 228.0], [46.7, 228.0], [46.8, 228.0], [46.9, 228.0], [47.0, 229.0], [47.1, 229.0], [47.2, 229.0], [47.3, 229.0], [47.4, 229.0], [47.5, 229.0], [47.6, 229.0], [47.7, 229.0], [47.8, 229.0], [47.9, 229.0], [48.0, 229.0], [48.1, 230.0], [48.2, 230.0], [48.3, 230.0], [48.4, 230.0], [48.5, 230.0], [48.6, 230.0], [48.7, 230.0], [48.8, 230.0], [48.9, 230.0], [49.0, 230.0], [49.1, 231.0], [49.2, 231.0], [49.3, 231.0], [49.4, 231.0], [49.5, 231.0], [49.6, 231.0], [49.7, 231.0], [49.8, 231.0], [49.9, 231.0], [50.0, 231.0], [50.1, 232.0], [50.2, 232.0], [50.3, 232.0], [50.4, 232.0], [50.5, 232.0], [50.6, 232.0], [50.7, 232.0], [50.8, 232.0], [50.9, 232.0], [51.0, 232.0], [51.1, 233.0], [51.2, 233.0], [51.3, 233.0], [51.4, 233.0], [51.5, 233.0], [51.6, 233.0], [51.7, 233.0], [51.8, 233.0], [51.9, 233.0], [52.0, 233.0], [52.1, 234.0], [52.2, 234.0], [52.3, 234.0], [52.4, 234.0], [52.5, 234.0], [52.6, 234.0], [52.7, 234.0], [52.8, 234.0], [52.9, 234.0], [53.0, 235.0], [53.1, 235.0], [53.2, 235.0], [53.3, 235.0], [53.4, 235.0], [53.5, 235.0], [53.6, 235.0], [53.7, 235.0], [53.8, 235.0], [53.9, 236.0], [54.0, 236.0], [54.1, 236.0], [54.2, 236.0], [54.3, 236.0], [54.4, 236.0], [54.5, 236.0], [54.6, 236.0], [54.7, 236.0], [54.8, 236.0], [54.9, 237.0], [55.0, 237.0], [55.1, 237.0], [55.2, 237.0], [55.3, 237.0], [55.4, 237.0], [55.5, 237.0], [55.6, 237.0], [55.7, 238.0], [55.8, 238.0], [55.9, 238.0], [56.0, 238.0], [56.1, 238.0], [56.2, 238.0], [56.3, 238.0], [56.4, 238.0], [56.5, 239.0], [56.6, 239.0], [56.7, 239.0], [56.8, 239.0], [56.9, 239.0], [57.0, 239.0], [57.1, 239.0], [57.2, 239.0], [57.3, 239.0], [57.4, 239.0], [57.5, 240.0], [57.6, 240.0], [57.7, 240.0], [57.8, 240.0], [57.9, 240.0], [58.0, 240.0], [58.1, 240.0], [58.2, 240.0], [58.3, 241.0], [58.4, 241.0], [58.5, 241.0], [58.6, 241.0], [58.7, 241.0], [58.8, 241.0], [58.9, 241.0], [59.0, 241.0], [59.1, 242.0], [59.2, 242.0], [59.3, 242.0], [59.4, 242.0], [59.5, 242.0], [59.6, 242.0], [59.7, 242.0], [59.8, 242.0], [59.9, 243.0], [60.0, 243.0], [60.1, 243.0], [60.2, 243.0], [60.3, 243.0], [60.4, 243.0], [60.5, 243.0], [60.6, 243.0], [60.7, 243.0], [60.8, 244.0], [60.9, 244.0], [61.0, 244.0], [61.1, 244.0], [61.2, 244.0], [61.3, 244.0], [61.4, 244.0], [61.5, 244.0], [61.6, 245.0], [61.7, 245.0], [61.8, 245.0], [61.9, 245.0], [62.0, 245.0], [62.1, 245.0], [62.2, 245.0], [62.3, 245.0], [62.4, 246.0], [62.5, 246.0], [62.6, 246.0], [62.7, 246.0], [62.8, 246.0], [62.9, 246.0], [63.0, 246.0], [63.1, 247.0], [63.2, 247.0], [63.3, 247.0], [63.4, 247.0], [63.5, 247.0], [63.6, 247.0], [63.7, 247.0], [63.8, 247.0], [63.9, 248.0], [64.0, 248.0], [64.1, 248.0], [64.2, 248.0], [64.3, 248.0], [64.4, 248.0], [64.5, 248.0], [64.6, 249.0], [64.7, 249.0], [64.8, 249.0], [64.9, 249.0], [65.0, 249.0], [65.1, 249.0], [65.2, 249.0], [65.3, 249.0], [65.4, 250.0], [65.5, 250.0], [65.6, 250.0], [65.7, 250.0], [65.8, 250.0], [65.9, 250.0], [66.0, 250.0], [66.1, 251.0], [66.2, 251.0], [66.3, 251.0], [66.4, 251.0], [66.5, 251.0], [66.6, 251.0], [66.7, 251.0], [66.8, 252.0], [66.9, 252.0], [67.0, 252.0], [67.1, 252.0], [67.2, 252.0], [67.3, 252.0], [67.4, 253.0], [67.5, 253.0], [67.6, 253.0], [67.7, 253.0], [67.8, 253.0], [67.9, 253.0], [68.0, 253.0], [68.1, 254.0], [68.2, 254.0], [68.3, 254.0], [68.4, 254.0], [68.5, 254.0], [68.6, 254.0], [68.7, 255.0], [68.8, 255.0], [68.9, 255.0], [69.0, 255.0], [69.1, 255.0], [69.2, 255.0], [69.3, 255.0], [69.4, 256.0], [69.5, 256.0], [69.6, 256.0], [69.7, 256.0], [69.8, 256.0], [69.9, 256.0], [70.0, 257.0], [70.1, 257.0], [70.2, 257.0], [70.3, 257.0], [70.4, 257.0], [70.5, 257.0], [70.6, 258.0], [70.7, 258.0], [70.8, 258.0], [70.9, 258.0], [71.0, 258.0], [71.1, 258.0], [71.2, 258.0], [71.3, 259.0], [71.4, 259.0], [71.5, 259.0], [71.6, 259.0], [71.7, 259.0], [71.8, 259.0], [71.9, 260.0], [72.0, 260.0], [72.1, 260.0], [72.2, 260.0], [72.3, 260.0], [72.4, 260.0], [72.5, 261.0], [72.6, 261.0], [72.7, 261.0], [72.8, 261.0], [72.9, 261.0], [73.0, 261.0], [73.1, 262.0], [73.2, 262.0], [73.3, 262.0], [73.4, 262.0], [73.5, 262.0], [73.6, 263.0], [73.7, 263.0], [73.8, 263.0], [73.9, 263.0], [74.0, 263.0], [74.1, 264.0], [74.2, 264.0], [74.3, 264.0], [74.4, 264.0], [74.5, 264.0], [74.6, 264.0], [74.7, 265.0], [74.8, 265.0], [74.9, 265.0], [75.0, 265.0], [75.1, 265.0], [75.2, 265.0], [75.3, 266.0], [75.4, 266.0], [75.5, 266.0], [75.6, 266.0], [75.7, 266.0], [75.8, 267.0], [75.9, 267.0], [76.0, 267.0], [76.1, 267.0], [76.2, 267.0], [76.3, 267.0], [76.4, 268.0], [76.5, 268.0], [76.6, 268.0], [76.7, 268.0], [76.8, 268.0], [76.9, 268.0], [77.0, 269.0], [77.1, 269.0], [77.2, 269.0], [77.3, 269.0], [77.4, 270.0], [77.5, 270.0], [77.6, 270.0], [77.7, 270.0], [77.8, 270.0], [77.9, 271.0], [78.0, 271.0], [78.1, 271.0], [78.2, 271.0], [78.3, 271.0], [78.4, 272.0], [78.5, 272.0], [78.6, 272.0], [78.7, 272.0], [78.8, 272.0], [78.9, 273.0], [79.0, 273.0], [79.1, 273.0], [79.2, 273.0], [79.3, 273.0], [79.4, 274.0], [79.5, 274.0], [79.6, 274.0], [79.7, 274.0], [79.8, 275.0], [79.9, 275.0], [80.0, 275.0], [80.1, 275.0], [80.2, 275.0], [80.3, 276.0], [80.4, 276.0], [80.5, 276.0], [80.6, 276.0], [80.7, 276.0], [80.8, 277.0], [80.9, 277.0], [81.0, 277.0], [81.1, 277.0], [81.2, 277.0], [81.3, 278.0], [81.4, 278.0], [81.5, 278.0], [81.6, 278.0], [81.7, 279.0], [81.8, 279.0], [81.9, 279.0], [82.0, 279.0], [82.1, 279.0], [82.2, 280.0], [82.3, 280.0], [82.4, 280.0], [82.5, 280.0], [82.6, 280.0], [82.7, 281.0], [82.8, 281.0], [82.9, 281.0], [83.0, 282.0], [83.1, 282.0], [83.2, 282.0], [83.3, 282.0], [83.4, 282.0], [83.5, 283.0], [83.6, 283.0], [83.7, 283.0], [83.8, 283.0], [83.9, 283.0], [84.0, 284.0], [84.1, 284.0], [84.2, 284.0], [84.3, 284.0], [84.4, 285.0], [84.5, 285.0], [84.6, 285.0], [84.7, 285.0], [84.8, 285.0], [84.9, 286.0], [85.0, 286.0], [85.1, 286.0], [85.2, 286.0], [85.3, 287.0], [85.4, 287.0], [85.5, 287.0], [85.6, 287.0], [85.7, 288.0], [85.8, 288.0], [85.9, 288.0], [86.0, 288.0], [86.1, 289.0], [86.2, 289.0], [86.3, 289.0], [86.4, 289.0], [86.5, 290.0], [86.6, 290.0], [86.7, 290.0], [86.8, 290.0], [86.9, 291.0], [87.0, 291.0], [87.1, 291.0], [87.2, 291.0], [87.3, 292.0], [87.4, 292.0], [87.5, 292.0], [87.6, 292.0], [87.7, 293.0], [87.8, 293.0], [87.9, 293.0], [88.0, 293.0], [88.1, 294.0], [88.2, 294.0], [88.3, 294.0], [88.4, 295.0], [88.5, 295.0], [88.6, 295.0], [88.7, 296.0], [88.8, 296.0], [88.9, 296.0], [89.0, 296.0], [89.1, 297.0], [89.2, 297.0], [89.3, 297.0], [89.4, 298.0], [89.5, 298.0], [89.6, 298.0], [89.7, 299.0], [89.8, 299.0], [89.9, 299.0], [90.0, 299.0], [90.1, 300.0], [90.2, 300.0], [90.3, 300.0], [90.4, 301.0], [90.5, 301.0], [90.6, 302.0], [90.7, 302.0], [90.8, 302.0], [90.9, 303.0], [91.0, 303.0], [91.1, 303.0], [91.2, 304.0], [91.3, 304.0], [91.4, 304.0], [91.5, 305.0], [91.6, 305.0], [91.7, 305.0], [91.8, 306.0], [91.9, 306.0], [92.0, 307.0], [92.1, 307.0], [92.2, 308.0], [92.3, 308.0], [92.4, 308.0], [92.5, 309.0], [92.6, 309.0], [92.7, 310.0], [92.8, 310.0], [92.9, 311.0], [93.0, 311.0], [93.1, 311.0], [93.2, 312.0], [93.3, 312.0], [93.4, 313.0], [93.5, 313.0], [93.6, 314.0], [93.7, 314.0], [93.8, 314.0], [93.9, 315.0], [94.0, 315.0], [94.1, 316.0], [94.2, 316.0], [94.3, 317.0], [94.4, 317.0], [94.5, 318.0], [94.6, 318.0], [94.7, 319.0], [94.8, 319.0], [94.9, 320.0], [95.0, 320.0], [95.1, 321.0], [95.2, 322.0], [95.3, 323.0], [95.4, 323.0], [95.5, 324.0], [95.6, 324.0], [95.7, 325.0], [95.8, 326.0], [95.9, 326.0], [96.0, 327.0], [96.1, 328.0], [96.2, 329.0], [96.3, 329.0], [96.4, 330.0], [96.5, 330.0], [96.6, 331.0], [96.7, 332.0], [96.8, 333.0], [96.9, 334.0], [97.0, 335.0], [97.1, 335.0], [97.2, 337.0], [97.3, 337.0], [97.4, 339.0], [97.5, 340.0], [97.6, 341.0], [97.7, 343.0], [97.8, 344.0], [97.9, 346.0], [98.0, 347.0], [98.1, 349.0], [98.2, 350.0], [98.3, 352.0], [98.4, 354.0], [98.5, 355.0], [98.6, 358.0], [98.7, 360.0], [98.8, 363.0], [98.9, 365.0], [99.0, 369.0], [99.1, 372.0], [99.2, 376.0], [99.3, 379.0], [99.4, 385.0], [99.5, 390.0], [99.6, 399.0], [99.7, 413.0], [99.8, 429.0], [99.9, 518.0]], "isOverall": false, "label": "extract", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 23108.0, "series": [{"data": [[600.0, 5.0], [700.0, 1.0], [200.0, 23108.0], [1000.0, 1.0], [1100.0, 2.0], [1200.0, 2.0], [300.0, 3062.0], [1300.0, 1.0], [1400.0, 2.0], [1500.0, 1.0], [1600.0, 2.0], [400.0, 87.0], [100.0, 5705.0], [1700.0, 2.0], [1800.0, 1.0], [1900.0, 2.0], [500.0, 16.0]], "isOverall": false, "label": "extract", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1900.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 8.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 31964.0, "series": [{"data": [[0.0, 31964.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 28.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 8.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 2.815891472868216, "minX": 1.66602804E12, "maxY": 16.0, "series": [{"data": [[1.6660284E12, 15.8100814663951], [1.6660281E12, 16.0], [1.66602858E12, 2.815891472868216], [1.66602828E12, 16.0], [1.66602846E12, 14.558020016229378], [1.66602816E12, 16.0], [1.66602834E12, 16.0], [1.66602804E12, 16.0], [1.66602852E12, 9.038366336633654], [1.66602822E12, 16.0]], "isOverall": false, "label": "16", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66602858E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 186.2091503267974, "minX": 1.0, "maxY": 243.6616565787882, "series": [{"data": [[8.0, 199.77551020408163], [2.0, 210.01492537313433], [9.0, 204.5545454545455], [10.0, 211.47093023255815], [11.0, 234.11538461538458], [12.0, 223.46907216494856], [3.0, 202.816091954023], [13.0, 228.29582806573944], [14.0, 234.87184115523473], [15.0, 237.37832188713054], [16.0, 243.6616565787882], [4.0, 195.8571428571428], [1.0, 186.2091503267974], [5.0, 186.43410852713177], [6.0, 194.62652068126542], [7.0, 193.09999999999997]], "isOverall": false, "label": "extract", "isController": false}, {"data": [[15.070156249999936, 239.12271875000016]], "isOverall": false, "label": "extract-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 16.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 0.0, "minX": 1.66602804E12, "maxY": 8552046.0, "series": [{"data": [[1.6660284E12, 8249843.033333333], [1.6660281E12, 8455105.2], [1.66602858E12, 1143366.2], [1.66602828E12, 8293183.65], [1.66602846E12, 7846748.433333334], [1.66602816E12, 8466774.083333334], [1.66602834E12, 8170403.283333333], [1.66602804E12, 3138666.183333333], [1.66602852E12, 5195713.0], [1.66602822E12, 8552046.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6660284E12, 0.0], [1.6660281E12, 0.0], [1.66602858E12, 0.0], [1.66602828E12, 0.0], [1.66602846E12, 0.0], [1.66602816E12, 0.0], [1.66602834E12, 0.0], [1.66602804E12, 0.0], [1.66602852E12, 0.0], [1.66602822E12, 0.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66602858E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 195.21124031007744, "minX": 1.66602804E12, "maxY": 287.7454789015417, "series": [{"data": [[1.6660284E12, 241.42846232179275], [1.6660281E12, 238.3798757763981], [1.66602858E12, 195.21124031007744], [1.66602828E12, 244.2913165266109], [1.66602846E12, 235.741682445226], [1.66602816E12, 238.07762896825432], [1.66602834E12, 247.00978624774643], [1.66602804E12, 287.7454789015417], [1.66602852E12, 208.0198019801979], [1.66602822E12, 235.486380368098]], "isOverall": false, "label": "extract", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66602858E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 192.98449612403093, "minX": 1.66602804E12, "maxY": 284.37508372404596, "series": [{"data": [[1.6660284E12, 239.70341140529536], [1.6660281E12, 236.56347826086906], [1.66602858E12, 192.98449612403093], [1.66602828E12, 242.5800865800865], [1.66602846E12, 234.0202867189614], [1.66602816E12, 236.37003968254004], [1.66602834E12, 245.3067216070046], [1.66602804E12, 284.37508372404596], [1.66602852E12, 206.0763201320133], [1.66602822E12, 233.8284662576689]], "isOverall": false, "label": "extract", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66602858E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.66602804E12, "maxY": 4.9E-324, "series": [{"data": [[1.6660284E12, 0.0], [1.6660281E12, 0.0], [1.66602858E12, 0.0], [1.66602828E12, 0.0], [1.66602846E12, 0.0], [1.66602816E12, 0.0], [1.66602834E12, 0.0], [1.66602804E12, 0.0], [1.66602852E12, 0.0], [1.66602822E12, 0.0]], "isOverall": false, "label": "extract", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66602858E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 122.0, "minX": 1.66602804E12, "maxY": 1949.0, "series": [{"data": [[1.6660284E12, 422.0], [1.6660281E12, 463.0], [1.66602858E12, 284.0], [1.66602828E12, 435.0], [1.66602846E12, 391.0], [1.66602816E12, 443.0], [1.66602834E12, 451.0], [1.66602804E12, 1949.0], [1.66602852E12, 333.0], [1.66602822E12, 404.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6660284E12, 130.0], [1.6660281E12, 122.0], [1.66602858E12, 126.0], [1.66602828E12, 125.0], [1.66602846E12, 125.0], [1.66602816E12, 123.0], [1.66602834E12, 134.0], [1.66602804E12, 163.0], [1.66602852E12, 124.0], [1.66602822E12, 133.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6660284E12, 300.0], [1.6660281E12, 299.0], [1.66602858E12, 223.0], [1.66602828E12, 305.0], [1.66602846E12, 288.0], [1.66602816E12, 300.0], [1.66602834E12, 313.0], [1.66602804E12, 361.0], [1.66602852E12, 251.0], [1.66602822E12, 292.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6660284E12, 355.0], [1.6660281E12, 370.0], [1.66602858E12, 260.65999999999997], [1.66602828E12, 364.0], [1.66602846E12, 337.0], [1.66602816E12, 361.0], [1.66602834E12, 366.15999999999985], [1.66602804E12, 1120.359999999997], [1.66602852E12, 290.75], [1.66602822E12, 346.2399999999998]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6660284E12, 319.0], [1.6660281E12, 319.0], [1.66602858E12, 234.0], [1.66602828E12, 325.0], [1.66602846E12, 304.0], [1.66602816E12, 320.3499999999999], [1.66602834E12, 331.0], [1.66602804E12, 408.7999999999997], [1.66602852E12, 266.0], [1.66602822E12, 309.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66602858E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 184.0, "minX": 5.0, "maxY": 442.0, "series": [{"data": [[5.0, 188.0], [6.0, 184.0], [8.0, 221.0], [9.0, 212.0], [10.0, 200.5], [12.0, 197.0], [14.0, 204.0], [15.0, 204.0], [18.0, 200.5], [19.0, 212.0], [20.0, 192.0], [21.0, 202.0], [25.0, 212.0], [26.0, 185.5], [27.0, 207.0], [28.0, 186.5], [29.0, 195.0], [30.0, 199.0], [31.0, 197.0], [33.0, 195.0], [32.0, 197.0], [34.0, 190.5], [38.0, 442.0], [39.0, 194.0], [40.0, 362.0], [41.0, 207.0], [42.0, 207.0], [45.0, 222.0], [47.0, 202.5], [46.0, 211.0], [49.0, 207.0], [48.0, 203.5], [51.0, 316.0], [50.0, 218.0], [53.0, 221.0], [52.0, 221.0], [55.0, 234.0], [54.0, 232.0], [57.0, 225.5], [56.0, 219.0], [58.0, 244.5], [59.0, 242.0], [60.0, 249.0], [61.0, 238.0], [63.0, 238.0], [62.0, 240.0], [64.0, 240.0], [65.0, 237.0], [66.0, 234.0], [67.0, 233.0], [69.0, 229.0], [68.0, 229.0], [70.0, 225.0], [71.0, 226.0], [72.0, 227.0], [73.0, 226.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 73.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 180.0, "minX": 5.0, "maxY": 436.5, "series": [{"data": [[5.0, 185.0], [6.0, 180.0], [8.0, 218.0], [9.0, 210.0], [10.0, 197.5], [12.0, 195.5], [14.0, 201.5], [15.0, 202.0], [18.0, 198.5], [19.0, 210.0], [20.0, 190.0], [21.0, 200.0], [25.0, 210.0], [26.0, 183.0], [27.0, 205.0], [28.0, 184.5], [29.0, 193.0], [30.0, 197.0], [31.0, 195.0], [33.0, 193.0], [32.0, 194.5], [34.0, 188.5], [38.0, 436.5], [39.0, 192.0], [40.0, 357.5], [41.0, 204.0], [42.0, 204.5], [45.0, 220.0], [47.0, 201.0], [46.0, 209.5], [49.0, 205.0], [48.0, 202.5], [51.0, 314.0], [50.0, 217.0], [53.0, 220.0], [52.0, 219.0], [55.0, 232.0], [54.0, 229.5], [57.0, 224.0], [56.0, 217.5], [58.0, 242.0], [59.0, 239.0], [60.0, 248.0], [61.0, 236.0], [63.0, 236.0], [62.0, 238.0], [64.0, 238.0], [65.0, 235.0], [66.0, 232.5], [67.0, 231.0], [69.0, 227.0], [68.0, 227.0], [70.0, 224.0], [71.0, 225.0], [72.0, 225.0], [73.0, 226.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 73.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 8.516666666666667, "minX": 1.66602804E12, "maxY": 67.91666666666667, "series": [{"data": [[1.6660284E12, 65.45], [1.6660281E12, 67.08333333333333], [1.66602858E12, 8.516666666666667], [1.66602828E12, 65.45], [1.66602846E12, 61.583333333333336], [1.66602816E12, 67.2], [1.66602834E12, 64.71666666666667], [1.66602804E12, 25.15], [1.66602852E12, 40.266666666666666], [1.66602822E12, 67.91666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66602858E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 8.6, "minX": 1.66602804E12, "maxY": 67.91666666666667, "series": [{"data": [[1.6660284E12, 65.46666666666667], [1.6660281E12, 67.08333333333333], [1.66602858E12, 8.6], [1.66602828E12, 65.45], [1.66602846E12, 61.61666666666667], [1.66602816E12, 67.2], [1.66602834E12, 64.71666666666667], [1.66602804E12, 24.883333333333333], [1.66602852E12, 40.4], [1.66602822E12, 67.91666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66602858E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 8.6, "minX": 1.66602804E12, "maxY": 67.91666666666667, "series": [{"data": [[1.6660284E12, 65.46666666666667], [1.6660281E12, 67.08333333333333], [1.66602858E12, 8.6], [1.66602828E12, 65.45], [1.66602846E12, 61.61666666666667], [1.66602816E12, 67.2], [1.66602834E12, 64.71666666666667], [1.66602804E12, 24.883333333333333], [1.66602852E12, 40.4], [1.66602822E12, 67.91666666666667]], "isOverall": false, "label": "extract-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66602858E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 8.6, "minX": 1.66602804E12, "maxY": 67.91666666666667, "series": [{"data": [[1.6660284E12, 65.46666666666667], [1.6660281E12, 67.08333333333333], [1.66602858E12, 8.6], [1.66602828E12, 65.45], [1.66602846E12, 61.61666666666667], [1.66602816E12, 67.2], [1.66602834E12, 64.71666666666667], [1.66602804E12, 24.883333333333333], [1.66602852E12, 40.4], [1.66602822E12, 67.91666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66602858E12, "title": "Total Transactions Per Second"}},
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

