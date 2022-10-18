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
        data: {"result": {"minY": 94.0, "minX": 0.0, "maxY": 567.0, "series": [{"data": [[0.0, 94.0], [0.1, 114.0], [0.2, 120.0], [0.3, 123.0], [0.4, 126.0], [0.5, 128.0], [0.6, 130.0], [0.7, 131.0], [0.8, 132.0], [0.9, 133.0], [1.0, 134.0], [1.1, 134.0], [1.2, 135.0], [1.3, 135.0], [1.4, 136.0], [1.5, 136.0], [1.6, 137.0], [1.7, 137.0], [1.8, 138.0], [1.9, 138.0], [2.0, 139.0], [2.1, 139.0], [2.2, 139.0], [2.3, 140.0], [2.4, 140.0], [2.5, 140.0], [2.6, 140.0], [2.7, 141.0], [2.8, 141.0], [2.9, 141.0], [3.0, 141.0], [3.1, 142.0], [3.2, 142.0], [3.3, 142.0], [3.4, 142.0], [3.5, 143.0], [3.6, 143.0], [3.7, 143.0], [3.8, 143.0], [3.9, 143.0], [4.0, 144.0], [4.1, 144.0], [4.2, 144.0], [4.3, 144.0], [4.4, 144.0], [4.5, 144.0], [4.6, 145.0], [4.7, 145.0], [4.8, 145.0], [4.9, 145.0], [5.0, 145.0], [5.1, 146.0], [5.2, 146.0], [5.3, 146.0], [5.4, 146.0], [5.5, 146.0], [5.6, 146.0], [5.7, 146.0], [5.8, 147.0], [5.9, 147.0], [6.0, 147.0], [6.1, 147.0], [6.2, 147.0], [6.3, 147.0], [6.4, 148.0], [6.5, 148.0], [6.6, 148.0], [6.7, 148.0], [6.8, 148.0], [6.9, 148.0], [7.0, 149.0], [7.1, 149.0], [7.2, 149.0], [7.3, 149.0], [7.4, 149.0], [7.5, 149.0], [7.6, 149.0], [7.7, 150.0], [7.8, 150.0], [7.9, 150.0], [8.0, 150.0], [8.1, 150.0], [8.2, 150.0], [8.3, 150.0], [8.4, 151.0], [8.5, 151.0], [8.6, 151.0], [8.7, 151.0], [8.8, 151.0], [8.9, 151.0], [9.0, 151.0], [9.1, 151.0], [9.2, 152.0], [9.3, 152.0], [9.4, 152.0], [9.5, 152.0], [9.6, 152.0], [9.7, 152.0], [9.8, 152.0], [9.9, 153.0], [10.0, 153.0], [10.1, 153.0], [10.2, 153.0], [10.3, 153.0], [10.4, 153.0], [10.5, 153.0], [10.6, 154.0], [10.7, 154.0], [10.8, 154.0], [10.9, 154.0], [11.0, 154.0], [11.1, 154.0], [11.2, 154.0], [11.3, 154.0], [11.4, 155.0], [11.5, 155.0], [11.6, 155.0], [11.7, 155.0], [11.8, 155.0], [11.9, 155.0], [12.0, 155.0], [12.1, 156.0], [12.2, 156.0], [12.3, 156.0], [12.4, 156.0], [12.5, 156.0], [12.6, 156.0], [12.7, 156.0], [12.8, 156.0], [12.9, 157.0], [13.0, 157.0], [13.1, 157.0], [13.2, 157.0], [13.3, 157.0], [13.4, 157.0], [13.5, 157.0], [13.6, 157.0], [13.7, 158.0], [13.8, 158.0], [13.9, 158.0], [14.0, 158.0], [14.1, 158.0], [14.2, 158.0], [14.3, 158.0], [14.4, 159.0], [14.5, 159.0], [14.6, 159.0], [14.7, 159.0], [14.8, 159.0], [14.9, 159.0], [15.0, 159.0], [15.1, 160.0], [15.2, 160.0], [15.3, 160.0], [15.4, 160.0], [15.5, 160.0], [15.6, 160.0], [15.7, 160.0], [15.8, 161.0], [15.9, 161.0], [16.0, 161.0], [16.1, 161.0], [16.2, 161.0], [16.3, 161.0], [16.4, 161.0], [16.5, 162.0], [16.6, 162.0], [16.7, 162.0], [16.8, 162.0], [16.9, 162.0], [17.0, 162.0], [17.1, 163.0], [17.2, 163.0], [17.3, 163.0], [17.4, 163.0], [17.5, 163.0], [17.6, 163.0], [17.7, 163.0], [17.8, 164.0], [17.9, 164.0], [18.0, 164.0], [18.1, 164.0], [18.2, 164.0], [18.3, 164.0], [18.4, 164.0], [18.5, 165.0], [18.6, 165.0], [18.7, 165.0], [18.8, 165.0], [18.9, 165.0], [19.0, 166.0], [19.1, 166.0], [19.2, 166.0], [19.3, 166.0], [19.4, 166.0], [19.5, 166.0], [19.6, 166.0], [19.7, 167.0], [19.8, 167.0], [19.9, 167.0], [20.0, 167.0], [20.1, 167.0], [20.2, 168.0], [20.3, 168.0], [20.4, 168.0], [20.5, 168.0], [20.6, 168.0], [20.7, 169.0], [20.8, 169.0], [20.9, 169.0], [21.0, 169.0], [21.1, 169.0], [21.2, 169.0], [21.3, 170.0], [21.4, 170.0], [21.5, 170.0], [21.6, 170.0], [21.7, 170.0], [21.8, 170.0], [21.9, 171.0], [22.0, 171.0], [22.1, 171.0], [22.2, 171.0], [22.3, 171.0], [22.4, 171.0], [22.5, 172.0], [22.6, 172.0], [22.7, 172.0], [22.8, 172.0], [22.9, 172.0], [23.0, 172.0], [23.1, 172.0], [23.2, 173.0], [23.3, 173.0], [23.4, 173.0], [23.5, 173.0], [23.6, 173.0], [23.7, 173.0], [23.8, 173.0], [23.9, 174.0], [24.0, 174.0], [24.1, 174.0], [24.2, 174.0], [24.3, 174.0], [24.4, 174.0], [24.5, 174.0], [24.6, 174.0], [24.7, 175.0], [24.8, 175.0], [24.9, 175.0], [25.0, 175.0], [25.1, 175.0], [25.2, 175.0], [25.3, 175.0], [25.4, 175.0], [25.5, 176.0], [25.6, 176.0], [25.7, 176.0], [25.8, 176.0], [25.9, 176.0], [26.0, 176.0], [26.1, 176.0], [26.2, 176.0], [26.3, 177.0], [26.4, 177.0], [26.5, 177.0], [26.6, 177.0], [26.7, 177.0], [26.8, 177.0], [26.9, 177.0], [27.0, 177.0], [27.1, 177.0], [27.2, 178.0], [27.3, 178.0], [27.4, 178.0], [27.5, 178.0], [27.6, 178.0], [27.7, 178.0], [27.8, 178.0], [27.9, 178.0], [28.0, 178.0], [28.1, 178.0], [28.2, 179.0], [28.3, 179.0], [28.4, 179.0], [28.5, 179.0], [28.6, 179.0], [28.7, 179.0], [28.8, 179.0], [28.9, 179.0], [29.0, 179.0], [29.1, 179.0], [29.2, 180.0], [29.3, 180.0], [29.4, 180.0], [29.5, 180.0], [29.6, 180.0], [29.7, 180.0], [29.8, 180.0], [29.9, 180.0], [30.0, 180.0], [30.1, 180.0], [30.2, 180.0], [30.3, 181.0], [30.4, 181.0], [30.5, 181.0], [30.6, 181.0], [30.7, 181.0], [30.8, 181.0], [30.9, 181.0], [31.0, 181.0], [31.1, 181.0], [31.2, 181.0], [31.3, 181.0], [31.4, 182.0], [31.5, 182.0], [31.6, 182.0], [31.7, 182.0], [31.8, 182.0], [31.9, 182.0], [32.0, 182.0], [32.1, 182.0], [32.2, 182.0], [32.3, 182.0], [32.4, 182.0], [32.5, 182.0], [32.6, 183.0], [32.7, 183.0], [32.8, 183.0], [32.9, 183.0], [33.0, 183.0], [33.1, 183.0], [33.2, 183.0], [33.3, 183.0], [33.4, 183.0], [33.5, 183.0], [33.6, 183.0], [33.7, 183.0], [33.8, 183.0], [33.9, 184.0], [34.0, 184.0], [34.1, 184.0], [34.2, 184.0], [34.3, 184.0], [34.4, 184.0], [34.5, 184.0], [34.6, 184.0], [34.7, 184.0], [34.8, 184.0], [34.9, 184.0], [35.0, 184.0], [35.1, 185.0], [35.2, 185.0], [35.3, 185.0], [35.4, 185.0], [35.5, 185.0], [35.6, 185.0], [35.7, 185.0], [35.8, 185.0], [35.9, 185.0], [36.0, 185.0], [36.1, 185.0], [36.2, 185.0], [36.3, 185.0], [36.4, 186.0], [36.5, 186.0], [36.6, 186.0], [36.7, 186.0], [36.8, 186.0], [36.9, 186.0], [37.0, 186.0], [37.1, 186.0], [37.2, 186.0], [37.3, 186.0], [37.4, 186.0], [37.5, 186.0], [37.6, 186.0], [37.7, 187.0], [37.8, 187.0], [37.9, 187.0], [38.0, 187.0], [38.1, 187.0], [38.2, 187.0], [38.3, 187.0], [38.4, 187.0], [38.5, 187.0], [38.6, 187.0], [38.7, 187.0], [38.8, 187.0], [38.9, 187.0], [39.0, 187.0], [39.1, 188.0], [39.2, 188.0], [39.3, 188.0], [39.4, 188.0], [39.5, 188.0], [39.6, 188.0], [39.7, 188.0], [39.8, 188.0], [39.9, 188.0], [40.0, 188.0], [40.1, 188.0], [40.2, 188.0], [40.3, 188.0], [40.4, 188.0], [40.5, 189.0], [40.6, 189.0], [40.7, 189.0], [40.8, 189.0], [40.9, 189.0], [41.0, 189.0], [41.1, 189.0], [41.2, 189.0], [41.3, 189.0], [41.4, 189.0], [41.5, 189.0], [41.6, 189.0], [41.7, 189.0], [41.8, 189.0], [41.9, 190.0], [42.0, 190.0], [42.1, 190.0], [42.2, 190.0], [42.3, 190.0], [42.4, 190.0], [42.5, 190.0], [42.6, 190.0], [42.7, 190.0], [42.8, 190.0], [42.9, 190.0], [43.0, 190.0], [43.1, 190.0], [43.2, 190.0], [43.3, 190.0], [43.4, 191.0], [43.5, 191.0], [43.6, 191.0], [43.7, 191.0], [43.8, 191.0], [43.9, 191.0], [44.0, 191.0], [44.1, 191.0], [44.2, 191.0], [44.3, 191.0], [44.4, 191.0], [44.5, 191.0], [44.6, 191.0], [44.7, 191.0], [44.8, 191.0], [44.9, 192.0], [45.0, 192.0], [45.1, 192.0], [45.2, 192.0], [45.3, 192.0], [45.4, 192.0], [45.5, 192.0], [45.6, 192.0], [45.7, 192.0], [45.8, 192.0], [45.9, 192.0], [46.0, 192.0], [46.1, 192.0], [46.2, 192.0], [46.3, 192.0], [46.4, 193.0], [46.5, 193.0], [46.6, 193.0], [46.7, 193.0], [46.8, 193.0], [46.9, 193.0], [47.0, 193.0], [47.1, 193.0], [47.2, 193.0], [47.3, 193.0], [47.4, 193.0], [47.5, 193.0], [47.6, 193.0], [47.7, 193.0], [47.8, 193.0], [47.9, 193.0], [48.0, 194.0], [48.1, 194.0], [48.2, 194.0], [48.3, 194.0], [48.4, 194.0], [48.5, 194.0], [48.6, 194.0], [48.7, 194.0], [48.8, 194.0], [48.9, 194.0], [49.0, 194.0], [49.1, 194.0], [49.2, 194.0], [49.3, 194.0], [49.4, 194.0], [49.5, 195.0], [49.6, 195.0], [49.7, 195.0], [49.8, 195.0], [49.9, 195.0], [50.0, 195.0], [50.1, 195.0], [50.2, 195.0], [50.3, 195.0], [50.4, 195.0], [50.5, 195.0], [50.6, 195.0], [50.7, 195.0], [50.8, 195.0], [50.9, 195.0], [51.0, 195.0], [51.1, 196.0], [51.2, 196.0], [51.3, 196.0], [51.4, 196.0], [51.5, 196.0], [51.6, 196.0], [51.7, 196.0], [51.8, 196.0], [51.9, 196.0], [52.0, 196.0], [52.1, 196.0], [52.2, 196.0], [52.3, 196.0], [52.4, 196.0], [52.5, 196.0], [52.6, 196.0], [52.7, 197.0], [52.8, 197.0], [52.9, 197.0], [53.0, 197.0], [53.1, 197.0], [53.2, 197.0], [53.3, 197.0], [53.4, 197.0], [53.5, 197.0], [53.6, 197.0], [53.7, 197.0], [53.8, 197.0], [53.9, 197.0], [54.0, 197.0], [54.1, 197.0], [54.2, 198.0], [54.3, 198.0], [54.4, 198.0], [54.5, 198.0], [54.6, 198.0], [54.7, 198.0], [54.8, 198.0], [54.9, 198.0], [55.0, 198.0], [55.1, 198.0], [55.2, 198.0], [55.3, 198.0], [55.4, 198.0], [55.5, 198.0], [55.6, 198.0], [55.7, 199.0], [55.8, 199.0], [55.9, 199.0], [56.0, 199.0], [56.1, 199.0], [56.2, 199.0], [56.3, 199.0], [56.4, 199.0], [56.5, 199.0], [56.6, 199.0], [56.7, 199.0], [56.8, 199.0], [56.9, 199.0], [57.0, 199.0], [57.1, 199.0], [57.2, 200.0], [57.3, 200.0], [57.4, 200.0], [57.5, 200.0], [57.6, 200.0], [57.7, 200.0], [57.8, 200.0], [57.9, 200.0], [58.0, 200.0], [58.1, 200.0], [58.2, 200.0], [58.3, 200.0], [58.4, 200.0], [58.5, 200.0], [58.6, 201.0], [58.7, 201.0], [58.8, 201.0], [58.9, 201.0], [59.0, 201.0], [59.1, 201.0], [59.2, 201.0], [59.3, 201.0], [59.4, 201.0], [59.5, 201.0], [59.6, 201.0], [59.7, 201.0], [59.8, 201.0], [59.9, 201.0], [60.0, 201.0], [60.1, 202.0], [60.2, 202.0], [60.3, 202.0], [60.4, 202.0], [60.5, 202.0], [60.6, 202.0], [60.7, 202.0], [60.8, 202.0], [60.9, 202.0], [61.0, 202.0], [61.1, 202.0], [61.2, 202.0], [61.3, 202.0], [61.4, 203.0], [61.5, 203.0], [61.6, 203.0], [61.7, 203.0], [61.8, 203.0], [61.9, 203.0], [62.0, 203.0], [62.1, 203.0], [62.2, 203.0], [62.3, 203.0], [62.4, 203.0], [62.5, 203.0], [62.6, 203.0], [62.7, 204.0], [62.8, 204.0], [62.9, 204.0], [63.0, 204.0], [63.1, 204.0], [63.2, 204.0], [63.3, 204.0], [63.4, 204.0], [63.5, 204.0], [63.6, 204.0], [63.7, 204.0], [63.8, 204.0], [63.9, 204.0], [64.0, 204.0], [64.1, 205.0], [64.2, 205.0], [64.3, 205.0], [64.4, 205.0], [64.5, 205.0], [64.6, 205.0], [64.7, 205.0], [64.8, 205.0], [64.9, 205.0], [65.0, 205.0], [65.1, 205.0], [65.2, 205.0], [65.3, 206.0], [65.4, 206.0], [65.5, 206.0], [65.6, 206.0], [65.7, 206.0], [65.8, 206.0], [65.9, 206.0], [66.0, 206.0], [66.1, 206.0], [66.2, 206.0], [66.3, 206.0], [66.4, 206.0], [66.5, 206.0], [66.6, 207.0], [66.7, 207.0], [66.8, 207.0], [66.9, 207.0], [67.0, 207.0], [67.1, 207.0], [67.2, 207.0], [67.3, 207.0], [67.4, 207.0], [67.5, 207.0], [67.6, 207.0], [67.7, 208.0], [67.8, 208.0], [67.9, 208.0], [68.0, 208.0], [68.1, 208.0], [68.2, 208.0], [68.3, 208.0], [68.4, 208.0], [68.5, 208.0], [68.6, 208.0], [68.7, 209.0], [68.8, 209.0], [68.9, 209.0], [69.0, 209.0], [69.1, 209.0], [69.2, 209.0], [69.3, 209.0], [69.4, 209.0], [69.5, 209.0], [69.6, 209.0], [69.7, 210.0], [69.8, 210.0], [69.9, 210.0], [70.0, 210.0], [70.1, 210.0], [70.2, 210.0], [70.3, 210.0], [70.4, 210.0], [70.5, 210.0], [70.6, 210.0], [70.7, 211.0], [70.8, 211.0], [70.9, 211.0], [71.0, 211.0], [71.1, 211.0], [71.2, 211.0], [71.3, 211.0], [71.4, 211.0], [71.5, 212.0], [71.6, 212.0], [71.7, 212.0], [71.8, 212.0], [71.9, 212.0], [72.0, 212.0], [72.1, 212.0], [72.2, 212.0], [72.3, 212.0], [72.4, 213.0], [72.5, 213.0], [72.6, 213.0], [72.7, 213.0], [72.8, 213.0], [72.9, 213.0], [73.0, 213.0], [73.1, 213.0], [73.2, 214.0], [73.3, 214.0], [73.4, 214.0], [73.5, 214.0], [73.6, 214.0], [73.7, 214.0], [73.8, 214.0], [73.9, 215.0], [74.0, 215.0], [74.1, 215.0], [74.2, 215.0], [74.3, 215.0], [74.4, 215.0], [74.5, 215.0], [74.6, 215.0], [74.7, 216.0], [74.8, 216.0], [74.9, 216.0], [75.0, 216.0], [75.1, 216.0], [75.2, 216.0], [75.3, 217.0], [75.4, 217.0], [75.5, 217.0], [75.6, 217.0], [75.7, 217.0], [75.8, 217.0], [75.9, 217.0], [76.0, 218.0], [76.1, 218.0], [76.2, 218.0], [76.3, 218.0], [76.4, 218.0], [76.5, 218.0], [76.6, 219.0], [76.7, 219.0], [76.8, 219.0], [76.9, 219.0], [77.0, 219.0], [77.1, 219.0], [77.2, 220.0], [77.3, 220.0], [77.4, 220.0], [77.5, 220.0], [77.6, 220.0], [77.7, 221.0], [77.8, 221.0], [77.9, 221.0], [78.0, 221.0], [78.1, 221.0], [78.2, 222.0], [78.3, 222.0], [78.4, 222.0], [78.5, 222.0], [78.6, 222.0], [78.7, 222.0], [78.8, 223.0], [78.9, 223.0], [79.0, 223.0], [79.1, 223.0], [79.2, 223.0], [79.3, 224.0], [79.4, 224.0], [79.5, 224.0], [79.6, 224.0], [79.7, 224.0], [79.8, 225.0], [79.9, 225.0], [80.0, 225.0], [80.1, 225.0], [80.2, 225.0], [80.3, 226.0], [80.4, 226.0], [80.5, 226.0], [80.6, 226.0], [80.7, 226.0], [80.8, 227.0], [80.9, 227.0], [81.0, 227.0], [81.1, 227.0], [81.2, 227.0], [81.3, 228.0], [81.4, 228.0], [81.5, 228.0], [81.6, 228.0], [81.7, 229.0], [81.8, 229.0], [81.9, 229.0], [82.0, 229.0], [82.1, 229.0], [82.2, 230.0], [82.3, 230.0], [82.4, 230.0], [82.5, 230.0], [82.6, 230.0], [82.7, 231.0], [82.8, 231.0], [82.9, 231.0], [83.0, 231.0], [83.1, 232.0], [83.2, 232.0], [83.3, 232.0], [83.4, 232.0], [83.5, 233.0], [83.6, 233.0], [83.7, 233.0], [83.8, 233.0], [83.9, 234.0], [84.0, 234.0], [84.1, 234.0], [84.2, 234.0], [84.3, 234.0], [84.4, 235.0], [84.5, 235.0], [84.6, 235.0], [84.7, 235.0], [84.8, 236.0], [84.9, 236.0], [85.0, 236.0], [85.1, 236.0], [85.2, 237.0], [85.3, 237.0], [85.4, 237.0], [85.5, 237.0], [85.6, 237.0], [85.7, 238.0], [85.8, 238.0], [85.9, 238.0], [86.0, 238.0], [86.1, 239.0], [86.2, 239.0], [86.3, 239.0], [86.4, 239.0], [86.5, 240.0], [86.6, 240.0], [86.7, 240.0], [86.8, 240.0], [86.9, 240.0], [87.0, 241.0], [87.1, 241.0], [87.2, 241.0], [87.3, 241.0], [87.4, 241.0], [87.5, 242.0], [87.6, 242.0], [87.7, 242.0], [87.8, 242.0], [87.9, 243.0], [88.0, 243.0], [88.1, 243.0], [88.2, 243.0], [88.3, 244.0], [88.4, 244.0], [88.5, 244.0], [88.6, 244.0], [88.7, 244.0], [88.8, 245.0], [88.9, 245.0], [89.0, 245.0], [89.1, 245.0], [89.2, 246.0], [89.3, 246.0], [89.4, 246.0], [89.5, 246.0], [89.6, 247.0], [89.7, 247.0], [89.8, 247.0], [89.9, 247.0], [90.0, 247.0], [90.1, 248.0], [90.2, 248.0], [90.3, 248.0], [90.4, 248.0], [90.5, 249.0], [90.6, 249.0], [90.7, 249.0], [90.8, 249.0], [90.9, 250.0], [91.0, 250.0], [91.1, 250.0], [91.2, 250.0], [91.3, 250.0], [91.4, 251.0], [91.5, 251.0], [91.6, 251.0], [91.7, 251.0], [91.8, 251.0], [91.9, 252.0], [92.0, 252.0], [92.1, 252.0], [92.2, 252.0], [92.3, 253.0], [92.4, 253.0], [92.5, 253.0], [92.6, 253.0], [92.7, 253.0], [92.8, 254.0], [92.9, 254.0], [93.0, 254.0], [93.1, 254.0], [93.2, 255.0], [93.3, 255.0], [93.4, 255.0], [93.5, 255.0], [93.6, 256.0], [93.7, 256.0], [93.8, 256.0], [93.9, 256.0], [94.0, 256.0], [94.1, 257.0], [94.2, 257.0], [94.3, 257.0], [94.4, 257.0], [94.5, 258.0], [94.6, 258.0], [94.7, 258.0], [94.8, 259.0], [94.9, 259.0], [95.0, 259.0], [95.1, 259.0], [95.2, 260.0], [95.3, 260.0], [95.4, 260.0], [95.5, 260.0], [95.6, 261.0], [95.7, 261.0], [95.8, 261.0], [95.9, 261.0], [96.0, 262.0], [96.1, 262.0], [96.2, 262.0], [96.3, 263.0], [96.4, 263.0], [96.5, 263.0], [96.6, 264.0], [96.7, 264.0], [96.8, 264.0], [96.9, 265.0], [97.0, 265.0], [97.1, 265.0], [97.2, 266.0], [97.3, 266.0], [97.4, 267.0], [97.5, 267.0], [97.6, 267.0], [97.7, 268.0], [97.8, 268.0], [97.9, 269.0], [98.0, 269.0], [98.1, 270.0], [98.2, 271.0], [98.3, 271.0], [98.4, 272.0], [98.5, 272.0], [98.6, 273.0], [98.7, 274.0], [98.8, 275.0], [98.9, 276.0], [99.0, 277.0], [99.1, 278.0], [99.2, 280.0], [99.3, 281.0], [99.4, 283.0], [99.5, 286.0], [99.6, 289.0], [99.7, 293.0], [99.8, 303.0], [99.9, 338.0], [100.0, 567.0]], "isOverall": false, "label": "extract", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 4.0, "minX": 0.0, "maxY": 36601.0, "series": [{"data": [[0.0, 5.0], [300.0, 124.0], [200.0, 27248.0], [400.0, 18.0], [100.0, 36601.0], [500.0, 4.0]], "isOverall": false, "label": "extract", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 4.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 63996.0, "series": [{"data": [[0.0, 63996.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 4.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 6.8291054739652814, "minX": 1.6660863E12, "maxY": 32.0, "series": [{"data": [[1.66608672E12, 6.8291054739652814], [1.66608654E12, 32.0], [1.66608636E12, 32.0], [1.66608648E12, 32.0], [1.6660863E12, 31.97025655483507], [1.66608666E12, 23.95431610527756], [1.6660866E12, 31.97184093661687], [1.66608642E12, 32.0]], "isOverall": false, "label": "32", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66608672E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 148.85714285714286, "minX": 1.0, "maxY": 200.27425498952027, "series": [{"data": [[32.0, 200.27425498952027], [2.0, 158.33333333333334], [3.0, 152.82758620689654], [4.0, 148.85714285714286], [5.0, 156.53551912568307], [6.0, 160.13707865168556], [7.0, 166.27272727272728], [8.0, 166.75125000000008], [9.0, 168.22302158273376], [10.0, 174.22748815165875], [11.0, 168.0], [12.0, 165.72857142857143], [13.0, 164.22459893048128], [14.0, 153.25], [15.0, 164.56797583081578], [16.0, 170.12727272727267], [1.0, 151.0], [17.0, 196.3], [18.0, 173.5719844357978], [19.0, 171.77611940298507], [20.0, 176.36046511627913], [21.0, 177.04981549815514], [22.0, 177.03889789303048], [23.0, 179.29629629629625], [24.0, 182.5756097560975], [25.0, 185.11013215859037], [26.0, 183.3252688172042], [27.0, 185.22413793103448], [28.0, 197.1363636363636], [29.0, 188.97972972972966], [30.0, 192.00651465798057], [31.0, 193.37694013303775]], "isOverall": false, "label": "extract", "isController": false}, {"data": [[30.481328125000022, 197.2614062500029]], "isOverall": false, "label": "extract-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 32.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 0.0, "minX": 1.6660863E12, "maxY": 2.09139307E7, "series": [{"data": [[1.66608672E12, 3229025.1333333333], [1.66608654E12, 2.05643385E7], [1.66608636E12, 2.033253745E7], [1.66608648E12, 1.9754630333333332E7], [1.6660863E12, 1.4881207166666666E7], [1.66608666E12, 1.5732352683333334E7], [1.6660866E12, 2.09139307E7], [1.66608642E12, 2.02594947E7]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.66608672E12, 0.0], [1.66608654E12, 0.0], [1.66608636E12, 0.0], [1.66608648E12, 0.0], [1.6660863E12, 0.0], [1.66608666E12, 0.0], [1.6660866E12, 0.0], [1.66608642E12, 0.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66608672E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 162.83845126835783, "minX": 1.6660863E12, "maxY": 209.24528507576642, "series": [{"data": [[1.66608672E12, 162.83845126835783], [1.66608654E12, 198.5225579470201], [1.66608636E12, 198.03672753533516], [1.66608648E12, 209.24528507576642], [1.6660863E12, 205.43994925288987], [1.66608666E12, 181.3372426019363], [1.6660866E12, 193.5347194186519], [1.66608642E12, 199.08892808965504]], "isOverall": false, "label": "extract", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66608672E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 161.08210947930547, "minX": 1.6660863E12, "maxY": 207.19099531232968, "series": [{"data": [[1.66608672E12, 161.08210947930547], [1.66608654E12, 196.50393211920567], [1.66608636E12, 196.03858454554876], [1.66608648E12, 207.19099531232968], [1.6660863E12, 203.21158725683705], [1.66608666E12, 179.39329060411833], [1.6660866E12, 191.52937020589505], [1.66608642E12, 197.09162602469715]], "isOverall": false, "label": "extract", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66608672E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.6660863E12, "maxY": 4.9E-324, "series": [{"data": [[1.66608672E12, 0.0], [1.66608654E12, 0.0], [1.66608636E12, 0.0], [1.66608648E12, 0.0], [1.6660863E12, 0.0], [1.66608666E12, 0.0], [1.6660866E12, 0.0], [1.66608642E12, 0.0]], "isOverall": false, "label": "extract", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66608672E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 94.0, "minX": 1.6660863E12, "maxY": 567.0, "series": [{"data": [[1.66608672E12, 233.0], [1.66608654E12, 307.0], [1.66608636E12, 303.0], [1.66608648E12, 315.0], [1.6660863E12, 567.0], [1.66608666E12, 300.0], [1.6660866E12, 308.0], [1.66608642E12, 290.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.66608672E12, 122.0], [1.66608654E12, 130.0], [1.66608636E12, 129.0], [1.66608648E12, 130.0], [1.6660863E12, 131.0], [1.66608666E12, 94.0], [1.6660866E12, 127.0], [1.66608642E12, 126.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.66608672E12, 191.0], [1.66608654E12, 252.0], [1.66608636E12, 245.0], [1.66608648E12, 255.0], [1.6660863E12, 255.0], [1.66608666E12, 225.0], [1.6660866E12, 244.0], [1.66608642E12, 246.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.66608672E12, 221.01], [1.66608654E12, 280.0], [1.66608636E12, 270.0], [1.66608648E12, 279.0], [1.6660863E12, 334.0], [1.66608666E12, 260.0], [1.6660866E12, 278.0], [1.66608642E12, 269.6200000000008]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.66608672E12, 199.0], [1.66608654E12, 263.0], [1.66608636E12, 256.0], [1.66608648E12, 264.0], [1.6660863E12, 267.0], [1.66608666E12, 237.0], [1.6660866E12, 258.0], [1.66608642E12, 256.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66608672E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 145.0, "minX": 4.0, "maxY": 308.5, "series": [{"data": [[4.0, 153.0], [20.0, 152.5], [24.0, 149.5], [30.0, 150.0], [31.0, 157.0], [32.0, 157.0], [33.0, 147.0], [35.0, 160.0], [34.0, 145.0], [37.0, 157.0], [38.0, 174.0], [39.0, 154.5], [40.0, 155.5], [43.0, 166.0], [45.0, 171.0], [46.0, 164.5], [47.0, 166.0], [49.0, 163.0], [48.0, 164.5], [50.0, 160.5], [53.0, 167.0], [52.0, 166.5], [54.0, 165.5], [57.0, 168.0], [58.0, 176.0], [62.0, 175.0], [77.0, 172.0], [80.0, 170.0], [89.0, 170.0], [88.0, 170.5], [95.0, 173.0], [93.0, 167.0], [99.0, 177.0], [105.0, 178.0], [106.0, 175.5], [114.0, 308.5], [113.0, 174.0], [112.0, 174.5], [117.0, 178.0], [118.0, 177.0], [123.0, 179.0], [120.0, 176.5], [125.0, 243.0], [124.0, 176.0], [134.0, 182.0], [130.0, 179.0], [142.0, 203.0], [138.0, 180.5], [136.0, 181.0], [137.0, 179.0], [151.0, 202.0], [149.0, 209.0], [150.0, 206.5], [147.0, 209.5], [146.0, 208.5], [148.0, 187.0], [145.0, 181.0], [144.0, 180.5], [157.0, 197.0], [158.0, 198.0], [155.0, 200.0], [154.0, 200.0], [156.0, 199.0], [159.0, 196.0], [153.0, 199.0], [152.0, 200.0], [162.0, 195.0], [160.0, 196.0], [161.0, 196.0], [163.0, 194.0], [165.0, 193.0], [167.0, 192.0], [164.0, 194.0], [166.0, 193.0], [169.0, 194.0], [168.0, 193.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 169.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 144.0, "minX": 4.0, "maxY": 301.0, "series": [{"data": [[4.0, 151.0], [20.0, 150.5], [24.0, 148.0], [30.0, 148.0], [31.0, 154.5], [32.0, 155.5], [33.0, 146.0], [35.0, 158.5], [34.0, 144.0], [37.0, 155.0], [38.0, 172.0], [39.0, 153.0], [40.0, 153.5], [43.0, 164.0], [45.0, 170.0], [46.0, 163.0], [47.0, 164.0], [49.0, 161.0], [48.0, 163.0], [50.0, 158.5], [53.0, 165.0], [52.0, 164.5], [54.0, 164.0], [57.0, 166.0], [58.0, 174.0], [62.0, 173.5], [77.0, 170.0], [80.0, 168.0], [89.0, 169.0], [88.0, 168.0], [95.0, 171.0], [93.0, 164.0], [99.0, 175.0], [105.0, 176.0], [106.0, 173.5], [114.0, 301.0], [113.0, 172.0], [112.0, 172.5], [117.0, 177.0], [118.0, 175.0], [123.0, 177.0], [120.0, 175.0], [125.0, 239.0], [124.0, 174.0], [134.0, 180.0], [130.0, 177.0], [142.0, 200.5], [138.0, 178.5], [136.0, 178.0], [137.0, 177.0], [151.0, 200.0], [149.0, 207.0], [150.0, 204.5], [147.0, 207.0], [146.0, 206.5], [148.0, 185.0], [145.0, 178.5], [144.0, 178.5], [157.0, 195.0], [158.0, 195.0], [155.0, 198.0], [154.0, 198.0], [156.0, 196.5], [159.0, 194.0], [153.0, 196.0], [152.0, 197.5], [162.0, 193.0], [160.0, 194.0], [161.0, 194.0], [163.0, 192.0], [165.0, 191.0], [167.0, 190.0], [164.0, 192.0], [166.0, 191.0], [169.0, 192.0], [168.0, 191.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 169.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 24.833333333333332, "minX": 1.6660863E12, "maxY": 165.11666666666667, "series": [{"data": [[1.66608672E12, 24.833333333333332], [1.66608654E12, 161.06666666666666], [1.66608636E12, 161.55], [1.66608648E12, 152.88333333333333], [1.6660863E12, 118.76666666666667], [1.66608666E12, 121.83333333333333], [1.6660866E12, 165.11666666666667], [1.66608642E12, 160.61666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66608672E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 24.966666666666665, "minX": 1.6660863E12, "maxY": 165.13333333333333, "series": [{"data": [[1.66608672E12, 24.966666666666665], [1.66608654E12, 161.06666666666666], [1.66608636E12, 161.55], [1.66608648E12, 152.88333333333333], [1.6660863E12, 118.23333333333333], [1.66608666E12, 122.21666666666667], [1.6660866E12, 165.13333333333333], [1.66608642E12, 160.61666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66608672E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 24.966666666666665, "minX": 1.6660863E12, "maxY": 165.13333333333333, "series": [{"data": [[1.66608672E12, 24.966666666666665], [1.66608654E12, 161.06666666666666], [1.66608636E12, 161.55], [1.66608648E12, 152.88333333333333], [1.6660863E12, 118.23333333333333], [1.66608666E12, 122.21666666666667], [1.6660866E12, 165.13333333333333], [1.66608642E12, 160.61666666666667]], "isOverall": false, "label": "extract-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66608672E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 24.966666666666665, "minX": 1.6660863E12, "maxY": 165.13333333333333, "series": [{"data": [[1.66608672E12, 24.966666666666665], [1.66608654E12, 161.06666666666666], [1.66608636E12, 161.55], [1.66608648E12, 152.88333333333333], [1.6660863E12, 118.23333333333333], [1.66608666E12, 122.21666666666667], [1.6660866E12, 165.13333333333333], [1.66608642E12, 160.61666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66608672E12, "title": "Total Transactions Per Second"}},
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

