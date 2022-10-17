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
        data: {"result": {"minY": 97.0, "minX": 0.0, "maxY": 394.0, "series": [{"data": [[0.0, 97.0], [0.1, 116.0], [0.2, 118.0], [0.3, 121.0], [0.4, 122.0], [0.5, 123.0], [0.6, 124.0], [0.7, 125.0], [0.8, 126.0], [0.9, 127.0], [1.0, 127.0], [1.1, 128.0], [1.2, 129.0], [1.3, 129.0], [1.4, 130.0], [1.5, 130.0], [1.6, 131.0], [1.7, 131.0], [1.8, 132.0], [1.9, 132.0], [2.0, 133.0], [2.1, 133.0], [2.2, 134.0], [2.3, 134.0], [2.4, 134.0], [2.5, 135.0], [2.6, 135.0], [2.7, 135.0], [2.8, 135.0], [2.9, 136.0], [3.0, 136.0], [3.1, 136.0], [3.2, 137.0], [3.3, 137.0], [3.4, 137.0], [3.5, 138.0], [3.6, 138.0], [3.7, 138.0], [3.8, 138.0], [3.9, 139.0], [4.0, 139.0], [4.1, 139.0], [4.2, 140.0], [4.3, 140.0], [4.4, 140.0], [4.5, 140.0], [4.6, 140.0], [4.7, 141.0], [4.8, 141.0], [4.9, 141.0], [5.0, 141.0], [5.1, 142.0], [5.2, 142.0], [5.3, 142.0], [5.4, 142.0], [5.5, 142.0], [5.6, 143.0], [5.7, 143.0], [5.8, 143.0], [5.9, 143.0], [6.0, 143.0], [6.1, 143.0], [6.2, 144.0], [6.3, 144.0], [6.4, 144.0], [6.5, 144.0], [6.6, 144.0], [6.7, 145.0], [6.8, 145.0], [6.9, 145.0], [7.0, 145.0], [7.1, 145.0], [7.2, 145.0], [7.3, 146.0], [7.4, 146.0], [7.5, 146.0], [7.6, 146.0], [7.7, 146.0], [7.8, 147.0], [7.9, 147.0], [8.0, 147.0], [8.1, 147.0], [8.2, 147.0], [8.3, 147.0], [8.4, 147.0], [8.5, 148.0], [8.6, 148.0], [8.7, 148.0], [8.8, 148.0], [8.9, 148.0], [9.0, 148.0], [9.1, 149.0], [9.2, 149.0], [9.3, 149.0], [9.4, 149.0], [9.5, 149.0], [9.6, 149.0], [9.7, 149.0], [9.8, 150.0], [9.9, 150.0], [10.0, 150.0], [10.1, 150.0], [10.2, 150.0], [10.3, 150.0], [10.4, 150.0], [10.5, 151.0], [10.6, 151.0], [10.7, 151.0], [10.8, 151.0], [10.9, 151.0], [11.0, 151.0], [11.1, 151.0], [11.2, 151.0], [11.3, 151.0], [11.4, 152.0], [11.5, 152.0], [11.6, 152.0], [11.7, 152.0], [11.8, 152.0], [11.9, 152.0], [12.0, 152.0], [12.1, 152.0], [12.2, 152.0], [12.3, 153.0], [12.4, 153.0], [12.5, 153.0], [12.6, 153.0], [12.7, 153.0], [12.8, 153.0], [12.9, 153.0], [13.0, 153.0], [13.1, 154.0], [13.2, 154.0], [13.3, 154.0], [13.4, 154.0], [13.5, 154.0], [13.6, 154.0], [13.7, 154.0], [13.8, 154.0], [13.9, 154.0], [14.0, 155.0], [14.1, 155.0], [14.2, 155.0], [14.3, 155.0], [14.4, 155.0], [14.5, 155.0], [14.6, 155.0], [14.7, 155.0], [14.8, 155.0], [14.9, 155.0], [15.0, 156.0], [15.1, 156.0], [15.2, 156.0], [15.3, 156.0], [15.4, 156.0], [15.5, 156.0], [15.6, 156.0], [15.7, 156.0], [15.8, 156.0], [15.9, 157.0], [16.0, 157.0], [16.1, 157.0], [16.2, 157.0], [16.3, 157.0], [16.4, 157.0], [16.5, 157.0], [16.6, 157.0], [16.7, 157.0], [16.8, 157.0], [16.9, 157.0], [17.0, 158.0], [17.1, 158.0], [17.2, 158.0], [17.3, 158.0], [17.4, 158.0], [17.5, 158.0], [17.6, 158.0], [17.7, 158.0], [17.8, 158.0], [17.9, 158.0], [18.0, 158.0], [18.1, 159.0], [18.2, 159.0], [18.3, 159.0], [18.4, 159.0], [18.5, 159.0], [18.6, 159.0], [18.7, 159.0], [18.8, 159.0], [18.9, 159.0], [19.0, 159.0], [19.1, 159.0], [19.2, 160.0], [19.3, 160.0], [19.4, 160.0], [19.5, 160.0], [19.6, 160.0], [19.7, 160.0], [19.8, 160.0], [19.9, 160.0], [20.0, 160.0], [20.1, 160.0], [20.2, 160.0], [20.3, 160.0], [20.4, 161.0], [20.5, 161.0], [20.6, 161.0], [20.7, 161.0], [20.8, 161.0], [20.9, 161.0], [21.0, 161.0], [21.1, 161.0], [21.2, 161.0], [21.3, 161.0], [21.4, 161.0], [21.5, 161.0], [21.6, 162.0], [21.7, 162.0], [21.8, 162.0], [21.9, 162.0], [22.0, 162.0], [22.1, 162.0], [22.2, 162.0], [22.3, 162.0], [22.4, 162.0], [22.5, 162.0], [22.6, 162.0], [22.7, 162.0], [22.8, 162.0], [22.9, 163.0], [23.0, 163.0], [23.1, 163.0], [23.2, 163.0], [23.3, 163.0], [23.4, 163.0], [23.5, 163.0], [23.6, 163.0], [23.7, 163.0], [23.8, 163.0], [23.9, 163.0], [24.0, 163.0], [24.1, 163.0], [24.2, 164.0], [24.3, 164.0], [24.4, 164.0], [24.5, 164.0], [24.6, 164.0], [24.7, 164.0], [24.8, 164.0], [24.9, 164.0], [25.0, 164.0], [25.1, 164.0], [25.2, 164.0], [25.3, 164.0], [25.4, 164.0], [25.5, 164.0], [25.6, 165.0], [25.7, 165.0], [25.8, 165.0], [25.9, 165.0], [26.0, 165.0], [26.1, 165.0], [26.2, 165.0], [26.3, 165.0], [26.4, 165.0], [26.5, 165.0], [26.6, 165.0], [26.7, 165.0], [26.8, 165.0], [26.9, 165.0], [27.0, 165.0], [27.1, 166.0], [27.2, 166.0], [27.3, 166.0], [27.4, 166.0], [27.5, 166.0], [27.6, 166.0], [27.7, 166.0], [27.8, 166.0], [27.9, 166.0], [28.0, 166.0], [28.1, 166.0], [28.2, 166.0], [28.3, 166.0], [28.4, 166.0], [28.5, 166.0], [28.6, 166.0], [28.7, 167.0], [28.8, 167.0], [28.9, 167.0], [29.0, 167.0], [29.1, 167.0], [29.2, 167.0], [29.3, 167.0], [29.4, 167.0], [29.5, 167.0], [29.6, 167.0], [29.7, 167.0], [29.8, 167.0], [29.9, 167.0], [30.0, 167.0], [30.1, 168.0], [30.2, 168.0], [30.3, 168.0], [30.4, 168.0], [30.5, 168.0], [30.6, 168.0], [30.7, 168.0], [30.8, 168.0], [30.9, 168.0], [31.0, 168.0], [31.1, 168.0], [31.2, 168.0], [31.3, 168.0], [31.4, 168.0], [31.5, 168.0], [31.6, 168.0], [31.7, 169.0], [31.8, 169.0], [31.9, 169.0], [32.0, 169.0], [32.1, 169.0], [32.2, 169.0], [32.3, 169.0], [32.4, 169.0], [32.5, 169.0], [32.6, 169.0], [32.7, 169.0], [32.8, 169.0], [32.9, 169.0], [33.0, 169.0], [33.1, 169.0], [33.2, 170.0], [33.3, 170.0], [33.4, 170.0], [33.5, 170.0], [33.6, 170.0], [33.7, 170.0], [33.8, 170.0], [33.9, 170.0], [34.0, 170.0], [34.1, 170.0], [34.2, 170.0], [34.3, 170.0], [34.4, 170.0], [34.5, 170.0], [34.6, 170.0], [34.7, 170.0], [34.8, 170.0], [34.9, 171.0], [35.0, 171.0], [35.1, 171.0], [35.2, 171.0], [35.3, 171.0], [35.4, 171.0], [35.5, 171.0], [35.6, 171.0], [35.7, 171.0], [35.8, 171.0], [35.9, 171.0], [36.0, 171.0], [36.1, 171.0], [36.2, 171.0], [36.3, 171.0], [36.4, 172.0], [36.5, 172.0], [36.6, 172.0], [36.7, 172.0], [36.8, 172.0], [36.9, 172.0], [37.0, 172.0], [37.1, 172.0], [37.2, 172.0], [37.3, 172.0], [37.4, 172.0], [37.5, 172.0], [37.6, 172.0], [37.7, 172.0], [37.8, 172.0], [37.9, 172.0], [38.0, 173.0], [38.1, 173.0], [38.2, 173.0], [38.3, 173.0], [38.4, 173.0], [38.5, 173.0], [38.6, 173.0], [38.7, 173.0], [38.8, 173.0], [38.9, 173.0], [39.0, 173.0], [39.1, 173.0], [39.2, 173.0], [39.3, 173.0], [39.4, 173.0], [39.5, 173.0], [39.6, 174.0], [39.7, 174.0], [39.8, 174.0], [39.9, 174.0], [40.0, 174.0], [40.1, 174.0], [40.2, 174.0], [40.3, 174.0], [40.4, 174.0], [40.5, 174.0], [40.6, 174.0], [40.7, 174.0], [40.8, 174.0], [40.9, 174.0], [41.0, 174.0], [41.1, 174.0], [41.2, 174.0], [41.3, 175.0], [41.4, 175.0], [41.5, 175.0], [41.6, 175.0], [41.7, 175.0], [41.8, 175.0], [41.9, 175.0], [42.0, 175.0], [42.1, 175.0], [42.2, 175.0], [42.3, 175.0], [42.4, 175.0], [42.5, 175.0], [42.6, 175.0], [42.7, 175.0], [42.8, 176.0], [42.9, 176.0], [43.0, 176.0], [43.1, 176.0], [43.2, 176.0], [43.3, 176.0], [43.4, 176.0], [43.5, 176.0], [43.6, 176.0], [43.7, 176.0], [43.8, 176.0], [43.9, 176.0], [44.0, 176.0], [44.1, 176.0], [44.2, 176.0], [44.3, 177.0], [44.4, 177.0], [44.5, 177.0], [44.6, 177.0], [44.7, 177.0], [44.8, 177.0], [44.9, 177.0], [45.0, 177.0], [45.1, 177.0], [45.2, 177.0], [45.3, 177.0], [45.4, 177.0], [45.5, 177.0], [45.6, 177.0], [45.7, 177.0], [45.8, 177.0], [45.9, 177.0], [46.0, 178.0], [46.1, 178.0], [46.2, 178.0], [46.3, 178.0], [46.4, 178.0], [46.5, 178.0], [46.6, 178.0], [46.7, 178.0], [46.8, 178.0], [46.9, 178.0], [47.0, 178.0], [47.1, 178.0], [47.2, 178.0], [47.3, 178.0], [47.4, 178.0], [47.5, 179.0], [47.6, 179.0], [47.7, 179.0], [47.8, 179.0], [47.9, 179.0], [48.0, 179.0], [48.1, 179.0], [48.2, 179.0], [48.3, 179.0], [48.4, 179.0], [48.5, 179.0], [48.6, 179.0], [48.7, 179.0], [48.8, 179.0], [48.9, 179.0], [49.0, 179.0], [49.1, 180.0], [49.2, 180.0], [49.3, 180.0], [49.4, 180.0], [49.5, 180.0], [49.6, 180.0], [49.7, 180.0], [49.8, 180.0], [49.9, 180.0], [50.0, 180.0], [50.1, 180.0], [50.2, 180.0], [50.3, 180.0], [50.4, 180.0], [50.5, 180.0], [50.6, 181.0], [50.7, 181.0], [50.8, 181.0], [50.9, 181.0], [51.0, 181.0], [51.1, 181.0], [51.2, 181.0], [51.3, 181.0], [51.4, 181.0], [51.5, 181.0], [51.6, 181.0], [51.7, 181.0], [51.8, 181.0], [51.9, 181.0], [52.0, 181.0], [52.1, 182.0], [52.2, 182.0], [52.3, 182.0], [52.4, 182.0], [52.5, 182.0], [52.6, 182.0], [52.7, 182.0], [52.8, 182.0], [52.9, 182.0], [53.0, 182.0], [53.1, 182.0], [53.2, 182.0], [53.3, 182.0], [53.4, 182.0], [53.5, 182.0], [53.6, 182.0], [53.7, 183.0], [53.8, 183.0], [53.9, 183.0], [54.0, 183.0], [54.1, 183.0], [54.2, 183.0], [54.3, 183.0], [54.4, 183.0], [54.5, 183.0], [54.6, 183.0], [54.7, 183.0], [54.8, 183.0], [54.9, 183.0], [55.0, 183.0], [55.1, 183.0], [55.2, 184.0], [55.3, 184.0], [55.4, 184.0], [55.5, 184.0], [55.6, 184.0], [55.7, 184.0], [55.8, 184.0], [55.9, 184.0], [56.0, 184.0], [56.1, 184.0], [56.2, 184.0], [56.3, 184.0], [56.4, 184.0], [56.5, 184.0], [56.6, 184.0], [56.7, 185.0], [56.8, 185.0], [56.9, 185.0], [57.0, 185.0], [57.1, 185.0], [57.2, 185.0], [57.3, 185.0], [57.4, 185.0], [57.5, 185.0], [57.6, 185.0], [57.7, 185.0], [57.8, 185.0], [57.9, 185.0], [58.0, 185.0], [58.1, 186.0], [58.2, 186.0], [58.3, 186.0], [58.4, 186.0], [58.5, 186.0], [58.6, 186.0], [58.7, 186.0], [58.8, 186.0], [58.9, 186.0], [59.0, 186.0], [59.1, 186.0], [59.2, 186.0], [59.3, 186.0], [59.4, 186.0], [59.5, 187.0], [59.6, 187.0], [59.7, 187.0], [59.8, 187.0], [59.9, 187.0], [60.0, 187.0], [60.1, 187.0], [60.2, 187.0], [60.3, 187.0], [60.4, 187.0], [60.5, 187.0], [60.6, 187.0], [60.7, 188.0], [60.8, 188.0], [60.9, 188.0], [61.0, 188.0], [61.1, 188.0], [61.2, 188.0], [61.3, 188.0], [61.4, 188.0], [61.5, 188.0], [61.6, 188.0], [61.7, 188.0], [61.8, 188.0], [61.9, 188.0], [62.0, 188.0], [62.1, 189.0], [62.2, 189.0], [62.3, 189.0], [62.4, 189.0], [62.5, 189.0], [62.6, 189.0], [62.7, 189.0], [62.8, 189.0], [62.9, 189.0], [63.0, 189.0], [63.1, 189.0], [63.2, 189.0], [63.3, 189.0], [63.4, 190.0], [63.5, 190.0], [63.6, 190.0], [63.7, 190.0], [63.8, 190.0], [63.9, 190.0], [64.0, 190.0], [64.1, 190.0], [64.2, 190.0], [64.3, 190.0], [64.4, 190.0], [64.5, 191.0], [64.6, 191.0], [64.7, 191.0], [64.8, 191.0], [64.9, 191.0], [65.0, 191.0], [65.1, 191.0], [65.2, 191.0], [65.3, 191.0], [65.4, 191.0], [65.5, 191.0], [65.6, 192.0], [65.7, 192.0], [65.8, 192.0], [65.9, 192.0], [66.0, 192.0], [66.1, 192.0], [66.2, 192.0], [66.3, 192.0], [66.4, 192.0], [66.5, 192.0], [66.6, 192.0], [66.7, 193.0], [66.8, 193.0], [66.9, 193.0], [67.0, 193.0], [67.1, 193.0], [67.2, 193.0], [67.3, 193.0], [67.4, 193.0], [67.5, 193.0], [67.6, 193.0], [67.7, 194.0], [67.8, 194.0], [67.9, 194.0], [68.0, 194.0], [68.1, 194.0], [68.2, 194.0], [68.3, 194.0], [68.4, 194.0], [68.5, 194.0], [68.6, 194.0], [68.7, 194.0], [68.8, 195.0], [68.9, 195.0], [69.0, 195.0], [69.1, 195.0], [69.2, 195.0], [69.3, 195.0], [69.4, 195.0], [69.5, 195.0], [69.6, 195.0], [69.7, 195.0], [69.8, 196.0], [69.9, 196.0], [70.0, 196.0], [70.1, 196.0], [70.2, 196.0], [70.3, 196.0], [70.4, 196.0], [70.5, 196.0], [70.6, 197.0], [70.7, 197.0], [70.8, 197.0], [70.9, 197.0], [71.0, 197.0], [71.1, 197.0], [71.2, 197.0], [71.3, 197.0], [71.4, 197.0], [71.5, 197.0], [71.6, 198.0], [71.7, 198.0], [71.8, 198.0], [71.9, 198.0], [72.0, 198.0], [72.1, 198.0], [72.2, 198.0], [72.3, 198.0], [72.4, 198.0], [72.5, 199.0], [72.6, 199.0], [72.7, 199.0], [72.8, 199.0], [72.9, 199.0], [73.0, 199.0], [73.1, 199.0], [73.2, 199.0], [73.3, 199.0], [73.4, 200.0], [73.5, 200.0], [73.6, 200.0], [73.7, 200.0], [73.8, 200.0], [73.9, 200.0], [74.0, 200.0], [74.1, 200.0], [74.2, 200.0], [74.3, 201.0], [74.4, 201.0], [74.5, 201.0], [74.6, 201.0], [74.7, 201.0], [74.8, 201.0], [74.9, 201.0], [75.0, 201.0], [75.1, 202.0], [75.2, 202.0], [75.3, 202.0], [75.4, 202.0], [75.5, 202.0], [75.6, 202.0], [75.7, 202.0], [75.8, 202.0], [75.9, 203.0], [76.0, 203.0], [76.1, 203.0], [76.2, 203.0], [76.3, 203.0], [76.4, 203.0], [76.5, 203.0], [76.6, 204.0], [76.7, 204.0], [76.8, 204.0], [76.9, 204.0], [77.0, 204.0], [77.1, 204.0], [77.2, 204.0], [77.3, 205.0], [77.4, 205.0], [77.5, 205.0], [77.6, 205.0], [77.7, 205.0], [77.8, 205.0], [77.9, 205.0], [78.0, 205.0], [78.1, 206.0], [78.2, 206.0], [78.3, 206.0], [78.4, 206.0], [78.5, 206.0], [78.6, 206.0], [78.7, 206.0], [78.8, 207.0], [78.9, 207.0], [79.0, 207.0], [79.1, 207.0], [79.2, 207.0], [79.3, 207.0], [79.4, 207.0], [79.5, 208.0], [79.6, 208.0], [79.7, 208.0], [79.8, 208.0], [79.9, 208.0], [80.0, 208.0], [80.1, 208.0], [80.2, 209.0], [80.3, 209.0], [80.4, 209.0], [80.5, 209.0], [80.6, 209.0], [80.7, 209.0], [80.8, 210.0], [80.9, 210.0], [81.0, 210.0], [81.1, 210.0], [81.2, 210.0], [81.3, 210.0], [81.4, 211.0], [81.5, 211.0], [81.6, 211.0], [81.7, 211.0], [81.8, 211.0], [81.9, 211.0], [82.0, 211.0], [82.1, 212.0], [82.2, 212.0], [82.3, 212.0], [82.4, 212.0], [82.5, 212.0], [82.6, 212.0], [82.7, 212.0], [82.8, 213.0], [82.9, 213.0], [83.0, 213.0], [83.1, 213.0], [83.2, 213.0], [83.3, 213.0], [83.4, 214.0], [83.5, 214.0], [83.6, 214.0], [83.7, 214.0], [83.8, 214.0], [83.9, 214.0], [84.0, 215.0], [84.1, 215.0], [84.2, 215.0], [84.3, 215.0], [84.4, 215.0], [84.5, 216.0], [84.6, 216.0], [84.7, 216.0], [84.8, 216.0], [84.9, 216.0], [85.0, 217.0], [85.1, 217.0], [85.2, 217.0], [85.3, 217.0], [85.4, 217.0], [85.5, 218.0], [85.6, 218.0], [85.7, 218.0], [85.8, 218.0], [85.9, 218.0], [86.0, 219.0], [86.1, 219.0], [86.2, 219.0], [86.3, 219.0], [86.4, 219.0], [86.5, 220.0], [86.6, 220.0], [86.7, 220.0], [86.8, 220.0], [86.9, 220.0], [87.0, 220.0], [87.1, 221.0], [87.2, 221.0], [87.3, 221.0], [87.4, 221.0], [87.5, 221.0], [87.6, 222.0], [87.7, 222.0], [87.8, 222.0], [87.9, 222.0], [88.0, 222.0], [88.1, 223.0], [88.2, 223.0], [88.3, 223.0], [88.4, 223.0], [88.5, 224.0], [88.6, 224.0], [88.7, 224.0], [88.8, 224.0], [88.9, 225.0], [89.0, 225.0], [89.1, 225.0], [89.2, 225.0], [89.3, 225.0], [89.4, 226.0], [89.5, 226.0], [89.6, 226.0], [89.7, 226.0], [89.8, 227.0], [89.9, 227.0], [90.0, 227.0], [90.1, 227.0], [90.2, 227.0], [90.3, 228.0], [90.4, 228.0], [90.5, 228.0], [90.6, 228.0], [90.7, 229.0], [90.8, 229.0], [90.9, 229.0], [91.0, 229.0], [91.1, 230.0], [91.2, 230.0], [91.3, 230.0], [91.4, 230.0], [91.5, 231.0], [91.6, 231.0], [91.7, 231.0], [91.8, 231.0], [91.9, 232.0], [92.0, 232.0], [92.1, 232.0], [92.2, 232.0], [92.3, 233.0], [92.4, 233.0], [92.5, 233.0], [92.6, 233.0], [92.7, 234.0], [92.8, 234.0], [92.9, 234.0], [93.0, 234.0], [93.1, 235.0], [93.2, 235.0], [93.3, 235.0], [93.4, 235.0], [93.5, 236.0], [93.6, 236.0], [93.7, 236.0], [93.8, 236.0], [93.9, 237.0], [94.0, 237.0], [94.1, 237.0], [94.2, 238.0], [94.3, 238.0], [94.4, 238.0], [94.5, 238.0], [94.6, 239.0], [94.7, 239.0], [94.8, 239.0], [94.9, 240.0], [95.0, 240.0], [95.1, 240.0], [95.2, 241.0], [95.3, 241.0], [95.4, 242.0], [95.5, 242.0], [95.6, 242.0], [95.7, 243.0], [95.8, 243.0], [95.9, 244.0], [96.0, 244.0], [96.1, 244.0], [96.2, 245.0], [96.3, 245.0], [96.4, 246.0], [96.5, 246.0], [96.6, 246.0], [96.7, 247.0], [96.8, 247.0], [96.9, 248.0], [97.0, 249.0], [97.1, 249.0], [97.2, 250.0], [97.3, 250.0], [97.4, 251.0], [97.5, 251.0], [97.6, 252.0], [97.7, 252.0], [97.8, 253.0], [97.9, 254.0], [98.0, 254.0], [98.1, 255.0], [98.2, 256.0], [98.3, 256.0], [98.4, 257.0], [98.5, 258.0], [98.6, 259.0], [98.7, 260.0], [98.8, 260.0], [98.9, 261.0], [99.0, 263.0], [99.1, 264.0], [99.2, 265.0], [99.3, 267.0], [99.4, 269.0], [99.5, 271.0], [99.6, 273.0], [99.7, 276.0], [99.8, 281.0], [99.9, 288.0]], "isOverall": false, "label": "extract", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 23461.0, "series": [{"data": [[0.0, 1.0], [300.0, 13.0], [200.0, 8525.0], [100.0, 23461.0]], "isOverall": false, "label": "extract", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 300.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 2.112318840579709, "minX": 1.66602576E12, "maxY": 8.0, "series": [{"data": [[1.66602582E12, 8.0], [1.66602612E12, 8.0], [1.66602642E12, 6.883630047763779], [1.66602576E12, 7.986264953478065], [1.66602654E12, 2.112318840579709], [1.66602588E12, 8.0], [1.66602618E12, 8.0], [1.66602648E12, 4.146969696969695], [1.6660263E12, 8.0], [1.66602594E12, 8.0], [1.66602624E12, 8.0], [1.66602606E12, 8.0], [1.66602636E12, 7.023275862068958], [1.666026E12, 8.0]], "isOverall": false, "label": "8", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66602654E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 165.47345132743357, "minX": 1.0, "maxY": 185.77834748913955, "series": [{"data": [[2.0, 184.82051282051282], [4.0, 178.73571428571427], [8.0, 185.77834748913955], [1.0, 165.47345132743357], [5.0, 173.20243902439017], [3.0, 175.7043378995435], [6.0, 179.2991266375546], [7.0, 180.23919107391862]], "isOverall": false, "label": "extract", "isController": false}, {"data": [[7.587374999999992, 184.32865624999937]], "isOverall": false, "label": "extract-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 8.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 0.0, "minX": 1.66602576E12, "maxY": 5521478.266666667, "series": [{"data": [[1.66602582E12, 5509921.116666666], [1.66602612E12, 5352151.016666667], [1.66602642E12, 4828128.316666666], [1.66602576E12, 4819185.533333333], [1.66602654E12, 1181813.0333333334], [1.66602588E12, 5456289.533333333], [1.66602618E12, 5426481.216666667], [1.66602648E12, 2761077.8833333333], [1.6660263E12, 5508289.983333333], [1.66602594E12, 5493702.35], [1.66602624E12, 5521478.266666667], [1.66602606E12, 5502724.316666666], [1.66602636E12, 4862588.483333333], [1.666026E12, 5479802.283333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.66602582E12, 0.0], [1.66602612E12, 0.0], [1.66602642E12, 0.0], [1.66602576E12, 0.0], [1.66602654E12, 0.0], [1.66602588E12, 0.0], [1.66602618E12, 0.0], [1.66602648E12, 0.0], [1.6660263E12, 0.0], [1.66602594E12, 0.0], [1.66602624E12, 0.0], [1.66602606E12, 0.0], [1.66602636E12, 0.0], [1.666026E12, 0.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66602654E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 173.10869565217385, "minX": 1.66602576E12, "maxY": 192.67362505018056, "series": [{"data": [[1.66602582E12, 185.874418604651], [1.66602612E12, 192.67362505018056], [1.66602642E12, 178.88059053408583], [1.66602576E12, 187.05494018608766], [1.66602654E12, 173.10869565217385], [1.66602588E12, 187.7565557729937], [1.66602618E12, 186.11214590609256], [1.66602648E12, 175.40681818181824], [1.6660263E12, 179.97146075854326], [1.66602594E12, 186.26583754372334], [1.66602624E12, 179.7204945672536], [1.66602606E12, 186.19619269619255], [1.66602636E12, 181.52241379310328], [1.666026E12, 187.00038971161345]], "isOverall": false, "label": "extract", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66602654E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 171.10326086956485, "minX": 1.66602576E12, "maxY": 190.84062625451622, "series": [{"data": [[1.66602582E12, 184.02170542635636], [1.66602612E12, 190.84062625451622], [1.66602642E12, 177.0408163265303], [1.66602576E12, 185.15108551174126], [1.66602654E12, 171.10326086956485], [1.66602588E12, 185.90606653620364], [1.66602618E12, 184.3310050446255], [1.66602648E12, 173.47121212121226], [1.6660263E12, 178.22606083364565], [1.66602594E12, 184.47687524290725], [1.66602624E12, 177.9299363057326], [1.66602606E12, 184.41181041181042], [1.66602636E12, 179.6883620689656], [1.666026E12, 185.1847233047543]], "isOverall": false, "label": "extract", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66602654E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.66602576E12, "maxY": 4.9E-324, "series": [{"data": [[1.66602582E12, 0.0], [1.66602612E12, 0.0], [1.66602642E12, 0.0], [1.66602576E12, 0.0], [1.66602654E12, 0.0], [1.66602588E12, 0.0], [1.66602618E12, 0.0], [1.66602648E12, 0.0], [1.6660263E12, 0.0], [1.66602594E12, 0.0], [1.66602624E12, 0.0], [1.66602606E12, 0.0], [1.66602636E12, 0.0], [1.666026E12, 0.0]], "isOverall": false, "label": "extract", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66602654E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 97.0, "minX": 1.66602576E12, "maxY": 394.0, "series": [{"data": [[1.66602582E12, 288.0], [1.66602612E12, 297.0], [1.66602642E12, 273.0], [1.66602576E12, 394.0], [1.66602654E12, 240.0], [1.66602588E12, 323.0], [1.66602618E12, 288.0], [1.66602648E12, 253.0], [1.6660263E12, 298.0], [1.66602594E12, 294.0], [1.66602624E12, 292.0], [1.66602606E12, 298.0], [1.66602636E12, 284.0], [1.666026E12, 317.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.66602582E12, 109.0], [1.66602612E12, 120.0], [1.66602642E12, 122.0], [1.66602576E12, 106.0], [1.66602654E12, 127.0], [1.66602588E12, 111.0], [1.66602618E12, 105.0], [1.66602648E12, 118.0], [1.6660263E12, 114.0], [1.66602594E12, 110.0], [1.66602624E12, 115.0], [1.66602606E12, 114.0], [1.66602636E12, 123.0], [1.666026E12, 97.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.66602582E12, 230.0], [1.66602612E12, 238.0], [1.66602642E12, 209.0], [1.66602576E12, 232.0], [1.66602654E12, 205.0], [1.66602588E12, 232.0], [1.66602618E12, 234.0], [1.66602648E12, 209.0], [1.6660263E12, 214.0], [1.66602594E12, 232.0], [1.66602624E12, 213.0], [1.66602606E12, 229.0], [1.66602636E12, 214.0], [1.666026E12, 231.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.66602582E12, 261.19000000000005], [1.66602612E12, 269.0799999999999], [1.66602642E12, 248.0], [1.66602576E12, 272.84000000000015], [1.66602654E12, 232.94000000000005], [1.66602588E12, 272.0], [1.66602618E12, 266.2199999999998], [1.66602648E12, 233.78999999999996], [1.6660263E12, 255.0], [1.66602594E12, 267.5199999999995], [1.66602624E12, 257.3000000000002], [1.66602606E12, 259.25], [1.66602636E12, 249.0], [1.666026E12, 265.3299999999999]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.66602582E12, 243.94999999999982], [1.66602612E12, 251.0], [1.66602642E12, 223.79999999999973], [1.66602576E12, 245.0], [1.66602654E12, 218.0], [1.66602588E12, 245.0], [1.66602618E12, 245.0], [1.66602648E12, 219.0], [1.6660263E12, 231.0], [1.66602594E12, 247.0], [1.66602624E12, 230.0], [1.66602606E12, 243.0], [1.66602636E12, 228.94999999999982], [1.666026E12, 243.6500000000001]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66602654E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 155.0, "minX": 2.0, "maxY": 200.5, "series": [{"data": [[2.0, 200.5], [33.0, 176.5], [32.0, 173.0], [35.0, 178.0], [34.0, 174.0], [37.0, 184.0], [36.0, 187.5], [38.0, 181.0], [39.0, 182.0], [41.0, 184.0], [40.0, 183.0], [42.0, 184.0], [43.0, 182.0], [44.0, 180.0], [45.0, 178.0], [46.0, 173.0], [47.0, 173.0], [48.0, 172.0], [49.0, 169.0], [5.0, 171.5], [6.0, 167.0], [7.0, 155.0], [8.0, 178.5], [11.0, 181.5], [12.0, 185.5], [15.0, 179.0], [16.0, 174.0], [17.0, 171.5], [18.0, 170.0], [19.0, 170.0], [21.0, 174.0], [22.0, 188.5], [23.0, 171.5], [25.0, 165.0], [27.0, 176.0], [28.0, 171.0], [29.0, 169.0], [30.0, 169.0], [31.0, 177.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 49.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 153.0, "minX": 2.0, "maxY": 199.0, "series": [{"data": [[2.0, 199.0], [33.0, 175.0], [32.0, 171.0], [35.0, 176.0], [34.0, 172.5], [37.0, 182.0], [36.0, 186.0], [38.0, 179.0], [39.0, 180.0], [41.0, 182.0], [40.0, 182.0], [42.0, 182.0], [43.0, 180.0], [44.0, 178.0], [45.0, 176.0], [46.0, 171.0], [47.0, 172.0], [48.0, 170.5], [49.0, 168.0], [5.0, 169.0], [6.0, 165.0], [7.0, 153.0], [8.0, 177.0], [11.0, 178.5], [12.0, 183.5], [15.0, 177.0], [16.0, 172.0], [17.0, 169.0], [18.0, 168.0], [19.0, 168.0], [21.0, 172.5], [22.0, 186.0], [23.0, 169.5], [25.0, 163.0], [27.0, 174.0], [28.0, 169.0], [29.0, 167.0], [30.0, 167.5], [31.0, 175.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 49.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 9.15, "minX": 1.66602576E12, "maxY": 44.483333333333334, "series": [{"data": [[1.66602582E12, 43.0], [1.66602612E12, 41.516666666666666], [1.66602642E12, 38.36666666666667], [1.66602576E12, 37.75], [1.66602654E12, 9.15], [1.66602588E12, 42.583333333333336], [1.66602618E12, 42.95], [1.66602648E12, 21.95], [1.6660263E12, 44.38333333333333], [1.66602594E12, 42.88333333333333], [1.66602624E12, 44.483333333333334], [1.66602606E12, 42.9], [1.66602636E12, 38.65], [1.666026E12, 42.766666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66602654E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 9.2, "minX": 1.66602576E12, "maxY": 44.483333333333334, "series": [{"data": [[1.66602582E12, 43.0], [1.66602612E12, 41.516666666666666], [1.66602642E12, 38.38333333333333], [1.66602576E12, 37.61666666666667], [1.66602654E12, 9.2], [1.66602588E12, 42.583333333333336], [1.66602618E12, 42.95], [1.66602648E12, 22.0], [1.6660263E12, 44.38333333333333], [1.66602594E12, 42.88333333333333], [1.66602624E12, 44.483333333333334], [1.66602606E12, 42.9], [1.66602636E12, 38.666666666666664], [1.666026E12, 42.766666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66602654E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 9.2, "minX": 1.66602576E12, "maxY": 44.483333333333334, "series": [{"data": [[1.66602582E12, 43.0], [1.66602612E12, 41.516666666666666], [1.66602642E12, 38.38333333333333], [1.66602576E12, 37.61666666666667], [1.66602654E12, 9.2], [1.66602588E12, 42.583333333333336], [1.66602618E12, 42.95], [1.66602648E12, 22.0], [1.6660263E12, 44.38333333333333], [1.66602594E12, 42.88333333333333], [1.66602624E12, 44.483333333333334], [1.66602606E12, 42.9], [1.66602636E12, 38.666666666666664], [1.666026E12, 42.766666666666666]], "isOverall": false, "label": "extract-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66602654E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 9.2, "minX": 1.66602576E12, "maxY": 44.483333333333334, "series": [{"data": [[1.66602582E12, 43.0], [1.66602612E12, 41.516666666666666], [1.66602642E12, 38.38333333333333], [1.66602576E12, 37.61666666666667], [1.66602654E12, 9.2], [1.66602588E12, 42.583333333333336], [1.66602618E12, 42.95], [1.66602648E12, 22.0], [1.6660263E12, 44.38333333333333], [1.66602594E12, 42.88333333333333], [1.66602624E12, 44.483333333333334], [1.66602606E12, 42.9], [1.66602636E12, 38.666666666666664], [1.666026E12, 42.766666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66602654E12, "title": "Total Transactions Per Second"}},
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

