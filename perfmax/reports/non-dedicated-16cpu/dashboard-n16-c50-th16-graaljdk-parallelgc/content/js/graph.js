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
        data: {"result": {"minY": 122.0, "minX": 0.0, "maxY": 1487.0, "series": [{"data": [[0.0, 122.0], [0.1, 137.0], [0.2, 141.0], [0.3, 143.0], [0.4, 145.0], [0.5, 147.0], [0.6, 148.0], [0.7, 150.0], [0.8, 151.0], [0.9, 151.0], [1.0, 152.0], [1.1, 153.0], [1.2, 154.0], [1.3, 155.0], [1.4, 155.0], [1.5, 156.0], [1.6, 157.0], [1.7, 157.0], [1.8, 158.0], [1.9, 158.0], [2.0, 159.0], [2.1, 159.0], [2.2, 159.0], [2.3, 160.0], [2.4, 160.0], [2.5, 161.0], [2.6, 161.0], [2.7, 162.0], [2.8, 162.0], [2.9, 162.0], [3.0, 163.0], [3.1, 163.0], [3.2, 164.0], [3.3, 164.0], [3.4, 164.0], [3.5, 165.0], [3.6, 165.0], [3.7, 165.0], [3.8, 166.0], [3.9, 166.0], [4.0, 166.0], [4.1, 167.0], [4.2, 167.0], [4.3, 167.0], [4.4, 168.0], [4.5, 168.0], [4.6, 168.0], [4.7, 169.0], [4.8, 169.0], [4.9, 169.0], [5.0, 170.0], [5.1, 170.0], [5.2, 170.0], [5.3, 170.0], [5.4, 171.0], [5.5, 171.0], [5.6, 171.0], [5.7, 171.0], [5.8, 172.0], [5.9, 172.0], [6.0, 172.0], [6.1, 173.0], [6.2, 173.0], [6.3, 173.0], [6.4, 174.0], [6.5, 174.0], [6.6, 174.0], [6.7, 175.0], [6.8, 175.0], [6.9, 175.0], [7.0, 175.0], [7.1, 176.0], [7.2, 176.0], [7.3, 176.0], [7.4, 176.0], [7.5, 177.0], [7.6, 177.0], [7.7, 177.0], [7.8, 177.0], [7.9, 178.0], [8.0, 178.0], [8.1, 178.0], [8.2, 179.0], [8.3, 179.0], [8.4, 179.0], [8.5, 179.0], [8.6, 180.0], [8.7, 180.0], [8.8, 180.0], [8.9, 181.0], [9.0, 181.0], [9.1, 181.0], [9.2, 181.0], [9.3, 181.0], [9.4, 182.0], [9.5, 182.0], [9.6, 182.0], [9.7, 182.0], [9.8, 183.0], [9.9, 183.0], [10.0, 183.0], [10.1, 183.0], [10.2, 184.0], [10.3, 184.0], [10.4, 184.0], [10.5, 184.0], [10.6, 185.0], [10.7, 185.0], [10.8, 185.0], [10.9, 185.0], [11.0, 185.0], [11.1, 186.0], [11.2, 186.0], [11.3, 186.0], [11.4, 186.0], [11.5, 186.0], [11.6, 187.0], [11.7, 187.0], [11.8, 187.0], [11.9, 187.0], [12.0, 187.0], [12.1, 187.0], [12.2, 188.0], [12.3, 188.0], [12.4, 188.0], [12.5, 188.0], [12.6, 188.0], [12.7, 189.0], [12.8, 189.0], [12.9, 189.0], [13.0, 189.0], [13.1, 189.0], [13.2, 190.0], [13.3, 190.0], [13.4, 190.0], [13.5, 190.0], [13.6, 190.0], [13.7, 190.0], [13.8, 191.0], [13.9, 191.0], [14.0, 191.0], [14.1, 191.0], [14.2, 191.0], [14.3, 191.0], [14.4, 192.0], [14.5, 192.0], [14.6, 192.0], [14.7, 192.0], [14.8, 192.0], [14.9, 192.0], [15.0, 192.0], [15.1, 193.0], [15.2, 193.0], [15.3, 193.0], [15.4, 193.0], [15.5, 193.0], [15.6, 193.0], [15.7, 193.0], [15.8, 194.0], [15.9, 194.0], [16.0, 194.0], [16.1, 194.0], [16.2, 194.0], [16.3, 194.0], [16.4, 195.0], [16.5, 195.0], [16.6, 195.0], [16.7, 195.0], [16.8, 195.0], [16.9, 195.0], [17.0, 195.0], [17.1, 195.0], [17.2, 196.0], [17.3, 196.0], [17.4, 196.0], [17.5, 196.0], [17.6, 196.0], [17.7, 196.0], [17.8, 196.0], [17.9, 196.0], [18.0, 197.0], [18.1, 197.0], [18.2, 197.0], [18.3, 197.0], [18.4, 197.0], [18.5, 197.0], [18.6, 197.0], [18.7, 198.0], [18.8, 198.0], [18.9, 198.0], [19.0, 198.0], [19.1, 198.0], [19.2, 198.0], [19.3, 198.0], [19.4, 198.0], [19.5, 198.0], [19.6, 199.0], [19.7, 199.0], [19.8, 199.0], [19.9, 199.0], [20.0, 199.0], [20.1, 199.0], [20.2, 199.0], [20.3, 199.0], [20.4, 200.0], [20.5, 200.0], [20.6, 200.0], [20.7, 200.0], [20.8, 200.0], [20.9, 200.0], [21.0, 200.0], [21.1, 200.0], [21.2, 200.0], [21.3, 200.0], [21.4, 201.0], [21.5, 201.0], [21.6, 201.0], [21.7, 201.0], [21.8, 201.0], [21.9, 201.0], [22.0, 201.0], [22.1, 201.0], [22.2, 202.0], [22.3, 202.0], [22.4, 202.0], [22.5, 202.0], [22.6, 202.0], [22.7, 202.0], [22.8, 202.0], [22.9, 202.0], [23.0, 202.0], [23.1, 203.0], [23.2, 203.0], [23.3, 203.0], [23.4, 203.0], [23.5, 203.0], [23.6, 203.0], [23.7, 203.0], [23.8, 203.0], [23.9, 203.0], [24.0, 203.0], [24.1, 204.0], [24.2, 204.0], [24.3, 204.0], [24.4, 204.0], [24.5, 204.0], [24.6, 204.0], [24.7, 204.0], [24.8, 204.0], [24.9, 204.0], [25.0, 204.0], [25.1, 205.0], [25.2, 205.0], [25.3, 205.0], [25.4, 205.0], [25.5, 205.0], [25.6, 205.0], [25.7, 205.0], [25.8, 205.0], [25.9, 205.0], [26.0, 205.0], [26.1, 206.0], [26.2, 206.0], [26.3, 206.0], [26.4, 206.0], [26.5, 206.0], [26.6, 206.0], [26.7, 206.0], [26.8, 206.0], [26.9, 206.0], [27.0, 206.0], [27.1, 207.0], [27.2, 207.0], [27.3, 207.0], [27.4, 207.0], [27.5, 207.0], [27.6, 207.0], [27.7, 207.0], [27.8, 207.0], [27.9, 207.0], [28.0, 207.0], [28.1, 208.0], [28.2, 208.0], [28.3, 208.0], [28.4, 208.0], [28.5, 208.0], [28.6, 208.0], [28.7, 208.0], [28.8, 208.0], [28.9, 208.0], [29.0, 208.0], [29.1, 208.0], [29.2, 209.0], [29.3, 209.0], [29.4, 209.0], [29.5, 209.0], [29.6, 209.0], [29.7, 209.0], [29.8, 209.0], [29.9, 209.0], [30.0, 209.0], [30.1, 209.0], [30.2, 210.0], [30.3, 210.0], [30.4, 210.0], [30.5, 210.0], [30.6, 210.0], [30.7, 210.0], [30.8, 210.0], [30.9, 210.0], [31.0, 210.0], [31.1, 210.0], [31.2, 211.0], [31.3, 211.0], [31.4, 211.0], [31.5, 211.0], [31.6, 211.0], [31.7, 211.0], [31.8, 211.0], [31.9, 211.0], [32.0, 211.0], [32.1, 211.0], [32.2, 211.0], [32.3, 211.0], [32.4, 212.0], [32.5, 212.0], [32.6, 212.0], [32.7, 212.0], [32.8, 212.0], [32.9, 212.0], [33.0, 212.0], [33.1, 212.0], [33.2, 212.0], [33.3, 212.0], [33.4, 212.0], [33.5, 212.0], [33.6, 213.0], [33.7, 213.0], [33.8, 213.0], [33.9, 213.0], [34.0, 213.0], [34.1, 213.0], [34.2, 213.0], [34.3, 213.0], [34.4, 213.0], [34.5, 213.0], [34.6, 213.0], [34.7, 214.0], [34.8, 214.0], [34.9, 214.0], [35.0, 214.0], [35.1, 214.0], [35.2, 214.0], [35.3, 214.0], [35.4, 214.0], [35.5, 214.0], [35.6, 214.0], [35.7, 215.0], [35.8, 215.0], [35.9, 215.0], [36.0, 215.0], [36.1, 215.0], [36.2, 215.0], [36.3, 215.0], [36.4, 215.0], [36.5, 215.0], [36.6, 215.0], [36.7, 215.0], [36.8, 215.0], [36.9, 216.0], [37.0, 216.0], [37.1, 216.0], [37.2, 216.0], [37.3, 216.0], [37.4, 216.0], [37.5, 216.0], [37.6, 216.0], [37.7, 216.0], [37.8, 216.0], [37.9, 217.0], [38.0, 217.0], [38.1, 217.0], [38.2, 217.0], [38.3, 217.0], [38.4, 217.0], [38.5, 217.0], [38.6, 217.0], [38.7, 217.0], [38.8, 217.0], [38.9, 217.0], [39.0, 218.0], [39.1, 218.0], [39.2, 218.0], [39.3, 218.0], [39.4, 218.0], [39.5, 218.0], [39.6, 218.0], [39.7, 218.0], [39.8, 218.0], [39.9, 218.0], [40.0, 218.0], [40.1, 219.0], [40.2, 219.0], [40.3, 219.0], [40.4, 219.0], [40.5, 219.0], [40.6, 219.0], [40.7, 219.0], [40.8, 219.0], [40.9, 219.0], [41.0, 219.0], [41.1, 219.0], [41.2, 219.0], [41.3, 220.0], [41.4, 220.0], [41.5, 220.0], [41.6, 220.0], [41.7, 220.0], [41.8, 220.0], [41.9, 220.0], [42.0, 220.0], [42.1, 220.0], [42.2, 220.0], [42.3, 220.0], [42.4, 221.0], [42.5, 221.0], [42.6, 221.0], [42.7, 221.0], [42.8, 221.0], [42.9, 221.0], [43.0, 221.0], [43.1, 221.0], [43.2, 221.0], [43.3, 221.0], [43.4, 221.0], [43.5, 222.0], [43.6, 222.0], [43.7, 222.0], [43.8, 222.0], [43.9, 222.0], [44.0, 222.0], [44.1, 222.0], [44.2, 222.0], [44.3, 222.0], [44.4, 222.0], [44.5, 222.0], [44.6, 222.0], [44.7, 223.0], [44.8, 223.0], [44.9, 223.0], [45.0, 223.0], [45.1, 223.0], [45.2, 223.0], [45.3, 223.0], [45.4, 223.0], [45.5, 223.0], [45.6, 223.0], [45.7, 224.0], [45.8, 224.0], [45.9, 224.0], [46.0, 224.0], [46.1, 224.0], [46.2, 224.0], [46.3, 224.0], [46.4, 224.0], [46.5, 224.0], [46.6, 224.0], [46.7, 224.0], [46.8, 225.0], [46.9, 225.0], [47.0, 225.0], [47.1, 225.0], [47.2, 225.0], [47.3, 225.0], [47.4, 225.0], [47.5, 225.0], [47.6, 225.0], [47.7, 225.0], [47.8, 226.0], [47.9, 226.0], [48.0, 226.0], [48.1, 226.0], [48.2, 226.0], [48.3, 226.0], [48.4, 226.0], [48.5, 226.0], [48.6, 226.0], [48.7, 226.0], [48.8, 226.0], [48.9, 227.0], [49.0, 227.0], [49.1, 227.0], [49.2, 227.0], [49.3, 227.0], [49.4, 227.0], [49.5, 227.0], [49.6, 227.0], [49.7, 227.0], [49.8, 227.0], [49.9, 228.0], [50.0, 228.0], [50.1, 228.0], [50.2, 228.0], [50.3, 228.0], [50.4, 228.0], [50.5, 228.0], [50.6, 228.0], [50.7, 228.0], [50.8, 228.0], [50.9, 229.0], [51.0, 229.0], [51.1, 229.0], [51.2, 229.0], [51.3, 229.0], [51.4, 229.0], [51.5, 229.0], [51.6, 229.0], [51.7, 229.0], [51.8, 229.0], [51.9, 230.0], [52.0, 230.0], [52.1, 230.0], [52.2, 230.0], [52.3, 230.0], [52.4, 230.0], [52.5, 230.0], [52.6, 230.0], [52.7, 230.0], [52.8, 230.0], [52.9, 231.0], [53.0, 231.0], [53.1, 231.0], [53.2, 231.0], [53.3, 231.0], [53.4, 231.0], [53.5, 231.0], [53.6, 231.0], [53.7, 231.0], [53.8, 231.0], [53.9, 232.0], [54.0, 232.0], [54.1, 232.0], [54.2, 232.0], [54.3, 232.0], [54.4, 232.0], [54.5, 232.0], [54.6, 232.0], [54.7, 232.0], [54.8, 232.0], [54.9, 233.0], [55.0, 233.0], [55.1, 233.0], [55.2, 233.0], [55.3, 233.0], [55.4, 233.0], [55.5, 233.0], [55.6, 233.0], [55.7, 233.0], [55.8, 234.0], [55.9, 234.0], [56.0, 234.0], [56.1, 234.0], [56.2, 234.0], [56.3, 234.0], [56.4, 234.0], [56.5, 234.0], [56.6, 234.0], [56.7, 234.0], [56.8, 235.0], [56.9, 235.0], [57.0, 235.0], [57.1, 235.0], [57.2, 235.0], [57.3, 235.0], [57.4, 235.0], [57.5, 235.0], [57.6, 236.0], [57.7, 236.0], [57.8, 236.0], [57.9, 236.0], [58.0, 236.0], [58.1, 236.0], [58.2, 236.0], [58.3, 236.0], [58.4, 236.0], [58.5, 237.0], [58.6, 237.0], [58.7, 237.0], [58.8, 237.0], [58.9, 237.0], [59.0, 237.0], [59.1, 237.0], [59.2, 237.0], [59.3, 237.0], [59.4, 238.0], [59.5, 238.0], [59.6, 238.0], [59.7, 238.0], [59.8, 238.0], [59.9, 238.0], [60.0, 238.0], [60.1, 238.0], [60.2, 239.0], [60.3, 239.0], [60.4, 239.0], [60.5, 239.0], [60.6, 239.0], [60.7, 239.0], [60.8, 239.0], [60.9, 239.0], [61.0, 240.0], [61.1, 240.0], [61.2, 240.0], [61.3, 240.0], [61.4, 240.0], [61.5, 240.0], [61.6, 240.0], [61.7, 241.0], [61.8, 241.0], [61.9, 241.0], [62.0, 241.0], [62.1, 241.0], [62.2, 241.0], [62.3, 241.0], [62.4, 241.0], [62.5, 242.0], [62.6, 242.0], [62.7, 242.0], [62.8, 242.0], [62.9, 242.0], [63.0, 242.0], [63.1, 242.0], [63.2, 243.0], [63.3, 243.0], [63.4, 243.0], [63.5, 243.0], [63.6, 243.0], [63.7, 243.0], [63.8, 243.0], [63.9, 243.0], [64.0, 244.0], [64.1, 244.0], [64.2, 244.0], [64.3, 244.0], [64.4, 244.0], [64.5, 244.0], [64.6, 244.0], [64.7, 244.0], [64.8, 245.0], [64.9, 245.0], [65.0, 245.0], [65.1, 245.0], [65.2, 245.0], [65.3, 245.0], [65.4, 245.0], [65.5, 246.0], [65.6, 246.0], [65.7, 246.0], [65.8, 246.0], [65.9, 246.0], [66.0, 246.0], [66.1, 246.0], [66.2, 247.0], [66.3, 247.0], [66.4, 247.0], [66.5, 247.0], [66.6, 247.0], [66.7, 247.0], [66.8, 247.0], [66.9, 248.0], [67.0, 248.0], [67.1, 248.0], [67.2, 248.0], [67.3, 248.0], [67.4, 248.0], [67.5, 248.0], [67.6, 249.0], [67.7, 249.0], [67.8, 249.0], [67.9, 249.0], [68.0, 249.0], [68.1, 249.0], [68.2, 250.0], [68.3, 250.0], [68.4, 250.0], [68.5, 250.0], [68.6, 250.0], [68.7, 250.0], [68.8, 251.0], [68.9, 251.0], [69.0, 251.0], [69.1, 251.0], [69.2, 251.0], [69.3, 251.0], [69.4, 251.0], [69.5, 252.0], [69.6, 252.0], [69.7, 252.0], [69.8, 252.0], [69.9, 252.0], [70.0, 252.0], [70.1, 253.0], [70.2, 253.0], [70.3, 253.0], [70.4, 253.0], [70.5, 253.0], [70.6, 253.0], [70.7, 254.0], [70.8, 254.0], [70.9, 254.0], [71.0, 254.0], [71.1, 254.0], [71.2, 254.0], [71.3, 255.0], [71.4, 255.0], [71.5, 255.0], [71.6, 255.0], [71.7, 255.0], [71.8, 255.0], [71.9, 256.0], [72.0, 256.0], [72.1, 256.0], [72.2, 256.0], [72.3, 256.0], [72.4, 256.0], [72.5, 257.0], [72.6, 257.0], [72.7, 257.0], [72.8, 257.0], [72.9, 257.0], [73.0, 257.0], [73.1, 258.0], [73.2, 258.0], [73.3, 258.0], [73.4, 258.0], [73.5, 258.0], [73.6, 258.0], [73.7, 259.0], [73.8, 259.0], [73.9, 259.0], [74.0, 259.0], [74.1, 259.0], [74.2, 259.0], [74.3, 260.0], [74.4, 260.0], [74.5, 260.0], [74.6, 260.0], [74.7, 260.0], [74.8, 261.0], [74.9, 261.0], [75.0, 261.0], [75.1, 261.0], [75.2, 261.0], [75.3, 261.0], [75.4, 262.0], [75.5, 262.0], [75.6, 262.0], [75.7, 262.0], [75.8, 262.0], [75.9, 262.0], [76.0, 263.0], [76.1, 263.0], [76.2, 263.0], [76.3, 263.0], [76.4, 263.0], [76.5, 263.0], [76.6, 264.0], [76.7, 264.0], [76.8, 264.0], [76.9, 264.0], [77.0, 264.0], [77.1, 265.0], [77.2, 265.0], [77.3, 265.0], [77.4, 265.0], [77.5, 265.0], [77.6, 266.0], [77.7, 266.0], [77.8, 266.0], [77.9, 266.0], [78.0, 266.0], [78.1, 267.0], [78.2, 267.0], [78.3, 267.0], [78.4, 267.0], [78.5, 267.0], [78.6, 268.0], [78.7, 268.0], [78.8, 268.0], [78.9, 268.0], [79.0, 268.0], [79.1, 268.0], [79.2, 269.0], [79.3, 269.0], [79.4, 269.0], [79.5, 269.0], [79.6, 269.0], [79.7, 270.0], [79.8, 270.0], [79.9, 270.0], [80.0, 270.0], [80.1, 270.0], [80.2, 270.0], [80.3, 271.0], [80.4, 271.0], [80.5, 271.0], [80.6, 271.0], [80.7, 271.0], [80.8, 272.0], [80.9, 272.0], [81.0, 272.0], [81.1, 272.0], [81.2, 272.0], [81.3, 273.0], [81.4, 273.0], [81.5, 273.0], [81.6, 273.0], [81.7, 273.0], [81.8, 274.0], [81.9, 274.0], [82.0, 274.0], [82.1, 274.0], [82.2, 275.0], [82.3, 275.0], [82.4, 275.0], [82.5, 275.0], [82.6, 275.0], [82.7, 276.0], [82.8, 276.0], [82.9, 276.0], [83.0, 276.0], [83.1, 276.0], [83.2, 277.0], [83.3, 277.0], [83.4, 277.0], [83.5, 277.0], [83.6, 278.0], [83.7, 278.0], [83.8, 278.0], [83.9, 278.0], [84.0, 278.0], [84.1, 279.0], [84.2, 279.0], [84.3, 279.0], [84.4, 279.0], [84.5, 279.0], [84.6, 280.0], [84.7, 280.0], [84.8, 280.0], [84.9, 280.0], [85.0, 281.0], [85.1, 281.0], [85.2, 281.0], [85.3, 281.0], [85.4, 282.0], [85.5, 282.0], [85.6, 282.0], [85.7, 282.0], [85.8, 282.0], [85.9, 283.0], [86.0, 283.0], [86.1, 283.0], [86.2, 283.0], [86.3, 284.0], [86.4, 284.0], [86.5, 284.0], [86.6, 285.0], [86.7, 285.0], [86.8, 285.0], [86.9, 285.0], [87.0, 286.0], [87.1, 286.0], [87.2, 286.0], [87.3, 286.0], [87.4, 287.0], [87.5, 287.0], [87.6, 287.0], [87.7, 287.0], [87.8, 288.0], [87.9, 288.0], [88.0, 288.0], [88.1, 288.0], [88.2, 289.0], [88.3, 289.0], [88.4, 289.0], [88.5, 289.0], [88.6, 290.0], [88.7, 290.0], [88.8, 290.0], [88.9, 291.0], [89.0, 291.0], [89.1, 291.0], [89.2, 291.0], [89.3, 292.0], [89.4, 292.0], [89.5, 292.0], [89.6, 293.0], [89.7, 293.0], [89.8, 293.0], [89.9, 294.0], [90.0, 294.0], [90.1, 294.0], [90.2, 295.0], [90.3, 295.0], [90.4, 295.0], [90.5, 296.0], [90.6, 296.0], [90.7, 296.0], [90.8, 297.0], [90.9, 297.0], [91.0, 297.0], [91.1, 298.0], [91.2, 298.0], [91.3, 298.0], [91.4, 299.0], [91.5, 299.0], [91.6, 299.0], [91.7, 300.0], [91.8, 300.0], [91.9, 301.0], [92.0, 301.0], [92.1, 301.0], [92.2, 302.0], [92.3, 302.0], [92.4, 303.0], [92.5, 303.0], [92.6, 303.0], [92.7, 303.0], [92.8, 304.0], [92.9, 304.0], [93.0, 305.0], [93.1, 305.0], [93.2, 305.0], [93.3, 306.0], [93.4, 306.0], [93.5, 307.0], [93.6, 307.0], [93.7, 307.0], [93.8, 308.0], [93.9, 308.0], [94.0, 309.0], [94.1, 309.0], [94.2, 310.0], [94.3, 310.0], [94.4, 311.0], [94.5, 312.0], [94.6, 312.0], [94.7, 313.0], [94.8, 313.0], [94.9, 314.0], [95.0, 314.0], [95.1, 315.0], [95.2, 315.0], [95.3, 316.0], [95.4, 317.0], [95.5, 317.0], [95.6, 318.0], [95.7, 319.0], [95.8, 319.0], [95.9, 320.0], [96.0, 320.0], [96.1, 321.0], [96.2, 322.0], [96.3, 322.0], [96.4, 323.0], [96.5, 324.0], [96.6, 325.0], [96.7, 325.0], [96.8, 326.0], [96.9, 327.0], [97.0, 328.0], [97.1, 329.0], [97.2, 331.0], [97.3, 332.0], [97.4, 333.0], [97.5, 334.0], [97.6, 335.0], [97.7, 337.0], [97.8, 338.0], [97.9, 339.0], [98.0, 340.0], [98.1, 341.0], [98.2, 343.0], [98.3, 344.0], [98.4, 346.0], [98.5, 348.0], [98.6, 349.0], [98.7, 351.0], [98.8, 353.0], [98.9, 355.0], [99.0, 358.0], [99.1, 361.0], [99.2, 364.0], [99.3, 368.0], [99.4, 373.0], [99.5, 379.0], [99.6, 389.0], [99.7, 401.0], [99.8, 414.0], [99.9, 453.0]], "isOverall": false, "label": "extract", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 22805.0, "series": [{"data": [[600.0, 2.0], [700.0, 1.0], [800.0, 2.0], [200.0, 22805.0], [900.0, 1.0], [1000.0, 2.0], [1100.0, 1.0], [1200.0, 2.0], [300.0, 2578.0], [1300.0, 2.0], [1400.0, 2.0], [400.0, 79.0], [100.0, 6517.0], [500.0, 6.0]], "isOverall": false, "label": "extract", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 21.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 31979.0, "series": [{"data": [[0.0, 31979.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 21.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.66602876E12, "maxY": 16.0, "series": [{"data": [[1.66602888E12, 16.0], [1.66602906E12, 16.0], [1.66602876E12, 16.0], [1.66602924E12, 4.805605786618445], [1.66602894E12, 16.0], [1.66602912E12, 15.123863931446381], [1.66602882E12, 16.0], [1.6660293E12, 1.0], [1.666029E12, 16.0], [1.66602918E12, 11.61281797158901]], "isOverall": false, "label": "16", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6660293E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 185.29310344827587, "minX": 1.0, "maxY": 238.32635195942157, "series": [{"data": [[8.0, 194.67073170731703], [2.0, 195.48000000000002], [9.0, 211.8], [10.0, 214.41099855282178], [11.0, 216.8403361344538], [12.0, 217.53531598513], [3.0, 198.59793814432993], [13.0, 227.60000000000014], [14.0, 236.76876513317177], [15.0, 235.11051051051092], [16.0, 238.32635195942157], [4.0, 193.87012987012992], [1.0, 188.97515527950316], [5.0, 185.29310344827587], [6.0, 192.61744186046502], [7.0, 192.19767441860463]], "isOverall": false, "label": "extract", "isController": false}, {"data": [[15.060312499999988, 234.6888750000001]], "isOverall": false, "label": "extract-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 16.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 0.0, "minX": 1.66602876E12, "maxY": 8684401.433333334, "series": [{"data": [[1.66602888E12, 8684401.433333334], [1.66602906E12, 8428232.6], [1.66602876E12, 7837490.616666666], [1.66602924E12, 2429922.35], [1.66602894E12, 8502670.383333333], [1.66602912E12, 8174445.8], [1.66602882E12, 8545611.75], [1.6660293E12, 152852.25], [1.666029E12, 8335247.066666666], [1.66602918E12, 6420980.683333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.66602888E12, 0.0], [1.66602906E12, 0.0], [1.66602876E12, 0.0], [1.66602924E12, 0.0], [1.66602894E12, 0.0], [1.66602912E12, 0.0], [1.66602882E12, 0.0], [1.6660293E12, 0.0], [1.666029E12, 0.0], [1.66602918E12, 0.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6660293E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 188.81159420289853, "minX": 1.66602876E12, "maxY": 243.85101822079318, "series": [{"data": [[1.66602888E12, 232.04014510278088], [1.66602906E12, 238.2325465838508], [1.66602876E12, 243.85101822079318], [1.66602924E12, 192.877034358047], [1.66602894E12, 237.2213702696017], [1.66602912E12, 235.54583225136292], [1.66602882E12, 235.87681337595296], [1.6660293E12, 188.81159420289853], [1.666029E12, 243.4233206590619], [1.66602918E12, 221.16980508754514]], "isOverall": false, "label": "extract", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6660293E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 186.57971014492753, "minX": 1.66602876E12, "maxY": 241.89277566539914, "series": [{"data": [[1.66602888E12, 230.49383313180138], [1.66602906E12, 236.69416149068303], [1.66602876E12, 241.5337620578778], [1.66602924E12, 190.90958408679938], [1.66602894E12, 235.6846401187239], [1.66602912E12, 233.95637496754088], [1.66602882E12, 234.2490779444309], [1.6660293E12, 186.57971014492753], [1.666029E12, 241.89277566539914], [1.66602918E12, 219.44103072348818]], "isOverall": false, "label": "extract", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6660293E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.66602876E12, "maxY": 4.9E-324, "series": [{"data": [[1.66602888E12, 0.0], [1.66602906E12, 0.0], [1.66602876E12, 0.0], [1.66602924E12, 0.0], [1.66602894E12, 0.0], [1.66602912E12, 0.0], [1.66602882E12, 0.0], [1.6660293E12, 0.0], [1.666029E12, 0.0], [1.66602918E12, 0.0]], "isOverall": false, "label": "extract", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6660293E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 122.0, "minX": 1.66602876E12, "maxY": 1487.0, "series": [{"data": [[1.66602888E12, 431.0], [1.66602906E12, 465.0], [1.66602876E12, 1487.0], [1.66602924E12, 257.0], [1.66602894E12, 494.0], [1.66602912E12, 405.0], [1.66602882E12, 436.0], [1.6660293E12, 216.0], [1.666029E12, 544.0], [1.66602918E12, 393.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.66602888E12, 131.0], [1.66602906E12, 125.0], [1.66602876E12, 139.0], [1.66602924E12, 128.0], [1.66602894E12, 125.0], [1.66602912E12, 122.0], [1.66602882E12, 131.0], [1.6660293E12, 155.0], [1.666029E12, 124.0], [1.66602918E12, 128.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.66602888E12, 290.0], [1.66602906E12, 298.0], [1.66602876E12, 305.0], [1.66602924E12, 222.0], [1.66602894E12, 295.0], [1.66602912E12, 290.0], [1.66602882E12, 296.0], [1.6660293E12, 208.0], [1.666029E12, 306.0], [1.66602918E12, 270.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.66602888E12, 357.0], [1.66602906E12, 356.0], [1.66602876E12, 413.34000000000015], [1.66602924E12, 239.0], [1.66602894E12, 357.0], [1.66602912E12, 343.48], [1.66602882E12, 357.0], [1.6660293E12, 216.0], [1.666029E12, 366.6999999999998], [1.66602918E12, 315.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.66602888E12, 313.1999999999998], [1.66602906E12, 316.0], [1.66602876E12, 330.0], [1.66602924E12, 231.0], [1.66602894E12, 315.7999999999997], [1.66602912E12, 308.0], [1.66602882E12, 318.0], [1.6660293E12, 213.0], [1.666029E12, 325.0], [1.66602918E12, 286.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6660293E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 181.5, "minX": 1.0, "maxY": 263.5, "series": [{"data": [[5.0, 193.5], [6.0, 186.0], [8.0, 194.0], [10.0, 201.0], [12.0, 197.0], [13.0, 195.0], [15.0, 203.0], [17.0, 204.0], [19.0, 196.0], [21.0, 196.5], [23.0, 193.0], [26.0, 181.5], [27.0, 187.5], [29.0, 207.0], [30.0, 196.0], [31.0, 196.0], [32.0, 191.0], [33.0, 191.0], [34.0, 187.0], [36.0, 194.5], [38.0, 263.5], [40.0, 203.0], [43.0, 184.0], [45.0, 215.0], [46.0, 212.5], [47.0, 214.0], [48.0, 205.0], [49.0, 207.0], [50.0, 211.5], [53.0, 211.0], [54.0, 260.5], [55.0, 220.0], [57.0, 240.5], [56.0, 223.0], [59.0, 228.0], [58.0, 220.5], [61.0, 241.0], [60.0, 226.0], [62.0, 235.0], [63.0, 237.0], [66.0, 233.0], [65.0, 234.0], [64.0, 235.0], [67.0, 232.0], [69.0, 228.0], [68.0, 227.0], [70.0, 226.0], [71.0, 225.0], [75.0, 219.0], [74.0, 222.0], [73.0, 221.5], [72.0, 221.0], [1.0, 203.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 75.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 180.0, "minX": 1.0, "maxY": 260.5, "series": [{"data": [[5.0, 191.0], [6.0, 184.0], [8.0, 192.0], [10.0, 199.5], [12.0, 194.5], [13.0, 193.0], [15.0, 199.0], [17.0, 202.0], [19.0, 192.0], [21.0, 194.5], [23.0, 192.0], [26.0, 180.0], [27.0, 185.0], [29.0, 206.0], [30.0, 194.5], [31.0, 194.0], [32.0, 189.0], [33.0, 189.0], [34.0, 185.5], [36.0, 192.5], [38.0, 260.5], [40.0, 201.5], [43.0, 183.0], [45.0, 213.5], [46.0, 210.5], [47.0, 212.0], [48.0, 203.5], [49.0, 204.0], [50.0, 209.5], [53.0, 209.5], [54.0, 259.0], [55.0, 218.0], [57.0, 239.0], [56.0, 221.0], [59.0, 227.0], [58.0, 219.0], [61.0, 239.0], [60.0, 225.0], [62.0, 233.0], [63.0, 235.0], [66.0, 232.0], [65.0, 232.0], [64.0, 233.0], [67.0, 231.0], [69.0, 226.0], [68.0, 226.0], [70.0, 225.0], [71.0, 224.0], [75.0, 217.0], [74.0, 221.0], [73.0, 221.0], [72.0, 219.0], [1.0, 201.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 75.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.1333333333333333, "minX": 1.66602876E12, "maxY": 68.91666666666667, "series": [{"data": [[1.66602888E12, 68.91666666666667], [1.66602906E12, 67.08333333333333], [1.66602876E12, 62.46666666666667], [1.66602924E12, 18.35], [1.66602894E12, 67.38333333333334], [1.66602912E12, 64.15], [1.66602882E12, 67.78333333333333], [1.6660293E12, 1.1333333333333333], [1.666029E12, 65.75], [1.66602918E12, 50.31666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6660293E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.15, "minX": 1.66602876E12, "maxY": 68.91666666666667, "series": [{"data": [[1.66602888E12, 68.91666666666667], [1.66602906E12, 67.08333333333333], [1.66602876E12, 62.2], [1.66602924E12, 18.433333333333334], [1.66602894E12, 67.38333333333334], [1.66602912E12, 64.18333333333334], [1.66602882E12, 67.78333333333333], [1.6660293E12, 1.15], [1.666029E12, 65.75], [1.66602918E12, 50.45]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6660293E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.15, "minX": 1.66602876E12, "maxY": 68.91666666666667, "series": [{"data": [[1.66602888E12, 68.91666666666667], [1.66602906E12, 67.08333333333333], [1.66602876E12, 62.2], [1.66602924E12, 18.433333333333334], [1.66602894E12, 67.38333333333334], [1.66602912E12, 64.18333333333334], [1.66602882E12, 67.78333333333333], [1.6660293E12, 1.15], [1.666029E12, 65.75], [1.66602918E12, 50.45]], "isOverall": false, "label": "extract-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6660293E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.15, "minX": 1.66602876E12, "maxY": 68.91666666666667, "series": [{"data": [[1.66602888E12, 68.91666666666667], [1.66602906E12, 67.08333333333333], [1.66602876E12, 62.2], [1.66602924E12, 18.433333333333334], [1.66602894E12, 67.38333333333334], [1.66602912E12, 64.18333333333334], [1.66602882E12, 67.78333333333333], [1.6660293E12, 1.15], [1.666029E12, 65.75], [1.66602918E12, 50.45]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6660293E12, "title": "Total Transactions Per Second"}},
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

