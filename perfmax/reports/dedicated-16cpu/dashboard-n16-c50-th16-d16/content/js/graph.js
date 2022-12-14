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
        data: {"result": {"minY": 112.0, "minX": 0.0, "maxY": 397.0, "series": [{"data": [[0.0, 112.0], [0.1, 134.0], [0.2, 137.0], [0.3, 140.0], [0.4, 141.0], [0.5, 142.0], [0.6, 143.0], [0.7, 144.0], [0.8, 145.0], [0.9, 146.0], [1.0, 146.0], [1.1, 147.0], [1.2, 147.0], [1.3, 147.0], [1.4, 148.0], [1.5, 148.0], [1.6, 149.0], [1.7, 149.0], [1.8, 150.0], [1.9, 150.0], [2.0, 150.0], [2.1, 150.0], [2.2, 151.0], [2.3, 151.0], [2.4, 151.0], [2.5, 152.0], [2.6, 152.0], [2.7, 152.0], [2.8, 152.0], [2.9, 153.0], [3.0, 153.0], [3.1, 153.0], [3.2, 153.0], [3.3, 154.0], [3.4, 154.0], [3.5, 154.0], [3.6, 154.0], [3.7, 154.0], [3.8, 155.0], [3.9, 155.0], [4.0, 155.0], [4.1, 155.0], [4.2, 156.0], [4.3, 156.0], [4.4, 156.0], [4.5, 156.0], [4.6, 157.0], [4.7, 157.0], [4.8, 157.0], [4.9, 157.0], [5.0, 158.0], [5.1, 158.0], [5.2, 158.0], [5.3, 158.0], [5.4, 158.0], [5.5, 159.0], [5.6, 159.0], [5.7, 159.0], [5.8, 159.0], [5.9, 160.0], [6.0, 160.0], [6.1, 160.0], [6.2, 160.0], [6.3, 161.0], [6.4, 161.0], [6.5, 161.0], [6.6, 161.0], [6.7, 161.0], [6.8, 162.0], [6.9, 162.0], [7.0, 162.0], [7.1, 162.0], [7.2, 163.0], [7.3, 163.0], [7.4, 163.0], [7.5, 163.0], [7.6, 163.0], [7.7, 164.0], [7.8, 164.0], [7.9, 164.0], [8.0, 164.0], [8.1, 165.0], [8.2, 165.0], [8.3, 165.0], [8.4, 165.0], [8.5, 166.0], [8.6, 166.0], [8.7, 166.0], [8.8, 166.0], [8.9, 167.0], [9.0, 167.0], [9.1, 167.0], [9.2, 167.0], [9.3, 167.0], [9.4, 168.0], [9.5, 168.0], [9.6, 168.0], [9.7, 168.0], [9.8, 169.0], [9.9, 169.0], [10.0, 169.0], [10.1, 169.0], [10.2, 170.0], [10.3, 170.0], [10.4, 170.0], [10.5, 170.0], [10.6, 171.0], [10.7, 171.0], [10.8, 171.0], [10.9, 171.0], [11.0, 171.0], [11.1, 172.0], [11.2, 172.0], [11.3, 172.0], [11.4, 172.0], [11.5, 173.0], [11.6, 173.0], [11.7, 173.0], [11.8, 173.0], [11.9, 174.0], [12.0, 174.0], [12.1, 174.0], [12.2, 174.0], [12.3, 174.0], [12.4, 175.0], [12.5, 175.0], [12.6, 175.0], [12.7, 175.0], [12.8, 176.0], [12.9, 176.0], [13.0, 176.0], [13.1, 176.0], [13.2, 176.0], [13.3, 177.0], [13.4, 177.0], [13.5, 177.0], [13.6, 177.0], [13.7, 177.0], [13.8, 178.0], [13.9, 178.0], [14.0, 178.0], [14.1, 178.0], [14.2, 178.0], [14.3, 179.0], [14.4, 179.0], [14.5, 179.0], [14.6, 179.0], [14.7, 179.0], [14.8, 179.0], [14.9, 180.0], [15.0, 180.0], [15.1, 180.0], [15.2, 180.0], [15.3, 180.0], [15.4, 180.0], [15.5, 180.0], [15.6, 181.0], [15.7, 181.0], [15.8, 181.0], [15.9, 181.0], [16.0, 181.0], [16.1, 181.0], [16.2, 182.0], [16.3, 182.0], [16.4, 182.0], [16.5, 182.0], [16.6, 182.0], [16.7, 182.0], [16.8, 182.0], [16.9, 182.0], [17.0, 183.0], [17.1, 183.0], [17.2, 183.0], [17.3, 183.0], [17.4, 183.0], [17.5, 183.0], [17.6, 183.0], [17.7, 184.0], [17.8, 184.0], [17.9, 184.0], [18.0, 184.0], [18.1, 184.0], [18.2, 184.0], [18.3, 184.0], [18.4, 184.0], [18.5, 184.0], [18.6, 185.0], [18.7, 185.0], [18.8, 185.0], [18.9, 185.0], [19.0, 185.0], [19.1, 185.0], [19.2, 185.0], [19.3, 185.0], [19.4, 185.0], [19.5, 185.0], [19.6, 186.0], [19.7, 186.0], [19.8, 186.0], [19.9, 186.0], [20.0, 186.0], [20.1, 186.0], [20.2, 186.0], [20.3, 186.0], [20.4, 186.0], [20.5, 186.0], [20.6, 187.0], [20.7, 187.0], [20.8, 187.0], [20.9, 187.0], [21.0, 187.0], [21.1, 187.0], [21.2, 187.0], [21.3, 187.0], [21.4, 187.0], [21.5, 187.0], [21.6, 187.0], [21.7, 188.0], [21.8, 188.0], [21.9, 188.0], [22.0, 188.0], [22.1, 188.0], [22.2, 188.0], [22.3, 188.0], [22.4, 188.0], [22.5, 188.0], [22.6, 188.0], [22.7, 188.0], [22.8, 188.0], [22.9, 189.0], [23.0, 189.0], [23.1, 189.0], [23.2, 189.0], [23.3, 189.0], [23.4, 189.0], [23.5, 189.0], [23.6, 189.0], [23.7, 189.0], [23.8, 189.0], [23.9, 190.0], [24.0, 190.0], [24.1, 190.0], [24.2, 190.0], [24.3, 190.0], [24.4, 190.0], [24.5, 190.0], [24.6, 190.0], [24.7, 190.0], [24.8, 190.0], [24.9, 190.0], [25.0, 190.0], [25.1, 191.0], [25.2, 191.0], [25.3, 191.0], [25.4, 191.0], [25.5, 191.0], [25.6, 191.0], [25.7, 191.0], [25.8, 191.0], [25.9, 191.0], [26.0, 191.0], [26.1, 191.0], [26.2, 191.0], [26.3, 191.0], [26.4, 192.0], [26.5, 192.0], [26.6, 192.0], [26.7, 192.0], [26.8, 192.0], [26.9, 192.0], [27.0, 192.0], [27.1, 192.0], [27.2, 192.0], [27.3, 192.0], [27.4, 192.0], [27.5, 192.0], [27.6, 192.0], [27.7, 193.0], [27.8, 193.0], [27.9, 193.0], [28.0, 193.0], [28.1, 193.0], [28.2, 193.0], [28.3, 193.0], [28.4, 193.0], [28.5, 193.0], [28.6, 193.0], [28.7, 193.0], [28.8, 193.0], [28.9, 193.0], [29.0, 194.0], [29.1, 194.0], [29.2, 194.0], [29.3, 194.0], [29.4, 194.0], [29.5, 194.0], [29.6, 194.0], [29.7, 194.0], [29.8, 194.0], [29.9, 194.0], [30.0, 194.0], [30.1, 194.0], [30.2, 194.0], [30.3, 195.0], [30.4, 195.0], [30.5, 195.0], [30.6, 195.0], [30.7, 195.0], [30.8, 195.0], [30.9, 195.0], [31.0, 195.0], [31.1, 195.0], [31.2, 195.0], [31.3, 195.0], [31.4, 195.0], [31.5, 195.0], [31.6, 196.0], [31.7, 196.0], [31.8, 196.0], [31.9, 196.0], [32.0, 196.0], [32.1, 196.0], [32.2, 196.0], [32.3, 196.0], [32.4, 196.0], [32.5, 196.0], [32.6, 196.0], [32.7, 196.0], [32.8, 196.0], [32.9, 196.0], [33.0, 196.0], [33.1, 197.0], [33.2, 197.0], [33.3, 197.0], [33.4, 197.0], [33.5, 197.0], [33.6, 197.0], [33.7, 197.0], [33.8, 197.0], [33.9, 197.0], [34.0, 197.0], [34.1, 197.0], [34.2, 197.0], [34.3, 197.0], [34.4, 197.0], [34.5, 198.0], [34.6, 198.0], [34.7, 198.0], [34.8, 198.0], [34.9, 198.0], [35.0, 198.0], [35.1, 198.0], [35.2, 198.0], [35.3, 198.0], [35.4, 198.0], [35.5, 198.0], [35.6, 198.0], [35.7, 198.0], [35.8, 198.0], [35.9, 198.0], [36.0, 198.0], [36.1, 199.0], [36.2, 199.0], [36.3, 199.0], [36.4, 199.0], [36.5, 199.0], [36.6, 199.0], [36.7, 199.0], [36.8, 199.0], [36.9, 199.0], [37.0, 199.0], [37.1, 199.0], [37.2, 199.0], [37.3, 199.0], [37.4, 199.0], [37.5, 199.0], [37.6, 200.0], [37.7, 200.0], [37.8, 200.0], [37.9, 200.0], [38.0, 200.0], [38.1, 200.0], [38.2, 200.0], [38.3, 200.0], [38.4, 200.0], [38.5, 200.0], [38.6, 200.0], [38.7, 200.0], [38.8, 200.0], [38.9, 200.0], [39.0, 200.0], [39.1, 200.0], [39.2, 201.0], [39.3, 201.0], [39.4, 201.0], [39.5, 201.0], [39.6, 201.0], [39.7, 201.0], [39.8, 201.0], [39.9, 201.0], [40.0, 201.0], [40.1, 201.0], [40.2, 201.0], [40.3, 201.0], [40.4, 201.0], [40.5, 201.0], [40.6, 201.0], [40.7, 202.0], [40.8, 202.0], [40.9, 202.0], [41.0, 202.0], [41.1, 202.0], [41.2, 202.0], [41.3, 202.0], [41.4, 202.0], [41.5, 202.0], [41.6, 202.0], [41.7, 202.0], [41.8, 202.0], [41.9, 202.0], [42.0, 202.0], [42.1, 202.0], [42.2, 202.0], [42.3, 203.0], [42.4, 203.0], [42.5, 203.0], [42.6, 203.0], [42.7, 203.0], [42.8, 203.0], [42.9, 203.0], [43.0, 203.0], [43.1, 203.0], [43.2, 203.0], [43.3, 203.0], [43.4, 203.0], [43.5, 203.0], [43.6, 203.0], [43.7, 203.0], [43.8, 203.0], [43.9, 204.0], [44.0, 204.0], [44.1, 204.0], [44.2, 204.0], [44.3, 204.0], [44.4, 204.0], [44.5, 204.0], [44.6, 204.0], [44.7, 204.0], [44.8, 204.0], [44.9, 204.0], [45.0, 204.0], [45.1, 204.0], [45.2, 204.0], [45.3, 204.0], [45.4, 205.0], [45.5, 205.0], [45.6, 205.0], [45.7, 205.0], [45.8, 205.0], [45.9, 205.0], [46.0, 205.0], [46.1, 205.0], [46.2, 205.0], [46.3, 205.0], [46.4, 205.0], [46.5, 205.0], [46.6, 205.0], [46.7, 205.0], [46.8, 205.0], [46.9, 205.0], [47.0, 206.0], [47.1, 206.0], [47.2, 206.0], [47.3, 206.0], [47.4, 206.0], [47.5, 206.0], [47.6, 206.0], [47.7, 206.0], [47.8, 206.0], [47.9, 206.0], [48.0, 206.0], [48.1, 206.0], [48.2, 206.0], [48.3, 206.0], [48.4, 206.0], [48.5, 206.0], [48.6, 207.0], [48.7, 207.0], [48.8, 207.0], [48.9, 207.0], [49.0, 207.0], [49.1, 207.0], [49.2, 207.0], [49.3, 207.0], [49.4, 207.0], [49.5, 207.0], [49.6, 207.0], [49.7, 207.0], [49.8, 207.0], [49.9, 208.0], [50.0, 208.0], [50.1, 208.0], [50.2, 208.0], [50.3, 208.0], [50.4, 208.0], [50.5, 208.0], [50.6, 208.0], [50.7, 208.0], [50.8, 208.0], [50.9, 208.0], [51.0, 208.0], [51.1, 208.0], [51.2, 208.0], [51.3, 208.0], [51.4, 208.0], [51.5, 209.0], [51.6, 209.0], [51.7, 209.0], [51.8, 209.0], [51.9, 209.0], [52.0, 209.0], [52.1, 209.0], [52.2, 209.0], [52.3, 209.0], [52.4, 209.0], [52.5, 209.0], [52.6, 209.0], [52.7, 209.0], [52.8, 209.0], [52.9, 209.0], [53.0, 210.0], [53.1, 210.0], [53.2, 210.0], [53.3, 210.0], [53.4, 210.0], [53.5, 210.0], [53.6, 210.0], [53.7, 210.0], [53.8, 210.0], [53.9, 210.0], [54.0, 210.0], [54.1, 210.0], [54.2, 210.0], [54.3, 210.0], [54.4, 210.0], [54.5, 211.0], [54.6, 211.0], [54.7, 211.0], [54.8, 211.0], [54.9, 211.0], [55.0, 211.0], [55.1, 211.0], [55.2, 211.0], [55.3, 211.0], [55.4, 211.0], [55.5, 211.0], [55.6, 211.0], [55.7, 211.0], [55.8, 211.0], [55.9, 211.0], [56.0, 212.0], [56.1, 212.0], [56.2, 212.0], [56.3, 212.0], [56.4, 212.0], [56.5, 212.0], [56.6, 212.0], [56.7, 212.0], [56.8, 212.0], [56.9, 212.0], [57.0, 212.0], [57.1, 212.0], [57.2, 212.0], [57.3, 212.0], [57.4, 213.0], [57.5, 213.0], [57.6, 213.0], [57.7, 213.0], [57.8, 213.0], [57.9, 213.0], [58.0, 213.0], [58.1, 213.0], [58.2, 213.0], [58.3, 213.0], [58.4, 213.0], [58.5, 213.0], [58.6, 213.0], [58.7, 214.0], [58.8, 214.0], [58.9, 214.0], [59.0, 214.0], [59.1, 214.0], [59.2, 214.0], [59.3, 214.0], [59.4, 214.0], [59.5, 214.0], [59.6, 214.0], [59.7, 214.0], [59.8, 214.0], [59.9, 215.0], [60.0, 215.0], [60.1, 215.0], [60.2, 215.0], [60.3, 215.0], [60.4, 215.0], [60.5, 215.0], [60.6, 215.0], [60.7, 215.0], [60.8, 215.0], [60.9, 215.0], [61.0, 215.0], [61.1, 216.0], [61.2, 216.0], [61.3, 216.0], [61.4, 216.0], [61.5, 216.0], [61.6, 216.0], [61.7, 216.0], [61.8, 216.0], [61.9, 216.0], [62.0, 216.0], [62.1, 216.0], [62.2, 216.0], [62.3, 217.0], [62.4, 217.0], [62.5, 217.0], [62.6, 217.0], [62.7, 217.0], [62.8, 217.0], [62.9, 217.0], [63.0, 217.0], [63.1, 217.0], [63.2, 217.0], [63.3, 217.0], [63.4, 217.0], [63.5, 218.0], [63.6, 218.0], [63.7, 218.0], [63.8, 218.0], [63.9, 218.0], [64.0, 218.0], [64.1, 218.0], [64.2, 218.0], [64.3, 218.0], [64.4, 218.0], [64.5, 219.0], [64.6, 219.0], [64.7, 219.0], [64.8, 219.0], [64.9, 219.0], [65.0, 219.0], [65.1, 219.0], [65.2, 219.0], [65.3, 219.0], [65.4, 219.0], [65.5, 219.0], [65.6, 219.0], [65.7, 220.0], [65.8, 220.0], [65.9, 220.0], [66.0, 220.0], [66.1, 220.0], [66.2, 220.0], [66.3, 220.0], [66.4, 220.0], [66.5, 220.0], [66.6, 221.0], [66.7, 221.0], [66.8, 221.0], [66.9, 221.0], [67.0, 221.0], [67.1, 221.0], [67.2, 221.0], [67.3, 221.0], [67.4, 221.0], [67.5, 221.0], [67.6, 222.0], [67.7, 222.0], [67.8, 222.0], [67.9, 222.0], [68.0, 222.0], [68.1, 222.0], [68.2, 222.0], [68.3, 222.0], [68.4, 222.0], [68.5, 223.0], [68.6, 223.0], [68.7, 223.0], [68.8, 223.0], [68.9, 223.0], [69.0, 223.0], [69.1, 223.0], [69.2, 223.0], [69.3, 223.0], [69.4, 224.0], [69.5, 224.0], [69.6, 224.0], [69.7, 224.0], [69.8, 224.0], [69.9, 224.0], [70.0, 224.0], [70.1, 225.0], [70.2, 225.0], [70.3, 225.0], [70.4, 225.0], [70.5, 225.0], [70.6, 225.0], [70.7, 225.0], [70.8, 225.0], [70.9, 225.0], [71.0, 226.0], [71.1, 226.0], [71.2, 226.0], [71.3, 226.0], [71.4, 226.0], [71.5, 226.0], [71.6, 226.0], [71.7, 226.0], [71.8, 227.0], [71.9, 227.0], [72.0, 227.0], [72.1, 227.0], [72.2, 227.0], [72.3, 227.0], [72.4, 227.0], [72.5, 227.0], [72.6, 228.0], [72.7, 228.0], [72.8, 228.0], [72.9, 228.0], [73.0, 228.0], [73.1, 228.0], [73.2, 228.0], [73.3, 228.0], [73.4, 229.0], [73.5, 229.0], [73.6, 229.0], [73.7, 229.0], [73.8, 229.0], [73.9, 229.0], [74.0, 229.0], [74.1, 230.0], [74.2, 230.0], [74.3, 230.0], [74.4, 230.0], [74.5, 230.0], [74.6, 230.0], [74.7, 231.0], [74.8, 231.0], [74.9, 231.0], [75.0, 231.0], [75.1, 231.0], [75.2, 231.0], [75.3, 232.0], [75.4, 232.0], [75.5, 232.0], [75.6, 232.0], [75.7, 232.0], [75.8, 233.0], [75.9, 233.0], [76.0, 233.0], [76.1, 233.0], [76.2, 233.0], [76.3, 233.0], [76.4, 234.0], [76.5, 234.0], [76.6, 234.0], [76.7, 234.0], [76.8, 234.0], [76.9, 234.0], [77.0, 235.0], [77.1, 235.0], [77.2, 235.0], [77.3, 235.0], [77.4, 235.0], [77.5, 235.0], [77.6, 236.0], [77.7, 236.0], [77.8, 236.0], [77.9, 236.0], [78.0, 236.0], [78.1, 237.0], [78.2, 237.0], [78.3, 237.0], [78.4, 237.0], [78.5, 237.0], [78.6, 238.0], [78.7, 238.0], [78.8, 238.0], [78.9, 238.0], [79.0, 239.0], [79.1, 239.0], [79.2, 239.0], [79.3, 239.0], [79.4, 239.0], [79.5, 240.0], [79.6, 240.0], [79.7, 240.0], [79.8, 240.0], [79.9, 240.0], [80.0, 241.0], [80.1, 241.0], [80.2, 241.0], [80.3, 241.0], [80.4, 242.0], [80.5, 242.0], [80.6, 242.0], [80.7, 242.0], [80.8, 242.0], [80.9, 243.0], [81.0, 243.0], [81.1, 243.0], [81.2, 243.0], [81.3, 243.0], [81.4, 244.0], [81.5, 244.0], [81.6, 244.0], [81.7, 244.0], [81.8, 244.0], [81.9, 245.0], [82.0, 245.0], [82.1, 245.0], [82.2, 245.0], [82.3, 245.0], [82.4, 246.0], [82.5, 246.0], [82.6, 246.0], [82.7, 246.0], [82.8, 247.0], [82.9, 247.0], [83.0, 247.0], [83.1, 247.0], [83.2, 247.0], [83.3, 247.0], [83.4, 248.0], [83.5, 248.0], [83.6, 248.0], [83.7, 248.0], [83.8, 249.0], [83.9, 249.0], [84.0, 249.0], [84.1, 249.0], [84.2, 249.0], [84.3, 250.0], [84.4, 250.0], [84.5, 250.0], [84.6, 250.0], [84.7, 250.0], [84.8, 251.0], [84.9, 251.0], [85.0, 251.0], [85.1, 251.0], [85.2, 251.0], [85.3, 252.0], [85.4, 252.0], [85.5, 252.0], [85.6, 252.0], [85.7, 253.0], [85.8, 253.0], [85.9, 253.0], [86.0, 253.0], [86.1, 253.0], [86.2, 254.0], [86.3, 254.0], [86.4, 254.0], [86.5, 254.0], [86.6, 255.0], [86.7, 255.0], [86.8, 255.0], [86.9, 255.0], [87.0, 255.0], [87.1, 256.0], [87.2, 256.0], [87.3, 256.0], [87.4, 256.0], [87.5, 257.0], [87.6, 257.0], [87.7, 257.0], [87.8, 257.0], [87.9, 258.0], [88.0, 258.0], [88.1, 258.0], [88.2, 258.0], [88.3, 258.0], [88.4, 259.0], [88.5, 259.0], [88.6, 259.0], [88.7, 259.0], [88.8, 260.0], [88.9, 260.0], [89.0, 260.0], [89.1, 260.0], [89.2, 260.0], [89.3, 261.0], [89.4, 261.0], [89.5, 261.0], [89.6, 261.0], [89.7, 262.0], [89.8, 262.0], [89.9, 262.0], [90.0, 262.0], [90.1, 263.0], [90.2, 263.0], [90.3, 263.0], [90.4, 263.0], [90.5, 263.0], [90.6, 264.0], [90.7, 264.0], [90.8, 264.0], [90.9, 264.0], [91.0, 265.0], [91.1, 265.0], [91.2, 265.0], [91.3, 265.0], [91.4, 266.0], [91.5, 266.0], [91.6, 266.0], [91.7, 266.0], [91.8, 267.0], [91.9, 267.0], [92.0, 267.0], [92.1, 267.0], [92.2, 268.0], [92.3, 268.0], [92.4, 268.0], [92.5, 269.0], [92.6, 269.0], [92.7, 269.0], [92.8, 270.0], [92.9, 270.0], [93.0, 270.0], [93.1, 270.0], [93.2, 271.0], [93.3, 271.0], [93.4, 271.0], [93.5, 272.0], [93.6, 272.0], [93.7, 272.0], [93.8, 272.0], [93.9, 273.0], [94.0, 273.0], [94.1, 273.0], [94.2, 274.0], [94.3, 274.0], [94.4, 274.0], [94.5, 274.0], [94.6, 275.0], [94.7, 275.0], [94.8, 275.0], [94.9, 276.0], [95.0, 276.0], [95.1, 276.0], [95.2, 277.0], [95.3, 277.0], [95.4, 277.0], [95.5, 278.0], [95.6, 278.0], [95.7, 278.0], [95.8, 279.0], [95.9, 279.0], [96.0, 279.0], [96.1, 280.0], [96.2, 280.0], [96.3, 281.0], [96.4, 281.0], [96.5, 282.0], [96.6, 282.0], [96.7, 282.0], [96.8, 283.0], [96.9, 283.0], [97.0, 284.0], [97.1, 284.0], [97.2, 285.0], [97.3, 286.0], [97.4, 286.0], [97.5, 287.0], [97.6, 287.0], [97.7, 288.0], [97.8, 289.0], [97.9, 290.0], [98.0, 290.0], [98.1, 291.0], [98.2, 292.0], [98.3, 293.0], [98.4, 294.0], [98.5, 295.0], [98.6, 296.0], [98.7, 297.0], [98.8, 298.0], [98.9, 300.0], [99.0, 301.0], [99.1, 303.0], [99.2, 304.0], [99.3, 307.0], [99.4, 309.0], [99.5, 311.0], [99.6, 314.0], [99.7, 320.0], [99.8, 326.0], [99.9, 336.0]], "isOverall": false, "label": "extract", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 355.0, "minX": 100.0, "maxY": 19628.0, "series": [{"data": [[300.0, 355.0], [100.0, 12017.0], [200.0, 19628.0]], "isOverall": false, "label": "extract", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 300.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 32000.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 32000.0, "series": [{"data": [[0.0, 32000.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 4.9E-324, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.666083E12, "maxY": 16.0, "series": [{"data": [[1.666083E12, 15.74678111587984], [1.66608348E12, 4.851851851851849], [1.66608318E12, 16.0], [1.66608312E12, 16.0], [1.6660833E12, 16.0], [1.66608324E12, 16.0], [1.66608342E12, 12.586831512363464], [1.66608336E12, 15.372011251758105], [1.66608306E12, 16.0], [1.66608354E12, 1.0]], "isOverall": false, "label": "16", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66608354E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 161.93006993006986, "minX": 1.0, "maxY": 221.57916666666657, "series": [{"data": [[8.0, 193.28571428571428], [2.0, 166.3058823529412], [9.0, 190.0406091370558], [10.0, 199.65729349736392], [11.0, 211.734693877551], [12.0, 214.08917197452226], [3.0, 169.62820512820514], [13.0, 216.2786343612336], [14.0, 221.57916666666657], [15.0, 216.9136812411846], [4.0, 166.5652173913044], [16.0, 213.96980839155069], [1.0, 161.93006993006986], [5.0, 164.03947368421052], [6.0, 173.55760869565216], [7.0, 184.0]], "isOverall": false, "label": "extract", "isController": false}, {"data": [[15.06715625, 212.1043437500006]], "isOverall": false, "label": "extract-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 16.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 0.0, "minX": 1.666083E12, "maxY": 9579156.5, "series": [{"data": [[1.666083E12, 978831.9833333333], [1.66608348E12, 2847357.95], [1.66608318E12, 9564694.616666667], [1.66608312E12, 9579156.5], [1.6660833E12, 9300358.35], [1.66608324E12, 9272012.516666668], [1.66608342E12, 7372574.533333333], [1.66608336E12, 9022155.616666667], [1.66608306E12, 9466177.35], [1.66608354E12, 108547.25]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.666083E12, 0.0], [1.66608348E12, 0.0], [1.66608318E12, 0.0], [1.66608312E12, 0.0], [1.6660833E12, 0.0], [1.66608324E12, 0.0], [1.66608342E12, 0.0], [1.66608336E12, 0.0], [1.66608306E12, 0.0], [1.66608354E12, 0.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66608354E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 162.46938775510205, "minX": 1.666083E12, "maxY": 225.46566523605156, "series": [{"data": [[1.666083E12, 225.46566523605156], [1.66608348E12, 170.7955246913582], [1.66608318E12, 210.64889181479055], [1.66608312E12, 210.25279543959627], [1.6660833E12, 216.60970654627528], [1.66608324E12, 218.54953313595945], [1.66608342E12, 211.22254169062663], [1.66608336E12, 215.84013127051122], [1.66608306E12, 212.92321349312024], [1.66608354E12, 162.46938775510205]], "isOverall": false, "label": "extract", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66608354E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 160.57142857142856, "minX": 1.666083E12, "maxY": 223.44206008583694, "series": [{"data": [[1.666083E12, 223.44206008583694], [1.66608348E12, 168.89120370370364], [1.66608318E12, 208.7263550581523], [1.66608312E12, 208.35386976540252], [1.6660833E12, 214.74604966139995], [1.66608324E12, 216.6574812115693], [1.66608342E12, 209.31196089706697], [1.66608336E12, 213.9385841537747], [1.66608306E12, 210.94829116733237], [1.66608354E12, 160.57142857142856]], "isOverall": false, "label": "extract", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66608354E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.666083E12, "maxY": 4.9E-324, "series": [{"data": [[1.666083E12, 0.0], [1.66608348E12, 0.0], [1.66608318E12, 0.0], [1.66608312E12, 0.0], [1.6660833E12, 0.0], [1.66608324E12, 0.0], [1.66608342E12, 0.0], [1.66608336E12, 0.0], [1.66608306E12, 0.0], [1.66608354E12, 0.0]], "isOverall": false, "label": "extract", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66608354E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 112.0, "minX": 1.666083E12, "maxY": 397.0, "series": [{"data": [[1.666083E12, 397.0], [1.66608348E12, 220.0], [1.66608318E12, 372.0], [1.66608312E12, 386.0], [1.6660833E12, 337.0], [1.66608324E12, 362.0], [1.66608342E12, 327.0], [1.66608336E12, 353.0], [1.66608306E12, 382.0], [1.66608354E12, 184.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.666083E12, 151.0], [1.66608348E12, 112.0], [1.66608318E12, 138.0], [1.66608312E12, 140.0], [1.6660833E12, 135.0], [1.66608324E12, 142.0], [1.66608342E12, 134.0], [1.66608336E12, 138.0], [1.66608306E12, 138.0], [1.66608354E12, 142.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.666083E12, 285.3], [1.66608348E12, 200.0], [1.66608318E12, 260.0], [1.66608312E12, 258.0], [1.6660833E12, 269.0], [1.66608324E12, 268.0], [1.66608342E12, 256.0], [1.66608336E12, 263.0], [1.66608306E12, 263.0], [1.66608354E12, 179.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.666083E12, 346.25999999999965], [1.66608348E12, 214.02999999999997], [1.66608318E12, 299.0], [1.66608312E12, 303.3800000000001], [1.6660833E12, 304.0], [1.66608324E12, 304.0799999999999], [1.66608342E12, 287.0], [1.66608336E12, 297.0], [1.66608306E12, 304.0], [1.66608354E12, 184.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.666083E12, 303.65], [1.66608348E12, 206.0], [1.66608318E12, 274.0], [1.66608312E12, 275.0], [1.6660833E12, 280.0], [1.66608324E12, 279.0], [1.66608342E12, 269.0], [1.66608336E12, 275.0], [1.66608306E12, 278.0], [1.66608354E12, 182.5]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66608354E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 156.0, "minX": 6.0, "maxY": 216.0, "series": [{"data": [[6.0, 163.0], [7.0, 156.0], [11.0, 165.0], [12.0, 163.5], [13.0, 166.0], [15.0, 169.0], [17.0, 170.0], [18.0, 169.5], [19.0, 164.0], [24.0, 165.5], [26.0, 173.5], [30.0, 162.5], [33.0, 179.0], [32.0, 175.0], [35.0, 180.0], [34.0, 178.0], [36.0, 176.5], [37.0, 179.0], [47.0, 186.0], [48.0, 191.5], [49.0, 190.5], [50.0, 197.5], [51.0, 196.0], [53.0, 190.5], [52.0, 190.0], [55.0, 210.0], [57.0, 206.0], [56.0, 209.0], [58.0, 211.0], [59.0, 208.0], [61.0, 211.0], [60.0, 207.0], [62.0, 212.0], [63.0, 211.0], [67.0, 213.0], [66.0, 213.0], [65.0, 213.0], [64.0, 211.0], [69.0, 212.0], [70.0, 214.0], [71.0, 216.0], [68.0, 212.0], [75.0, 208.0], [73.0, 212.0], [72.0, 214.0], [74.0, 210.0], [76.0, 207.0], [77.0, 206.0], [78.0, 204.0], [79.0, 203.5], [80.0, 201.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 80.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 154.5, "minX": 6.0, "maxY": 214.0, "series": [{"data": [[6.0, 161.0], [7.0, 154.5], [11.0, 163.0], [12.0, 161.5], [13.0, 164.0], [15.0, 168.0], [17.0, 168.0], [18.0, 167.5], [19.0, 162.0], [24.0, 163.5], [26.0, 171.5], [30.0, 160.5], [33.0, 177.0], [32.0, 173.0], [35.0, 178.0], [34.0, 176.5], [36.0, 174.0], [37.0, 176.5], [47.0, 185.0], [48.0, 189.5], [49.0, 188.5], [50.0, 195.5], [51.0, 194.0], [53.0, 189.0], [52.0, 188.0], [55.0, 208.0], [57.0, 204.0], [56.0, 207.0], [58.0, 209.5], [59.0, 206.0], [61.0, 209.0], [60.0, 205.5], [62.0, 210.0], [63.0, 209.0], [67.0, 212.0], [66.0, 210.5], [65.0, 211.0], [64.0, 209.0], [69.0, 210.0], [70.0, 212.0], [71.0, 214.0], [68.0, 210.0], [75.0, 206.0], [73.0, 210.0], [72.0, 212.0], [74.0, 208.0], [76.0, 205.0], [77.0, 204.0], [78.0, 202.0], [79.0, 201.5], [80.0, 199.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 80.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.8, "minX": 1.666083E12, "maxY": 76.01666666666667, "series": [{"data": [[1.666083E12, 8.033333333333333], [1.66608348E12, 21.516666666666666], [1.66608318E12, 75.95], [1.66608312E12, 76.01666666666667], [1.6660833E12, 73.83333333333333], [1.66608324E12, 73.18333333333334], [1.66608342E12, 57.81666666666667], [1.66608336E12, 71.08333333333333], [1.66608306E12, 75.1], [1.66608354E12, 0.8]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66608354E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.8166666666666667, "minX": 1.666083E12, "maxY": 76.01666666666667, "series": [{"data": [[1.666083E12, 7.766666666666667], [1.66608348E12, 21.6], [1.66608318E12, 75.95], [1.66608312E12, 76.01666666666667], [1.6660833E12, 73.83333333333333], [1.66608324E12, 73.18333333333334], [1.66608342E12, 57.96666666666667], [1.66608336E12, 71.1], [1.66608306E12, 75.1], [1.66608354E12, 0.8166666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66608354E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.8166666666666667, "minX": 1.666083E12, "maxY": 76.01666666666667, "series": [{"data": [[1.666083E12, 7.766666666666667], [1.66608348E12, 21.6], [1.66608318E12, 75.95], [1.66608312E12, 76.01666666666667], [1.6660833E12, 73.83333333333333], [1.66608324E12, 73.18333333333334], [1.66608342E12, 57.96666666666667], [1.66608336E12, 71.1], [1.66608306E12, 75.1], [1.66608354E12, 0.8166666666666667]], "isOverall": false, "label": "extract-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66608354E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.8166666666666667, "minX": 1.666083E12, "maxY": 76.01666666666667, "series": [{"data": [[1.666083E12, 7.766666666666667], [1.66608348E12, 21.6], [1.66608318E12, 75.95], [1.66608312E12, 76.01666666666667], [1.6660833E12, 73.83333333333333], [1.66608324E12, 73.18333333333334], [1.66608342E12, 57.96666666666667], [1.66608336E12, 71.1], [1.66608306E12, 75.1], [1.66608354E12, 0.8166666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66608354E12, "title": "Total Transactions Per Second"}},
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

