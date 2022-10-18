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
        data: {"result": {"minY": 157.0, "minX": 0.0, "maxY": 1294.0, "series": [{"data": [[0.0, 157.0], [0.1, 205.0], [0.2, 228.0], [0.3, 253.0], [0.4, 276.0], [0.5, 295.0], [0.6, 317.0], [0.7, 343.0], [0.8, 374.0], [0.9, 399.0], [1.0, 417.0], [1.1, 437.0], [1.2, 457.0], [1.3, 479.0], [1.4, 502.0], [1.5, 521.0], [1.6, 541.0], [1.7, 563.0], [1.8, 585.0], [1.9, 605.0], [2.0, 625.0], [2.1, 643.0], [2.2, 659.0], [2.3, 678.0], [2.4, 697.0], [2.5, 710.0], [2.6, 720.0], [2.7, 726.0], [2.8, 730.0], [2.9, 734.0], [3.0, 738.0], [3.1, 741.0], [3.2, 745.0], [3.3, 747.0], [3.4, 751.0], [3.5, 753.0], [3.6, 756.0], [3.7, 759.0], [3.8, 763.0], [3.9, 766.0], [4.0, 770.0], [4.1, 774.0], [4.2, 780.0], [4.3, 786.0], [4.4, 795.0], [4.5, 806.0], [4.6, 815.0], [4.7, 824.0], [4.8, 831.0], [4.9, 836.0], [5.0, 839.0], [5.1, 842.0], [5.2, 844.0], [5.3, 846.0], [5.4, 848.0], [5.5, 850.0], [5.6, 851.0], [5.7, 853.0], [5.8, 854.0], [5.9, 855.0], [6.0, 856.0], [6.1, 857.0], [6.2, 858.0], [6.3, 859.0], [6.4, 860.0], [6.5, 861.0], [6.6, 862.0], [6.7, 863.0], [6.8, 863.0], [6.9, 864.0], [7.0, 865.0], [7.1, 866.0], [7.2, 866.0], [7.3, 867.0], [7.4, 868.0], [7.5, 869.0], [7.6, 869.0], [7.7, 870.0], [7.8, 871.0], [7.9, 871.0], [8.0, 872.0], [8.1, 872.0], [8.2, 873.0], [8.3, 873.0], [8.4, 874.0], [8.5, 874.0], [8.6, 875.0], [8.7, 876.0], [8.8, 876.0], [8.9, 877.0], [9.0, 877.0], [9.1, 878.0], [9.2, 878.0], [9.3, 879.0], [9.4, 879.0], [9.5, 880.0], [9.6, 880.0], [9.7, 880.0], [9.8, 881.0], [9.9, 881.0], [10.0, 882.0], [10.1, 882.0], [10.2, 883.0], [10.3, 883.0], [10.4, 883.0], [10.5, 884.0], [10.6, 884.0], [10.7, 885.0], [10.8, 885.0], [10.9, 885.0], [11.0, 886.0], [11.1, 886.0], [11.2, 887.0], [11.3, 887.0], [11.4, 887.0], [11.5, 888.0], [11.6, 888.0], [11.7, 888.0], [11.8, 889.0], [11.9, 889.0], [12.0, 889.0], [12.1, 890.0], [12.2, 890.0], [12.3, 890.0], [12.4, 891.0], [12.5, 891.0], [12.6, 892.0], [12.7, 892.0], [12.8, 892.0], [12.9, 893.0], [13.0, 893.0], [13.1, 893.0], [13.2, 894.0], [13.3, 894.0], [13.4, 894.0], [13.5, 894.0], [13.6, 895.0], [13.7, 895.0], [13.8, 895.0], [13.9, 896.0], [14.0, 896.0], [14.1, 896.0], [14.2, 897.0], [14.3, 897.0], [14.4, 897.0], [14.5, 897.0], [14.6, 898.0], [14.7, 898.0], [14.8, 898.0], [14.9, 899.0], [15.0, 899.0], [15.1, 899.0], [15.2, 900.0], [15.3, 900.0], [15.4, 900.0], [15.5, 900.0], [15.6, 901.0], [15.7, 901.0], [15.8, 901.0], [15.9, 901.0], [16.0, 902.0], [16.1, 902.0], [16.2, 902.0], [16.3, 902.0], [16.4, 903.0], [16.5, 903.0], [16.6, 903.0], [16.7, 903.0], [16.8, 904.0], [16.9, 904.0], [17.0, 904.0], [17.1, 904.0], [17.2, 905.0], [17.3, 905.0], [17.4, 905.0], [17.5, 905.0], [17.6, 906.0], [17.7, 906.0], [17.8, 906.0], [17.9, 906.0], [18.0, 907.0], [18.1, 907.0], [18.2, 907.0], [18.3, 907.0], [18.4, 908.0], [18.5, 908.0], [18.6, 908.0], [18.7, 908.0], [18.8, 908.0], [18.9, 909.0], [19.0, 909.0], [19.1, 909.0], [19.2, 909.0], [19.3, 910.0], [19.4, 910.0], [19.5, 910.0], [19.6, 910.0], [19.7, 910.0], [19.8, 911.0], [19.9, 911.0], [20.0, 911.0], [20.1, 911.0], [20.2, 911.0], [20.3, 912.0], [20.4, 912.0], [20.5, 912.0], [20.6, 912.0], [20.7, 913.0], [20.8, 913.0], [20.9, 913.0], [21.0, 913.0], [21.1, 913.0], [21.2, 914.0], [21.3, 914.0], [21.4, 914.0], [21.5, 914.0], [21.6, 914.0], [21.7, 915.0], [21.8, 915.0], [21.9, 915.0], [22.0, 915.0], [22.1, 915.0], [22.2, 916.0], [22.3, 916.0], [22.4, 916.0], [22.5, 916.0], [22.6, 916.0], [22.7, 917.0], [22.8, 917.0], [22.9, 917.0], [23.0, 917.0], [23.1, 917.0], [23.2, 918.0], [23.3, 918.0], [23.4, 918.0], [23.5, 918.0], [23.6, 918.0], [23.7, 918.0], [23.8, 919.0], [23.9, 919.0], [24.0, 919.0], [24.1, 919.0], [24.2, 919.0], [24.3, 920.0], [24.4, 920.0], [24.5, 920.0], [24.6, 920.0], [24.7, 920.0], [24.8, 920.0], [24.9, 921.0], [25.0, 921.0], [25.1, 921.0], [25.2, 921.0], [25.3, 921.0], [25.4, 922.0], [25.5, 922.0], [25.6, 922.0], [25.7, 922.0], [25.8, 922.0], [25.9, 922.0], [26.0, 923.0], [26.1, 923.0], [26.2, 923.0], [26.3, 923.0], [26.4, 923.0], [26.5, 924.0], [26.6, 924.0], [26.7, 924.0], [26.8, 924.0], [26.9, 924.0], [27.0, 925.0], [27.1, 925.0], [27.2, 925.0], [27.3, 925.0], [27.4, 925.0], [27.5, 925.0], [27.6, 926.0], [27.7, 926.0], [27.8, 926.0], [27.9, 926.0], [28.0, 926.0], [28.1, 926.0], [28.2, 927.0], [28.3, 927.0], [28.4, 927.0], [28.5, 927.0], [28.6, 927.0], [28.7, 927.0], [28.8, 928.0], [28.9, 928.0], [29.0, 928.0], [29.1, 928.0], [29.2, 928.0], [29.3, 928.0], [29.4, 929.0], [29.5, 929.0], [29.6, 929.0], [29.7, 929.0], [29.8, 929.0], [29.9, 929.0], [30.0, 930.0], [30.1, 930.0], [30.2, 930.0], [30.3, 930.0], [30.4, 930.0], [30.5, 930.0], [30.6, 931.0], [30.7, 931.0], [30.8, 931.0], [30.9, 931.0], [31.0, 931.0], [31.1, 931.0], [31.2, 932.0], [31.3, 932.0], [31.4, 932.0], [31.5, 932.0], [31.6, 932.0], [31.7, 932.0], [31.8, 933.0], [31.9, 933.0], [32.0, 933.0], [32.1, 933.0], [32.2, 933.0], [32.3, 933.0], [32.4, 934.0], [32.5, 934.0], [32.6, 934.0], [32.7, 934.0], [32.8, 934.0], [32.9, 934.0], [33.0, 934.0], [33.1, 935.0], [33.2, 935.0], [33.3, 935.0], [33.4, 935.0], [33.5, 935.0], [33.6, 935.0], [33.7, 936.0], [33.8, 936.0], [33.9, 936.0], [34.0, 936.0], [34.1, 936.0], [34.2, 936.0], [34.3, 937.0], [34.4, 937.0], [34.5, 937.0], [34.6, 937.0], [34.7, 937.0], [34.8, 937.0], [34.9, 937.0], [35.0, 938.0], [35.1, 938.0], [35.2, 938.0], [35.3, 938.0], [35.4, 938.0], [35.5, 938.0], [35.6, 939.0], [35.7, 939.0], [35.8, 939.0], [35.9, 939.0], [36.0, 939.0], [36.1, 939.0], [36.2, 940.0], [36.3, 940.0], [36.4, 940.0], [36.5, 940.0], [36.6, 940.0], [36.7, 940.0], [36.8, 941.0], [36.9, 941.0], [37.0, 941.0], [37.1, 941.0], [37.2, 941.0], [37.3, 941.0], [37.4, 941.0], [37.5, 942.0], [37.6, 942.0], [37.7, 942.0], [37.8, 942.0], [37.9, 942.0], [38.0, 942.0], [38.1, 942.0], [38.2, 943.0], [38.3, 943.0], [38.4, 943.0], [38.5, 943.0], [38.6, 943.0], [38.7, 943.0], [38.8, 944.0], [38.9, 944.0], [39.0, 944.0], [39.1, 944.0], [39.2, 944.0], [39.3, 944.0], [39.4, 944.0], [39.5, 945.0], [39.6, 945.0], [39.7, 945.0], [39.8, 945.0], [39.9, 945.0], [40.0, 945.0], [40.1, 945.0], [40.2, 946.0], [40.3, 946.0], [40.4, 946.0], [40.5, 946.0], [40.6, 946.0], [40.7, 946.0], [40.8, 946.0], [40.9, 947.0], [41.0, 947.0], [41.1, 947.0], [41.2, 947.0], [41.3, 947.0], [41.4, 947.0], [41.5, 948.0], [41.6, 948.0], [41.7, 948.0], [41.8, 948.0], [41.9, 948.0], [42.0, 948.0], [42.1, 948.0], [42.2, 949.0], [42.3, 949.0], [42.4, 949.0], [42.5, 949.0], [42.6, 949.0], [42.7, 949.0], [42.8, 949.0], [42.9, 950.0], [43.0, 950.0], [43.1, 950.0], [43.2, 950.0], [43.3, 950.0], [43.4, 950.0], [43.5, 950.0], [43.6, 951.0], [43.7, 951.0], [43.8, 951.0], [43.9, 951.0], [44.0, 951.0], [44.1, 951.0], [44.2, 952.0], [44.3, 952.0], [44.4, 952.0], [44.5, 952.0], [44.6, 952.0], [44.7, 952.0], [44.8, 952.0], [44.9, 953.0], [45.0, 953.0], [45.1, 953.0], [45.2, 953.0], [45.3, 953.0], [45.4, 953.0], [45.5, 953.0], [45.6, 954.0], [45.7, 954.0], [45.8, 954.0], [45.9, 954.0], [46.0, 954.0], [46.1, 954.0], [46.2, 955.0], [46.3, 955.0], [46.4, 955.0], [46.5, 955.0], [46.6, 955.0], [46.7, 955.0], [46.8, 955.0], [46.9, 956.0], [47.0, 956.0], [47.1, 956.0], [47.2, 956.0], [47.3, 956.0], [47.4, 956.0], [47.5, 956.0], [47.6, 957.0], [47.7, 957.0], [47.8, 957.0], [47.9, 957.0], [48.0, 957.0], [48.1, 957.0], [48.2, 958.0], [48.3, 958.0], [48.4, 958.0], [48.5, 958.0], [48.6, 958.0], [48.7, 958.0], [48.8, 958.0], [48.9, 959.0], [49.0, 959.0], [49.1, 959.0], [49.2, 959.0], [49.3, 959.0], [49.4, 959.0], [49.5, 960.0], [49.6, 960.0], [49.7, 960.0], [49.8, 960.0], [49.9, 960.0], [50.0, 960.0], [50.1, 960.0], [50.2, 961.0], [50.3, 961.0], [50.4, 961.0], [50.5, 961.0], [50.6, 961.0], [50.7, 961.0], [50.8, 962.0], [50.9, 962.0], [51.0, 962.0], [51.1, 962.0], [51.2, 962.0], [51.3, 962.0], [51.4, 962.0], [51.5, 963.0], [51.6, 963.0], [51.7, 963.0], [51.8, 963.0], [51.9, 963.0], [52.0, 963.0], [52.1, 963.0], [52.2, 964.0], [52.3, 964.0], [52.4, 964.0], [52.5, 964.0], [52.6, 964.0], [52.7, 964.0], [52.8, 965.0], [52.9, 965.0], [53.0, 965.0], [53.1, 965.0], [53.2, 965.0], [53.3, 965.0], [53.4, 965.0], [53.5, 966.0], [53.6, 966.0], [53.7, 966.0], [53.8, 966.0], [53.9, 966.0], [54.0, 966.0], [54.1, 967.0], [54.2, 967.0], [54.3, 967.0], [54.4, 967.0], [54.5, 967.0], [54.6, 967.0], [54.7, 967.0], [54.8, 967.0], [54.9, 968.0], [55.0, 968.0], [55.1, 968.0], [55.2, 968.0], [55.3, 968.0], [55.4, 968.0], [55.5, 969.0], [55.6, 969.0], [55.7, 969.0], [55.8, 969.0], [55.9, 969.0], [56.0, 969.0], [56.1, 970.0], [56.2, 970.0], [56.3, 970.0], [56.4, 970.0], [56.5, 970.0], [56.6, 970.0], [56.7, 971.0], [56.8, 971.0], [56.9, 971.0], [57.0, 971.0], [57.1, 971.0], [57.2, 971.0], [57.3, 971.0], [57.4, 972.0], [57.5, 972.0], [57.6, 972.0], [57.7, 972.0], [57.8, 972.0], [57.9, 972.0], [58.0, 973.0], [58.1, 973.0], [58.2, 973.0], [58.3, 973.0], [58.4, 973.0], [58.5, 973.0], [58.6, 974.0], [58.7, 974.0], [58.8, 974.0], [58.9, 974.0], [59.0, 974.0], [59.1, 974.0], [59.2, 975.0], [59.3, 975.0], [59.4, 975.0], [59.5, 975.0], [59.6, 975.0], [59.7, 975.0], [59.8, 976.0], [59.9, 976.0], [60.0, 976.0], [60.1, 976.0], [60.2, 976.0], [60.3, 976.0], [60.4, 977.0], [60.5, 977.0], [60.6, 977.0], [60.7, 977.0], [60.8, 977.0], [60.9, 977.0], [61.0, 978.0], [61.1, 978.0], [61.2, 978.0], [61.3, 978.0], [61.4, 978.0], [61.5, 978.0], [61.6, 979.0], [61.7, 979.0], [61.8, 979.0], [61.9, 979.0], [62.0, 979.0], [62.1, 980.0], [62.2, 980.0], [62.3, 980.0], [62.4, 980.0], [62.5, 980.0], [62.6, 980.0], [62.7, 981.0], [62.8, 981.0], [62.9, 981.0], [63.0, 981.0], [63.1, 981.0], [63.2, 981.0], [63.3, 982.0], [63.4, 982.0], [63.5, 982.0], [63.6, 982.0], [63.7, 982.0], [63.8, 983.0], [63.9, 983.0], [64.0, 983.0], [64.1, 983.0], [64.2, 983.0], [64.3, 983.0], [64.4, 984.0], [64.5, 984.0], [64.6, 984.0], [64.7, 984.0], [64.8, 984.0], [64.9, 984.0], [65.0, 985.0], [65.1, 985.0], [65.2, 985.0], [65.3, 985.0], [65.4, 985.0], [65.5, 986.0], [65.6, 986.0], [65.7, 986.0], [65.8, 986.0], [65.9, 986.0], [66.0, 986.0], [66.1, 987.0], [66.2, 987.0], [66.3, 987.0], [66.4, 987.0], [66.5, 987.0], [66.6, 988.0], [66.7, 988.0], [66.8, 988.0], [66.9, 988.0], [67.0, 988.0], [67.1, 989.0], [67.2, 989.0], [67.3, 989.0], [67.4, 989.0], [67.5, 989.0], [67.6, 989.0], [67.7, 990.0], [67.8, 990.0], [67.9, 990.0], [68.0, 990.0], [68.1, 990.0], [68.2, 991.0], [68.3, 991.0], [68.4, 991.0], [68.5, 991.0], [68.6, 991.0], [68.7, 992.0], [68.8, 992.0], [68.9, 992.0], [69.0, 992.0], [69.1, 992.0], [69.2, 992.0], [69.3, 993.0], [69.4, 993.0], [69.5, 993.0], [69.6, 993.0], [69.7, 994.0], [69.8, 994.0], [69.9, 994.0], [70.0, 994.0], [70.1, 994.0], [70.2, 995.0], [70.3, 995.0], [70.4, 995.0], [70.5, 995.0], [70.6, 995.0], [70.7, 996.0], [70.8, 996.0], [70.9, 996.0], [71.0, 996.0], [71.1, 996.0], [71.2, 997.0], [71.3, 997.0], [71.4, 997.0], [71.5, 997.0], [71.6, 997.0], [71.7, 998.0], [71.8, 998.0], [71.9, 998.0], [72.0, 998.0], [72.1, 998.0], [72.2, 999.0], [72.3, 999.0], [72.4, 999.0], [72.5, 999.0], [72.6, 999.0], [72.7, 1000.0], [72.8, 1000.0], [72.9, 1000.0], [73.0, 1000.0], [73.1, 1000.0], [73.2, 1001.0], [73.3, 1001.0], [73.4, 1001.0], [73.5, 1001.0], [73.6, 1001.0], [73.7, 1002.0], [73.8, 1002.0], [73.9, 1002.0], [74.0, 1002.0], [74.1, 1003.0], [74.2, 1003.0], [74.3, 1003.0], [74.4, 1003.0], [74.5, 1003.0], [74.6, 1004.0], [74.7, 1004.0], [74.8, 1004.0], [74.9, 1004.0], [75.0, 1004.0], [75.1, 1005.0], [75.2, 1005.0], [75.3, 1005.0], [75.4, 1005.0], [75.5, 1006.0], [75.6, 1006.0], [75.7, 1006.0], [75.8, 1006.0], [75.9, 1006.0], [76.0, 1007.0], [76.1, 1007.0], [76.2, 1007.0], [76.3, 1007.0], [76.4, 1008.0], [76.5, 1008.0], [76.6, 1008.0], [76.7, 1008.0], [76.8, 1008.0], [76.9, 1009.0], [77.0, 1009.0], [77.1, 1009.0], [77.2, 1009.0], [77.3, 1010.0], [77.4, 1010.0], [77.5, 1010.0], [77.6, 1010.0], [77.7, 1011.0], [77.8, 1011.0], [77.9, 1011.0], [78.0, 1011.0], [78.1, 1012.0], [78.2, 1012.0], [78.3, 1012.0], [78.4, 1012.0], [78.5, 1012.0], [78.6, 1013.0], [78.7, 1013.0], [78.8, 1013.0], [78.9, 1014.0], [79.0, 1014.0], [79.1, 1014.0], [79.2, 1014.0], [79.3, 1014.0], [79.4, 1015.0], [79.5, 1015.0], [79.6, 1015.0], [79.7, 1015.0], [79.8, 1016.0], [79.9, 1016.0], [80.0, 1016.0], [80.1, 1016.0], [80.2, 1017.0], [80.3, 1017.0], [80.4, 1017.0], [80.5, 1017.0], [80.6, 1018.0], [80.7, 1018.0], [80.8, 1018.0], [80.9, 1018.0], [81.0, 1019.0], [81.1, 1019.0], [81.2, 1019.0], [81.3, 1020.0], [81.4, 1020.0], [81.5, 1020.0], [81.6, 1020.0], [81.7, 1021.0], [81.8, 1021.0], [81.9, 1021.0], [82.0, 1021.0], [82.1, 1022.0], [82.2, 1022.0], [82.3, 1022.0], [82.4, 1023.0], [82.5, 1023.0], [82.6, 1023.0], [82.7, 1023.0], [82.8, 1024.0], [82.9, 1024.0], [83.0, 1024.0], [83.1, 1024.0], [83.2, 1025.0], [83.3, 1025.0], [83.4, 1025.0], [83.5, 1026.0], [83.6, 1026.0], [83.7, 1026.0], [83.8, 1027.0], [83.9, 1027.0], [84.0, 1027.0], [84.1, 1027.0], [84.2, 1028.0], [84.3, 1028.0], [84.4, 1028.0], [84.5, 1029.0], [84.6, 1029.0], [84.7, 1029.0], [84.8, 1030.0], [84.9, 1030.0], [85.0, 1030.0], [85.1, 1030.0], [85.2, 1031.0], [85.3, 1031.0], [85.4, 1031.0], [85.5, 1032.0], [85.6, 1032.0], [85.7, 1032.0], [85.8, 1033.0], [85.9, 1033.0], [86.0, 1033.0], [86.1, 1034.0], [86.2, 1034.0], [86.3, 1034.0], [86.4, 1035.0], [86.5, 1035.0], [86.6, 1035.0], [86.7, 1036.0], [86.8, 1036.0], [86.9, 1036.0], [87.0, 1037.0], [87.1, 1037.0], [87.2, 1037.0], [87.3, 1038.0], [87.4, 1038.0], [87.5, 1038.0], [87.6, 1039.0], [87.7, 1039.0], [87.8, 1039.0], [87.9, 1040.0], [88.0, 1040.0], [88.1, 1040.0], [88.2, 1041.0], [88.3, 1041.0], [88.4, 1041.0], [88.5, 1042.0], [88.6, 1042.0], [88.7, 1043.0], [88.8, 1043.0], [88.9, 1043.0], [89.0, 1044.0], [89.1, 1044.0], [89.2, 1045.0], [89.3, 1045.0], [89.4, 1045.0], [89.5, 1046.0], [89.6, 1046.0], [89.7, 1046.0], [89.8, 1047.0], [89.9, 1047.0], [90.0, 1048.0], [90.1, 1048.0], [90.2, 1048.0], [90.3, 1049.0], [90.4, 1049.0], [90.5, 1050.0], [90.6, 1050.0], [90.7, 1051.0], [90.8, 1051.0], [90.9, 1051.0], [91.0, 1052.0], [91.1, 1052.0], [91.2, 1053.0], [91.3, 1053.0], [91.4, 1054.0], [91.5, 1054.0], [91.6, 1055.0], [91.7, 1055.0], [91.8, 1055.0], [91.9, 1056.0], [92.0, 1056.0], [92.1, 1057.0], [92.2, 1057.0], [92.3, 1058.0], [92.4, 1058.0], [92.5, 1059.0], [92.6, 1059.0], [92.7, 1060.0], [92.8, 1060.0], [92.9, 1061.0], [93.0, 1061.0], [93.1, 1062.0], [93.2, 1062.0], [93.3, 1063.0], [93.4, 1063.0], [93.5, 1064.0], [93.6, 1064.0], [93.7, 1065.0], [93.8, 1066.0], [93.9, 1066.0], [94.0, 1067.0], [94.1, 1067.0], [94.2, 1068.0], [94.3, 1068.0], [94.4, 1069.0], [94.5, 1070.0], [94.6, 1070.0], [94.7, 1071.0], [94.8, 1071.0], [94.9, 1072.0], [95.0, 1073.0], [95.1, 1073.0], [95.2, 1074.0], [95.3, 1075.0], [95.4, 1075.0], [95.5, 1076.0], [95.6, 1077.0], [95.7, 1077.0], [95.8, 1078.0], [95.9, 1079.0], [96.0, 1080.0], [96.1, 1081.0], [96.2, 1082.0], [96.3, 1082.0], [96.4, 1083.0], [96.5, 1084.0], [96.6, 1085.0], [96.7, 1086.0], [96.8, 1087.0], [96.9, 1088.0], [97.0, 1089.0], [97.1, 1090.0], [97.2, 1091.0], [97.3, 1092.0], [97.4, 1093.0], [97.5, 1094.0], [97.6, 1096.0], [97.7, 1097.0], [97.8, 1098.0], [97.9, 1100.0], [98.0, 1101.0], [98.1, 1102.0], [98.2, 1104.0], [98.3, 1105.0], [98.4, 1107.0], [98.5, 1109.0], [98.6, 1111.0], [98.7, 1113.0], [98.8, 1115.0], [98.9, 1118.0], [99.0, 1120.0], [99.1, 1123.0], [99.2, 1126.0], [99.3, 1130.0], [99.4, 1134.0], [99.5, 1139.0], [99.6, 1145.0], [99.7, 1154.0], [99.8, 1163.0], [99.9, 1180.0], [100.0, 1294.0]], "isOverall": false, "label": "extract", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 60.0, "minX": 100.0, "maxY": 90114.0, "series": [{"data": [[1100.0, 3235.0], [300.0, 592.0], [600.0, 864.0], [1200.0, 60.0], [700.0, 3173.0], [100.0, 117.0], [200.0, 706.0], [400.0, 751.0], [800.0, 16863.0], [900.0, 90114.0], [500.0, 767.0], [1000.0, 39558.0]], "isOverall": false, "label": "extract", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 2176.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 154624.0, "series": [{"data": [[0.0, 2176.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 154624.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 113.60527921879772, "minX": 1.66608912E12, "maxY": 196.0, "series": [{"data": [[1.66608978E12, 196.0], [1.66608912E12, 194.00601503759444], [1.66608918E12, 196.0], [1.66608948E12, 196.0], [1.66608954E12, 196.0], [1.66608984E12, 192.11013252809872], [1.6660899E12, 113.60527921879772], [1.66608924E12, 196.0], [1.6660893E12, 196.0], [1.6660896E12, 196.0], [1.66608966E12, 196.0], [1.66608936E12, 196.0], [1.66608942E12, 196.0], [1.66608972E12, 196.0]], "isOverall": false, "label": "196", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6660899E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 181.66666666666666, "minX": 1.0, "maxY": 978.2727272727274, "series": [{"data": [[2.0, 184.125], [3.0, 199.33333333333331], [4.0, 191.8181818181818], [5.0, 192.35], [6.0, 200.5], [7.0, 220.0], [8.0, 196.0], [9.0, 197.57142857142856], [10.0, 200.0], [11.0, 193.25], [12.0, 206.14893617021275], [13.0, 202.0], [14.0, 212.66666666666666], [15.0, 202.5], [16.0, 203.99999999999997], [17.0, 211.3478260869565], [18.0, 215.20689655172413], [19.0, 210.0], [20.0, 223.16666666666674], [21.0, 223.8], [22.0, 228.05882352941174], [23.0, 238.16666666666666], [24.0, 238.7142857142857], [25.0, 230.5], [26.0, 255.1875], [27.0, 253.0], [28.0, 230.6], [29.0, 250.2], [30.0, 250.0], [31.0, 258.52], [33.0, 251.0], [32.0, 276.1333333333333], [35.0, 270.4285714285714], [34.0, 278.2222222222223], [37.0, 248.5], [36.0, 284.0], [39.0, 282.2682926829269], [38.0, 284.1951219512196], [41.0, 261.14285714285717], [40.0, 248.0], [43.0, 297.9210526315789], [42.0, 245.71428571428575], [45.0, 289.3333333333334], [44.0, 287.25], [47.0, 227.75], [46.0, 285.5217391304347], [48.0, 282.47058823529414], [49.0, 308.27272727272725], [50.0, 303.97435897435895], [51.0, 303.4444444444445], [52.0, 319.4615384615384], [53.0, 318.05882352941177], [54.0, 231.25], [55.0, 340.2619047619047], [56.0, 312.85714285714283], [57.0, 332.36708860759506], [58.0, 334.8888888888889], [59.0, 352.62500000000006], [61.0, 379.66666666666674], [60.0, 354.9009009009008], [63.0, 326.8235294117647], [62.0, 365.0], [64.0, 369.75000000000006], [67.0, 382.23809523809524], [66.0, 329.5], [65.0, 390.1219512195122], [71.0, 424.3333333333333], [70.0, 397.0312499999999], [69.0, 399.4871794871796], [68.0, 398.93333333333334], [74.0, 372.75], [75.0, 434.16831683168317], [73.0, 402.0], [72.0, 435.19047619047615], [77.0, 419.75], [78.0, 436.57142857142856], [79.0, 453.0816326530612], [76.0, 430.67857142857144], [81.0, 465.5737704918032], [83.0, 469.37815126050424], [82.0, 461.8275862068965], [80.0, 460.7592592592592], [85.0, 494.7500000000001], [86.0, 482.0], [87.0, 481.6], [84.0, 476.09999999999997], [88.0, 497.1219512195123], [89.0, 479.55555555555554], [90.0, 506.51612903225794], [91.0, 533.7179487179486], [95.0, 573.0], [94.0, 553.0], [93.0, 546.5531914893618], [92.0, 541.0000000000001], [99.0, 387.1666666666667], [98.0, 566.2857142857143], [97.0, 561.1], [96.0, 559.6857142857143], [102.0, 411.0], [103.0, 582.2916666666665], [101.0, 575.4509803921566], [100.0, 592.5714285714286], [104.0, 571.3636363636366], [105.0, 537.2499999999999], [107.0, 584.5901639344261], [106.0, 607.0], [108.0, 598.9], [110.0, 438.5], [111.0, 612.4105263157892], [109.0, 601.1807228915663], [114.0, 604.6666666666667], [115.0, 679.125], [113.0, 647.6129032258065], [112.0, 623.3698630136986], [117.0, 640.5263157894736], [118.0, 593.6363636363637], [119.0, 645.9523809523812], [116.0, 656.85], [120.0, 612.6666666666666], [121.0, 645.6], [122.0, 611.5714285714286], [123.0, 570.3333333333334], [126.0, 463.0], [127.0, 687.159090909091], [125.0, 678.025641025641], [124.0, 673.1614906832299], [128.0, 665.7638888888889], [130.0, 688.8688524590164], [131.0, 588.5], [133.0, 716.7674418604652], [134.0, 714.897435897436], [135.0, 745.9642857142858], [132.0, 728.6153846153845], [129.0, 694.2297297297297], [139.0, 531.3333333333333], [141.0, 760.4126984126985], [143.0, 751.5], [142.0, 766.4027777777778], [140.0, 745.8541666666667], [138.0, 765.1379310344828], [137.0, 733.2857142857142], [136.0, 753.6190476190476], [146.0, 762.8409090909091], [149.0, 770.0361445783132], [151.0, 789.6863905325442], [150.0, 772.6481481481482], [148.0, 783.9473684210523], [147.0, 807.2], [145.0, 783.25], [144.0, 779.7941176470588], [155.0, 790.3636363636364], [157.0, 811.5021834061139], [159.0, 818.0333333333333], [158.0, 805.0], [156.0, 806.8799999999998], [154.0, 804.6521739130434], [153.0, 811.5714285714284], [152.0, 801.1538461538461], [161.0, 838.0], [162.0, 800.5365853658536], [163.0, 613.0], [165.0, 867.051282051282], [166.0, 782.7058823529411], [167.0, 880.857142857143], [164.0, 874.5739130434782], [160.0, 836.2533333333334], [172.0, 884.1293103448279], [174.0, 881.103448275862], [175.0, 719.0], [173.0, 890.8888888888889], [171.0, 849.6666666666667], [170.0, 879.2857142857142], [169.0, 877.5714285714286], [168.0, 852.4], [177.0, 919.8090909090912], [178.0, 911.4220779220783], [181.0, 931.713567839196], [182.0, 939.0955056179778], [183.0, 953.6666666666667], [180.0, 926.25], [179.0, 941.183673469388], [176.0, 910.8410596026487], [187.0, 941.8545454545452], [190.0, 959.9832589285708], [191.0, 959.6250999200639], [189.0, 950.1495327102815], [188.0, 965.3117647058818], [186.0, 941.6312500000003], [185.0, 946.9615384615385], [184.0, 946.0], [194.0, 968.1919905771492], [195.0, 974.5733262486723], [196.0, 966.9528935589993], [193.0, 978.2727272727274], [192.0, 969.5999999999995], [1.0, 181.66666666666666]], "isOverall": false, "label": "extract", "isController": false}, {"data": [[192.20107142857086, 951.8911479591827]], "isOverall": false, "label": "extract-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 196.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 0.0, "minX": 1.66608912E12, "maxY": 2.634599585E7, "series": [{"data": [[1.66608978E12, 2.590866805E7], [1.66608912E12, 9764677.683333334], [1.66608918E12, 2.61626735E7], [1.66608948E12, 2.5486058583333332E7], [1.66608954E12, 2.5583915416666668E7], [1.66608984E12, 2.6057588E7], [1.6660899E12, 1.4876820616666667E7], [1.66608924E12, 2.628599575E7], [1.6660893E12, 2.634599585E7], [1.6660896E12, 2.59294217E7], [1.66608966E12, 2.586543285E7], [1.66608936E12, 2.6323740716666665E7], [1.66608942E12, 2.63268197E7], [1.66608972E12, 2.5850784916666668E7]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.66608978E12, 0.0], [1.66608912E12, 0.0], [1.66608918E12, 0.0], [1.66608948E12, 0.0], [1.66608954E12, 0.0], [1.66608984E12, 0.0], [1.6660899E12, 0.0], [1.66608924E12, 0.0], [1.6660893E12, 0.0], [1.6660896E12, 0.0], [1.66608966E12, 0.0], [1.66608936E12, 0.0], [1.66608942E12, 0.0], [1.66608972E12, 0.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6660899E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 624.9850472993573, "minX": 1.66608912E12, "maxY": 1004.6026309045857, "series": [{"data": [[1.66608978E12, 991.0540335496949], [1.66608912E12, 919.5596133190096], [1.66608918E12, 942.3248336139844], [1.66608948E12, 985.6051484152318], [1.66608954E12, 1004.6026309045857], [1.66608984E12, 967.806492199293], [1.6660899E12, 624.9850472993573], [1.66608924E12, 938.9949720670389], [1.6660893E12, 936.3682618042817], [1.6660896E12, 990.6068059299207], [1.66608966E12, 992.3524147247539], [1.66608936E12, 936.6222505578576], [1.66608942E12, 939.872762148338], [1.66608972E12, 994.0050688519043]], "isOverall": false, "label": "extract", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6660899E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 622.4960329569733, "minX": 1.66608912E12, "maxY": 1002.1879217562185, "series": [{"data": [[1.66608978E12, 988.6541347045412], [1.66608912E12, 917.2244897959159], [1.66608918E12, 940.0169192526652], [1.66608948E12, 983.2548213986269], [1.66608954E12, 1002.1879217562185], [1.66608984E12, 965.4073980875673], [1.6660899E12, 622.4960329569733], [1.66608924E12, 936.6986432561852], [1.6660893E12, 934.0910900549388], [1.6660896E12, 988.1971866576838], [1.66608966E12, 989.9520432286375], [1.66608936E12, 934.3571883965578], [1.66608942E12, 937.5785645780022], [1.66608972E12, 991.6227929373994]], "isOverall": false, "label": "extract", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6660899E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.66608912E12, "maxY": 4.9E-324, "series": [{"data": [[1.66608978E12, 0.0], [1.66608912E12, 0.0], [1.66608918E12, 0.0], [1.66608948E12, 0.0], [1.66608954E12, 0.0], [1.66608984E12, 0.0], [1.6660899E12, 0.0], [1.66608924E12, 0.0], [1.6660893E12, 0.0], [1.6660896E12, 0.0], [1.66608966E12, 0.0], [1.66608936E12, 0.0], [1.66608942E12, 0.0], [1.66608972E12, 0.0]], "isOverall": false, "label": "extract", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6660899E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 157.0, "minX": 1.66608912E12, "maxY": 1294.0, "series": [{"data": [[1.66608978E12, 1230.0], [1.66608912E12, 1179.0], [1.66608918E12, 1284.0], [1.66608948E12, 1248.0], [1.66608954E12, 1294.0], [1.66608984E12, 1249.0], [1.6660899E12, 1142.0], [1.66608924E12, 1209.0], [1.6660893E12, 1218.0], [1.6660896E12, 1264.0], [1.66608966E12, 1258.0], [1.66608936E12, 1198.0], [1.66608942E12, 1243.0], [1.66608972E12, 1273.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.66608978E12, 852.0], [1.66608912E12, 163.0], [1.66608918E12, 701.0], [1.66608948E12, 811.0], [1.66608954E12, 837.0], [1.66608984E12, 822.0], [1.6660899E12, 157.0], [1.66608924E12, 704.0], [1.6660893E12, 655.0], [1.6660896E12, 835.0], [1.66608966E12, 857.0], [1.66608936E12, 707.0], [1.66608942E12, 700.0], [1.66608972E12, 858.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.66608978E12, 1065.0], [1.66608912E12, 1020.0], [1.66608918E12, 1018.0], [1.66608948E12, 1064.0], [1.66608954E12, 1085.0], [1.66608984E12, 1041.0], [1.6660899E12, 893.0], [1.66608924E12, 1016.0], [1.6660893E12, 1013.0], [1.6660896E12, 1065.0], [1.66608966E12, 1066.0], [1.66608936E12, 1013.0], [1.66608942E12, 1014.0], [1.66608972E12, 1068.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.66608978E12, 1131.0], [1.66608912E12, 1093.0], [1.66608918E12, 1086.0], [1.66608948E12, 1134.0], [1.66608954E12, 1154.92], [1.66608984E12, 1111.0], [1.6660899E12, 1002.0], [1.66608924E12, 1084.0], [1.6660893E12, 1082.3999999999996], [1.6660896E12, 1136.0], [1.66608966E12, 1130.0], [1.66608936E12, 1081.0], [1.66608942E12, 1082.0], [1.66608972E12, 1139.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.66608978E12, 1084.7999999999993], [1.66608912E12, 1044.0], [1.66608918E12, 1040.0], [1.66608948E12, 1087.0], [1.66608954E12, 1107.0], [1.66608984E12, 1064.0], [1.6660899E12, 936.0], [1.66608924E12, 1038.449999999999], [1.6660893E12, 1036.0], [1.6660896E12, 1086.0], [1.66608966E12, 1089.0], [1.66608936E12, 1035.0], [1.66608942E12, 1036.0], [1.66608972E12, 1090.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6660899E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 182.0, "minX": 7.0, "maxY": 1043.0, "series": [{"data": [[7.0, 182.0], [13.0, 200.0], [23.0, 195.0], [43.0, 198.0], [63.0, 203.0], [87.0, 215.0], [96.0, 282.5], [106.0, 234.0], [130.0, 265.0], [142.0, 289.5], [173.0, 396.0], [169.0, 330.0], [170.0, 289.5], [183.0, 886.5], [181.0, 837.5], [182.0, 508.5], [179.0, 530.0], [178.0, 501.0], [176.0, 436.5], [191.0, 995.0], [190.0, 972.5], [188.0, 1029.5], [187.0, 1007.0], [189.0, 996.0], [185.0, 1019.0], [186.0, 1043.0], [199.0, 974.0], [195.0, 986.0], [197.0, 977.0], [193.0, 994.0], [196.0, 981.0], [192.0, 983.0], [194.0, 993.0], [198.0, 978.0], [205.0, 949.0], [201.0, 967.0], [203.0, 962.0], [207.0, 943.0], [202.0, 970.0], [204.0, 957.0], [206.0, 943.0], [200.0, 970.0], [213.0, 931.5], [208.0, 939.0], [210.0, 937.0], [212.0, 932.0], [211.0, 935.0], [209.0, 936.0], [215.0, 926.0], [214.0, 933.5], [221.0, 951.0], [216.0, 931.0], [217.0, 920.0], [219.0, 926.0], [218.0, 935.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 221.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 180.0, "minX": 7.0, "maxY": 1040.5, "series": [{"data": [[7.0, 180.0], [13.0, 197.0], [23.0, 193.0], [43.0, 195.0], [63.0, 201.0], [87.0, 212.0], [96.0, 280.5], [106.0, 232.0], [130.0, 262.0], [142.0, 286.5], [173.0, 393.0], [169.0, 327.0], [170.0, 287.0], [183.0, 883.5], [181.0, 835.0], [182.0, 505.5], [179.0, 528.0], [178.0, 498.0], [176.0, 434.0], [191.0, 992.0], [190.0, 970.0], [188.0, 1027.0], [187.0, 1004.5], [189.0, 994.0], [185.0, 1017.0], [186.0, 1040.5], [199.0, 972.0], [195.0, 983.0], [197.0, 974.0], [193.0, 992.0], [196.0, 979.0], [192.0, 981.0], [194.0, 990.5], [198.0, 975.0], [205.0, 947.0], [201.0, 965.0], [203.0, 960.0], [207.0, 941.0], [202.0, 968.0], [204.0, 955.0], [206.0, 941.0], [200.0, 968.0], [213.0, 929.0], [208.0, 936.0], [210.0, 934.0], [212.0, 930.0], [211.0, 933.0], [209.0, 933.5], [215.0, 923.0], [214.0, 931.0], [221.0, 948.0], [216.0, 929.0], [217.0, 917.0], [219.0, 923.0], [218.0, 932.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 221.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 80.85, "minX": 1.66608912E12, "maxY": 209.31666666666666, "series": [{"data": [[1.66608978E12, 197.71666666666667], [1.66608912E12, 80.85], [1.66608918E12, 207.85], [1.66608948E12, 198.76666666666668], [1.66608954E12, 195.11666666666667], [1.66608984E12, 198.41666666666666], [1.6660899E12, 106.25], [1.66608924E12, 208.83333333333334], [1.6660893E12, 209.31666666666666], [1.6660896E12, 197.86666666666667], [1.66608966E12, 197.38333333333333], [1.66608936E12, 209.13333333333333], [1.66608942E12, 208.53333333333333], [1.66608972E12, 197.3]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6660899E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 77.58333333333333, "minX": 1.66608912E12, "maxY": 209.31666666666666, "series": [{"data": [[1.66608978E12, 197.71666666666667], [1.66608912E12, 77.58333333333333], [1.66608918E12, 207.85], [1.66608948E12, 198.76666666666668], [1.66608954E12, 195.11666666666667], [1.66608984E12, 198.7], [1.6660899E12, 109.23333333333333], [1.66608924E12, 208.83333333333334], [1.6660893E12, 209.31666666666666], [1.6660896E12, 197.86666666666667], [1.66608966E12, 197.4], [1.66608936E12, 209.13333333333333], [1.66608942E12, 208.53333333333333], [1.66608972E12, 197.28333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6660899E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 77.58333333333333, "minX": 1.66608912E12, "maxY": 209.31666666666666, "series": [{"data": [[1.66608978E12, 197.71666666666667], [1.66608912E12, 77.58333333333333], [1.66608918E12, 207.85], [1.66608948E12, 198.76666666666668], [1.66608954E12, 195.11666666666667], [1.66608984E12, 198.7], [1.6660899E12, 109.23333333333333], [1.66608924E12, 208.83333333333334], [1.6660893E12, 209.31666666666666], [1.6660896E12, 197.86666666666667], [1.66608966E12, 197.4], [1.66608936E12, 209.13333333333333], [1.66608942E12, 208.53333333333333], [1.66608972E12, 197.28333333333333]], "isOverall": false, "label": "extract-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6660899E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 77.58333333333333, "minX": 1.66608912E12, "maxY": 209.31666666666666, "series": [{"data": [[1.66608978E12, 197.71666666666667], [1.66608912E12, 77.58333333333333], [1.66608918E12, 207.85], [1.66608948E12, 198.76666666666668], [1.66608954E12, 195.11666666666667], [1.66608984E12, 198.7], [1.6660899E12, 109.23333333333333], [1.66608924E12, 208.83333333333334], [1.6660893E12, 209.31666666666666], [1.6660896E12, 197.86666666666667], [1.66608966E12, 197.4], [1.66608936E12, 209.13333333333333], [1.66608942E12, 208.53333333333333], [1.66608972E12, 197.28333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6660899E12, "title": "Total Transactions Per Second"}},
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

