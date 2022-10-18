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
        data: {"result": {"minY": 154.0, "minX": 0.0, "maxY": 2687.0, "series": [{"data": [[0.0, 154.0], [0.1, 202.0], [0.2, 222.0], [0.3, 239.0], [0.4, 259.0], [0.5, 277.0], [0.6, 294.0], [0.7, 313.0], [0.8, 333.0], [0.9, 352.0], [1.0, 375.0], [1.1, 393.0], [1.2, 415.0], [1.3, 433.0], [1.4, 451.0], [1.5, 468.0], [1.6, 484.0], [1.7, 501.0], [1.8, 517.0], [1.9, 534.0], [2.0, 550.0], [2.1, 565.0], [2.2, 580.0], [2.3, 596.0], [2.4, 610.0], [2.5, 621.0], [2.6, 628.0], [2.7, 634.0], [2.8, 639.0], [2.9, 643.0], [3.0, 646.0], [3.1, 650.0], [3.2, 654.0], [3.3, 658.0], [3.4, 663.0], [3.5, 666.0], [3.6, 669.0], [3.7, 673.0], [3.8, 678.0], [3.9, 683.0], [4.0, 688.0], [4.1, 694.0], [4.2, 701.0], [4.3, 708.0], [4.4, 715.0], [4.5, 722.0], [4.6, 729.0], [4.7, 735.0], [4.8, 740.0], [4.9, 745.0], [5.0, 749.0], [5.1, 753.0], [5.2, 755.0], [5.3, 758.0], [5.4, 760.0], [5.5, 762.0], [5.6, 764.0], [5.7, 766.0], [5.8, 767.0], [5.9, 769.0], [6.0, 771.0], [6.1, 772.0], [6.2, 773.0], [6.3, 775.0], [6.4, 776.0], [6.5, 777.0], [6.6, 778.0], [6.7, 779.0], [6.8, 780.0], [6.9, 781.0], [7.0, 782.0], [7.1, 783.0], [7.2, 784.0], [7.3, 785.0], [7.4, 786.0], [7.5, 787.0], [7.6, 787.0], [7.7, 788.0], [7.8, 789.0], [7.9, 790.0], [8.0, 790.0], [8.1, 791.0], [8.2, 792.0], [8.3, 793.0], [8.4, 793.0], [8.5, 794.0], [8.6, 795.0], [8.7, 795.0], [8.8, 796.0], [8.9, 796.0], [9.0, 797.0], [9.1, 798.0], [9.2, 798.0], [9.3, 799.0], [9.4, 799.0], [9.5, 800.0], [9.6, 801.0], [9.7, 801.0], [9.8, 802.0], [9.9, 802.0], [10.0, 803.0], [10.1, 803.0], [10.2, 804.0], [10.3, 804.0], [10.4, 805.0], [10.5, 805.0], [10.6, 806.0], [10.7, 806.0], [10.8, 807.0], [10.9, 807.0], [11.0, 808.0], [11.1, 808.0], [11.2, 809.0], [11.3, 809.0], [11.4, 809.0], [11.5, 810.0], [11.6, 810.0], [11.7, 811.0], [11.8, 811.0], [11.9, 812.0], [12.0, 812.0], [12.1, 812.0], [12.2, 813.0], [12.3, 813.0], [12.4, 814.0], [12.5, 814.0], [12.6, 815.0], [12.7, 815.0], [12.8, 815.0], [12.9, 816.0], [13.0, 816.0], [13.1, 816.0], [13.2, 817.0], [13.3, 817.0], [13.4, 818.0], [13.5, 818.0], [13.6, 818.0], [13.7, 819.0], [13.8, 819.0], [13.9, 819.0], [14.0, 820.0], [14.1, 820.0], [14.2, 820.0], [14.3, 821.0], [14.4, 821.0], [14.5, 821.0], [14.6, 822.0], [14.7, 822.0], [14.8, 822.0], [14.9, 823.0], [15.0, 823.0], [15.1, 823.0], [15.2, 824.0], [15.3, 824.0], [15.4, 824.0], [15.5, 825.0], [15.6, 825.0], [15.7, 825.0], [15.8, 826.0], [15.9, 826.0], [16.0, 826.0], [16.1, 827.0], [16.2, 827.0], [16.3, 827.0], [16.4, 827.0], [16.5, 828.0], [16.6, 828.0], [16.7, 828.0], [16.8, 829.0], [16.9, 829.0], [17.0, 829.0], [17.1, 830.0], [17.2, 830.0], [17.3, 830.0], [17.4, 830.0], [17.5, 831.0], [17.6, 831.0], [17.7, 831.0], [17.8, 831.0], [17.9, 832.0], [18.0, 832.0], [18.1, 832.0], [18.2, 833.0], [18.3, 833.0], [18.4, 833.0], [18.5, 833.0], [18.6, 834.0], [18.7, 834.0], [18.8, 834.0], [18.9, 834.0], [19.0, 835.0], [19.1, 835.0], [19.2, 835.0], [19.3, 836.0], [19.4, 836.0], [19.5, 836.0], [19.6, 836.0], [19.7, 837.0], [19.8, 837.0], [19.9, 837.0], [20.0, 837.0], [20.1, 838.0], [20.2, 838.0], [20.3, 838.0], [20.4, 838.0], [20.5, 839.0], [20.6, 839.0], [20.7, 839.0], [20.8, 839.0], [20.9, 840.0], [21.0, 840.0], [21.1, 840.0], [21.2, 841.0], [21.3, 841.0], [21.4, 841.0], [21.5, 841.0], [21.6, 841.0], [21.7, 842.0], [21.8, 842.0], [21.9, 842.0], [22.0, 842.0], [22.1, 843.0], [22.2, 843.0], [22.3, 843.0], [22.4, 843.0], [22.5, 844.0], [22.6, 844.0], [22.7, 844.0], [22.8, 844.0], [22.9, 845.0], [23.0, 845.0], [23.1, 845.0], [23.2, 845.0], [23.3, 845.0], [23.4, 846.0], [23.5, 846.0], [23.6, 846.0], [23.7, 846.0], [23.8, 847.0], [23.9, 847.0], [24.0, 847.0], [24.1, 847.0], [24.2, 847.0], [24.3, 848.0], [24.4, 848.0], [24.5, 848.0], [24.6, 848.0], [24.7, 849.0], [24.8, 849.0], [24.9, 849.0], [25.0, 849.0], [25.1, 850.0], [25.2, 850.0], [25.3, 850.0], [25.4, 850.0], [25.5, 850.0], [25.6, 851.0], [25.7, 851.0], [25.8, 851.0], [25.9, 851.0], [26.0, 852.0], [26.1, 852.0], [26.2, 852.0], [26.3, 852.0], [26.4, 852.0], [26.5, 853.0], [26.6, 853.0], [26.7, 853.0], [26.8, 853.0], [26.9, 854.0], [27.0, 854.0], [27.1, 854.0], [27.2, 854.0], [27.3, 854.0], [27.4, 855.0], [27.5, 855.0], [27.6, 855.0], [27.7, 855.0], [27.8, 856.0], [27.9, 856.0], [28.0, 856.0], [28.1, 856.0], [28.2, 856.0], [28.3, 857.0], [28.4, 857.0], [28.5, 857.0], [28.6, 857.0], [28.7, 858.0], [28.8, 858.0], [28.9, 858.0], [29.0, 858.0], [29.1, 858.0], [29.2, 859.0], [29.3, 859.0], [29.4, 859.0], [29.5, 859.0], [29.6, 859.0], [29.7, 860.0], [29.8, 860.0], [29.9, 860.0], [30.0, 860.0], [30.1, 860.0], [30.2, 861.0], [30.3, 861.0], [30.4, 861.0], [30.5, 861.0], [30.6, 861.0], [30.7, 862.0], [30.8, 862.0], [30.9, 862.0], [31.0, 862.0], [31.1, 862.0], [31.2, 863.0], [31.3, 863.0], [31.4, 863.0], [31.5, 863.0], [31.6, 863.0], [31.7, 864.0], [31.8, 864.0], [31.9, 864.0], [32.0, 864.0], [32.1, 865.0], [32.2, 865.0], [32.3, 865.0], [32.4, 865.0], [32.5, 865.0], [32.6, 866.0], [32.7, 866.0], [32.8, 866.0], [32.9, 866.0], [33.0, 866.0], [33.1, 867.0], [33.2, 867.0], [33.3, 867.0], [33.4, 867.0], [33.5, 867.0], [33.6, 868.0], [33.7, 868.0], [33.8, 868.0], [33.9, 868.0], [34.0, 868.0], [34.1, 869.0], [34.2, 869.0], [34.3, 869.0], [34.4, 869.0], [34.5, 869.0], [34.6, 870.0], [34.7, 870.0], [34.8, 870.0], [34.9, 870.0], [35.0, 870.0], [35.1, 871.0], [35.2, 871.0], [35.3, 871.0], [35.4, 871.0], [35.5, 871.0], [35.6, 871.0], [35.7, 872.0], [35.8, 872.0], [35.9, 872.0], [36.0, 872.0], [36.1, 872.0], [36.2, 873.0], [36.3, 873.0], [36.4, 873.0], [36.5, 873.0], [36.6, 873.0], [36.7, 874.0], [36.8, 874.0], [36.9, 874.0], [37.0, 874.0], [37.1, 874.0], [37.2, 875.0], [37.3, 875.0], [37.4, 875.0], [37.5, 875.0], [37.6, 875.0], [37.7, 876.0], [37.8, 876.0], [37.9, 876.0], [38.0, 876.0], [38.1, 876.0], [38.2, 877.0], [38.3, 877.0], [38.4, 877.0], [38.5, 877.0], [38.6, 877.0], [38.7, 878.0], [38.8, 878.0], [38.9, 878.0], [39.0, 878.0], [39.1, 878.0], [39.2, 879.0], [39.3, 879.0], [39.4, 879.0], [39.5, 879.0], [39.6, 879.0], [39.7, 879.0], [39.8, 880.0], [39.9, 880.0], [40.0, 880.0], [40.1, 880.0], [40.2, 880.0], [40.3, 881.0], [40.4, 881.0], [40.5, 881.0], [40.6, 881.0], [40.7, 881.0], [40.8, 882.0], [40.9, 882.0], [41.0, 882.0], [41.1, 882.0], [41.2, 882.0], [41.3, 883.0], [41.4, 883.0], [41.5, 883.0], [41.6, 883.0], [41.7, 883.0], [41.8, 884.0], [41.9, 884.0], [42.0, 884.0], [42.1, 884.0], [42.2, 884.0], [42.3, 884.0], [42.4, 885.0], [42.5, 885.0], [42.6, 885.0], [42.7, 885.0], [42.8, 885.0], [42.9, 886.0], [43.0, 886.0], [43.1, 886.0], [43.2, 886.0], [43.3, 886.0], [43.4, 887.0], [43.5, 887.0], [43.6, 887.0], [43.7, 887.0], [43.8, 887.0], [43.9, 888.0], [44.0, 888.0], [44.1, 888.0], [44.2, 888.0], [44.3, 888.0], [44.4, 889.0], [44.5, 889.0], [44.6, 889.0], [44.7, 889.0], [44.8, 889.0], [44.9, 890.0], [45.0, 890.0], [45.1, 890.0], [45.2, 890.0], [45.3, 890.0], [45.4, 891.0], [45.5, 891.0], [45.6, 891.0], [45.7, 891.0], [45.8, 891.0], [45.9, 892.0], [46.0, 892.0], [46.1, 892.0], [46.2, 892.0], [46.3, 892.0], [46.4, 893.0], [46.5, 893.0], [46.6, 893.0], [46.7, 893.0], [46.8, 893.0], [46.9, 893.0], [47.0, 894.0], [47.1, 894.0], [47.2, 894.0], [47.3, 894.0], [47.4, 894.0], [47.5, 895.0], [47.6, 895.0], [47.7, 895.0], [47.8, 895.0], [47.9, 895.0], [48.0, 896.0], [48.1, 896.0], [48.2, 896.0], [48.3, 896.0], [48.4, 896.0], [48.5, 897.0], [48.6, 897.0], [48.7, 897.0], [48.8, 897.0], [48.9, 897.0], [49.0, 898.0], [49.1, 898.0], [49.2, 898.0], [49.3, 898.0], [49.4, 898.0], [49.5, 899.0], [49.6, 899.0], [49.7, 899.0], [49.8, 899.0], [49.9, 899.0], [50.0, 900.0], [50.1, 900.0], [50.2, 900.0], [50.3, 900.0], [50.4, 900.0], [50.5, 901.0], [50.6, 901.0], [50.7, 901.0], [50.8, 901.0], [50.9, 901.0], [51.0, 902.0], [51.1, 902.0], [51.2, 902.0], [51.3, 902.0], [51.4, 902.0], [51.5, 903.0], [51.6, 903.0], [51.7, 903.0], [51.8, 903.0], [51.9, 903.0], [52.0, 904.0], [52.1, 904.0], [52.2, 904.0], [52.3, 904.0], [52.4, 904.0], [52.5, 905.0], [52.6, 905.0], [52.7, 905.0], [52.8, 905.0], [52.9, 905.0], [53.0, 906.0], [53.1, 906.0], [53.2, 906.0], [53.3, 906.0], [53.4, 906.0], [53.5, 907.0], [53.6, 907.0], [53.7, 907.0], [53.8, 907.0], [53.9, 907.0], [54.0, 908.0], [54.1, 908.0], [54.2, 908.0], [54.3, 908.0], [54.4, 908.0], [54.5, 909.0], [54.6, 909.0], [54.7, 909.0], [54.8, 909.0], [54.9, 909.0], [55.0, 910.0], [55.1, 910.0], [55.2, 910.0], [55.3, 910.0], [55.4, 911.0], [55.5, 911.0], [55.6, 911.0], [55.7, 911.0], [55.8, 911.0], [55.9, 912.0], [56.0, 912.0], [56.1, 912.0], [56.2, 912.0], [56.3, 912.0], [56.4, 913.0], [56.5, 913.0], [56.6, 913.0], [56.7, 913.0], [56.8, 913.0], [56.9, 914.0], [57.0, 914.0], [57.1, 914.0], [57.2, 914.0], [57.3, 914.0], [57.4, 915.0], [57.5, 915.0], [57.6, 915.0], [57.7, 915.0], [57.8, 916.0], [57.9, 916.0], [58.0, 916.0], [58.1, 916.0], [58.2, 916.0], [58.3, 917.0], [58.4, 917.0], [58.5, 917.0], [58.6, 917.0], [58.7, 917.0], [58.8, 918.0], [58.9, 918.0], [59.0, 918.0], [59.1, 918.0], [59.2, 918.0], [59.3, 919.0], [59.4, 919.0], [59.5, 919.0], [59.6, 919.0], [59.7, 919.0], [59.8, 920.0], [59.9, 920.0], [60.0, 920.0], [60.1, 920.0], [60.2, 921.0], [60.3, 921.0], [60.4, 921.0], [60.5, 921.0], [60.6, 921.0], [60.7, 922.0], [60.8, 922.0], [60.9, 922.0], [61.0, 922.0], [61.1, 923.0], [61.2, 923.0], [61.3, 923.0], [61.4, 923.0], [61.5, 924.0], [61.6, 924.0], [61.7, 924.0], [61.8, 924.0], [61.9, 924.0], [62.0, 925.0], [62.1, 925.0], [62.2, 925.0], [62.3, 925.0], [62.4, 926.0], [62.5, 926.0], [62.6, 926.0], [62.7, 926.0], [62.8, 926.0], [62.9, 927.0], [63.0, 927.0], [63.1, 927.0], [63.2, 927.0], [63.3, 928.0], [63.4, 928.0], [63.5, 928.0], [63.6, 928.0], [63.7, 928.0], [63.8, 929.0], [63.9, 929.0], [64.0, 929.0], [64.1, 929.0], [64.2, 930.0], [64.3, 930.0], [64.4, 930.0], [64.5, 930.0], [64.6, 931.0], [64.7, 931.0], [64.8, 931.0], [64.9, 931.0], [65.0, 931.0], [65.1, 932.0], [65.2, 932.0], [65.3, 932.0], [65.4, 932.0], [65.5, 933.0], [65.6, 933.0], [65.7, 933.0], [65.8, 933.0], [65.9, 934.0], [66.0, 934.0], [66.1, 934.0], [66.2, 934.0], [66.3, 934.0], [66.4, 935.0], [66.5, 935.0], [66.6, 935.0], [66.7, 935.0], [66.8, 936.0], [66.9, 936.0], [67.0, 936.0], [67.1, 936.0], [67.2, 937.0], [67.3, 937.0], [67.4, 937.0], [67.5, 937.0], [67.6, 938.0], [67.7, 938.0], [67.8, 938.0], [67.9, 938.0], [68.0, 939.0], [68.1, 939.0], [68.2, 939.0], [68.3, 939.0], [68.4, 940.0], [68.5, 940.0], [68.6, 940.0], [68.7, 940.0], [68.8, 941.0], [68.9, 941.0], [69.0, 941.0], [69.1, 941.0], [69.2, 942.0], [69.3, 942.0], [69.4, 942.0], [69.5, 942.0], [69.6, 943.0], [69.7, 943.0], [69.8, 943.0], [69.9, 943.0], [70.0, 944.0], [70.1, 944.0], [70.2, 944.0], [70.3, 944.0], [70.4, 945.0], [70.5, 945.0], [70.6, 945.0], [70.7, 945.0], [70.8, 946.0], [70.9, 946.0], [71.0, 946.0], [71.1, 946.0], [71.2, 947.0], [71.3, 947.0], [71.4, 947.0], [71.5, 947.0], [71.6, 948.0], [71.7, 948.0], [71.8, 948.0], [71.9, 948.0], [72.0, 949.0], [72.1, 949.0], [72.2, 949.0], [72.3, 949.0], [72.4, 950.0], [72.5, 950.0], [72.6, 950.0], [72.7, 950.0], [72.8, 951.0], [72.9, 951.0], [73.0, 951.0], [73.1, 952.0], [73.2, 952.0], [73.3, 952.0], [73.4, 952.0], [73.5, 953.0], [73.6, 953.0], [73.7, 953.0], [73.8, 954.0], [73.9, 954.0], [74.0, 954.0], [74.1, 954.0], [74.2, 955.0], [74.3, 955.0], [74.4, 955.0], [74.5, 956.0], [74.6, 956.0], [74.7, 956.0], [74.8, 956.0], [74.9, 957.0], [75.0, 957.0], [75.1, 957.0], [75.2, 958.0], [75.3, 958.0], [75.4, 958.0], [75.5, 959.0], [75.6, 959.0], [75.7, 959.0], [75.8, 959.0], [75.9, 960.0], [76.0, 960.0], [76.1, 960.0], [76.2, 961.0], [76.3, 961.0], [76.4, 961.0], [76.5, 961.0], [76.6, 962.0], [76.7, 962.0], [76.8, 962.0], [76.9, 963.0], [77.0, 963.0], [77.1, 963.0], [77.2, 963.0], [77.3, 964.0], [77.4, 964.0], [77.5, 964.0], [77.6, 965.0], [77.7, 965.0], [77.8, 965.0], [77.9, 966.0], [78.0, 966.0], [78.1, 966.0], [78.2, 967.0], [78.3, 967.0], [78.4, 967.0], [78.5, 967.0], [78.6, 968.0], [78.7, 968.0], [78.8, 969.0], [78.9, 969.0], [79.0, 969.0], [79.1, 969.0], [79.2, 970.0], [79.3, 970.0], [79.4, 970.0], [79.5, 971.0], [79.6, 971.0], [79.7, 971.0], [79.8, 972.0], [79.9, 972.0], [80.0, 972.0], [80.1, 973.0], [80.2, 973.0], [80.3, 973.0], [80.4, 974.0], [80.5, 974.0], [80.6, 974.0], [80.7, 975.0], [80.8, 975.0], [80.9, 975.0], [81.0, 976.0], [81.1, 976.0], [81.2, 976.0], [81.3, 977.0], [81.4, 977.0], [81.5, 978.0], [81.6, 978.0], [81.7, 978.0], [81.8, 979.0], [81.9, 979.0], [82.0, 979.0], [82.1, 980.0], [82.2, 980.0], [82.3, 980.0], [82.4, 981.0], [82.5, 981.0], [82.6, 981.0], [82.7, 982.0], [82.8, 982.0], [82.9, 983.0], [83.0, 983.0], [83.1, 983.0], [83.2, 984.0], [83.3, 984.0], [83.4, 984.0], [83.5, 985.0], [83.6, 985.0], [83.7, 986.0], [83.8, 986.0], [83.9, 986.0], [84.0, 987.0], [84.1, 987.0], [84.2, 988.0], [84.3, 988.0], [84.4, 988.0], [84.5, 989.0], [84.6, 989.0], [84.7, 990.0], [84.8, 990.0], [84.9, 991.0], [85.0, 991.0], [85.1, 991.0], [85.2, 992.0], [85.3, 992.0], [85.4, 993.0], [85.5, 993.0], [85.6, 994.0], [85.7, 994.0], [85.8, 995.0], [85.9, 995.0], [86.0, 995.0], [86.1, 996.0], [86.2, 996.0], [86.3, 997.0], [86.4, 997.0], [86.5, 998.0], [86.6, 998.0], [86.7, 999.0], [86.8, 999.0], [86.9, 999.0], [87.0, 1000.0], [87.1, 1000.0], [87.2, 1001.0], [87.3, 1001.0], [87.4, 1002.0], [87.5, 1002.0], [87.6, 1003.0], [87.7, 1003.0], [87.8, 1004.0], [87.9, 1004.0], [88.0, 1005.0], [88.1, 1005.0], [88.2, 1006.0], [88.3, 1006.0], [88.4, 1006.0], [88.5, 1007.0], [88.6, 1007.0], [88.7, 1008.0], [88.8, 1009.0], [88.9, 1009.0], [89.0, 1010.0], [89.1, 1010.0], [89.2, 1011.0], [89.3, 1011.0], [89.4, 1012.0], [89.5, 1012.0], [89.6, 1013.0], [89.7, 1013.0], [89.8, 1014.0], [89.9, 1015.0], [90.0, 1015.0], [90.1, 1016.0], [90.2, 1016.0], [90.3, 1017.0], [90.4, 1018.0], [90.5, 1018.0], [90.6, 1019.0], [90.7, 1019.0], [90.8, 1020.0], [90.9, 1020.0], [91.0, 1021.0], [91.1, 1022.0], [91.2, 1022.0], [91.3, 1023.0], [91.4, 1024.0], [91.5, 1024.0], [91.6, 1025.0], [91.7, 1025.0], [91.8, 1026.0], [91.9, 1027.0], [92.0, 1027.0], [92.1, 1028.0], [92.2, 1029.0], [92.3, 1030.0], [92.4, 1030.0], [92.5, 1031.0], [92.6, 1032.0], [92.7, 1033.0], [92.8, 1033.0], [92.9, 1034.0], [93.0, 1035.0], [93.1, 1036.0], [93.2, 1036.0], [93.3, 1037.0], [93.4, 1038.0], [93.5, 1039.0], [93.6, 1040.0], [93.7, 1041.0], [93.8, 1042.0], [93.9, 1042.0], [94.0, 1043.0], [94.1, 1044.0], [94.2, 1045.0], [94.3, 1046.0], [94.4, 1047.0], [94.5, 1048.0], [94.6, 1049.0], [94.7, 1050.0], [94.8, 1051.0], [94.9, 1052.0], [95.0, 1053.0], [95.1, 1054.0], [95.2, 1055.0], [95.3, 1056.0], [95.4, 1058.0], [95.5, 1059.0], [95.6, 1060.0], [95.7, 1061.0], [95.8, 1062.0], [95.9, 1064.0], [96.0, 1065.0], [96.1, 1066.0], [96.2, 1068.0], [96.3, 1069.0], [96.4, 1070.0], [96.5, 1072.0], [96.6, 1074.0], [96.7, 1075.0], [96.8, 1077.0], [96.9, 1079.0], [97.0, 1080.0], [97.1, 1082.0], [97.2, 1084.0], [97.3, 1086.0], [97.4, 1088.0], [97.5, 1090.0], [97.6, 1092.0], [97.7, 1094.0], [97.8, 1097.0], [97.9, 1099.0], [98.0, 1103.0], [98.1, 1106.0], [98.2, 1108.0], [98.3, 1111.0], [98.4, 1115.0], [98.5, 1119.0], [98.6, 1123.0], [98.7, 1128.0], [98.8, 1133.0], [98.9, 1138.0], [99.0, 1146.0], [99.1, 1153.0], [99.2, 1161.0], [99.3, 1172.0], [99.4, 1185.0], [99.5, 1206.0], [99.6, 1247.0], [99.7, 1330.0], [99.8, 1515.0], [99.9, 1874.0], [100.0, 2687.0]], "isOverall": false, "label": "extract", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 63625.0, "series": [{"data": [[600.0, 2920.0], [700.0, 8191.0], [800.0, 63625.0], [900.0, 57907.0], [1000.0, 17239.0], [1100.0, 2453.0], [1200.0, 312.0], [1300.0, 112.0], [1400.0, 73.0], [1500.0, 82.0], [1600.0, 47.0], [100.0, 134.0], [1700.0, 23.0], [1800.0, 26.0], [1900.0, 35.0], [2000.0, 20.0], [2100.0, 19.0], [2200.0, 36.0], [2300.0, 21.0], [2400.0, 13.0], [2500.0, 5.0], [2600.0, 1.0], [200.0, 862.0], [300.0, 777.0], [400.0, 885.0], [500.0, 982.0]], "isOverall": false, "label": "extract", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2600.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 328.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 153809.0, "series": [{"data": [[0.0, 2663.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 153809.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 328.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 103.49616368286443, "minX": 1.66609038E12, "maxY": 196.0, "series": [{"data": [[1.66609074E12, 196.0], [1.6660911E12, 103.49616368286443], [1.66609104E12, 189.48386329394904], [1.66609044E12, 196.0], [1.6660905E12, 196.0], [1.66609086E12, 196.0], [1.6660908E12, 196.0], [1.66609092E12, 196.0], [1.66609056E12, 196.0], [1.66609062E12, 196.0], [1.66609038E12, 196.0], [1.66609098E12, 195.92241447420392], [1.66609068E12, 196.0]], "isOverall": false, "label": "196", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6660911E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 188.0, "minX": 1.0, "maxY": 937.251022076859, "series": [{"data": [[2.0, 188.0], [3.0, 199.31250000000003], [4.0, 188.66666666666666], [5.0, 195.952380952381], [6.0, 193.0], [7.0, 209.0], [8.0, 201.77777777777777], [9.0, 208.0], [10.0, 195.90476190476187], [11.0, 204.55555555555554], [12.0, 196.79999999999998], [13.0, 204.4642857142857], [14.0, 210.7826086956522], [15.0, 207.7894736842105], [16.0, 212.25], [17.0, 210.0], [18.0, 210.85106382978728], [19.0, 249.0], [20.0, 245.0], [21.0, 217.5], [22.0, 235.0], [23.0, 229.63513513513513], [24.0, 231.5], [25.0, 229.0], [26.0, 277.0], [27.0, 250.12499999999997], [28.0, 256.0], [29.0, 243.5], [30.0, 238.0], [31.0, 261.71428571428567], [33.0, 257.60869565217394], [32.0, 265.1176470588236], [35.0, 265.2], [34.0, 258.12499999999994], [37.0, 274.66666666666663], [36.0, 276.7777777777778], [39.0, 275.5675675675675], [38.0, 268.61538461538464], [41.0, 278.4000000000001], [40.0, 273.1063829787235], [43.0, 324.75], [42.0, 231.0], [45.0, 321.0], [44.0, 286.375], [47.0, 285.1282051282051], [46.0, 283.3888888888889], [49.0, 297.375], [48.0, 285.2238805970149], [51.0, 300.75675675675666], [50.0, 291.5], [53.0, 298.28571428571445], [52.0, 312.09090909090907], [55.0, 271.8], [54.0, 297.0943396226414], [57.0, 374.5], [56.0, 322.06060606060606], [59.0, 291.0], [58.0, 322.2], [61.0, 346.0], [60.0, 330.2105263157894], [63.0, 403.0], [62.0, 374.5], [67.0, 382.59999999999997], [66.0, 400.4193548387097], [65.0, 407.5909090909091], [64.0, 390.42857142857144], [71.0, 403.8636363636364], [70.0, 398.4333333333334], [69.0, 386.30952380952374], [68.0, 381.1111111111111], [75.0, 395.8229166666665], [74.0, 376.0], [73.0, 397.4117647058824], [72.0, 401.0], [79.0, 451.657894736842], [78.0, 430.24675324675314], [77.0, 430.98305084745766], [76.0, 389.6382978723404], [83.0, 434.77981651376155], [82.0, 479.2258064516128], [81.0, 452.9666666666666], [80.0, 451.39506172839515], [87.0, 483.85416666666663], [86.0, 472.93442622950823], [85.0, 459.23529411764713], [84.0, 447.1538461538462], [91.0, 482.6363636363637], [90.0, 471.0], [89.0, 482.00000000000006], [88.0, 472.13333333333327], [95.0, 519.0], [94.0, 476.2], [93.0, 500.82222222222214], [92.0, 502.42857142857144], [99.0, 568.1470588235293], [98.0, 555.7391304347825], [97.0, 536.5290322580648], [96.0, 517.2058823529412], [103.0, 549.0], [102.0, 564.923076923077], [101.0, 567.8297872340427], [100.0, 497.0], [107.0, 566.8399999999999], [106.0, 588.6666666666666], [105.0, 497.0], [104.0, 598.1230769230767], [111.0, 589.78125], [110.0, 559.2926829268295], [109.0, 538.0549450549452], [108.0, 537.1323529411764], [115.0, 621.5], [114.0, 612.1470588235294], [113.0, 610.0684931506848], [112.0, 573.6857142857142], [119.0, 623.1], [118.0, 639.764705882353], [117.0, 604.2857142857143], [116.0, 601.9999999999999], [123.0, 647.3333333333334], [122.0, 658.4897959183673], [121.0, 628.0], [120.0, 627.9470198675497], [127.0, 645.1666666666667], [126.0, 652.0000000000001], [125.0, 654.2916666666666], [124.0, 640.8181818181819], [135.0, 661.0], [134.0, 636.6], [133.0, 637.3703703703704], [132.0, 642.1904761904761], [131.0, 651.8148148148149], [130.0, 661.7547169811321], [129.0, 649.3900000000003], [128.0, 656.910447761194], [143.0, 720.3478260869566], [142.0, 674.4210526315791], [141.0, 710.5563909774437], [140.0, 672.75], [139.0, 691.7297297297296], [138.0, 688.7368421052629], [137.0, 686.2647058823532], [136.0, 669.4148148148145], [151.0, 807.4166666666666], [150.0, 757.5862068965515], [149.0, 730.5161290322578], [148.0, 752.83], [147.0, 761.8125], [146.0, 763.9], [145.0, 749.840579710145], [144.0, 730.8219178082194], [159.0, 756.4488188976379], [158.0, 765.2134831460676], [157.0, 839.5], [156.0, 758.3013698630136], [155.0, 753.3383838383844], [154.0, 773.357142857143], [153.0, 745.578431372549], [152.0, 757.3529411764707], [167.0, 831.3865546218485], [166.0, 821.0333333333334], [165.0, 801.4444444444445], [164.0, 803.0], [163.0, 780.7142857142857], [162.0, 799.6533333333333], [161.0, 799.258064516129], [160.0, 780.0769230769234], [175.0, 838.5081081081081], [174.0, 845.26], [173.0, 833.485714285714], [172.0, 820.5], [171.0, 819.6874999999999], [170.0, 830.0597014925372], [169.0, 824.7567567567568], [168.0, 827.0], [183.0, 877.4047619047617], [182.0, 863.8627450980396], [181.0, 844.169491525424], [180.0, 852.8260869565216], [179.0, 873.525], [178.0, 887.0588235294117], [177.0, 894.5729729729728], [176.0, 837.7928994082844], [191.0, 915.6762240846931], [190.0, 898.8841961852864], [189.0, 899.5083393763598], [188.0, 866.7755102040818], [187.0, 886.7338709677418], [186.0, 883.170731707317], [185.0, 882.8461538461538], [184.0, 874.294117647059], [196.0, 913.6276288810665], [195.0, 937.251022076859], [194.0, 910.6861030126328], [193.0, 906.8431372549019], [192.0, 921.6417391304348], [1.0, 191.0]], "isOverall": false, "label": "extract", "isController": false}, {"data": [[191.54827806122566, 897.375325255083]], "isOverall": false, "label": "extract-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 196.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 0.0, "minX": 1.66609038E12, "maxY": 2.82835495E7, "series": [{"data": [[1.66609074E12, 2.6205575366666667E7], [1.6660911E12, 1.5162406966666667E7], [1.66609104E12, 2.7569930733333334E7], [1.66609044E12, 2.815047735E7], [1.6660905E12, 2.82835495E7], [1.66609086E12, 2.746142755E7], [1.6660908E12, 2.7588428583333332E7], [1.66609092E12, 2.7594559866666667E7], [1.66609056E12, 2.8182627883333333E7], [1.66609062E12, 2.8139906583333332E7], [1.66609038E12, 1.7345092066666666E7], [1.66609098E12, 2.7632882933333334E7], [1.66609068E12, 2.745172795E7]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.66609074E12, 0.0], [1.6660911E12, 0.0], [1.66609104E12, 0.0], [1.66609044E12, 0.0], [1.6660905E12, 0.0], [1.66609086E12, 0.0], [1.6660908E12, 0.0], [1.66609092E12, 0.0], [1.66609056E12, 0.0], [1.66609062E12, 0.0], [1.66609038E12, 0.0], [1.66609098E12, 0.0], [1.66609068E12, 0.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6660911E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 546.9905220400145, "minX": 1.66609038E12, "maxY": 978.4638549205573, "series": [{"data": [[1.66609074E12, 978.4638549205573], [1.6660911E12, 546.9905220400145], [1.66609104E12, 903.6572040282292], [1.66609044E12, 876.2037822946902], [1.6660905E12, 871.5989772474591], [1.66609086E12, 933.8969080359234], [1.6660908E12, 930.9129746835438], [1.66609092E12, 930.3653906991411], [1.66609056E12, 874.4535584145168], [1.66609062E12, 877.0229799298655], [1.66609038E12, 977.5090623489642], [1.66609098E12, 928.3413131073686], [1.66609068E12, 907.6112441115122]], "isOverall": false, "label": "extract", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6660911E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 544.259214683318, "minX": 1.66609038E12, "maxY": 975.7236502786761, "series": [{"data": [[1.66609074E12, 975.7236502786761], [1.6660911E12, 544.259214683318], [1.66609104E12, 900.9990484497662], [1.66609044E12, 873.6917578735757], [1.6660905E12, 869.0946416660482], [1.66609086E12, 931.2524441618348], [1.6660908E12, 928.2632120253174], [1.66609092E12, 927.7175735526752], [1.66609056E12, 871.9448204060395], [1.66609062E12, 874.5285383869257], [1.66609038E12, 974.4078057032409], [1.66609098E12, 925.7354033341261], [1.66609068E12, 905.0187659278726]], "isOverall": false, "label": "extract", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6660911E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.66609038E12, "maxY": 4.9E-324, "series": [{"data": [[1.66609074E12, 0.0], [1.6660911E12, 0.0], [1.66609104E12, 0.0], [1.66609044E12, 0.0], [1.6660905E12, 0.0], [1.66609086E12, 0.0], [1.6660908E12, 0.0], [1.66609092E12, 0.0], [1.66609056E12, 0.0], [1.66609062E12, 0.0], [1.66609038E12, 0.0], [1.66609098E12, 0.0], [1.66609068E12, 0.0]], "isOverall": false, "label": "extract", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6660911E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 154.0, "minX": 1.66609038E12, "maxY": 2687.0, "series": [{"data": [[1.66609074E12, 1342.0], [1.6660911E12, 997.0], [1.66609104E12, 1267.0], [1.66609044E12, 1235.0], [1.6660905E12, 1202.0], [1.66609086E12, 1274.0], [1.6660908E12, 1326.0], [1.66609092E12, 1332.0], [1.66609056E12, 1241.0], [1.66609062E12, 1234.0], [1.66609038E12, 2687.0], [1.66609098E12, 1315.0], [1.66609068E12, 1306.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.66609074E12, 786.0], [1.6660911E12, 154.0], [1.66609104E12, 689.0], [1.66609044E12, 597.0], [1.6660905E12, 606.0], [1.66609086E12, 754.0], [1.6660908E12, 753.0], [1.66609092E12, 747.0], [1.66609056E12, 606.0], [1.66609062E12, 599.0], [1.66609038E12, 621.0], [1.66609098E12, 749.0], [1.66609068E12, 739.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.66609074E12, 1079.0], [1.6660911E12, 785.1999999999998], [1.66609104E12, 1003.0], [1.66609044E12, 974.0], [1.6660905E12, 967.0], [1.66609086E12, 1029.0], [1.6660908E12, 1026.0], [1.66609092E12, 1025.5], [1.66609056E12, 968.0], [1.66609062E12, 971.0], [1.66609038E12, 1167.0], [1.66609098E12, 1022.0], [1.66609068E12, 1000.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.66609074E12, 1176.0], [1.6660911E12, 901.0], [1.66609104E12, 1104.0], [1.66609044E12, 1070.0], [1.6660905E12, 1057.0], [1.66609086E12, 1126.0], [1.6660908E12, 1119.5900000000001], [1.66609092E12, 1132.0], [1.66609056E12, 1060.5200000000004], [1.66609062E12, 1063.0], [1.66609038E12, 2158.2299999999996], [1.66609098E12, 1114.0], [1.66609068E12, 1088.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.66609074E12, 1112.0], [1.6660911E12, 828.0], [1.66609104E12, 1036.0], [1.66609044E12, 1004.0], [1.6660905E12, 998.0], [1.66609086E12, 1061.0], [1.6660908E12, 1058.0], [1.66609092E12, 1061.0], [1.66609056E12, 1001.0], [1.66609062E12, 1002.0], [1.66609038E12, 1390.0], [1.66609098E12, 1053.0], [1.66609068E12, 1031.5]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6660911E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 191.0, "minX": 3.0, "maxY": 2204.5, "series": [{"data": [[3.0, 191.0], [14.0, 202.0], [18.0, 195.0], [34.0, 199.5], [59.0, 195.0], [63.0, 1831.0], [68.0, 211.0], [87.0, 215.0], [110.0, 232.5], [120.0, 2204.5], [122.0, 260.0], [125.0, 1568.0], [145.0, 278.0], [167.0, 1186.0], [162.0, 1137.0], [160.0, 288.5], [172.0, 1404.5], [173.0, 1123.0], [175.0, 998.0], [170.0, 391.0], [183.0, 635.5], [180.0, 1007.0], [182.0, 984.0], [181.0, 412.0], [179.0, 443.0], [188.0, 969.5], [184.0, 1004.0], [191.0, 896.5], [190.0, 815.5], [187.0, 1033.5], [186.0, 572.0], [185.0, 541.0], [189.0, 392.0], [194.0, 978.0], [199.0, 969.0], [195.0, 970.0], [196.0, 948.0], [197.0, 957.0], [193.0, 969.0], [198.0, 953.0], [192.0, 646.0], [205.0, 934.0], [206.0, 933.0], [203.0, 927.0], [202.0, 895.0], [204.0, 920.0], [201.0, 952.5], [207.0, 921.0], [200.0, 932.0], [211.0, 915.0], [215.0, 898.0], [214.0, 911.0], [212.0, 914.0], [208.0, 908.0], [213.0, 905.0], [209.0, 917.0], [210.0, 927.0], [219.0, 900.0], [220.0, 889.0], [223.0, 878.0], [218.0, 894.0], [221.0, 885.0], [217.0, 904.0], [222.0, 874.0], [216.0, 905.5], [227.0, 871.0], [225.0, 879.0], [224.0, 877.0], [226.0, 867.0], [228.0, 867.0], [231.0, 855.0], [230.0, 858.0], [229.0, 862.0], [235.0, 856.0], [239.0, 834.0], [232.0, 868.0], [233.0, 855.5], [236.0, 851.0], [234.0, 857.0], [240.0, 855.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 240.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 189.0, "minX": 3.0, "maxY": 2194.5, "series": [{"data": [[3.0, 189.0], [14.0, 200.0], [18.0, 193.0], [34.0, 196.5], [59.0, 192.0], [63.0, 1805.0], [68.0, 209.0], [87.0, 213.0], [110.0, 230.0], [120.0, 2194.5], [122.0, 257.0], [125.0, 1561.0], [145.0, 275.0], [167.0, 1184.0], [162.0, 1130.0], [160.0, 286.0], [172.0, 1401.0], [173.0, 1115.0], [175.0, 996.5], [170.0, 387.0], [183.0, 632.5], [180.0, 1005.0], [182.0, 981.0], [181.0, 410.0], [179.0, 438.0], [188.0, 967.5], [184.0, 1003.0], [191.0, 894.5], [190.0, 812.5], [187.0, 1030.5], [186.0, 569.5], [185.0, 537.0], [189.0, 390.0], [194.0, 975.0], [199.0, 967.0], [195.0, 968.0], [196.0, 945.0], [197.0, 954.0], [193.0, 967.0], [198.0, 951.0], [192.0, 642.5], [205.0, 932.0], [206.0, 930.0], [203.0, 924.0], [202.0, 892.5], [204.0, 917.0], [201.0, 949.5], [207.0, 919.0], [200.0, 928.5], [211.0, 912.0], [215.0, 895.0], [214.0, 908.0], [212.0, 911.0], [208.0, 906.0], [213.0, 903.0], [209.0, 914.0], [210.0, 924.0], [219.0, 898.0], [220.0, 885.0], [223.0, 875.0], [218.0, 891.0], [221.0, 882.0], [217.0, 902.0], [222.0, 871.0], [216.0, 903.0], [227.0, 868.0], [225.0, 876.0], [224.0, 874.0], [226.0, 865.0], [228.0, 864.0], [231.0, 852.0], [230.0, 856.0], [229.0, 860.0], [235.0, 853.0], [239.0, 832.0], [232.0, 865.0], [233.0, 853.0], [236.0, 849.0], [234.0, 854.5], [240.0, 853.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 240.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 108.08333333333333, "minX": 1.66609038E12, "maxY": 224.88333333333333, "series": [{"data": [[1.66609074E12, 200.35], [1.6660911E12, 108.08333333333333], [1.66609104E12, 209.63333333333333], [1.66609044E12, 223.85], [1.6660905E12, 224.88333333333333], [1.66609086E12, 209.68333333333334], [1.6660908E12, 210.66666666666666], [1.66609092E12, 210.73333333333332], [1.66609056E12, 224.11666666666667], [1.66609062E12, 223.38333333333333], [1.66609038E12, 141.2], [1.66609098E12, 210.93333333333334], [1.66609068E12, 215.81666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6660911E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 110.78333333333333, "minX": 1.66609038E12, "maxY": 224.88333333333333, "series": [{"data": [[1.66609074E12, 200.35], [1.6660911E12, 110.78333333333333], [1.66609104E12, 210.18333333333334], [1.66609044E12, 223.85], [1.6660905E12, 224.88333333333333], [1.66609086E12, 209.68333333333334], [1.6660908E12, 210.66666666666666], [1.66609092E12, 210.73333333333332], [1.66609056E12, 224.11666666666667], [1.66609062E12, 223.38333333333333], [1.66609038E12, 137.93333333333334], [1.66609098E12, 210.95], [1.66609068E12, 215.81666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6660911E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 110.78333333333333, "minX": 1.66609038E12, "maxY": 224.88333333333333, "series": [{"data": [[1.66609074E12, 200.35], [1.6660911E12, 110.78333333333333], [1.66609104E12, 210.18333333333334], [1.66609044E12, 223.85], [1.6660905E12, 224.88333333333333], [1.66609086E12, 209.68333333333334], [1.6660908E12, 210.66666666666666], [1.66609092E12, 210.73333333333332], [1.66609056E12, 224.11666666666667], [1.66609062E12, 223.38333333333333], [1.66609038E12, 137.93333333333334], [1.66609098E12, 210.95], [1.66609068E12, 215.81666666666666]], "isOverall": false, "label": "extract-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6660911E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 110.78333333333333, "minX": 1.66609038E12, "maxY": 224.88333333333333, "series": [{"data": [[1.66609074E12, 200.35], [1.6660911E12, 110.78333333333333], [1.66609104E12, 210.18333333333334], [1.66609044E12, 223.85], [1.6660905E12, 224.88333333333333], [1.66609086E12, 209.68333333333334], [1.6660908E12, 210.66666666666666], [1.66609092E12, 210.73333333333332], [1.66609056E12, 224.11666666666667], [1.66609062E12, 223.38333333333333], [1.66609038E12, 137.93333333333334], [1.66609098E12, 210.95], [1.66609068E12, 215.81666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6660911E12, "title": "Total Transactions Per Second"}},
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

