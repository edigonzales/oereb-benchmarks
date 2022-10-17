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
        data: {"result": {"minY": 101.0, "minX": 0.0, "maxY": 1355.0, "series": [{"data": [[0.0, 101.0], [0.1, 103.0], [0.2, 104.0], [0.3, 106.0], [0.4, 106.0], [0.5, 107.0], [0.6, 108.0], [0.7, 108.0], [0.8, 108.0], [0.9, 109.0], [1.0, 109.0], [1.1, 109.0], [1.2, 109.0], [1.3, 110.0], [1.4, 110.0], [1.5, 110.0], [1.6, 110.0], [1.7, 111.0], [1.8, 111.0], [1.9, 111.0], [2.0, 111.0], [2.1, 111.0], [2.2, 111.0], [2.3, 111.0], [2.4, 111.0], [2.5, 111.0], [2.6, 112.0], [2.7, 112.0], [2.8, 112.0], [2.9, 112.0], [3.0, 112.0], [3.1, 112.0], [3.2, 112.0], [3.3, 112.0], [3.4, 113.0], [3.5, 113.0], [3.6, 113.0], [3.7, 113.0], [3.8, 113.0], [3.9, 113.0], [4.0, 113.0], [4.1, 113.0], [4.2, 113.0], [4.3, 114.0], [4.4, 114.0], [4.5, 114.0], [4.6, 114.0], [4.7, 114.0], [4.8, 114.0], [4.9, 114.0], [5.0, 114.0], [5.1, 114.0], [5.2, 115.0], [5.3, 115.0], [5.4, 115.0], [5.5, 115.0], [5.6, 115.0], [5.7, 115.0], [5.8, 115.0], [5.9, 115.0], [6.0, 115.0], [6.1, 115.0], [6.2, 116.0], [6.3, 116.0], [6.4, 116.0], [6.5, 116.0], [6.6, 116.0], [6.7, 116.0], [6.8, 116.0], [6.9, 116.0], [7.0, 116.0], [7.1, 116.0], [7.2, 116.0], [7.3, 116.0], [7.4, 116.0], [7.5, 117.0], [7.6, 117.0], [7.7, 117.0], [7.8, 117.0], [7.9, 117.0], [8.0, 117.0], [8.1, 117.0], [8.2, 117.0], [8.3, 117.0], [8.4, 117.0], [8.5, 117.0], [8.6, 117.0], [8.7, 117.0], [8.8, 117.0], [8.9, 117.0], [9.0, 117.0], [9.1, 117.0], [9.2, 118.0], [9.3, 118.0], [9.4, 118.0], [9.5, 118.0], [9.6, 118.0], [9.7, 118.0], [9.8, 118.0], [9.9, 118.0], [10.0, 118.0], [10.1, 118.0], [10.2, 119.0], [10.3, 119.0], [10.4, 119.0], [10.5, 119.0], [10.6, 119.0], [10.7, 119.0], [10.8, 119.0], [10.9, 119.0], [11.0, 119.0], [11.1, 119.0], [11.2, 119.0], [11.3, 120.0], [11.4, 120.0], [11.5, 120.0], [11.6, 120.0], [11.7, 120.0], [11.8, 120.0], [11.9, 120.0], [12.0, 120.0], [12.1, 120.0], [12.2, 120.0], [12.3, 120.0], [12.4, 120.0], [12.5, 120.0], [12.6, 120.0], [12.7, 121.0], [12.8, 121.0], [12.9, 121.0], [13.0, 121.0], [13.1, 121.0], [13.2, 121.0], [13.3, 121.0], [13.4, 121.0], [13.5, 121.0], [13.6, 121.0], [13.7, 121.0], [13.8, 121.0], [13.9, 121.0], [14.0, 121.0], [14.1, 122.0], [14.2, 122.0], [14.3, 122.0], [14.4, 122.0], [14.5, 122.0], [14.6, 122.0], [14.7, 122.0], [14.8, 122.0], [14.9, 122.0], [15.0, 122.0], [15.1, 122.0], [15.2, 122.0], [15.3, 122.0], [15.4, 122.0], [15.5, 123.0], [15.6, 123.0], [15.7, 123.0], [15.8, 123.0], [15.9, 123.0], [16.0, 123.0], [16.1, 123.0], [16.2, 123.0], [16.3, 123.0], [16.4, 123.0], [16.5, 123.0], [16.6, 123.0], [16.7, 123.0], [16.8, 124.0], [16.9, 124.0], [17.0, 124.0], [17.1, 124.0], [17.2, 124.0], [17.3, 124.0], [17.4, 124.0], [17.5, 124.0], [17.6, 124.0], [17.7, 124.0], [17.8, 124.0], [17.9, 124.0], [18.0, 124.0], [18.1, 124.0], [18.2, 124.0], [18.3, 124.0], [18.4, 124.0], [18.5, 124.0], [18.6, 124.0], [18.7, 124.0], [18.8, 125.0], [18.9, 125.0], [19.0, 125.0], [19.1, 125.0], [19.2, 125.0], [19.3, 125.0], [19.4, 125.0], [19.5, 125.0], [19.6, 125.0], [19.7, 125.0], [19.8, 125.0], [19.9, 125.0], [20.0, 125.0], [20.1, 125.0], [20.2, 125.0], [20.3, 125.0], [20.4, 126.0], [20.5, 126.0], [20.6, 126.0], [20.7, 126.0], [20.8, 126.0], [20.9, 126.0], [21.0, 126.0], [21.1, 126.0], [21.2, 126.0], [21.3, 126.0], [21.4, 126.0], [21.5, 126.0], [21.6, 126.0], [21.7, 126.0], [21.8, 126.0], [21.9, 126.0], [22.0, 126.0], [22.1, 126.0], [22.2, 126.0], [22.3, 126.0], [22.4, 126.0], [22.5, 126.0], [22.6, 127.0], [22.7, 127.0], [22.8, 127.0], [22.9, 127.0], [23.0, 127.0], [23.1, 127.0], [23.2, 127.0], [23.3, 127.0], [23.4, 127.0], [23.5, 127.0], [23.6, 127.0], [23.7, 127.0], [23.8, 127.0], [23.9, 127.0], [24.0, 127.0], [24.1, 127.0], [24.2, 127.0], [24.3, 128.0], [24.4, 128.0], [24.5, 128.0], [24.6, 128.0], [24.7, 128.0], [24.8, 128.0], [24.9, 128.0], [25.0, 128.0], [25.1, 128.0], [25.2, 128.0], [25.3, 128.0], [25.4, 128.0], [25.5, 128.0], [25.6, 128.0], [25.7, 128.0], [25.8, 128.0], [25.9, 128.0], [26.0, 129.0], [26.1, 129.0], [26.2, 129.0], [26.3, 129.0], [26.4, 129.0], [26.5, 129.0], [26.6, 129.0], [26.7, 129.0], [26.8, 129.0], [26.9, 129.0], [27.0, 129.0], [27.1, 129.0], [27.2, 129.0], [27.3, 129.0], [27.4, 129.0], [27.5, 129.0], [27.6, 129.0], [27.7, 129.0], [27.8, 130.0], [27.9, 130.0], [28.0, 130.0], [28.1, 130.0], [28.2, 130.0], [28.3, 130.0], [28.4, 130.0], [28.5, 130.0], [28.6, 130.0], [28.7, 130.0], [28.8, 130.0], [28.9, 130.0], [29.0, 130.0], [29.1, 130.0], [29.2, 130.0], [29.3, 131.0], [29.4, 131.0], [29.5, 131.0], [29.6, 131.0], [29.7, 131.0], [29.8, 131.0], [29.9, 131.0], [30.0, 131.0], [30.1, 131.0], [30.2, 131.0], [30.3, 131.0], [30.4, 131.0], [30.5, 131.0], [30.6, 131.0], [30.7, 131.0], [30.8, 132.0], [30.9, 132.0], [31.0, 132.0], [31.1, 132.0], [31.2, 132.0], [31.3, 132.0], [31.4, 132.0], [31.5, 132.0], [31.6, 132.0], [31.7, 132.0], [31.8, 132.0], [31.9, 132.0], [32.0, 132.0], [32.1, 133.0], [32.2, 133.0], [32.3, 133.0], [32.4, 133.0], [32.5, 133.0], [32.6, 133.0], [32.7, 133.0], [32.8, 133.0], [32.9, 133.0], [33.0, 133.0], [33.1, 133.0], [33.2, 133.0], [33.3, 133.0], [33.4, 133.0], [33.5, 133.0], [33.6, 133.0], [33.7, 133.0], [33.8, 133.0], [33.9, 133.0], [34.0, 133.0], [34.1, 134.0], [34.2, 134.0], [34.3, 134.0], [34.4, 134.0], [34.5, 134.0], [34.6, 134.0], [34.7, 134.0], [34.8, 134.0], [34.9, 134.0], [35.0, 134.0], [35.1, 134.0], [35.2, 134.0], [35.3, 134.0], [35.4, 135.0], [35.5, 135.0], [35.6, 135.0], [35.7, 135.0], [35.8, 135.0], [35.9, 135.0], [36.0, 135.0], [36.1, 135.0], [36.2, 135.0], [36.3, 135.0], [36.4, 135.0], [36.5, 135.0], [36.6, 135.0], [36.7, 135.0], [36.8, 135.0], [36.9, 135.0], [37.0, 135.0], [37.1, 135.0], [37.2, 135.0], [37.3, 136.0], [37.4, 136.0], [37.5, 136.0], [37.6, 136.0], [37.7, 136.0], [37.8, 136.0], [37.9, 136.0], [38.0, 136.0], [38.1, 136.0], [38.2, 136.0], [38.3, 136.0], [38.4, 136.0], [38.5, 136.0], [38.6, 136.0], [38.7, 136.0], [38.8, 136.0], [38.9, 136.0], [39.0, 136.0], [39.1, 136.0], [39.2, 136.0], [39.3, 137.0], [39.4, 137.0], [39.5, 137.0], [39.6, 137.0], [39.7, 137.0], [39.8, 137.0], [39.9, 137.0], [40.0, 137.0], [40.1, 137.0], [40.2, 137.0], [40.3, 137.0], [40.4, 137.0], [40.5, 137.0], [40.6, 138.0], [40.7, 138.0], [40.8, 138.0], [40.9, 138.0], [41.0, 138.0], [41.1, 138.0], [41.2, 138.0], [41.3, 138.0], [41.4, 138.0], [41.5, 138.0], [41.6, 138.0], [41.7, 138.0], [41.8, 138.0], [41.9, 139.0], [42.0, 139.0], [42.1, 139.0], [42.2, 139.0], [42.3, 139.0], [42.4, 139.0], [42.5, 139.0], [42.6, 139.0], [42.7, 139.0], [42.8, 139.0], [42.9, 139.0], [43.0, 139.0], [43.1, 140.0], [43.2, 140.0], [43.3, 140.0], [43.4, 140.0], [43.5, 140.0], [43.6, 140.0], [43.7, 140.0], [43.8, 140.0], [43.9, 140.0], [44.0, 141.0], [44.1, 141.0], [44.2, 141.0], [44.3, 141.0], [44.4, 141.0], [44.5, 141.0], [44.6, 141.0], [44.7, 141.0], [44.8, 142.0], [44.9, 142.0], [45.0, 142.0], [45.1, 142.0], [45.2, 142.0], [45.3, 142.0], [45.4, 142.0], [45.5, 142.0], [45.6, 143.0], [45.7, 143.0], [45.8, 143.0], [45.9, 143.0], [46.0, 143.0], [46.1, 143.0], [46.2, 144.0], [46.3, 144.0], [46.4, 144.0], [46.5, 144.0], [46.6, 145.0], [46.7, 145.0], [46.8, 145.0], [46.9, 145.0], [47.0, 145.0], [47.1, 146.0], [47.2, 146.0], [47.3, 146.0], [47.4, 146.0], [47.5, 147.0], [47.6, 147.0], [47.7, 147.0], [47.8, 147.0], [47.9, 148.0], [48.0, 148.0], [48.1, 148.0], [48.2, 148.0], [48.3, 149.0], [48.4, 150.0], [48.5, 150.0], [48.6, 150.0], [48.7, 151.0], [48.8, 151.0], [48.9, 152.0], [49.0, 153.0], [49.1, 154.0], [49.2, 154.0], [49.3, 155.0], [49.4, 156.0], [49.5, 156.0], [49.6, 158.0], [49.7, 160.0], [49.8, 160.0], [49.9, 162.0], [50.0, 162.0], [50.1, 163.0], [50.2, 163.0], [50.3, 163.0], [50.4, 163.0], [50.5, 164.0], [50.6, 164.0], [50.7, 165.0], [50.8, 166.0], [50.9, 166.0], [51.0, 167.0], [51.1, 168.0], [51.2, 169.0], [51.3, 169.0], [51.4, 169.0], [51.5, 170.0], [51.6, 170.0], [51.7, 170.0], [51.8, 170.0], [51.9, 171.0], [52.0, 171.0], [52.1, 171.0], [52.2, 171.0], [52.3, 172.0], [52.4, 172.0], [52.5, 172.0], [52.6, 172.0], [52.7, 172.0], [52.8, 173.0], [52.9, 173.0], [53.0, 174.0], [53.1, 174.0], [53.2, 174.0], [53.3, 174.0], [53.4, 174.0], [53.5, 175.0], [53.6, 175.0], [53.7, 175.0], [53.8, 175.0], [53.9, 176.0], [54.0, 176.0], [54.1, 176.0], [54.2, 176.0], [54.3, 176.0], [54.4, 176.0], [54.5, 176.0], [54.6, 177.0], [54.7, 177.0], [54.8, 177.0], [54.9, 177.0], [55.0, 178.0], [55.1, 178.0], [55.2, 179.0], [55.3, 179.0], [55.4, 179.0], [55.5, 180.0], [55.6, 180.0], [55.7, 181.0], [55.8, 181.0], [55.9, 181.0], [56.0, 181.0], [56.1, 182.0], [56.2, 182.0], [56.3, 182.0], [56.4, 182.0], [56.5, 182.0], [56.6, 182.0], [56.7, 182.0], [56.8, 183.0], [56.9, 183.0], [57.0, 183.0], [57.1, 183.0], [57.2, 184.0], [57.3, 184.0], [57.4, 184.0], [57.5, 184.0], [57.6, 184.0], [57.7, 185.0], [57.8, 185.0], [57.9, 185.0], [58.0, 185.0], [58.1, 185.0], [58.2, 186.0], [58.3, 186.0], [58.4, 187.0], [58.5, 187.0], [58.6, 187.0], [58.7, 187.0], [58.8, 188.0], [58.9, 188.0], [59.0, 188.0], [59.1, 188.0], [59.2, 188.0], [59.3, 188.0], [59.4, 188.0], [59.5, 188.0], [59.6, 188.0], [59.7, 188.0], [59.8, 188.0], [59.9, 188.0], [60.0, 188.0], [60.1, 189.0], [60.2, 189.0], [60.3, 189.0], [60.4, 189.0], [60.5, 189.0], [60.6, 189.0], [60.7, 189.0], [60.8, 189.0], [60.9, 189.0], [61.0, 190.0], [61.1, 190.0], [61.2, 190.0], [61.3, 190.0], [61.4, 190.0], [61.5, 190.0], [61.6, 190.0], [61.7, 191.0], [61.8, 191.0], [61.9, 191.0], [62.0, 191.0], [62.1, 191.0], [62.2, 191.0], [62.3, 191.0], [62.4, 192.0], [62.5, 192.0], [62.6, 192.0], [62.7, 192.0], [62.8, 192.0], [62.9, 192.0], [63.0, 193.0], [63.1, 193.0], [63.2, 193.0], [63.3, 193.0], [63.4, 193.0], [63.5, 193.0], [63.6, 193.0], [63.7, 194.0], [63.8, 194.0], [63.9, 194.0], [64.0, 194.0], [64.1, 194.0], [64.2, 194.0], [64.3, 194.0], [64.4, 195.0], [64.5, 195.0], [64.6, 195.0], [64.7, 195.0], [64.8, 195.0], [64.9, 195.0], [65.0, 195.0], [65.1, 195.0], [65.2, 195.0], [65.3, 195.0], [65.4, 196.0], [65.5, 196.0], [65.6, 196.0], [65.7, 196.0], [65.8, 196.0], [65.9, 197.0], [66.0, 197.0], [66.1, 197.0], [66.2, 197.0], [66.3, 197.0], [66.4, 197.0], [66.5, 197.0], [66.6, 197.0], [66.7, 198.0], [66.8, 198.0], [66.9, 198.0], [67.0, 198.0], [67.1, 198.0], [67.2, 198.0], [67.3, 198.0], [67.4, 198.0], [67.5, 198.0], [67.6, 198.0], [67.7, 198.0], [67.8, 199.0], [67.9, 199.0], [68.0, 199.0], [68.1, 199.0], [68.2, 199.0], [68.3, 200.0], [68.4, 200.0], [68.5, 200.0], [68.6, 200.0], [68.7, 200.0], [68.8, 200.0], [68.9, 200.0], [69.0, 201.0], [69.1, 201.0], [69.2, 201.0], [69.3, 201.0], [69.4, 201.0], [69.5, 201.0], [69.6, 201.0], [69.7, 201.0], [69.8, 201.0], [69.9, 202.0], [70.0, 202.0], [70.1, 202.0], [70.2, 202.0], [70.3, 202.0], [70.4, 202.0], [70.5, 202.0], [70.6, 202.0], [70.7, 202.0], [70.8, 203.0], [70.9, 203.0], [71.0, 203.0], [71.1, 203.0], [71.2, 203.0], [71.3, 203.0], [71.4, 203.0], [71.5, 203.0], [71.6, 203.0], [71.7, 203.0], [71.8, 204.0], [71.9, 204.0], [72.0, 204.0], [72.1, 204.0], [72.2, 204.0], [72.3, 204.0], [72.4, 204.0], [72.5, 204.0], [72.6, 204.0], [72.7, 204.0], [72.8, 204.0], [72.9, 205.0], [73.0, 205.0], [73.1, 205.0], [73.2, 205.0], [73.3, 205.0], [73.4, 205.0], [73.5, 205.0], [73.6, 205.0], [73.7, 205.0], [73.8, 206.0], [73.9, 206.0], [74.0, 206.0], [74.1, 206.0], [74.2, 206.0], [74.3, 206.0], [74.4, 206.0], [74.5, 206.0], [74.6, 206.0], [74.7, 207.0], [74.8, 207.0], [74.9, 207.0], [75.0, 207.0], [75.1, 207.0], [75.2, 207.0], [75.3, 207.0], [75.4, 207.0], [75.5, 207.0], [75.6, 207.0], [75.7, 207.0], [75.8, 207.0], [75.9, 207.0], [76.0, 207.0], [76.1, 207.0], [76.2, 208.0], [76.3, 208.0], [76.4, 208.0], [76.5, 208.0], [76.6, 208.0], [76.7, 208.0], [76.8, 208.0], [76.9, 208.0], [77.0, 208.0], [77.1, 208.0], [77.2, 208.0], [77.3, 208.0], [77.4, 209.0], [77.5, 209.0], [77.6, 209.0], [77.7, 209.0], [77.8, 209.0], [77.9, 209.0], [78.0, 209.0], [78.1, 209.0], [78.2, 210.0], [78.3, 210.0], [78.4, 210.0], [78.5, 210.0], [78.6, 210.0], [78.7, 210.0], [78.8, 210.0], [78.9, 210.0], [79.0, 210.0], [79.1, 210.0], [79.2, 210.0], [79.3, 210.0], [79.4, 211.0], [79.5, 211.0], [79.6, 211.0], [79.7, 211.0], [79.8, 211.0], [79.9, 211.0], [80.0, 211.0], [80.1, 211.0], [80.2, 212.0], [80.3, 212.0], [80.4, 212.0], [80.5, 212.0], [80.6, 212.0], [80.7, 212.0], [80.8, 212.0], [80.9, 213.0], [81.0, 213.0], [81.1, 213.0], [81.2, 213.0], [81.3, 213.0], [81.4, 213.0], [81.5, 213.0], [81.6, 213.0], [81.7, 214.0], [81.8, 214.0], [81.9, 214.0], [82.0, 214.0], [82.1, 214.0], [82.2, 214.0], [82.3, 214.0], [82.4, 214.0], [82.5, 214.0], [82.6, 214.0], [82.7, 214.0], [82.8, 214.0], [82.9, 215.0], [83.0, 215.0], [83.1, 215.0], [83.2, 215.0], [83.3, 215.0], [83.4, 215.0], [83.5, 215.0], [83.6, 216.0], [83.7, 216.0], [83.8, 216.0], [83.9, 216.0], [84.0, 216.0], [84.1, 216.0], [84.2, 216.0], [84.3, 216.0], [84.4, 216.0], [84.5, 217.0], [84.6, 217.0], [84.7, 217.0], [84.8, 217.0], [84.9, 217.0], [85.0, 217.0], [85.1, 217.0], [85.2, 217.0], [85.3, 217.0], [85.4, 217.0], [85.5, 217.0], [85.6, 218.0], [85.7, 218.0], [85.8, 218.0], [85.9, 218.0], [86.0, 218.0], [86.1, 218.0], [86.2, 218.0], [86.3, 219.0], [86.4, 219.0], [86.5, 219.0], [86.6, 219.0], [86.7, 219.0], [86.8, 219.0], [86.9, 219.0], [87.0, 219.0], [87.1, 220.0], [87.2, 220.0], [87.3, 220.0], [87.4, 220.0], [87.5, 220.0], [87.6, 220.0], [87.7, 221.0], [87.8, 221.0], [87.9, 221.0], [88.0, 221.0], [88.1, 221.0], [88.2, 221.0], [88.3, 221.0], [88.4, 221.0], [88.5, 221.0], [88.6, 221.0], [88.7, 221.0], [88.8, 222.0], [88.9, 222.0], [89.0, 222.0], [89.1, 222.0], [89.2, 222.0], [89.3, 222.0], [89.4, 222.0], [89.5, 223.0], [89.6, 223.0], [89.7, 223.0], [89.8, 223.0], [89.9, 223.0], [90.0, 223.0], [90.1, 223.0], [90.2, 223.0], [90.3, 223.0], [90.4, 223.0], [90.5, 224.0], [90.6, 224.0], [90.7, 224.0], [90.8, 224.0], [90.9, 224.0], [91.0, 224.0], [91.1, 225.0], [91.2, 225.0], [91.3, 225.0], [91.4, 225.0], [91.5, 225.0], [91.6, 225.0], [91.7, 226.0], [91.8, 226.0], [91.9, 226.0], [92.0, 226.0], [92.1, 227.0], [92.2, 227.0], [92.3, 227.0], [92.4, 227.0], [92.5, 227.0], [92.6, 227.0], [92.7, 227.0], [92.8, 227.0], [92.9, 228.0], [93.0, 228.0], [93.1, 228.0], [93.2, 228.0], [93.3, 229.0], [93.4, 229.0], [93.5, 229.0], [93.6, 230.0], [93.7, 230.0], [93.8, 230.0], [93.9, 230.0], [94.0, 230.0], [94.1, 230.0], [94.2, 230.0], [94.3, 231.0], [94.4, 231.0], [94.5, 231.0], [94.6, 231.0], [94.7, 231.0], [94.8, 231.0], [94.9, 231.0], [95.0, 232.0], [95.1, 232.0], [95.2, 232.0], [95.3, 232.0], [95.4, 232.0], [95.5, 233.0], [95.6, 233.0], [95.7, 233.0], [95.8, 234.0], [95.9, 234.0], [96.0, 234.0], [96.1, 234.0], [96.2, 235.0], [96.3, 235.0], [96.4, 235.0], [96.5, 235.0], [96.6, 237.0], [96.7, 237.0], [96.8, 238.0], [96.9, 238.0], [97.0, 238.0], [97.1, 238.0], [97.2, 239.0], [97.3, 239.0], [97.4, 240.0], [97.5, 240.0], [97.6, 240.0], [97.7, 241.0], [97.8, 241.0], [97.9, 242.0], [98.0, 242.0], [98.1, 243.0], [98.2, 243.0], [98.3, 244.0], [98.4, 245.0], [98.5, 245.0], [98.6, 246.0], [98.7, 247.0], [98.8, 250.0], [98.9, 251.0], [99.0, 252.0], [99.1, 252.0], [99.2, 257.0], [99.3, 258.0], [99.4, 262.0], [99.5, 265.0], [99.6, 267.0], [99.7, 275.0], [99.8, 282.0], [99.9, 365.0]], "isOverall": false, "label": "extract", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 1366.0, "series": [{"data": [[300.0, 3.0], [1300.0, 1.0], [200.0, 630.0], [100.0, 1366.0]], "isOverall": false, "label": "extract", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1300.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 1999.0, "series": [{"data": [[0.0, 1999.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.66602528E12, "maxY": 1.0, "series": [{"data": [[1.66602564E12, 1.0], [1.66602534E12, 1.0], [1.66602528E12, 1.0], [1.66602546E12, 1.0], [1.6660254E12, 1.0], [1.66602558E12, 1.0], [1.66602552E12, 1.0]], "isOverall": false, "label": "1", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66602564E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 167.98049999999978, "minX": 1.0, "maxY": 167.98049999999978, "series": [{"data": [[1.0, 167.98049999999978]], "isOverall": false, "label": "extract", "isController": false}, {"data": [[1.0, 167.98049999999978]], "isOverall": false, "label": "extract-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 1.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 0.0, "minX": 1.66602528E12, "maxY": 889002.5, "series": [{"data": [[1.66602564E12, 407220.5], [1.66602534E12, 640767.2666666667], [1.66602528E12, 74834.13333333333], [1.66602546E12, 706247.1333333333], [1.6660254E12, 680522.9], [1.66602558E12, 889002.5], [1.66602552E12, 851805.5666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.66602564E12, 0.0], [1.66602534E12, 0.0], [1.66602528E12, 0.0], [1.66602546E12, 0.0], [1.6660254E12, 0.0], [1.66602558E12, 0.0], [1.66602552E12, 0.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66602564E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 128.68817204301078, "minX": 1.66602528E12, "maxY": 269.25, "series": [{"data": [[1.66602564E12, 131.48356807511752], [1.66602534E12, 218.1313868613139], [1.66602528E12, 269.25], [1.66602546E12, 198.0033112582782], [1.6660254E12, 205.98281786941584], [1.66602558E12, 128.68817204301078], [1.66602552E12, 141.82742316784876]], "isOverall": false, "label": "extract", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66602564E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 126.70107526881725, "minX": 1.66602528E12, "maxY": 264.59375, "series": [{"data": [[1.66602564E12, 129.61032863849755], [1.66602534E12, 215.37591240875915], [1.66602528E12, 264.59375], [1.66602546E12, 195.47682119205305], [1.6660254E12, 203.38144329896915], [1.66602558E12, 126.70107526881725], [1.66602552E12, 139.74704491725774]], "isOverall": false, "label": "extract", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66602564E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.66602528E12, "maxY": 4.9E-324, "series": [{"data": [[1.66602564E12, 0.0], [1.66602534E12, 0.0], [1.66602528E12, 0.0], [1.66602546E12, 0.0], [1.6660254E12, 0.0], [1.66602558E12, 0.0], [1.66602552E12, 0.0]], "isOverall": false, "label": "extract", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66602564E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 101.0, "minX": 1.66602528E12, "maxY": 1355.0, "series": [{"data": [[1.66602564E12, 185.0], [1.66602534E12, 265.0], [1.66602528E12, 1355.0], [1.66602546E12, 252.0], [1.6660254E12, 282.0], [1.66602558E12, 164.0], [1.66602552E12, 235.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.66602564E12, 107.0], [1.66602534E12, 176.0], [1.66602528E12, 200.0], [1.66602546E12, 154.0], [1.6660254E12, 159.0], [1.66602558E12, 103.0], [1.66602552E12, 101.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.66602564E12, 143.6], [1.66602534E12, 238.5], [1.66602528E12, 311.3], [1.66602546E12, 220.7], [1.6660254E12, 230.0], [1.66602558E12, 143.0], [1.66602552E12, 197.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.66602564E12, 173.43999999999994], [1.66602534E12, 259.0], [1.66602528E12, 1355.0], [1.66602546E12, 238.87999999999988], [1.6660254E12, 275.08], [1.66602558E12, 160.67999999999995], [1.66602552E12, 216.51999999999998]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.66602564E12, 151.0], [1.66602534E12, 244.0], [1.66602528E12, 711.499999999998], [1.66602546E12, 228.69999999999993], [1.6660254E12, 241.19999999999993], [1.66602558E12, 147.0], [1.66602552E12, 205.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66602564E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 116.0, "minX": 1.0, "maxY": 743.0, "series": [{"data": [[1.0, 743.0], [4.0, 221.0], [8.0, 127.0], [9.0, 116.0], [5.0, 205.0], [6.0, 179.0], [7.0, 135.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 9.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 114.0, "minX": 1.0, "maxY": 732.5, "series": [{"data": [[1.0, 732.5], [4.0, 218.0], [8.0, 125.0], [9.0, 114.0], [5.0, 203.0], [6.0, 177.0], [7.0, 132.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 9.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.55, "minX": 1.66602528E12, "maxY": 7.75, "series": [{"data": [[1.66602564E12, 3.533333333333333], [1.66602534E12, 4.566666666666666], [1.66602528E12, 0.55], [1.66602546E12, 5.033333333333333], [1.6660254E12, 4.85], [1.66602558E12, 7.75], [1.66602552E12, 7.05]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66602564E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.5333333333333333, "minX": 1.66602528E12, "maxY": 7.75, "series": [{"data": [[1.66602564E12, 3.55], [1.66602534E12, 4.566666666666666], [1.66602528E12, 0.5333333333333333], [1.66602546E12, 5.033333333333333], [1.6660254E12, 4.85], [1.66602558E12, 7.75], [1.66602552E12, 7.05]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66602564E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.5333333333333333, "minX": 1.66602528E12, "maxY": 7.75, "series": [{"data": [[1.66602564E12, 3.55], [1.66602534E12, 4.566666666666666], [1.66602528E12, 0.5333333333333333], [1.66602546E12, 5.033333333333333], [1.6660254E12, 4.85], [1.66602558E12, 7.75], [1.66602552E12, 7.05]], "isOverall": false, "label": "extract-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66602564E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.5333333333333333, "minX": 1.66602528E12, "maxY": 7.75, "series": [{"data": [[1.66602564E12, 3.55], [1.66602534E12, 4.566666666666666], [1.66602528E12, 0.5333333333333333], [1.66602546E12, 5.033333333333333], [1.6660254E12, 4.85], [1.66602558E12, 7.75], [1.66602552E12, 7.05]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66602564E12, "title": "Total Transactions Per Second"}},
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

