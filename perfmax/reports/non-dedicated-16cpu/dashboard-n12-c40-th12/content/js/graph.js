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
        data: {"result": {"minY": 103.0, "minX": 0.0, "maxY": 352.0, "series": [{"data": [[0.0, 103.0], [0.1, 125.0], [0.2, 130.0], [0.3, 132.0], [0.4, 134.0], [0.5, 136.0], [0.6, 137.0], [0.7, 139.0], [0.8, 140.0], [0.9, 141.0], [1.0, 141.0], [1.1, 142.0], [1.2, 143.0], [1.3, 144.0], [1.4, 145.0], [1.5, 145.0], [1.6, 146.0], [1.7, 146.0], [1.8, 147.0], [1.9, 147.0], [2.0, 148.0], [2.1, 148.0], [2.2, 149.0], [2.3, 149.0], [2.4, 149.0], [2.5, 150.0], [2.6, 150.0], [2.7, 151.0], [2.8, 151.0], [2.9, 151.0], [3.0, 152.0], [3.1, 152.0], [3.2, 152.0], [3.3, 153.0], [3.4, 153.0], [3.5, 153.0], [3.6, 154.0], [3.7, 154.0], [3.8, 154.0], [3.9, 154.0], [4.0, 155.0], [4.1, 155.0], [4.2, 155.0], [4.3, 156.0], [4.4, 156.0], [4.5, 156.0], [4.6, 156.0], [4.7, 157.0], [4.8, 157.0], [4.9, 157.0], [5.0, 158.0], [5.1, 158.0], [5.2, 158.0], [5.3, 158.0], [5.4, 158.0], [5.5, 159.0], [5.6, 159.0], [5.7, 159.0], [5.8, 159.0], [5.9, 160.0], [6.0, 160.0], [6.1, 160.0], [6.2, 160.0], [6.3, 161.0], [6.4, 161.0], [6.5, 161.0], [6.6, 161.0], [6.7, 161.0], [6.8, 162.0], [6.9, 162.0], [7.0, 162.0], [7.1, 162.0], [7.2, 162.0], [7.3, 163.0], [7.4, 163.0], [7.5, 163.0], [7.6, 163.0], [7.7, 163.0], [7.8, 163.0], [7.9, 164.0], [8.0, 164.0], [8.1, 164.0], [8.2, 164.0], [8.3, 164.0], [8.4, 165.0], [8.5, 165.0], [8.6, 165.0], [8.7, 165.0], [8.8, 165.0], [8.9, 165.0], [9.0, 166.0], [9.1, 166.0], [9.2, 166.0], [9.3, 166.0], [9.4, 166.0], [9.5, 166.0], [9.6, 166.0], [9.7, 166.0], [9.8, 167.0], [9.9, 167.0], [10.0, 167.0], [10.1, 167.0], [10.2, 167.0], [10.3, 167.0], [10.4, 167.0], [10.5, 168.0], [10.6, 168.0], [10.7, 168.0], [10.8, 168.0], [10.9, 168.0], [11.0, 168.0], [11.1, 169.0], [11.2, 169.0], [11.3, 169.0], [11.4, 169.0], [11.5, 169.0], [11.6, 169.0], [11.7, 169.0], [11.8, 170.0], [11.9, 170.0], [12.0, 170.0], [12.1, 170.0], [12.2, 170.0], [12.3, 170.0], [12.4, 170.0], [12.5, 171.0], [12.6, 171.0], [12.7, 171.0], [12.8, 171.0], [12.9, 171.0], [13.0, 171.0], [13.1, 171.0], [13.2, 171.0], [13.3, 172.0], [13.4, 172.0], [13.5, 172.0], [13.6, 172.0], [13.7, 172.0], [13.8, 172.0], [13.9, 172.0], [14.0, 173.0], [14.1, 173.0], [14.2, 173.0], [14.3, 173.0], [14.4, 173.0], [14.5, 173.0], [14.6, 173.0], [14.7, 174.0], [14.8, 174.0], [14.9, 174.0], [15.0, 174.0], [15.1, 174.0], [15.2, 174.0], [15.3, 174.0], [15.4, 174.0], [15.5, 174.0], [15.6, 175.0], [15.7, 175.0], [15.8, 175.0], [15.9, 175.0], [16.0, 175.0], [16.1, 175.0], [16.2, 175.0], [16.3, 175.0], [16.4, 176.0], [16.5, 176.0], [16.6, 176.0], [16.7, 176.0], [16.8, 176.0], [16.9, 176.0], [17.0, 176.0], [17.1, 176.0], [17.2, 177.0], [17.3, 177.0], [17.4, 177.0], [17.5, 177.0], [17.6, 177.0], [17.7, 177.0], [17.8, 177.0], [17.9, 177.0], [18.0, 177.0], [18.1, 178.0], [18.2, 178.0], [18.3, 178.0], [18.4, 178.0], [18.5, 178.0], [18.6, 178.0], [18.7, 178.0], [18.8, 178.0], [18.9, 178.0], [19.0, 179.0], [19.1, 179.0], [19.2, 179.0], [19.3, 179.0], [19.4, 179.0], [19.5, 179.0], [19.6, 179.0], [19.7, 179.0], [19.8, 179.0], [19.9, 180.0], [20.0, 180.0], [20.1, 180.0], [20.2, 180.0], [20.3, 180.0], [20.4, 180.0], [20.5, 180.0], [20.6, 180.0], [20.7, 180.0], [20.8, 181.0], [20.9, 181.0], [21.0, 181.0], [21.1, 181.0], [21.2, 181.0], [21.3, 181.0], [21.4, 181.0], [21.5, 181.0], [21.6, 181.0], [21.7, 181.0], [21.8, 182.0], [21.9, 182.0], [22.0, 182.0], [22.1, 182.0], [22.2, 182.0], [22.3, 182.0], [22.4, 182.0], [22.5, 182.0], [22.6, 182.0], [22.7, 183.0], [22.8, 183.0], [22.9, 183.0], [23.0, 183.0], [23.1, 183.0], [23.2, 183.0], [23.3, 183.0], [23.4, 183.0], [23.5, 183.0], [23.6, 183.0], [23.7, 183.0], [23.8, 184.0], [23.9, 184.0], [24.0, 184.0], [24.1, 184.0], [24.2, 184.0], [24.3, 184.0], [24.4, 184.0], [24.5, 184.0], [24.6, 184.0], [24.7, 185.0], [24.8, 185.0], [24.9, 185.0], [25.0, 185.0], [25.1, 185.0], [25.2, 185.0], [25.3, 185.0], [25.4, 185.0], [25.5, 185.0], [25.6, 185.0], [25.7, 185.0], [25.8, 185.0], [25.9, 186.0], [26.0, 186.0], [26.1, 186.0], [26.2, 186.0], [26.3, 186.0], [26.4, 186.0], [26.5, 186.0], [26.6, 186.0], [26.7, 186.0], [26.8, 186.0], [26.9, 187.0], [27.0, 187.0], [27.1, 187.0], [27.2, 187.0], [27.3, 187.0], [27.4, 187.0], [27.5, 187.0], [27.6, 187.0], [27.7, 187.0], [27.8, 187.0], [27.9, 188.0], [28.0, 188.0], [28.1, 188.0], [28.2, 188.0], [28.3, 188.0], [28.4, 188.0], [28.5, 188.0], [28.6, 188.0], [28.7, 188.0], [28.8, 188.0], [28.9, 188.0], [29.0, 189.0], [29.1, 189.0], [29.2, 189.0], [29.3, 189.0], [29.4, 189.0], [29.5, 189.0], [29.6, 189.0], [29.7, 189.0], [29.8, 189.0], [29.9, 189.0], [30.0, 189.0], [30.1, 189.0], [30.2, 190.0], [30.3, 190.0], [30.4, 190.0], [30.5, 190.0], [30.6, 190.0], [30.7, 190.0], [30.8, 190.0], [30.9, 190.0], [31.0, 190.0], [31.1, 190.0], [31.2, 190.0], [31.3, 190.0], [31.4, 190.0], [31.5, 191.0], [31.6, 191.0], [31.7, 191.0], [31.8, 191.0], [31.9, 191.0], [32.0, 191.0], [32.1, 191.0], [32.2, 191.0], [32.3, 191.0], [32.4, 191.0], [32.5, 191.0], [32.6, 192.0], [32.7, 192.0], [32.8, 192.0], [32.9, 192.0], [33.0, 192.0], [33.1, 192.0], [33.2, 192.0], [33.3, 192.0], [33.4, 192.0], [33.5, 192.0], [33.6, 192.0], [33.7, 192.0], [33.8, 192.0], [33.9, 193.0], [34.0, 193.0], [34.1, 193.0], [34.2, 193.0], [34.3, 193.0], [34.4, 193.0], [34.5, 193.0], [34.6, 193.0], [34.7, 193.0], [34.8, 193.0], [34.9, 193.0], [35.0, 193.0], [35.1, 194.0], [35.2, 194.0], [35.3, 194.0], [35.4, 194.0], [35.5, 194.0], [35.6, 194.0], [35.7, 194.0], [35.8, 194.0], [35.9, 194.0], [36.0, 194.0], [36.1, 194.0], [36.2, 194.0], [36.3, 195.0], [36.4, 195.0], [36.5, 195.0], [36.6, 195.0], [36.7, 195.0], [36.8, 195.0], [36.9, 195.0], [37.0, 195.0], [37.1, 195.0], [37.2, 195.0], [37.3, 195.0], [37.4, 195.0], [37.5, 196.0], [37.6, 196.0], [37.7, 196.0], [37.8, 196.0], [37.9, 196.0], [38.0, 196.0], [38.1, 196.0], [38.2, 196.0], [38.3, 196.0], [38.4, 196.0], [38.5, 196.0], [38.6, 196.0], [38.7, 196.0], [38.8, 197.0], [38.9, 197.0], [39.0, 197.0], [39.1, 197.0], [39.2, 197.0], [39.3, 197.0], [39.4, 197.0], [39.5, 197.0], [39.6, 197.0], [39.7, 197.0], [39.8, 197.0], [39.9, 197.0], [40.0, 198.0], [40.1, 198.0], [40.2, 198.0], [40.3, 198.0], [40.4, 198.0], [40.5, 198.0], [40.6, 198.0], [40.7, 198.0], [40.8, 198.0], [40.9, 198.0], [41.0, 198.0], [41.1, 198.0], [41.2, 198.0], [41.3, 199.0], [41.4, 199.0], [41.5, 199.0], [41.6, 199.0], [41.7, 199.0], [41.8, 199.0], [41.9, 199.0], [42.0, 199.0], [42.1, 199.0], [42.2, 199.0], [42.3, 199.0], [42.4, 199.0], [42.5, 199.0], [42.6, 199.0], [42.7, 199.0], [42.8, 199.0], [42.9, 200.0], [43.0, 200.0], [43.1, 200.0], [43.2, 200.0], [43.3, 200.0], [43.4, 200.0], [43.5, 200.0], [43.6, 200.0], [43.7, 200.0], [43.8, 200.0], [43.9, 200.0], [44.0, 200.0], [44.1, 201.0], [44.2, 201.0], [44.3, 201.0], [44.4, 201.0], [44.5, 201.0], [44.6, 201.0], [44.7, 201.0], [44.8, 201.0], [44.9, 201.0], [45.0, 201.0], [45.1, 201.0], [45.2, 201.0], [45.3, 201.0], [45.4, 201.0], [45.5, 201.0], [45.6, 202.0], [45.7, 202.0], [45.8, 202.0], [45.9, 202.0], [46.0, 202.0], [46.1, 202.0], [46.2, 202.0], [46.3, 202.0], [46.4, 202.0], [46.5, 202.0], [46.6, 202.0], [46.7, 202.0], [46.8, 202.0], [46.9, 202.0], [47.0, 203.0], [47.1, 203.0], [47.2, 203.0], [47.3, 203.0], [47.4, 203.0], [47.5, 203.0], [47.6, 203.0], [47.7, 203.0], [47.8, 203.0], [47.9, 203.0], [48.0, 203.0], [48.1, 203.0], [48.2, 203.0], [48.3, 204.0], [48.4, 204.0], [48.5, 204.0], [48.6, 204.0], [48.7, 204.0], [48.8, 204.0], [48.9, 204.0], [49.0, 204.0], [49.1, 204.0], [49.2, 204.0], [49.3, 204.0], [49.4, 204.0], [49.5, 204.0], [49.6, 205.0], [49.7, 205.0], [49.8, 205.0], [49.9, 205.0], [50.0, 205.0], [50.1, 205.0], [50.2, 205.0], [50.3, 205.0], [50.4, 205.0], [50.5, 205.0], [50.6, 205.0], [50.7, 205.0], [50.8, 205.0], [50.9, 205.0], [51.0, 206.0], [51.1, 206.0], [51.2, 206.0], [51.3, 206.0], [51.4, 206.0], [51.5, 206.0], [51.6, 206.0], [51.7, 206.0], [51.8, 206.0], [51.9, 206.0], [52.0, 206.0], [52.1, 206.0], [52.2, 206.0], [52.3, 207.0], [52.4, 207.0], [52.5, 207.0], [52.6, 207.0], [52.7, 207.0], [52.8, 207.0], [52.9, 207.0], [53.0, 207.0], [53.1, 207.0], [53.2, 207.0], [53.3, 207.0], [53.4, 207.0], [53.5, 207.0], [53.6, 207.0], [53.7, 208.0], [53.8, 208.0], [53.9, 208.0], [54.0, 208.0], [54.1, 208.0], [54.2, 208.0], [54.3, 208.0], [54.4, 208.0], [54.5, 208.0], [54.6, 208.0], [54.7, 208.0], [54.8, 208.0], [54.9, 208.0], [55.0, 208.0], [55.1, 209.0], [55.2, 209.0], [55.3, 209.0], [55.4, 209.0], [55.5, 209.0], [55.6, 209.0], [55.7, 209.0], [55.8, 209.0], [55.9, 209.0], [56.0, 209.0], [56.1, 209.0], [56.2, 209.0], [56.3, 209.0], [56.4, 209.0], [56.5, 210.0], [56.6, 210.0], [56.7, 210.0], [56.8, 210.0], [56.9, 210.0], [57.0, 210.0], [57.1, 210.0], [57.2, 210.0], [57.3, 210.0], [57.4, 210.0], [57.5, 210.0], [57.6, 210.0], [57.7, 210.0], [57.8, 211.0], [57.9, 211.0], [58.0, 211.0], [58.1, 211.0], [58.2, 211.0], [58.3, 211.0], [58.4, 211.0], [58.5, 211.0], [58.6, 211.0], [58.7, 211.0], [58.8, 211.0], [58.9, 211.0], [59.0, 211.0], [59.1, 212.0], [59.2, 212.0], [59.3, 212.0], [59.4, 212.0], [59.5, 212.0], [59.6, 212.0], [59.7, 212.0], [59.8, 212.0], [59.9, 212.0], [60.0, 212.0], [60.1, 212.0], [60.2, 213.0], [60.3, 213.0], [60.4, 213.0], [60.5, 213.0], [60.6, 213.0], [60.7, 213.0], [60.8, 213.0], [60.9, 213.0], [61.0, 213.0], [61.1, 213.0], [61.2, 213.0], [61.3, 213.0], [61.4, 213.0], [61.5, 213.0], [61.6, 214.0], [61.7, 214.0], [61.8, 214.0], [61.9, 214.0], [62.0, 214.0], [62.1, 214.0], [62.2, 214.0], [62.3, 214.0], [62.4, 214.0], [62.5, 214.0], [62.6, 214.0], [62.7, 215.0], [62.8, 215.0], [62.9, 215.0], [63.0, 215.0], [63.1, 215.0], [63.2, 215.0], [63.3, 215.0], [63.4, 215.0], [63.5, 215.0], [63.6, 215.0], [63.7, 215.0], [63.8, 215.0], [63.9, 216.0], [64.0, 216.0], [64.1, 216.0], [64.2, 216.0], [64.3, 216.0], [64.4, 216.0], [64.5, 216.0], [64.6, 216.0], [64.7, 216.0], [64.8, 216.0], [64.9, 216.0], [65.0, 217.0], [65.1, 217.0], [65.2, 217.0], [65.3, 217.0], [65.4, 217.0], [65.5, 217.0], [65.6, 217.0], [65.7, 217.0], [65.8, 217.0], [65.9, 217.0], [66.0, 218.0], [66.1, 218.0], [66.2, 218.0], [66.3, 218.0], [66.4, 218.0], [66.5, 218.0], [66.6, 218.0], [66.7, 218.0], [66.8, 218.0], [66.9, 218.0], [67.0, 218.0], [67.1, 218.0], [67.2, 219.0], [67.3, 219.0], [67.4, 219.0], [67.5, 219.0], [67.6, 219.0], [67.7, 219.0], [67.8, 219.0], [67.9, 219.0], [68.0, 219.0], [68.1, 219.0], [68.2, 219.0], [68.3, 220.0], [68.4, 220.0], [68.5, 220.0], [68.6, 220.0], [68.7, 220.0], [68.8, 220.0], [68.9, 220.0], [69.0, 220.0], [69.1, 220.0], [69.2, 220.0], [69.3, 220.0], [69.4, 221.0], [69.5, 221.0], [69.6, 221.0], [69.7, 221.0], [69.8, 221.0], [69.9, 221.0], [70.0, 221.0], [70.1, 221.0], [70.2, 221.0], [70.3, 221.0], [70.4, 222.0], [70.5, 222.0], [70.6, 222.0], [70.7, 222.0], [70.8, 222.0], [70.9, 222.0], [71.0, 222.0], [71.1, 222.0], [71.2, 222.0], [71.3, 223.0], [71.4, 223.0], [71.5, 223.0], [71.6, 223.0], [71.7, 223.0], [71.8, 223.0], [71.9, 223.0], [72.0, 223.0], [72.1, 223.0], [72.2, 224.0], [72.3, 224.0], [72.4, 224.0], [72.5, 224.0], [72.6, 224.0], [72.7, 224.0], [72.8, 224.0], [72.9, 225.0], [73.0, 225.0], [73.1, 225.0], [73.2, 225.0], [73.3, 225.0], [73.4, 225.0], [73.5, 225.0], [73.6, 225.0], [73.7, 225.0], [73.8, 226.0], [73.9, 226.0], [74.0, 226.0], [74.1, 226.0], [74.2, 226.0], [74.3, 226.0], [74.4, 226.0], [74.5, 226.0], [74.6, 227.0], [74.7, 227.0], [74.8, 227.0], [74.9, 227.0], [75.0, 227.0], [75.1, 227.0], [75.2, 227.0], [75.3, 227.0], [75.4, 228.0], [75.5, 228.0], [75.6, 228.0], [75.7, 228.0], [75.8, 228.0], [75.9, 228.0], [76.0, 228.0], [76.1, 229.0], [76.2, 229.0], [76.3, 229.0], [76.4, 229.0], [76.5, 229.0], [76.6, 229.0], [76.7, 229.0], [76.8, 230.0], [76.9, 230.0], [77.0, 230.0], [77.1, 230.0], [77.2, 230.0], [77.3, 230.0], [77.4, 230.0], [77.5, 231.0], [77.6, 231.0], [77.7, 231.0], [77.8, 231.0], [77.9, 231.0], [78.0, 231.0], [78.1, 231.0], [78.2, 232.0], [78.3, 232.0], [78.4, 232.0], [78.5, 232.0], [78.6, 232.0], [78.7, 232.0], [78.8, 233.0], [78.9, 233.0], [79.0, 233.0], [79.1, 233.0], [79.2, 233.0], [79.3, 233.0], [79.4, 233.0], [79.5, 234.0], [79.6, 234.0], [79.7, 234.0], [79.8, 234.0], [79.9, 234.0], [80.0, 234.0], [80.1, 235.0], [80.2, 235.0], [80.3, 235.0], [80.4, 235.0], [80.5, 235.0], [80.6, 235.0], [80.7, 236.0], [80.8, 236.0], [80.9, 236.0], [81.0, 236.0], [81.1, 236.0], [81.2, 237.0], [81.3, 237.0], [81.4, 237.0], [81.5, 237.0], [81.6, 237.0], [81.7, 237.0], [81.8, 237.0], [81.9, 238.0], [82.0, 238.0], [82.1, 238.0], [82.2, 238.0], [82.3, 238.0], [82.4, 239.0], [82.5, 239.0], [82.6, 239.0], [82.7, 239.0], [82.8, 239.0], [82.9, 240.0], [83.0, 240.0], [83.1, 240.0], [83.2, 240.0], [83.3, 240.0], [83.4, 241.0], [83.5, 241.0], [83.6, 241.0], [83.7, 241.0], [83.8, 242.0], [83.9, 242.0], [84.0, 242.0], [84.1, 242.0], [84.2, 242.0], [84.3, 243.0], [84.4, 243.0], [84.5, 243.0], [84.6, 243.0], [84.7, 244.0], [84.8, 244.0], [84.9, 244.0], [85.0, 244.0], [85.1, 244.0], [85.2, 245.0], [85.3, 245.0], [85.4, 245.0], [85.5, 245.0], [85.6, 246.0], [85.7, 246.0], [85.8, 246.0], [85.9, 246.0], [86.0, 247.0], [86.1, 247.0], [86.2, 247.0], [86.3, 247.0], [86.4, 248.0], [86.5, 248.0], [86.6, 248.0], [86.7, 248.0], [86.8, 249.0], [86.9, 249.0], [87.0, 249.0], [87.1, 249.0], [87.2, 250.0], [87.3, 250.0], [87.4, 250.0], [87.5, 251.0], [87.6, 251.0], [87.7, 251.0], [87.8, 251.0], [87.9, 252.0], [88.0, 252.0], [88.1, 252.0], [88.2, 252.0], [88.3, 253.0], [88.4, 253.0], [88.5, 253.0], [88.6, 253.0], [88.7, 254.0], [88.8, 254.0], [88.9, 254.0], [89.0, 254.0], [89.1, 255.0], [89.2, 255.0], [89.3, 255.0], [89.4, 255.0], [89.5, 256.0], [89.6, 256.0], [89.7, 256.0], [89.8, 257.0], [89.9, 257.0], [90.0, 257.0], [90.1, 257.0], [90.2, 258.0], [90.3, 258.0], [90.4, 258.0], [90.5, 259.0], [90.6, 259.0], [90.7, 259.0], [90.8, 260.0], [90.9, 260.0], [91.0, 260.0], [91.1, 260.0], [91.2, 261.0], [91.3, 261.0], [91.4, 261.0], [91.5, 262.0], [91.6, 262.0], [91.7, 262.0], [91.8, 263.0], [91.9, 263.0], [92.0, 263.0], [92.1, 264.0], [92.2, 264.0], [92.3, 264.0], [92.4, 265.0], [92.5, 265.0], [92.6, 266.0], [92.7, 266.0], [92.8, 266.0], [92.9, 267.0], [93.0, 267.0], [93.1, 267.0], [93.2, 268.0], [93.3, 268.0], [93.4, 268.0], [93.5, 269.0], [93.6, 269.0], [93.7, 270.0], [93.8, 270.0], [93.9, 270.0], [94.0, 271.0], [94.1, 271.0], [94.2, 271.0], [94.3, 272.0], [94.4, 272.0], [94.5, 273.0], [94.6, 273.0], [94.7, 274.0], [94.8, 274.0], [94.9, 274.0], [95.0, 275.0], [95.1, 275.0], [95.2, 275.0], [95.3, 276.0], [95.4, 276.0], [95.5, 277.0], [95.6, 277.0], [95.7, 278.0], [95.8, 278.0], [95.9, 279.0], [96.0, 279.0], [96.1, 280.0], [96.2, 280.0], [96.3, 281.0], [96.4, 281.0], [96.5, 282.0], [96.6, 282.0], [96.7, 283.0], [96.8, 283.0], [96.9, 284.0], [97.0, 284.0], [97.1, 285.0], [97.2, 285.0], [97.3, 286.0], [97.4, 287.0], [97.5, 287.0], [97.6, 288.0], [97.7, 289.0], [97.8, 289.0], [97.9, 290.0], [98.0, 291.0], [98.1, 292.0], [98.2, 292.0], [98.3, 293.0], [98.4, 294.0], [98.5, 295.0], [98.6, 296.0], [98.7, 297.0], [98.8, 298.0], [98.9, 299.0], [99.0, 300.0], [99.1, 302.0], [99.2, 304.0], [99.3, 305.0], [99.4, 307.0], [99.5, 310.0], [99.6, 313.0], [99.7, 318.0], [99.8, 322.0], [99.9, 329.0], [100.0, 352.0]], "isOverall": false, "label": "extract", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 308.0, "minX": 100.0, "maxY": 16161.0, "series": [{"data": [[300.0, 308.0], [100.0, 12331.0], [200.0, 16161.0]], "isOverall": false, "label": "extract", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 300.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 28800.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 28800.0, "series": [{"data": [[0.0, 28800.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 4.9E-324, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.6660266E12, "maxY": 12.0, "series": [{"data": [[1.66602678E12, 12.0], [1.6660266E12, 11.966081404628877], [1.66602708E12, 6.75319366377107], [1.6660269E12, 12.0], [1.66602672E12, 12.0], [1.6660272E12, 1.0], [1.66602702E12, 11.033088235294109], [1.66602684E12, 12.0], [1.66602666E12, 12.0], [1.66602714E12, 2.4779411764705883], [1.66602696E12, 12.0]], "isOverall": false, "label": "12", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6660272E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 178.2500000000001, "minX": 1.0, "maxY": 211.53157027450635, "series": [{"data": [[4.0, 184.71990740740756], [8.0, 191.2037533512063], [2.0, 186.32026143790856], [1.0, 193.9590163934426], [9.0, 188.97077922077955], [5.0, 178.2500000000001], [10.0, 195.66351606805293], [11.0, 203.2608695652174], [3.0, 182.95407098121095], [6.0, 179.74301675977645], [12.0, 211.53157027450635], [7.0, 187.30402930402926]], "isOverall": false, "label": "extract", "isController": false}, {"data": [[11.298090277777755, 208.34874999999948]], "isOverall": false, "label": "extract-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 12.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 0.0, "minX": 1.6660266E12, "maxY": 7125236.85, "series": [{"data": [[1.66602678E12, 7086377.3], [1.6660266E12, 5279548.283333333], [1.66602708E12, 4067975.8], [1.6660269E12, 7103615.816666666], [1.66602672E12, 7125236.85], [1.6660272E12, 46457.95], [1.66602702E12, 6720444.7], [1.66602684E12, 7107061.15], [1.66602666E12, 7123634.116666666], [1.66602714E12, 1438839.45], [1.66602696E12, 7058048.583333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.66602678E12, 0.0], [1.6660266E12, 0.0], [1.66602708E12, 0.0], [1.6660269E12, 0.0], [1.66602672E12, 0.0], [1.6660272E12, 0.0], [1.66602702E12, 0.0], [1.66602684E12, 0.0], [1.66602666E12, 0.0], [1.66602714E12, 0.0], [1.66602696E12, 0.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6660272E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 185.8279411764705, "minX": 1.6660266E12, "maxY": 214.92381236928583, "series": [{"data": [[1.66602678E12, 214.92381236928583], [1.6660266E12, 212.20510774142062], [1.66602708E12, 186.91619826264716], [1.6660269E12, 208.97762928529903], [1.66602672E12, 212.64429331756375], [1.6660272E12, 192.4285714285714], [1.66602702E12, 200.81188725490173], [1.66602684E12, 214.12667261373764], [1.66602666E12, 212.7352854185155], [1.66602714E12, 185.8279411764705], [1.66602696E12, 208.22360428116832]], "isOverall": false, "label": "extract", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6660272E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 183.83382352941172, "minX": 1.6660266E12, "maxY": 213.21810576635775, "series": [{"data": [[1.66602678E12, 213.21810576635775], [1.6660266E12, 210.50039904229834], [1.66602708E12, 185.07000510986202], [1.6660269E12, 207.3195816385821], [1.66602672E12, 210.92933175635756], [1.6660272E12, 190.33333333333331], [1.66602702E12, 199.1351102941179], [1.66602684E12, 212.4540588760033], [1.66602666E12, 211.0514640638863], [1.66602714E12, 183.83382352941172], [1.66602696E12, 206.58345386172994]], "isOverall": false, "label": "extract", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6660272E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.6660266E12, "maxY": 4.9E-324, "series": [{"data": [[1.66602678E12, 0.0], [1.6660266E12, 0.0], [1.66602708E12, 0.0], [1.6660269E12, 0.0], [1.66602672E12, 0.0], [1.6660272E12, 0.0], [1.66602702E12, 0.0], [1.66602684E12, 0.0], [1.66602666E12, 0.0], [1.66602714E12, 0.0], [1.66602696E12, 0.0]], "isOverall": false, "label": "extract", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6660272E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 103.0, "minX": 1.6660266E12, "maxY": 352.0, "series": [{"data": [[1.66602678E12, 351.0], [1.6660266E12, 352.0], [1.66602708E12, 280.0], [1.6660269E12, 337.0], [1.66602672E12, 342.0], [1.6660272E12, 221.0], [1.66602702E12, 320.0], [1.66602684E12, 333.0], [1.66602666E12, 348.0], [1.66602714E12, 249.0], [1.66602696E12, 326.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.66602678E12, 115.0], [1.6660266E12, 118.0], [1.66602708E12, 129.0], [1.6660269E12, 103.0], [1.66602672E12, 116.0], [1.6660272E12, 153.0], [1.66602702E12, 119.0], [1.66602684E12, 120.0], [1.66602666E12, 121.0], [1.66602714E12, 130.0], [1.66602696E12, 116.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.66602678E12, 267.0], [1.6660266E12, 268.0], [1.66602708E12, 216.0], [1.6660269E12, 254.0], [1.66602672E12, 268.0], [1.6660272E12, 218.0], [1.66602702E12, 237.5], [1.66602684E12, 264.0], [1.66602666E12, 268.0], [1.66602714E12, 213.0], [1.66602696E12, 246.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.66602678E12, 310.0], [1.6660266E12, 310.92999999999984], [1.66602708E12, 248.0], [1.6660269E12, 295.57000000000016], [1.66602672E12, 304.1700000000001], [1.6660272E12, 221.0], [1.66602702E12, 280.0], [1.66602684E12, 302.3600000000001], [1.66602666E12, 308.17999999999984], [1.66602714E12, 237.18999999999994], [1.66602696E12, 289.4200000000001]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.66602678E12, 283.0], [1.6660266E12, 283.0], [1.66602708E12, 227.0], [1.6660269E12, 272.0], [1.66602672E12, 283.0], [1.6660272E12, 220.8], [1.66602702E12, 252.0], [1.66602684E12, 279.0], [1.66602666E12, 284.0], [1.66602714E12, 219.0], [1.66602696E12, 260.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6660272E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 173.5, "minX": 5.0, "maxY": 216.0, "series": [{"data": [[5.0, 198.0], [6.0, 186.5], [7.0, 185.0], [10.0, 194.0], [11.0, 180.0], [12.0, 187.5], [14.0, 192.5], [15.0, 190.0], [16.0, 183.0], [17.0, 180.0], [18.0, 176.0], [19.0, 204.0], [20.0, 191.0], [21.0, 180.5], [22.0, 184.0], [23.0, 178.0], [24.0, 178.0], [27.0, 183.0], [28.0, 173.5], [29.0, 174.0], [32.0, 181.0], [34.0, 181.5], [36.0, 186.0], [37.0, 185.0], [39.0, 192.0], [38.0, 182.5], [41.0, 196.0], [40.0, 189.0], [43.0, 187.5], [42.0, 184.0], [45.0, 194.0], [44.0, 178.5], [46.0, 195.0], [47.0, 190.0], [49.0, 187.0], [48.0, 185.0], [50.0, 197.5], [51.0, 200.0], [52.0, 216.0], [53.0, 216.0], [55.0, 211.0], [54.0, 214.0], [56.0, 209.0], [57.0, 208.0], [59.0, 203.0], [58.0, 205.0], [60.0, 202.0], [61.0, 200.0], [62.0, 195.5], [64.0, 198.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 64.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 172.0, "minX": 5.0, "maxY": 214.0, "series": [{"data": [[5.0, 196.0], [6.0, 184.0], [7.0, 182.0], [10.0, 191.5], [11.0, 178.0], [12.0, 185.0], [14.0, 191.0], [15.0, 188.0], [16.0, 181.0], [17.0, 178.0], [18.0, 173.5], [19.0, 202.0], [20.0, 188.5], [21.0, 178.5], [22.0, 182.0], [23.0, 175.0], [24.0, 175.0], [27.0, 181.0], [28.0, 172.5], [29.0, 172.0], [32.0, 179.0], [34.0, 179.5], [36.0, 183.5], [37.0, 183.0], [39.0, 191.0], [38.0, 180.5], [41.0, 194.5], [40.0, 186.5], [43.0, 186.0], [42.0, 182.5], [45.0, 193.0], [44.0, 177.0], [46.0, 193.0], [47.0, 187.0], [49.0, 185.0], [48.0, 182.5], [50.0, 195.0], [51.0, 199.0], [52.0, 214.0], [53.0, 214.0], [55.0, 209.0], [54.0, 212.0], [56.0, 208.0], [57.0, 207.0], [59.0, 201.0], [58.0, 204.0], [60.0, 201.0], [61.0, 199.0], [62.0, 194.0], [64.0, 196.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 64.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.3333333333333333, "minX": 1.6660266E12, "maxY": 57.61666666666667, "series": [{"data": [[1.66602678E12, 55.766666666666666], [1.6660266E12, 41.96666666666667], [1.66602708E12, 32.516666666666666], [1.6660269E12, 57.36666666666667], [1.66602672E12, 56.36666666666667], [1.6660272E12, 0.3333333333333333], [1.66602702E12, 54.35], [1.66602684E12, 56.06666666666667], [1.66602666E12, 56.35], [1.66602714E12, 11.3], [1.66602696E12, 57.61666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6660272E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.35, "minX": 1.6660266E12, "maxY": 57.61666666666667, "series": [{"data": [[1.66602678E12, 55.78333333333333], [1.6660266E12, 41.766666666666666], [1.66602708E12, 32.61666666666667], [1.6660269E12, 57.36666666666667], [1.66602672E12, 56.36666666666667], [1.6660272E12, 0.35], [1.66602702E12, 54.4], [1.66602684E12, 56.05], [1.66602666E12, 56.35], [1.66602714E12, 11.333333333333334], [1.66602696E12, 57.61666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6660272E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.35, "minX": 1.6660266E12, "maxY": 57.61666666666667, "series": [{"data": [[1.66602678E12, 55.78333333333333], [1.6660266E12, 41.766666666666666], [1.66602708E12, 32.61666666666667], [1.6660269E12, 57.36666666666667], [1.66602672E12, 56.36666666666667], [1.6660272E12, 0.35], [1.66602702E12, 54.4], [1.66602684E12, 56.05], [1.66602666E12, 56.35], [1.66602714E12, 11.333333333333334], [1.66602696E12, 57.61666666666667]], "isOverall": false, "label": "extract-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6660272E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.35, "minX": 1.6660266E12, "maxY": 57.61666666666667, "series": [{"data": [[1.66602678E12, 55.78333333333333], [1.6660266E12, 41.766666666666666], [1.66602708E12, 32.61666666666667], [1.6660269E12, 57.36666666666667], [1.66602672E12, 56.36666666666667], [1.6660272E12, 0.35], [1.66602702E12, 54.4], [1.66602684E12, 56.05], [1.66602666E12, 56.35], [1.66602714E12, 11.333333333333334], [1.66602696E12, 57.61666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6660272E12, "title": "Total Transactions Per Second"}},
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

