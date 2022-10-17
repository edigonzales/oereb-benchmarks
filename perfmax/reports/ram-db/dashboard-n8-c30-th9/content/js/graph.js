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
        data: {"result": {"minY": 103.0, "minX": 0.0, "maxY": 351.0, "series": [{"data": [[0.0, 103.0], [0.1, 116.0], [0.2, 118.0], [0.3, 120.0], [0.4, 122.0], [0.5, 123.0], [0.6, 124.0], [0.7, 125.0], [0.8, 126.0], [0.9, 127.0], [1.0, 127.0], [1.1, 128.0], [1.2, 129.0], [1.3, 129.0], [1.4, 130.0], [1.5, 130.0], [1.6, 131.0], [1.7, 131.0], [1.8, 132.0], [1.9, 132.0], [2.0, 133.0], [2.1, 133.0], [2.2, 134.0], [2.3, 134.0], [2.4, 134.0], [2.5, 135.0], [2.6, 135.0], [2.7, 136.0], [2.8, 136.0], [2.9, 136.0], [3.0, 137.0], [3.1, 137.0], [3.2, 137.0], [3.3, 137.0], [3.4, 138.0], [3.5, 138.0], [3.6, 138.0], [3.7, 139.0], [3.8, 139.0], [3.9, 139.0], [4.0, 140.0], [4.1, 140.0], [4.2, 140.0], [4.3, 140.0], [4.4, 141.0], [4.5, 141.0], [4.6, 141.0], [4.7, 141.0], [4.8, 142.0], [4.9, 142.0], [5.0, 142.0], [5.1, 142.0], [5.2, 143.0], [5.3, 143.0], [5.4, 143.0], [5.5, 143.0], [5.6, 143.0], [5.7, 144.0], [5.8, 144.0], [5.9, 144.0], [6.0, 144.0], [6.1, 144.0], [6.2, 145.0], [6.3, 145.0], [6.4, 145.0], [6.5, 145.0], [6.6, 145.0], [6.7, 145.0], [6.8, 146.0], [6.9, 146.0], [7.0, 146.0], [7.1, 146.0], [7.2, 146.0], [7.3, 146.0], [7.4, 147.0], [7.5, 147.0], [7.6, 147.0], [7.7, 147.0], [7.8, 147.0], [7.9, 147.0], [8.0, 147.0], [8.1, 148.0], [8.2, 148.0], [8.3, 148.0], [8.4, 148.0], [8.5, 148.0], [8.6, 149.0], [8.7, 149.0], [8.8, 149.0], [8.9, 149.0], [9.0, 149.0], [9.1, 149.0], [9.2, 149.0], [9.3, 150.0], [9.4, 150.0], [9.5, 150.0], [9.6, 150.0], [9.7, 150.0], [9.8, 150.0], [9.9, 150.0], [10.0, 151.0], [10.1, 151.0], [10.2, 151.0], [10.3, 151.0], [10.4, 151.0], [10.5, 151.0], [10.6, 151.0], [10.7, 151.0], [10.8, 151.0], [10.9, 152.0], [11.0, 152.0], [11.1, 152.0], [11.2, 152.0], [11.3, 152.0], [11.4, 152.0], [11.5, 152.0], [11.6, 152.0], [11.7, 152.0], [11.8, 153.0], [11.9, 153.0], [12.0, 153.0], [12.1, 153.0], [12.2, 153.0], [12.3, 153.0], [12.4, 153.0], [12.5, 153.0], [12.6, 153.0], [12.7, 154.0], [12.8, 154.0], [12.9, 154.0], [13.0, 154.0], [13.1, 154.0], [13.2, 154.0], [13.3, 154.0], [13.4, 154.0], [13.5, 154.0], [13.6, 155.0], [13.7, 155.0], [13.8, 155.0], [13.9, 155.0], [14.0, 155.0], [14.1, 155.0], [14.2, 155.0], [14.3, 155.0], [14.4, 155.0], [14.5, 155.0], [14.6, 155.0], [14.7, 156.0], [14.8, 156.0], [14.9, 156.0], [15.0, 156.0], [15.1, 156.0], [15.2, 156.0], [15.3, 156.0], [15.4, 156.0], [15.5, 156.0], [15.6, 156.0], [15.7, 157.0], [15.8, 157.0], [15.9, 157.0], [16.0, 157.0], [16.1, 157.0], [16.2, 157.0], [16.3, 157.0], [16.4, 157.0], [16.5, 157.0], [16.6, 157.0], [16.7, 157.0], [16.8, 158.0], [16.9, 158.0], [17.0, 158.0], [17.1, 158.0], [17.2, 158.0], [17.3, 158.0], [17.4, 158.0], [17.5, 158.0], [17.6, 158.0], [17.7, 158.0], [17.8, 159.0], [17.9, 159.0], [18.0, 159.0], [18.1, 159.0], [18.2, 159.0], [18.3, 159.0], [18.4, 159.0], [18.5, 159.0], [18.6, 159.0], [18.7, 159.0], [18.8, 159.0], [18.9, 159.0], [19.0, 160.0], [19.1, 160.0], [19.2, 160.0], [19.3, 160.0], [19.4, 160.0], [19.5, 160.0], [19.6, 160.0], [19.7, 160.0], [19.8, 160.0], [19.9, 160.0], [20.0, 160.0], [20.1, 160.0], [20.2, 161.0], [20.3, 161.0], [20.4, 161.0], [20.5, 161.0], [20.6, 161.0], [20.7, 161.0], [20.8, 161.0], [20.9, 161.0], [21.0, 161.0], [21.1, 161.0], [21.2, 161.0], [21.3, 161.0], [21.4, 161.0], [21.5, 161.0], [21.6, 162.0], [21.7, 162.0], [21.8, 162.0], [21.9, 162.0], [22.0, 162.0], [22.1, 162.0], [22.2, 162.0], [22.3, 162.0], [22.4, 162.0], [22.5, 162.0], [22.6, 162.0], [22.7, 162.0], [22.8, 162.0], [22.9, 163.0], [23.0, 163.0], [23.1, 163.0], [23.2, 163.0], [23.3, 163.0], [23.4, 163.0], [23.5, 163.0], [23.6, 163.0], [23.7, 163.0], [23.8, 163.0], [23.9, 163.0], [24.0, 163.0], [24.1, 164.0], [24.2, 164.0], [24.3, 164.0], [24.4, 164.0], [24.5, 164.0], [24.6, 164.0], [24.7, 164.0], [24.8, 164.0], [24.9, 164.0], [25.0, 164.0], [25.1, 164.0], [25.2, 164.0], [25.3, 164.0], [25.4, 164.0], [25.5, 165.0], [25.6, 165.0], [25.7, 165.0], [25.8, 165.0], [25.9, 165.0], [26.0, 165.0], [26.1, 165.0], [26.2, 165.0], [26.3, 165.0], [26.4, 165.0], [26.5, 165.0], [26.6, 165.0], [26.7, 165.0], [26.8, 165.0], [26.9, 166.0], [27.0, 166.0], [27.1, 166.0], [27.2, 166.0], [27.3, 166.0], [27.4, 166.0], [27.5, 166.0], [27.6, 166.0], [27.7, 166.0], [27.8, 166.0], [27.9, 166.0], [28.0, 166.0], [28.1, 166.0], [28.2, 166.0], [28.3, 167.0], [28.4, 167.0], [28.5, 167.0], [28.6, 167.0], [28.7, 167.0], [28.8, 167.0], [28.9, 167.0], [29.0, 167.0], [29.1, 167.0], [29.2, 167.0], [29.3, 167.0], [29.4, 167.0], [29.5, 167.0], [29.6, 167.0], [29.7, 168.0], [29.8, 168.0], [29.9, 168.0], [30.0, 168.0], [30.1, 168.0], [30.2, 168.0], [30.3, 168.0], [30.4, 168.0], [30.5, 168.0], [30.6, 168.0], [30.7, 168.0], [30.8, 168.0], [30.9, 168.0], [31.0, 168.0], [31.1, 168.0], [31.2, 168.0], [31.3, 169.0], [31.4, 169.0], [31.5, 169.0], [31.6, 169.0], [31.7, 169.0], [31.8, 169.0], [31.9, 169.0], [32.0, 169.0], [32.1, 169.0], [32.2, 169.0], [32.3, 169.0], [32.4, 169.0], [32.5, 169.0], [32.6, 169.0], [32.7, 169.0], [32.8, 170.0], [32.9, 170.0], [33.0, 170.0], [33.1, 170.0], [33.2, 170.0], [33.3, 170.0], [33.4, 170.0], [33.5, 170.0], [33.6, 170.0], [33.7, 170.0], [33.8, 170.0], [33.9, 170.0], [34.0, 170.0], [34.1, 170.0], [34.2, 171.0], [34.3, 171.0], [34.4, 171.0], [34.5, 171.0], [34.6, 171.0], [34.7, 171.0], [34.8, 171.0], [34.9, 171.0], [35.0, 171.0], [35.1, 171.0], [35.2, 171.0], [35.3, 171.0], [35.4, 171.0], [35.5, 171.0], [35.6, 171.0], [35.7, 171.0], [35.8, 172.0], [35.9, 172.0], [36.0, 172.0], [36.1, 172.0], [36.2, 172.0], [36.3, 172.0], [36.4, 172.0], [36.5, 172.0], [36.6, 172.0], [36.7, 172.0], [36.8, 172.0], [36.9, 172.0], [37.0, 172.0], [37.1, 172.0], [37.2, 172.0], [37.3, 172.0], [37.4, 173.0], [37.5, 173.0], [37.6, 173.0], [37.7, 173.0], [37.8, 173.0], [37.9, 173.0], [38.0, 173.0], [38.1, 173.0], [38.2, 173.0], [38.3, 173.0], [38.4, 173.0], [38.5, 173.0], [38.6, 173.0], [38.7, 173.0], [38.8, 173.0], [38.9, 173.0], [39.0, 173.0], [39.1, 174.0], [39.2, 174.0], [39.3, 174.0], [39.4, 174.0], [39.5, 174.0], [39.6, 174.0], [39.7, 174.0], [39.8, 174.0], [39.9, 174.0], [40.0, 174.0], [40.1, 174.0], [40.2, 174.0], [40.3, 174.0], [40.4, 174.0], [40.5, 174.0], [40.6, 175.0], [40.7, 175.0], [40.8, 175.0], [40.9, 175.0], [41.0, 175.0], [41.1, 175.0], [41.2, 175.0], [41.3, 175.0], [41.4, 175.0], [41.5, 175.0], [41.6, 175.0], [41.7, 175.0], [41.8, 175.0], [41.9, 175.0], [42.0, 175.0], [42.1, 175.0], [42.2, 176.0], [42.3, 176.0], [42.4, 176.0], [42.5, 176.0], [42.6, 176.0], [42.7, 176.0], [42.8, 176.0], [42.9, 176.0], [43.0, 176.0], [43.1, 176.0], [43.2, 176.0], [43.3, 176.0], [43.4, 176.0], [43.5, 176.0], [43.6, 176.0], [43.7, 177.0], [43.8, 177.0], [43.9, 177.0], [44.0, 177.0], [44.1, 177.0], [44.2, 177.0], [44.3, 177.0], [44.4, 177.0], [44.5, 177.0], [44.6, 177.0], [44.7, 177.0], [44.8, 177.0], [44.9, 177.0], [45.0, 177.0], [45.1, 177.0], [45.2, 177.0], [45.3, 178.0], [45.4, 178.0], [45.5, 178.0], [45.6, 178.0], [45.7, 178.0], [45.8, 178.0], [45.9, 178.0], [46.0, 178.0], [46.1, 178.0], [46.2, 178.0], [46.3, 178.0], [46.4, 178.0], [46.5, 178.0], [46.6, 178.0], [46.7, 178.0], [46.8, 179.0], [46.9, 179.0], [47.0, 179.0], [47.1, 179.0], [47.2, 179.0], [47.3, 179.0], [47.4, 179.0], [47.5, 179.0], [47.6, 179.0], [47.7, 179.0], [47.8, 179.0], [47.9, 179.0], [48.0, 179.0], [48.1, 179.0], [48.2, 179.0], [48.3, 180.0], [48.4, 180.0], [48.5, 180.0], [48.6, 180.0], [48.7, 180.0], [48.8, 180.0], [48.9, 180.0], [49.0, 180.0], [49.1, 180.0], [49.2, 180.0], [49.3, 180.0], [49.4, 180.0], [49.5, 180.0], [49.6, 180.0], [49.7, 180.0], [49.8, 181.0], [49.9, 181.0], [50.0, 181.0], [50.1, 181.0], [50.2, 181.0], [50.3, 181.0], [50.4, 181.0], [50.5, 181.0], [50.6, 181.0], [50.7, 181.0], [50.8, 181.0], [50.9, 181.0], [51.0, 181.0], [51.1, 181.0], [51.2, 182.0], [51.3, 182.0], [51.4, 182.0], [51.5, 182.0], [51.6, 182.0], [51.7, 182.0], [51.8, 182.0], [51.9, 182.0], [52.0, 182.0], [52.1, 182.0], [52.2, 182.0], [52.3, 182.0], [52.4, 182.0], [52.5, 182.0], [52.6, 182.0], [52.7, 183.0], [52.8, 183.0], [52.9, 183.0], [53.0, 183.0], [53.1, 183.0], [53.2, 183.0], [53.3, 183.0], [53.4, 183.0], [53.5, 183.0], [53.6, 183.0], [53.7, 183.0], [53.8, 183.0], [53.9, 184.0], [54.0, 184.0], [54.1, 184.0], [54.2, 184.0], [54.3, 184.0], [54.4, 184.0], [54.5, 184.0], [54.6, 184.0], [54.7, 184.0], [54.8, 184.0], [54.9, 184.0], [55.0, 184.0], [55.1, 184.0], [55.2, 184.0], [55.3, 185.0], [55.4, 185.0], [55.5, 185.0], [55.6, 185.0], [55.7, 185.0], [55.8, 185.0], [55.9, 185.0], [56.0, 185.0], [56.1, 185.0], [56.2, 185.0], [56.3, 185.0], [56.4, 185.0], [56.5, 185.0], [56.6, 185.0], [56.7, 186.0], [56.8, 186.0], [56.9, 186.0], [57.0, 186.0], [57.1, 186.0], [57.2, 186.0], [57.3, 186.0], [57.4, 186.0], [57.5, 186.0], [57.6, 186.0], [57.7, 186.0], [57.8, 186.0], [57.9, 187.0], [58.0, 187.0], [58.1, 187.0], [58.2, 187.0], [58.3, 187.0], [58.4, 187.0], [58.5, 187.0], [58.6, 187.0], [58.7, 187.0], [58.8, 187.0], [58.9, 187.0], [59.0, 187.0], [59.1, 188.0], [59.2, 188.0], [59.3, 188.0], [59.4, 188.0], [59.5, 188.0], [59.6, 188.0], [59.7, 188.0], [59.8, 188.0], [59.9, 188.0], [60.0, 188.0], [60.1, 188.0], [60.2, 188.0], [60.3, 189.0], [60.4, 189.0], [60.5, 189.0], [60.6, 189.0], [60.7, 189.0], [60.8, 189.0], [60.9, 189.0], [61.0, 189.0], [61.1, 189.0], [61.2, 189.0], [61.3, 189.0], [61.4, 190.0], [61.5, 190.0], [61.6, 190.0], [61.7, 190.0], [61.8, 190.0], [61.9, 190.0], [62.0, 190.0], [62.1, 190.0], [62.2, 190.0], [62.3, 190.0], [62.4, 190.0], [62.5, 190.0], [62.6, 191.0], [62.7, 191.0], [62.8, 191.0], [62.9, 191.0], [63.0, 191.0], [63.1, 191.0], [63.2, 191.0], [63.3, 191.0], [63.4, 191.0], [63.5, 191.0], [63.6, 191.0], [63.7, 191.0], [63.8, 192.0], [63.9, 192.0], [64.0, 192.0], [64.1, 192.0], [64.2, 192.0], [64.3, 192.0], [64.4, 192.0], [64.5, 192.0], [64.6, 192.0], [64.7, 192.0], [64.8, 193.0], [64.9, 193.0], [65.0, 193.0], [65.1, 193.0], [65.2, 193.0], [65.3, 193.0], [65.4, 193.0], [65.5, 193.0], [65.6, 193.0], [65.7, 193.0], [65.8, 194.0], [65.9, 194.0], [66.0, 194.0], [66.1, 194.0], [66.2, 194.0], [66.3, 194.0], [66.4, 194.0], [66.5, 194.0], [66.6, 194.0], [66.7, 194.0], [66.8, 194.0], [66.9, 195.0], [67.0, 195.0], [67.1, 195.0], [67.2, 195.0], [67.3, 195.0], [67.4, 195.0], [67.5, 195.0], [67.6, 195.0], [67.7, 195.0], [67.8, 195.0], [67.9, 196.0], [68.0, 196.0], [68.1, 196.0], [68.2, 196.0], [68.3, 196.0], [68.4, 196.0], [68.5, 196.0], [68.6, 196.0], [68.7, 196.0], [68.8, 197.0], [68.9, 197.0], [69.0, 197.0], [69.1, 197.0], [69.2, 197.0], [69.3, 197.0], [69.4, 197.0], [69.5, 197.0], [69.6, 197.0], [69.7, 198.0], [69.8, 198.0], [69.9, 198.0], [70.0, 198.0], [70.1, 198.0], [70.2, 198.0], [70.3, 198.0], [70.4, 198.0], [70.5, 198.0], [70.6, 198.0], [70.7, 199.0], [70.8, 199.0], [70.9, 199.0], [71.0, 199.0], [71.1, 199.0], [71.2, 199.0], [71.3, 199.0], [71.4, 199.0], [71.5, 199.0], [71.6, 200.0], [71.7, 200.0], [71.8, 200.0], [71.9, 200.0], [72.0, 200.0], [72.1, 200.0], [72.2, 200.0], [72.3, 200.0], [72.4, 200.0], [72.5, 201.0], [72.6, 201.0], [72.7, 201.0], [72.8, 201.0], [72.9, 201.0], [73.0, 201.0], [73.1, 201.0], [73.2, 201.0], [73.3, 202.0], [73.4, 202.0], [73.5, 202.0], [73.6, 202.0], [73.7, 202.0], [73.8, 202.0], [73.9, 202.0], [74.0, 203.0], [74.1, 203.0], [74.2, 203.0], [74.3, 203.0], [74.4, 203.0], [74.5, 203.0], [74.6, 203.0], [74.7, 203.0], [74.8, 204.0], [74.9, 204.0], [75.0, 204.0], [75.1, 204.0], [75.2, 204.0], [75.3, 204.0], [75.4, 204.0], [75.5, 205.0], [75.6, 205.0], [75.7, 205.0], [75.8, 205.0], [75.9, 205.0], [76.0, 205.0], [76.1, 205.0], [76.2, 206.0], [76.3, 206.0], [76.4, 206.0], [76.5, 206.0], [76.6, 206.0], [76.7, 206.0], [76.8, 206.0], [76.9, 207.0], [77.0, 207.0], [77.1, 207.0], [77.2, 207.0], [77.3, 207.0], [77.4, 207.0], [77.5, 207.0], [77.6, 208.0], [77.7, 208.0], [77.8, 208.0], [77.9, 208.0], [78.0, 208.0], [78.1, 208.0], [78.2, 208.0], [78.3, 209.0], [78.4, 209.0], [78.5, 209.0], [78.6, 209.0], [78.7, 209.0], [78.8, 209.0], [78.9, 209.0], [79.0, 210.0], [79.1, 210.0], [79.2, 210.0], [79.3, 210.0], [79.4, 210.0], [79.5, 210.0], [79.6, 211.0], [79.7, 211.0], [79.8, 211.0], [79.9, 211.0], [80.0, 211.0], [80.1, 211.0], [80.2, 212.0], [80.3, 212.0], [80.4, 212.0], [80.5, 212.0], [80.6, 212.0], [80.7, 212.0], [80.8, 213.0], [80.9, 213.0], [81.0, 213.0], [81.1, 213.0], [81.2, 213.0], [81.3, 213.0], [81.4, 214.0], [81.5, 214.0], [81.6, 214.0], [81.7, 214.0], [81.8, 214.0], [81.9, 215.0], [82.0, 215.0], [82.1, 215.0], [82.2, 215.0], [82.3, 215.0], [82.4, 215.0], [82.5, 215.0], [82.6, 216.0], [82.7, 216.0], [82.8, 216.0], [82.9, 216.0], [83.0, 216.0], [83.1, 217.0], [83.2, 217.0], [83.3, 217.0], [83.4, 217.0], [83.5, 217.0], [83.6, 218.0], [83.7, 218.0], [83.8, 218.0], [83.9, 218.0], [84.0, 219.0], [84.1, 219.0], [84.2, 219.0], [84.3, 219.0], [84.4, 219.0], [84.5, 219.0], [84.6, 220.0], [84.7, 220.0], [84.8, 220.0], [84.9, 220.0], [85.0, 220.0], [85.1, 220.0], [85.2, 221.0], [85.3, 221.0], [85.4, 221.0], [85.5, 221.0], [85.6, 221.0], [85.7, 221.0], [85.8, 221.0], [85.9, 222.0], [86.0, 222.0], [86.1, 222.0], [86.2, 222.0], [86.3, 222.0], [86.4, 222.0], [86.5, 223.0], [86.6, 223.0], [86.7, 223.0], [86.8, 223.0], [86.9, 223.0], [87.0, 224.0], [87.1, 224.0], [87.2, 224.0], [87.3, 224.0], [87.4, 224.0], [87.5, 224.0], [87.6, 225.0], [87.7, 225.0], [87.8, 225.0], [87.9, 225.0], [88.0, 226.0], [88.1, 226.0], [88.2, 226.0], [88.3, 226.0], [88.4, 226.0], [88.5, 227.0], [88.6, 227.0], [88.7, 227.0], [88.8, 227.0], [88.9, 227.0], [89.0, 227.0], [89.1, 228.0], [89.2, 228.0], [89.3, 228.0], [89.4, 229.0], [89.5, 229.0], [89.6, 229.0], [89.7, 229.0], [89.8, 230.0], [89.9, 230.0], [90.0, 230.0], [90.1, 230.0], [90.2, 231.0], [90.3, 231.0], [90.4, 231.0], [90.5, 231.0], [90.6, 232.0], [90.7, 232.0], [90.8, 232.0], [90.9, 232.0], [91.0, 233.0], [91.1, 233.0], [91.2, 233.0], [91.3, 234.0], [91.4, 234.0], [91.5, 234.0], [91.6, 234.0], [91.7, 235.0], [91.8, 235.0], [91.9, 235.0], [92.0, 236.0], [92.1, 236.0], [92.2, 236.0], [92.3, 236.0], [92.4, 236.0], [92.5, 237.0], [92.6, 237.0], [92.7, 237.0], [92.8, 238.0], [92.9, 238.0], [93.0, 238.0], [93.1, 239.0], [93.2, 239.0], [93.3, 239.0], [93.4, 239.0], [93.5, 240.0], [93.6, 240.0], [93.7, 240.0], [93.8, 241.0], [93.9, 241.0], [94.0, 241.0], [94.1, 242.0], [94.2, 242.0], [94.3, 243.0], [94.4, 243.0], [94.5, 243.0], [94.6, 243.0], [94.7, 244.0], [94.8, 244.0], [94.9, 244.0], [95.0, 245.0], [95.1, 245.0], [95.2, 246.0], [95.3, 246.0], [95.4, 246.0], [95.5, 247.0], [95.6, 247.0], [95.7, 248.0], [95.8, 248.0], [95.9, 249.0], [96.0, 249.0], [96.1, 250.0], [96.2, 250.0], [96.3, 251.0], [96.4, 251.0], [96.5, 252.0], [96.6, 252.0], [96.7, 253.0], [96.8, 253.0], [96.9, 254.0], [97.0, 254.0], [97.1, 255.0], [97.2, 255.0], [97.3, 256.0], [97.4, 257.0], [97.5, 257.0], [97.6, 258.0], [97.7, 258.0], [97.8, 259.0], [97.9, 260.0], [98.0, 260.0], [98.1, 261.0], [98.2, 262.0], [98.3, 264.0], [98.4, 265.0], [98.5, 266.0], [98.6, 267.0], [98.7, 268.0], [98.8, 270.0], [98.9, 272.0], [99.0, 273.0], [99.1, 275.0], [99.2, 276.0], [99.3, 279.0], [99.4, 281.0], [99.5, 283.0], [99.6, 288.0], [99.7, 291.0], [99.8, 295.0], [99.9, 304.0]], "isOverall": false, "label": "extract", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 23.0, "minX": 100.0, "maxY": 11449.0, "series": [{"data": [[300.0, 23.0], [200.0, 4528.0], [100.0, 11449.0]], "isOverall": false, "label": "extract", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 300.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 16000.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 16000.0, "series": [{"data": [[0.0, 16000.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 4.9E-324, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 2.5331950207468883, "minX": 1.6660203E12, "maxY": 8.0, "series": [{"data": [[1.66602048E12, 8.0], [1.66602066E12, 6.435799522673033], [1.66602036E12, 8.0], [1.66602054E12, 8.0], [1.66602072E12, 2.5331950207468883], [1.66602042E12, 8.0], [1.6660206E12, 7.7511664074650035], [1.6660203E12, 7.9520239880059975]], "isOverall": false, "label": "8", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66602072E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 167.1030927835052, "minX": 1.0, "maxY": 188.29455057939256, "series": [{"data": [[2.0, 184.875], [4.0, 167.13414634146346], [8.0, 188.29455057939256], [1.0, 167.1030927835052], [5.0, 173.95364238410593], [3.0, 174.386462882096], [6.0, 171.08974358974356], [7.0, 178.28288868445296]], "isOverall": false, "label": "extract", "isController": false}, {"data": [[7.588500000000027, 185.90537499999917]], "isOverall": false, "label": "extract-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 8.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 0.0, "minX": 1.6660203E12, "maxY": 5486167.45, "series": [{"data": [[1.66602048E12, 5359656.766666667], [1.66602066E12, 4388346.033333333], [1.66602036E12, 5409677.033333333], [1.66602054E12, 5421950.933333334], [1.66602072E12, 1023771.95], [1.66602042E12, 5486167.45], [1.6660206E12, 5338116.75], [1.6660203E12, 1424129.75]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.66602048E12, 0.0], [1.66602066E12, 0.0], [1.66602036E12, 0.0], [1.66602054E12, 0.0], [1.66602072E12, 0.0], [1.66602042E12, 0.0], [1.6660206E12, 0.0], [1.6660203E12, 0.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66602072E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 173.26556016597522, "minX": 1.6660203E12, "maxY": 211.0644677661168, "series": [{"data": [[1.66602048E12, 191.85708566853467], [1.66602066E12, 176.03293556085893], [1.66602036E12, 189.25977102250283], [1.66602054E12, 185.61339009287917], [1.66602072E12, 173.26556016597522], [1.66602042E12, 186.67029972752056], [1.6660206E12, 180.2363919129086], [1.6660203E12, 211.0644677661168]], "isOverall": false, "label": "extract", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66602072E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 171.15560165975091, "minX": 1.6660203E12, "maxY": 208.87706146926533, "series": [{"data": [[1.66602048E12, 189.86709367493964], [1.66602066E12, 174.04439140811425], [1.66602036E12, 187.21121200157893], [1.66602054E12, 183.68150154798747], [1.66602072E12, 171.15560165975091], [1.66602042E12, 184.71701050992615], [1.6660206E12, 178.33087091757437], [1.6660203E12, 208.87706146926533]], "isOverall": false, "label": "extract", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66602072E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.6660203E12, "maxY": 4.9E-324, "series": [{"data": [[1.66602048E12, 0.0], [1.66602066E12, 0.0], [1.66602036E12, 0.0], [1.66602054E12, 0.0], [1.66602072E12, 0.0], [1.66602042E12, 0.0], [1.6660206E12, 0.0], [1.6660203E12, 0.0]], "isOverall": false, "label": "extract", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66602072E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 103.0, "minX": 1.6660203E12, "maxY": 351.0, "series": [{"data": [[1.66602048E12, 341.0], [1.66602066E12, 256.0], [1.66602036E12, 331.0], [1.66602054E12, 339.0], [1.66602072E12, 269.0], [1.66602042E12, 296.0], [1.6660206E12, 279.0], [1.6660203E12, 351.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.66602048E12, 117.0], [1.66602066E12, 112.0], [1.66602036E12, 112.0], [1.66602054E12, 112.0], [1.66602072E12, 119.0], [1.66602042E12, 103.0], [1.6660206E12, 113.0], [1.6660203E12, 123.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.66602048E12, 237.0], [1.66602066E12, 205.4000000000001], [1.66602036E12, 236.0], [1.66602054E12, 232.0], [1.66602072E12, 207.0], [1.66602042E12, 232.0], [1.6660206E12, 215.0], [1.6660203E12, 262.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.66602048E12, 274.00999999999976], [1.66602066E12, 240.03999999999996], [1.66602036E12, 280.0], [1.66602054E12, 273.0], [1.66602072E12, 229.85000000000008], [1.66602042E12, 272.0], [1.6660206E12, 254.0], [1.6660203E12, 312.2800000000002]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.66602048E12, 252.04999999999973], [1.66602066E12, 221.0], [1.66602036E12, 251.0], [1.66602054E12, 246.75], [1.66602072E12, 215.0], [1.66602042E12, 245.0], [1.6660206E12, 229.3499999999999], [1.6660203E12, 281.6]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66602072E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 152.0, "minX": 3.0, "maxY": 235.0, "series": [{"data": [[33.0, 235.0], [35.0, 199.0], [34.0, 177.5], [37.0, 185.0], [36.0, 178.0], [39.0, 188.0], [38.0, 189.0], [40.0, 182.0], [41.0, 188.0], [42.0, 183.0], [43.0, 181.0], [45.0, 177.0], [44.0, 178.0], [46.0, 174.0], [47.0, 173.0], [49.0, 165.0], [48.0, 165.0], [3.0, 152.0], [5.0, 165.0], [6.0, 167.0], [7.0, 162.0], [8.0, 179.5], [11.0, 178.5], [14.0, 171.5], [16.0, 172.5], [17.0, 169.5], [18.0, 171.5], [19.0, 187.5], [24.0, 163.0], [25.0, 163.0], [26.0, 172.0], [28.0, 171.5], [29.0, 166.0], [31.0, 172.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 49.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 150.0, "minX": 3.0, "maxY": 233.0, "series": [{"data": [[33.0, 233.0], [35.0, 197.0], [34.0, 175.0], [37.0, 183.0], [36.0, 176.0], [39.0, 186.0], [38.0, 187.0], [40.0, 180.0], [41.0, 186.0], [42.0, 181.0], [43.0, 179.0], [45.0, 175.0], [44.0, 176.0], [46.0, 172.0], [47.0, 171.0], [49.0, 163.0], [48.0, 162.5], [3.0, 150.0], [5.0, 162.0], [6.0, 165.0], [7.0, 160.0], [8.0, 178.0], [11.0, 177.0], [14.0, 168.5], [16.0, 170.0], [17.0, 167.0], [18.0, 170.0], [19.0, 185.5], [24.0, 161.0], [25.0, 160.0], [26.0, 170.0], [28.0, 168.5], [29.0, 163.0], [31.0, 168.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 49.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 7.983333333333333, "minX": 1.6660203E12, "maxY": 43.06666666666667, "series": [{"data": [[1.66602048E12, 41.63333333333333], [1.66602066E12, 34.85], [1.66602036E12, 42.21666666666667], [1.66602054E12, 43.06666666666667], [1.66602072E12, 7.983333333333333], [1.66602042E12, 42.81666666666667], [1.6660206E12, 42.85], [1.6660203E12, 11.25]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66602072E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 8.033333333333333, "minX": 1.6660203E12, "maxY": 43.06666666666667, "series": [{"data": [[1.66602048E12, 41.63333333333333], [1.66602066E12, 34.916666666666664], [1.66602036E12, 42.21666666666667], [1.66602054E12, 43.06666666666667], [1.66602072E12, 8.033333333333333], [1.66602042E12, 42.81666666666667], [1.6660206E12, 42.86666666666667], [1.6660203E12, 11.116666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66602072E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 8.033333333333333, "minX": 1.6660203E12, "maxY": 43.06666666666667, "series": [{"data": [[1.66602048E12, 41.63333333333333], [1.66602066E12, 34.916666666666664], [1.66602036E12, 42.21666666666667], [1.66602054E12, 43.06666666666667], [1.66602072E12, 8.033333333333333], [1.66602042E12, 42.81666666666667], [1.6660206E12, 42.86666666666667], [1.6660203E12, 11.116666666666667]], "isOverall": false, "label": "extract-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66602072E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 8.033333333333333, "minX": 1.6660203E12, "maxY": 43.06666666666667, "series": [{"data": [[1.66602048E12, 41.63333333333333], [1.66602066E12, 34.916666666666664], [1.66602036E12, 42.21666666666667], [1.66602054E12, 43.06666666666667], [1.66602072E12, 8.033333333333333], [1.66602042E12, 42.81666666666667], [1.6660206E12, 42.86666666666667], [1.6660203E12, 11.116666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66602072E12, "title": "Total Transactions Per Second"}},
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

