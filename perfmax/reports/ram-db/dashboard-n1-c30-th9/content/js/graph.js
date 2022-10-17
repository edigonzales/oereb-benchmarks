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
        data: {"result": {"minY": 97.0, "minX": 0.0, "maxY": 288.0, "series": [{"data": [[0.0, 97.0], [0.1, 101.0], [0.2, 101.0], [0.3, 102.0], [0.4, 102.0], [0.5, 104.0], [0.6, 104.0], [0.7, 105.0], [0.8, 105.0], [0.9, 105.0], [1.0, 105.0], [1.1, 106.0], [1.2, 106.0], [1.3, 106.0], [1.4, 106.0], [1.5, 107.0], [1.6, 107.0], [1.7, 107.0], [1.8, 107.0], [1.9, 107.0], [2.0, 108.0], [2.1, 108.0], [2.2, 108.0], [2.3, 108.0], [2.4, 108.0], [2.5, 109.0], [2.6, 109.0], [2.7, 109.0], [2.8, 109.0], [2.9, 109.0], [3.0, 109.0], [3.1, 109.0], [3.2, 109.0], [3.3, 109.0], [3.4, 109.0], [3.5, 109.0], [3.6, 109.0], [3.7, 109.0], [3.8, 110.0], [3.9, 110.0], [4.0, 110.0], [4.1, 110.0], [4.2, 110.0], [4.3, 110.0], [4.4, 110.0], [4.5, 110.0], [4.6, 111.0], [4.7, 111.0], [4.8, 111.0], [4.9, 111.0], [5.0, 111.0], [5.1, 111.0], [5.2, 111.0], [5.3, 111.0], [5.4, 112.0], [5.5, 112.0], [5.6, 112.0], [5.7, 112.0], [5.8, 112.0], [5.9, 112.0], [6.0, 112.0], [6.1, 112.0], [6.2, 113.0], [6.3, 113.0], [6.4, 113.0], [6.5, 113.0], [6.6, 113.0], [6.7, 113.0], [6.8, 113.0], [6.9, 113.0], [7.0, 113.0], [7.1, 113.0], [7.2, 113.0], [7.3, 113.0], [7.4, 113.0], [7.5, 113.0], [7.6, 114.0], [7.7, 114.0], [7.8, 114.0], [7.9, 114.0], [8.0, 114.0], [8.1, 114.0], [8.2, 114.0], [8.3, 114.0], [8.4, 114.0], [8.5, 114.0], [8.6, 115.0], [8.7, 115.0], [8.8, 115.0], [8.9, 115.0], [9.0, 115.0], [9.1, 115.0], [9.2, 115.0], [9.3, 115.0], [9.4, 115.0], [9.5, 115.0], [9.6, 115.0], [9.7, 115.0], [9.8, 115.0], [9.9, 115.0], [10.0, 116.0], [10.1, 116.0], [10.2, 116.0], [10.3, 116.0], [10.4, 116.0], [10.5, 116.0], [10.6, 116.0], [10.7, 116.0], [10.8, 116.0], [10.9, 116.0], [11.0, 116.0], [11.1, 116.0], [11.2, 116.0], [11.3, 116.0], [11.4, 116.0], [11.5, 116.0], [11.6, 117.0], [11.7, 117.0], [11.8, 117.0], [11.9, 117.0], [12.0, 117.0], [12.1, 117.0], [12.2, 117.0], [12.3, 117.0], [12.4, 117.0], [12.5, 117.0], [12.6, 117.0], [12.7, 117.0], [12.8, 117.0], [12.9, 117.0], [13.0, 118.0], [13.1, 118.0], [13.2, 118.0], [13.3, 118.0], [13.4, 118.0], [13.5, 118.0], [13.6, 118.0], [13.7, 118.0], [13.8, 118.0], [13.9, 118.0], [14.0, 118.0], [14.1, 118.0], [14.2, 118.0], [14.3, 119.0], [14.4, 119.0], [14.5, 119.0], [14.6, 119.0], [14.7, 119.0], [14.8, 119.0], [14.9, 119.0], [15.0, 119.0], [15.1, 119.0], [15.2, 119.0], [15.3, 120.0], [15.4, 120.0], [15.5, 120.0], [15.6, 120.0], [15.7, 120.0], [15.8, 120.0], [15.9, 120.0], [16.0, 120.0], [16.1, 120.0], [16.2, 120.0], [16.3, 120.0], [16.4, 120.0], [16.5, 121.0], [16.6, 121.0], [16.7, 121.0], [16.8, 121.0], [16.9, 121.0], [17.0, 121.0], [17.1, 121.0], [17.2, 121.0], [17.3, 121.0], [17.4, 121.0], [17.5, 121.0], [17.6, 121.0], [17.7, 121.0], [17.8, 121.0], [17.9, 121.0], [18.0, 121.0], [18.1, 121.0], [18.2, 122.0], [18.3, 122.0], [18.4, 122.0], [18.5, 122.0], [18.6, 122.0], [18.7, 122.0], [18.8, 122.0], [18.9, 122.0], [19.0, 122.0], [19.1, 122.0], [19.2, 122.0], [19.3, 122.0], [19.4, 122.0], [19.5, 122.0], [19.6, 122.0], [19.7, 122.0], [19.8, 122.0], [19.9, 122.0], [20.0, 122.0], [20.1, 123.0], [20.2, 123.0], [20.3, 123.0], [20.4, 123.0], [20.5, 123.0], [20.6, 123.0], [20.7, 123.0], [20.8, 123.0], [20.9, 123.0], [21.0, 123.0], [21.1, 123.0], [21.2, 123.0], [21.3, 123.0], [21.4, 123.0], [21.5, 123.0], [21.6, 124.0], [21.7, 124.0], [21.8, 124.0], [21.9, 124.0], [22.0, 124.0], [22.1, 124.0], [22.2, 124.0], [22.3, 124.0], [22.4, 124.0], [22.5, 124.0], [22.6, 124.0], [22.7, 124.0], [22.8, 124.0], [22.9, 125.0], [23.0, 125.0], [23.1, 125.0], [23.2, 125.0], [23.3, 125.0], [23.4, 125.0], [23.5, 125.0], [23.6, 125.0], [23.7, 125.0], [23.8, 125.0], [23.9, 125.0], [24.0, 125.0], [24.1, 125.0], [24.2, 125.0], [24.3, 125.0], [24.4, 126.0], [24.5, 126.0], [24.6, 126.0], [24.7, 126.0], [24.8, 126.0], [24.9, 126.0], [25.0, 126.0], [25.1, 126.0], [25.2, 126.0], [25.3, 126.0], [25.4, 126.0], [25.5, 126.0], [25.6, 126.0], [25.7, 126.0], [25.8, 127.0], [25.9, 127.0], [26.0, 127.0], [26.1, 127.0], [26.2, 127.0], [26.3, 127.0], [26.4, 127.0], [26.5, 127.0], [26.6, 127.0], [26.7, 127.0], [26.8, 127.0], [26.9, 127.0], [27.0, 127.0], [27.1, 127.0], [27.2, 127.0], [27.3, 127.0], [27.4, 127.0], [27.5, 127.0], [27.6, 127.0], [27.7, 128.0], [27.8, 128.0], [27.9, 128.0], [28.0, 128.0], [28.1, 128.0], [28.2, 128.0], [28.3, 128.0], [28.4, 128.0], [28.5, 128.0], [28.6, 128.0], [28.7, 128.0], [28.8, 128.0], [28.9, 128.0], [29.0, 128.0], [29.1, 128.0], [29.2, 128.0], [29.3, 128.0], [29.4, 129.0], [29.5, 129.0], [29.6, 129.0], [29.7, 129.0], [29.8, 129.0], [29.9, 129.0], [30.0, 129.0], [30.1, 129.0], [30.2, 129.0], [30.3, 129.0], [30.4, 129.0], [30.5, 129.0], [30.6, 129.0], [30.7, 129.0], [30.8, 129.0], [30.9, 129.0], [31.0, 129.0], [31.1, 129.0], [31.2, 129.0], [31.3, 130.0], [31.4, 130.0], [31.5, 130.0], [31.6, 130.0], [31.7, 130.0], [31.8, 130.0], [31.9, 130.0], [32.0, 130.0], [32.1, 130.0], [32.2, 130.0], [32.3, 130.0], [32.4, 130.0], [32.5, 130.0], [32.6, 130.0], [32.7, 131.0], [32.8, 131.0], [32.9, 131.0], [33.0, 131.0], [33.1, 131.0], [33.2, 131.0], [33.3, 131.0], [33.4, 131.0], [33.5, 131.0], [33.6, 131.0], [33.7, 131.0], [33.8, 131.0], [33.9, 131.0], [34.0, 131.0], [34.1, 131.0], [34.2, 131.0], [34.3, 131.0], [34.4, 131.0], [34.5, 131.0], [34.6, 132.0], [34.7, 132.0], [34.8, 132.0], [34.9, 132.0], [35.0, 132.0], [35.1, 132.0], [35.2, 132.0], [35.3, 132.0], [35.4, 132.0], [35.5, 132.0], [35.6, 132.0], [35.7, 132.0], [35.8, 132.0], [35.9, 132.0], [36.0, 132.0], [36.1, 133.0], [36.2, 133.0], [36.3, 133.0], [36.4, 133.0], [36.5, 133.0], [36.6, 133.0], [36.7, 133.0], [36.8, 133.0], [36.9, 133.0], [37.0, 133.0], [37.1, 133.0], [37.2, 133.0], [37.3, 133.0], [37.4, 133.0], [37.5, 133.0], [37.6, 133.0], [37.7, 134.0], [37.8, 134.0], [37.9, 134.0], [38.0, 134.0], [38.1, 134.0], [38.2, 134.0], [38.3, 134.0], [38.4, 134.0], [38.5, 134.0], [38.6, 134.0], [38.7, 134.0], [38.8, 134.0], [38.9, 134.0], [39.0, 134.0], [39.1, 135.0], [39.2, 135.0], [39.3, 135.0], [39.4, 135.0], [39.5, 135.0], [39.6, 135.0], [39.7, 135.0], [39.8, 135.0], [39.9, 135.0], [40.0, 135.0], [40.1, 135.0], [40.2, 135.0], [40.3, 135.0], [40.4, 136.0], [40.5, 136.0], [40.6, 136.0], [40.7, 136.0], [40.8, 136.0], [40.9, 136.0], [41.0, 136.0], [41.1, 136.0], [41.2, 136.0], [41.3, 136.0], [41.4, 136.0], [41.5, 137.0], [41.6, 137.0], [41.7, 137.0], [41.8, 137.0], [41.9, 137.0], [42.0, 137.0], [42.1, 137.0], [42.2, 137.0], [42.3, 137.0], [42.4, 137.0], [42.5, 137.0], [42.6, 137.0], [42.7, 138.0], [42.8, 138.0], [42.9, 138.0], [43.0, 138.0], [43.1, 138.0], [43.2, 139.0], [43.3, 139.0], [43.4, 139.0], [43.5, 139.0], [43.6, 139.0], [43.7, 139.0], [43.8, 139.0], [43.9, 139.0], [44.0, 139.0], [44.1, 139.0], [44.2, 139.0], [44.3, 139.0], [44.4, 139.0], [44.5, 139.0], [44.6, 140.0], [44.7, 140.0], [44.8, 140.0], [44.9, 140.0], [45.0, 140.0], [45.1, 140.0], [45.2, 140.0], [45.3, 140.0], [45.4, 141.0], [45.5, 141.0], [45.6, 141.0], [45.7, 141.0], [45.8, 142.0], [45.9, 142.0], [46.0, 142.0], [46.1, 142.0], [46.2, 142.0], [46.3, 143.0], [46.4, 143.0], [46.5, 143.0], [46.6, 143.0], [46.7, 143.0], [46.8, 144.0], [46.9, 144.0], [47.0, 144.0], [47.1, 144.0], [47.2, 144.0], [47.3, 145.0], [47.4, 145.0], [47.5, 145.0], [47.6, 145.0], [47.7, 145.0], [47.8, 146.0], [47.9, 146.0], [48.0, 146.0], [48.1, 146.0], [48.2, 147.0], [48.3, 147.0], [48.4, 147.0], [48.5, 147.0], [48.6, 148.0], [48.7, 149.0], [48.8, 150.0], [48.9, 150.0], [49.0, 151.0], [49.1, 151.0], [49.2, 152.0], [49.3, 152.0], [49.4, 153.0], [49.5, 153.0], [49.6, 154.0], [49.7, 155.0], [49.8, 155.0], [49.9, 155.0], [50.0, 156.0], [50.1, 156.0], [50.2, 157.0], [50.3, 159.0], [50.4, 159.0], [50.5, 160.0], [50.6, 160.0], [50.7, 160.0], [50.8, 161.0], [50.9, 161.0], [51.0, 162.0], [51.1, 162.0], [51.2, 163.0], [51.3, 164.0], [51.4, 164.0], [51.5, 164.0], [51.6, 164.0], [51.7, 165.0], [51.8, 165.0], [51.9, 165.0], [52.0, 165.0], [52.1, 166.0], [52.2, 166.0], [52.3, 166.0], [52.4, 166.0], [52.5, 166.0], [52.6, 167.0], [52.7, 167.0], [52.8, 167.0], [52.9, 167.0], [53.0, 167.0], [53.1, 167.0], [53.2, 168.0], [53.3, 168.0], [53.4, 169.0], [53.5, 169.0], [53.6, 169.0], [53.7, 170.0], [53.8, 170.0], [53.9, 170.0], [54.0, 170.0], [54.1, 171.0], [54.2, 171.0], [54.3, 171.0], [54.4, 171.0], [54.5, 171.0], [54.6, 171.0], [54.7, 172.0], [54.8, 172.0], [54.9, 172.0], [55.0, 172.0], [55.1, 173.0], [55.2, 173.0], [55.3, 173.0], [55.4, 173.0], [55.5, 173.0], [55.6, 174.0], [55.7, 174.0], [55.8, 175.0], [55.9, 175.0], [56.0, 175.0], [56.1, 175.0], [56.2, 176.0], [56.3, 176.0], [56.4, 176.0], [56.5, 176.0], [56.6, 176.0], [56.7, 176.0], [56.8, 177.0], [56.9, 177.0], [57.0, 177.0], [57.1, 177.0], [57.2, 178.0], [57.3, 178.0], [57.4, 178.0], [57.5, 179.0], [57.6, 179.0], [57.7, 179.0], [57.8, 179.0], [57.9, 179.0], [58.0, 179.0], [58.1, 179.0], [58.2, 179.0], [58.3, 180.0], [58.4, 180.0], [58.5, 180.0], [58.6, 180.0], [58.7, 180.0], [58.8, 181.0], [58.9, 181.0], [59.0, 181.0], [59.1, 181.0], [59.2, 181.0], [59.3, 182.0], [59.4, 182.0], [59.5, 182.0], [59.6, 183.0], [59.7, 183.0], [59.8, 183.0], [59.9, 183.0], [60.0, 184.0], [60.1, 184.0], [60.2, 184.0], [60.3, 184.0], [60.4, 184.0], [60.5, 184.0], [60.6, 185.0], [60.7, 185.0], [60.8, 185.0], [60.9, 185.0], [61.0, 185.0], [61.1, 185.0], [61.2, 185.0], [61.3, 185.0], [61.4, 185.0], [61.5, 185.0], [61.6, 186.0], [61.7, 186.0], [61.8, 186.0], [61.9, 186.0], [62.0, 186.0], [62.1, 187.0], [62.2, 187.0], [62.3, 187.0], [62.4, 187.0], [62.5, 187.0], [62.6, 187.0], [62.7, 187.0], [62.8, 187.0], [62.9, 187.0], [63.0, 188.0], [63.1, 188.0], [63.2, 188.0], [63.3, 188.0], [63.4, 188.0], [63.5, 188.0], [63.6, 188.0], [63.7, 188.0], [63.8, 189.0], [63.9, 189.0], [64.0, 189.0], [64.1, 189.0], [64.2, 189.0], [64.3, 189.0], [64.4, 189.0], [64.5, 189.0], [64.6, 189.0], [64.7, 190.0], [64.8, 190.0], [64.9, 190.0], [65.0, 190.0], [65.1, 190.0], [65.2, 190.0], [65.3, 190.0], [65.4, 191.0], [65.5, 191.0], [65.6, 191.0], [65.7, 191.0], [65.8, 191.0], [65.9, 191.0], [66.0, 191.0], [66.1, 191.0], [66.2, 191.0], [66.3, 192.0], [66.4, 192.0], [66.5, 192.0], [66.6, 192.0], [66.7, 192.0], [66.8, 192.0], [66.9, 192.0], [67.0, 192.0], [67.1, 192.0], [67.2, 192.0], [67.3, 192.0], [67.4, 192.0], [67.5, 192.0], [67.6, 192.0], [67.7, 192.0], [67.8, 193.0], [67.9, 193.0], [68.0, 193.0], [68.1, 193.0], [68.2, 193.0], [68.3, 193.0], [68.4, 193.0], [68.5, 193.0], [68.6, 193.0], [68.7, 193.0], [68.8, 194.0], [68.9, 194.0], [69.0, 194.0], [69.1, 194.0], [69.2, 194.0], [69.3, 194.0], [69.4, 194.0], [69.5, 194.0], [69.6, 194.0], [69.7, 194.0], [69.8, 194.0], [69.9, 195.0], [70.0, 195.0], [70.1, 195.0], [70.2, 195.0], [70.3, 195.0], [70.4, 195.0], [70.5, 195.0], [70.6, 195.0], [70.7, 195.0], [70.8, 196.0], [70.9, 196.0], [71.0, 196.0], [71.1, 196.0], [71.2, 196.0], [71.3, 196.0], [71.4, 196.0], [71.5, 196.0], [71.6, 196.0], [71.7, 196.0], [71.8, 196.0], [71.9, 196.0], [72.0, 197.0], [72.1, 197.0], [72.2, 197.0], [72.3, 197.0], [72.4, 197.0], [72.5, 197.0], [72.6, 197.0], [72.7, 197.0], [72.8, 198.0], [72.9, 198.0], [73.0, 198.0], [73.1, 198.0], [73.2, 198.0], [73.3, 198.0], [73.4, 198.0], [73.5, 198.0], [73.6, 199.0], [73.7, 199.0], [73.8, 199.0], [73.9, 199.0], [74.0, 199.0], [74.1, 199.0], [74.2, 199.0], [74.3, 199.0], [74.4, 200.0], [74.5, 200.0], [74.6, 200.0], [74.7, 200.0], [74.8, 200.0], [74.9, 200.0], [75.0, 200.0], [75.1, 200.0], [75.2, 201.0], [75.3, 201.0], [75.4, 201.0], [75.5, 201.0], [75.6, 201.0], [75.7, 201.0], [75.8, 201.0], [75.9, 201.0], [76.0, 201.0], [76.1, 202.0], [76.2, 202.0], [76.3, 202.0], [76.4, 202.0], [76.5, 202.0], [76.6, 202.0], [76.7, 202.0], [76.8, 203.0], [76.9, 203.0], [77.0, 203.0], [77.1, 203.0], [77.2, 203.0], [77.3, 203.0], [77.4, 203.0], [77.5, 203.0], [77.6, 204.0], [77.7, 204.0], [77.8, 204.0], [77.9, 204.0], [78.0, 204.0], [78.1, 204.0], [78.2, 204.0], [78.3, 204.0], [78.4, 204.0], [78.5, 205.0], [78.6, 205.0], [78.7, 205.0], [78.8, 205.0], [78.9, 205.0], [79.0, 205.0], [79.1, 205.0], [79.2, 205.0], [79.3, 205.0], [79.4, 206.0], [79.5, 206.0], [79.6, 206.0], [79.7, 206.0], [79.8, 206.0], [79.9, 206.0], [80.0, 206.0], [80.1, 206.0], [80.2, 207.0], [80.3, 207.0], [80.4, 207.0], [80.5, 207.0], [80.6, 207.0], [80.7, 207.0], [80.8, 207.0], [80.9, 207.0], [81.0, 207.0], [81.1, 207.0], [81.2, 208.0], [81.3, 208.0], [81.4, 208.0], [81.5, 208.0], [81.6, 208.0], [81.7, 208.0], [81.8, 208.0], [81.9, 208.0], [82.0, 208.0], [82.1, 208.0], [82.2, 209.0], [82.3, 209.0], [82.4, 209.0], [82.5, 209.0], [82.6, 209.0], [82.7, 209.0], [82.8, 209.0], [82.9, 209.0], [83.0, 210.0], [83.1, 210.0], [83.2, 210.0], [83.3, 210.0], [83.4, 210.0], [83.5, 211.0], [83.6, 211.0], [83.7, 211.0], [83.8, 211.0], [83.9, 211.0], [84.0, 211.0], [84.1, 211.0], [84.2, 211.0], [84.3, 211.0], [84.4, 211.0], [84.5, 211.0], [84.6, 212.0], [84.7, 212.0], [84.8, 212.0], [84.9, 212.0], [85.0, 212.0], [85.1, 212.0], [85.2, 212.0], [85.3, 213.0], [85.4, 213.0], [85.5, 213.0], [85.6, 213.0], [85.7, 213.0], [85.8, 213.0], [85.9, 213.0], [86.0, 213.0], [86.1, 213.0], [86.2, 213.0], [86.3, 214.0], [86.4, 214.0], [86.5, 214.0], [86.6, 214.0], [86.7, 214.0], [86.8, 214.0], [86.9, 214.0], [87.0, 214.0], [87.1, 214.0], [87.2, 214.0], [87.3, 214.0], [87.4, 214.0], [87.5, 215.0], [87.6, 215.0], [87.7, 215.0], [87.8, 215.0], [87.9, 215.0], [88.0, 215.0], [88.1, 215.0], [88.2, 215.0], [88.3, 215.0], [88.4, 216.0], [88.5, 216.0], [88.6, 216.0], [88.7, 216.0], [88.8, 216.0], [88.9, 216.0], [89.0, 216.0], [89.1, 216.0], [89.2, 216.0], [89.3, 217.0], [89.4, 217.0], [89.5, 217.0], [89.6, 217.0], [89.7, 217.0], [89.8, 217.0], [89.9, 217.0], [90.0, 217.0], [90.1, 217.0], [90.2, 218.0], [90.3, 218.0], [90.4, 218.0], [90.5, 218.0], [90.6, 218.0], [90.7, 218.0], [90.8, 218.0], [90.9, 218.0], [91.0, 219.0], [91.1, 219.0], [91.2, 219.0], [91.3, 219.0], [91.4, 219.0], [91.5, 219.0], [91.6, 219.0], [91.7, 219.0], [91.8, 219.0], [91.9, 219.0], [92.0, 220.0], [92.1, 220.0], [92.2, 220.0], [92.3, 220.0], [92.4, 220.0], [92.5, 220.0], [92.6, 220.0], [92.7, 221.0], [92.8, 221.0], [92.9, 221.0], [93.0, 221.0], [93.1, 221.0], [93.2, 221.0], [93.3, 221.0], [93.4, 221.0], [93.5, 221.0], [93.6, 221.0], [93.7, 222.0], [93.8, 222.0], [93.9, 222.0], [94.0, 222.0], [94.1, 223.0], [94.2, 223.0], [94.3, 223.0], [94.4, 223.0], [94.5, 223.0], [94.6, 223.0], [94.7, 224.0], [94.8, 224.0], [94.9, 224.0], [95.0, 224.0], [95.1, 225.0], [95.2, 225.0], [95.3, 225.0], [95.4, 225.0], [95.5, 226.0], [95.6, 226.0], [95.7, 226.0], [95.8, 227.0], [95.9, 227.0], [96.0, 227.0], [96.1, 227.0], [96.2, 227.0], [96.3, 228.0], [96.4, 229.0], [96.5, 229.0], [96.6, 229.0], [96.7, 229.0], [96.8, 229.0], [96.9, 229.0], [97.0, 230.0], [97.1, 230.0], [97.2, 230.0], [97.3, 230.0], [97.4, 231.0], [97.5, 231.0], [97.6, 232.0], [97.7, 233.0], [97.8, 233.0], [97.9, 233.0], [98.0, 234.0], [98.1, 234.0], [98.2, 234.0], [98.3, 235.0], [98.4, 235.0], [98.5, 236.0], [98.6, 236.0], [98.7, 238.0], [98.8, 238.0], [98.9, 239.0], [99.0, 239.0], [99.1, 240.0], [99.2, 241.0], [99.3, 243.0], [99.4, 245.0], [99.5, 246.0], [99.6, 248.0], [99.7, 252.0], [99.8, 257.0], [99.9, 266.0]], "isOverall": false, "label": "extract", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1486.0, "series": [{"data": [[0.0, 1.0], [200.0, 513.0], [100.0, 1486.0]], "isOverall": false, "label": "extract", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 2000.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2000.0, "series": [{"data": [[0.0, 2000.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 4.9E-324, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.66601964E12, "maxY": 1.0, "series": [{"data": [[1.6660197E12, 1.0], [1.66601988E12, 1.0], [1.66601976E12, 1.0], [1.66601994E12, 1.0], [1.66601964E12, 1.0], [1.66601982E12, 1.0]], "isOverall": false, "label": "1", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66601994E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 163.01150000000024, "minX": 1.0, "maxY": 163.01150000000024, "series": [{"data": [[1.0, 163.01150000000024]], "isOverall": false, "label": "extract", "isController": false}, {"data": [[1.0, 163.01150000000024]], "isOverall": false, "label": "extract-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 1.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 0.0, "minX": 1.66601964E12, "maxY": 913856.3333333334, "series": [{"data": [[1.6660197E12, 671168.6333333333], [1.66601988E12, 913856.3333333334], [1.66601976E12, 729632.8], [1.66601994E12, 665318.0], [1.66601964E12, 472390.4666666667], [1.66601982E12, 798033.7666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6660197E12, 0.0], [1.66601988E12, 0.0], [1.66601976E12, 0.0], [1.66601994E12, 0.0], [1.66601964E12, 0.0], [1.66601982E12, 0.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66601994E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 125.09414225941416, "minX": 1.66601964E12, "maxY": 208.6411149825785, "series": [{"data": [[1.6660197E12, 208.6411149825785], [1.66601988E12, 125.09414225941416], [1.66601976E12, 192.16346153846155], [1.66601994E12, 127.9971264367816], [1.66601964E12, 207.73762376237636], [1.66601982E12, 160.5549597855228]], "isOverall": false, "label": "extract", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66601994E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 123.06694560669452, "minX": 1.66601964E12, "maxY": 206.10104529616723, "series": [{"data": [[1.6660197E12, 206.10104529616723], [1.66601988E12, 123.06694560669452], [1.66601976E12, 189.59935897435895], [1.66601994E12, 125.89655172413788], [1.66601964E12, 205.19801980198022], [1.66601982E12, 158.16890080428962]], "isOverall": false, "label": "extract", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66601994E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.66601964E12, "maxY": 4.9E-324, "series": [{"data": [[1.6660197E12, 0.0], [1.66601988E12, 0.0], [1.66601976E12, 0.0], [1.66601994E12, 0.0], [1.66601964E12, 0.0], [1.66601982E12, 0.0]], "isOverall": false, "label": "extract", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66601994E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 97.0, "minX": 1.66601964E12, "maxY": 288.0, "series": [{"data": [[1.6660197E12, 288.0], [1.66601988E12, 161.0], [1.66601976E12, 238.0], [1.66601994E12, 167.0], [1.66601964E12, 252.0], [1.66601982E12, 232.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6660197E12, 166.0], [1.66601988E12, 97.0], [1.66601976E12, 151.0], [1.66601994E12, 101.0], [1.66601964E12, 172.0], [1.66601982E12, 101.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6660197E12, 234.0], [1.66601988E12, 139.0], [1.66601976E12, 216.0], [1.66601994E12, 144.10000000000002], [1.66601964E12, 229.0], [1.66601982E12, 211.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6660197E12, 265.12], [1.66601988E12, 149.20999999999998], [1.66601976E12, 233.87], [1.66601994E12, 162.54999999999995], [1.66601964E12, 240.97], [1.66601982E12, 226.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6660197E12, 242.19999999999993], [1.66601988E12, 143.0], [1.66601976E12, 221.0], [1.66601994E12, 151.0], [1.66601964E12, 231.0], [1.66601982E12, 217.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66601994E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 118.0, "minX": 1.0, "maxY": 218.0, "series": [{"data": [[1.0, 218.0], [4.0, 218.0], [8.0, 125.0], [9.0, 118.0], [5.0, 201.0], [6.0, 181.0], [7.0, 133.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 9.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 116.0, "minX": 1.0, "maxY": 216.0, "series": [{"data": [[1.0, 216.0], [4.0, 215.0], [8.0, 123.0], [9.0, 116.0], [5.0, 198.5], [6.0, 178.5], [7.0, 131.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 9.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 3.3833333333333333, "minX": 1.66601964E12, "maxY": 7.966666666666667, "series": [{"data": [[1.6660197E12, 4.783333333333333], [1.66601988E12, 7.966666666666667], [1.66601976E12, 5.2], [1.66601994E12, 5.783333333333333], [1.66601964E12, 3.3833333333333333], [1.66601982E12, 6.216666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66601994E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 3.3666666666666667, "minX": 1.66601964E12, "maxY": 7.966666666666667, "series": [{"data": [[1.6660197E12, 4.783333333333333], [1.66601988E12, 7.966666666666667], [1.66601976E12, 5.2], [1.66601994E12, 5.8], [1.66601964E12, 3.3666666666666667], [1.66601982E12, 6.216666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66601994E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 3.3666666666666667, "minX": 1.66601964E12, "maxY": 7.966666666666667, "series": [{"data": [[1.6660197E12, 4.783333333333333], [1.66601988E12, 7.966666666666667], [1.66601976E12, 5.2], [1.66601994E12, 5.8], [1.66601964E12, 3.3666666666666667], [1.66601982E12, 6.216666666666667]], "isOverall": false, "label": "extract-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66601994E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 3.3666666666666667, "minX": 1.66601964E12, "maxY": 7.966666666666667, "series": [{"data": [[1.6660197E12, 4.783333333333333], [1.66601988E12, 7.966666666666667], [1.66601976E12, 5.2], [1.66601994E12, 5.8], [1.66601964E12, 3.3666666666666667], [1.66601982E12, 6.216666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66601994E12, "title": "Total Transactions Per Second"}},
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

