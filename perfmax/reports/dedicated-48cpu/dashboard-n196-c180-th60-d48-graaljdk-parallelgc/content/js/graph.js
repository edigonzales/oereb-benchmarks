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
        data: {"result": {"minY": 150.0, "minX": 0.0, "maxY": 1741.0, "series": [{"data": [[0.0, 150.0], [0.1, 200.0], [0.2, 219.0], [0.3, 236.0], [0.4, 256.0], [0.5, 272.0], [0.6, 286.0], [0.7, 300.0], [0.8, 320.0], [0.9, 339.0], [1.0, 358.0], [1.1, 376.0], [1.2, 395.0], [1.3, 416.0], [1.4, 438.0], [1.5, 456.0], [1.6, 475.0], [1.7, 493.0], [1.8, 509.0], [1.9, 527.0], [2.0, 546.0], [2.1, 564.0], [2.2, 581.0], [2.3, 595.0], [2.4, 607.0], [2.5, 616.0], [2.6, 621.0], [2.7, 626.0], [2.8, 631.0], [2.9, 635.0], [3.0, 639.0], [3.1, 643.0], [3.2, 647.0], [3.3, 651.0], [3.4, 654.0], [3.5, 658.0], [3.6, 662.0], [3.7, 665.0], [3.8, 670.0], [3.9, 674.0], [4.0, 678.0], [4.1, 683.0], [4.2, 689.0], [4.3, 695.0], [4.4, 701.0], [4.5, 708.0], [4.6, 715.0], [4.7, 720.0], [4.8, 725.0], [4.9, 730.0], [5.0, 734.0], [5.1, 738.0], [5.2, 741.0], [5.3, 744.0], [5.4, 746.0], [5.5, 748.0], [5.6, 750.0], [5.7, 752.0], [5.8, 753.0], [5.9, 755.0], [6.0, 757.0], [6.1, 758.0], [6.2, 759.0], [6.3, 761.0], [6.4, 762.0], [6.5, 763.0], [6.6, 764.0], [6.7, 765.0], [6.8, 766.0], [6.9, 767.0], [7.0, 768.0], [7.1, 769.0], [7.2, 770.0], [7.3, 771.0], [7.4, 771.0], [7.5, 772.0], [7.6, 773.0], [7.7, 774.0], [7.8, 775.0], [7.9, 775.0], [8.0, 776.0], [8.1, 777.0], [8.2, 778.0], [8.3, 778.0], [8.4, 779.0], [8.5, 779.0], [8.6, 780.0], [8.7, 781.0], [8.8, 781.0], [8.9, 782.0], [9.0, 783.0], [9.1, 783.0], [9.2, 784.0], [9.3, 784.0], [9.4, 785.0], [9.5, 785.0], [9.6, 786.0], [9.7, 787.0], [9.8, 787.0], [9.9, 788.0], [10.0, 788.0], [10.1, 788.0], [10.2, 789.0], [10.3, 789.0], [10.4, 790.0], [10.5, 790.0], [10.6, 791.0], [10.7, 791.0], [10.8, 792.0], [10.9, 792.0], [11.0, 793.0], [11.1, 793.0], [11.2, 793.0], [11.3, 794.0], [11.4, 794.0], [11.5, 795.0], [11.6, 795.0], [11.7, 796.0], [11.8, 796.0], [11.9, 796.0], [12.0, 797.0], [12.1, 797.0], [12.2, 798.0], [12.3, 798.0], [12.4, 798.0], [12.5, 799.0], [12.6, 799.0], [12.7, 800.0], [12.8, 800.0], [12.9, 800.0], [13.0, 801.0], [13.1, 801.0], [13.2, 802.0], [13.3, 802.0], [13.4, 802.0], [13.5, 803.0], [13.6, 803.0], [13.7, 803.0], [13.8, 804.0], [13.9, 804.0], [14.0, 804.0], [14.1, 805.0], [14.2, 805.0], [14.3, 805.0], [14.4, 806.0], [14.5, 806.0], [14.6, 806.0], [14.7, 807.0], [14.8, 807.0], [14.9, 807.0], [15.0, 808.0], [15.1, 808.0], [15.2, 808.0], [15.3, 808.0], [15.4, 809.0], [15.5, 809.0], [15.6, 809.0], [15.7, 810.0], [15.8, 810.0], [15.9, 810.0], [16.0, 811.0], [16.1, 811.0], [16.2, 811.0], [16.3, 811.0], [16.4, 812.0], [16.5, 812.0], [16.6, 812.0], [16.7, 813.0], [16.8, 813.0], [16.9, 813.0], [17.0, 814.0], [17.1, 814.0], [17.2, 814.0], [17.3, 814.0], [17.4, 815.0], [17.5, 815.0], [17.6, 815.0], [17.7, 815.0], [17.8, 816.0], [17.9, 816.0], [18.0, 816.0], [18.1, 817.0], [18.2, 817.0], [18.3, 817.0], [18.4, 817.0], [18.5, 818.0], [18.6, 818.0], [18.7, 818.0], [18.8, 818.0], [18.9, 819.0], [19.0, 819.0], [19.1, 819.0], [19.2, 819.0], [19.3, 820.0], [19.4, 820.0], [19.5, 820.0], [19.6, 821.0], [19.7, 821.0], [19.8, 821.0], [19.9, 821.0], [20.0, 821.0], [20.1, 822.0], [20.2, 822.0], [20.3, 822.0], [20.4, 822.0], [20.5, 823.0], [20.6, 823.0], [20.7, 823.0], [20.8, 823.0], [20.9, 824.0], [21.0, 824.0], [21.1, 824.0], [21.2, 824.0], [21.3, 825.0], [21.4, 825.0], [21.5, 825.0], [21.6, 825.0], [21.7, 826.0], [21.8, 826.0], [21.9, 826.0], [22.0, 826.0], [22.1, 827.0], [22.2, 827.0], [22.3, 827.0], [22.4, 827.0], [22.5, 827.0], [22.6, 828.0], [22.7, 828.0], [22.8, 828.0], [22.9, 828.0], [23.0, 829.0], [23.1, 829.0], [23.2, 829.0], [23.3, 829.0], [23.4, 829.0], [23.5, 830.0], [23.6, 830.0], [23.7, 830.0], [23.8, 830.0], [23.9, 831.0], [24.0, 831.0], [24.1, 831.0], [24.2, 831.0], [24.3, 832.0], [24.4, 832.0], [24.5, 832.0], [24.6, 832.0], [24.7, 832.0], [24.8, 833.0], [24.9, 833.0], [25.0, 833.0], [25.1, 833.0], [25.2, 834.0], [25.3, 834.0], [25.4, 834.0], [25.5, 834.0], [25.6, 834.0], [25.7, 835.0], [25.8, 835.0], [25.9, 835.0], [26.0, 835.0], [26.1, 835.0], [26.2, 836.0], [26.3, 836.0], [26.4, 836.0], [26.5, 836.0], [26.6, 837.0], [26.7, 837.0], [26.8, 837.0], [26.9, 837.0], [27.0, 837.0], [27.1, 838.0], [27.2, 838.0], [27.3, 838.0], [27.4, 838.0], [27.5, 839.0], [27.6, 839.0], [27.7, 839.0], [27.8, 839.0], [27.9, 839.0], [28.0, 840.0], [28.1, 840.0], [28.2, 840.0], [28.3, 840.0], [28.4, 840.0], [28.5, 841.0], [28.6, 841.0], [28.7, 841.0], [28.8, 841.0], [28.9, 842.0], [29.0, 842.0], [29.1, 842.0], [29.2, 842.0], [29.3, 842.0], [29.4, 843.0], [29.5, 843.0], [29.6, 843.0], [29.7, 843.0], [29.8, 843.0], [29.9, 843.0], [30.0, 844.0], [30.1, 844.0], [30.2, 844.0], [30.3, 844.0], [30.4, 845.0], [30.5, 845.0], [30.6, 845.0], [30.7, 845.0], [30.8, 845.0], [30.9, 846.0], [31.0, 846.0], [31.1, 846.0], [31.2, 846.0], [31.3, 846.0], [31.4, 847.0], [31.5, 847.0], [31.6, 847.0], [31.7, 847.0], [31.8, 847.0], [31.9, 848.0], [32.0, 848.0], [32.1, 848.0], [32.2, 848.0], [32.3, 848.0], [32.4, 849.0], [32.5, 849.0], [32.6, 849.0], [32.7, 849.0], [32.8, 849.0], [32.9, 850.0], [33.0, 850.0], [33.1, 850.0], [33.2, 850.0], [33.3, 850.0], [33.4, 850.0], [33.5, 851.0], [33.6, 851.0], [33.7, 851.0], [33.8, 851.0], [33.9, 851.0], [34.0, 852.0], [34.1, 852.0], [34.2, 852.0], [34.3, 852.0], [34.4, 852.0], [34.5, 853.0], [34.6, 853.0], [34.7, 853.0], [34.8, 853.0], [34.9, 853.0], [35.0, 854.0], [35.1, 854.0], [35.2, 854.0], [35.3, 854.0], [35.4, 854.0], [35.5, 854.0], [35.6, 855.0], [35.7, 855.0], [35.8, 855.0], [35.9, 855.0], [36.0, 855.0], [36.1, 856.0], [36.2, 856.0], [36.3, 856.0], [36.4, 856.0], [36.5, 856.0], [36.6, 856.0], [36.7, 857.0], [36.8, 857.0], [36.9, 857.0], [37.0, 857.0], [37.1, 857.0], [37.2, 858.0], [37.3, 858.0], [37.4, 858.0], [37.5, 858.0], [37.6, 858.0], [37.7, 858.0], [37.8, 859.0], [37.9, 859.0], [38.0, 859.0], [38.1, 859.0], [38.2, 859.0], [38.3, 860.0], [38.4, 860.0], [38.5, 860.0], [38.6, 860.0], [38.7, 860.0], [38.8, 861.0], [38.9, 861.0], [39.0, 861.0], [39.1, 861.0], [39.2, 861.0], [39.3, 861.0], [39.4, 862.0], [39.5, 862.0], [39.6, 862.0], [39.7, 862.0], [39.8, 862.0], [39.9, 863.0], [40.0, 863.0], [40.1, 863.0], [40.2, 863.0], [40.3, 863.0], [40.4, 863.0], [40.5, 864.0], [40.6, 864.0], [40.7, 864.0], [40.8, 864.0], [40.9, 864.0], [41.0, 865.0], [41.1, 865.0], [41.2, 865.0], [41.3, 865.0], [41.4, 865.0], [41.5, 865.0], [41.6, 866.0], [41.7, 866.0], [41.8, 866.0], [41.9, 866.0], [42.0, 866.0], [42.1, 867.0], [42.2, 867.0], [42.3, 867.0], [42.4, 867.0], [42.5, 867.0], [42.6, 868.0], [42.7, 868.0], [42.8, 868.0], [42.9, 868.0], [43.0, 868.0], [43.1, 868.0], [43.2, 869.0], [43.3, 869.0], [43.4, 869.0], [43.5, 869.0], [43.6, 869.0], [43.7, 870.0], [43.8, 870.0], [43.9, 870.0], [44.0, 870.0], [44.1, 870.0], [44.2, 871.0], [44.3, 871.0], [44.4, 871.0], [44.5, 871.0], [44.6, 871.0], [44.7, 871.0], [44.8, 872.0], [44.9, 872.0], [45.0, 872.0], [45.1, 872.0], [45.2, 872.0], [45.3, 873.0], [45.4, 873.0], [45.5, 873.0], [45.6, 873.0], [45.7, 873.0], [45.8, 873.0], [45.9, 874.0], [46.0, 874.0], [46.1, 874.0], [46.2, 874.0], [46.3, 874.0], [46.4, 875.0], [46.5, 875.0], [46.6, 875.0], [46.7, 875.0], [46.8, 875.0], [46.9, 876.0], [47.0, 876.0], [47.1, 876.0], [47.2, 876.0], [47.3, 876.0], [47.4, 876.0], [47.5, 877.0], [47.6, 877.0], [47.7, 877.0], [47.8, 877.0], [47.9, 877.0], [48.0, 878.0], [48.1, 878.0], [48.2, 878.0], [48.3, 878.0], [48.4, 878.0], [48.5, 878.0], [48.6, 879.0], [48.7, 879.0], [48.8, 879.0], [48.9, 879.0], [49.0, 879.0], [49.1, 880.0], [49.2, 880.0], [49.3, 880.0], [49.4, 880.0], [49.5, 880.0], [49.6, 880.0], [49.7, 881.0], [49.8, 881.0], [49.9, 881.0], [50.0, 881.0], [50.1, 881.0], [50.2, 882.0], [50.3, 882.0], [50.4, 882.0], [50.5, 882.0], [50.6, 882.0], [50.7, 883.0], [50.8, 883.0], [50.9, 883.0], [51.0, 883.0], [51.1, 883.0], [51.2, 884.0], [51.3, 884.0], [51.4, 884.0], [51.5, 884.0], [51.6, 884.0], [51.7, 884.0], [51.8, 885.0], [51.9, 885.0], [52.0, 885.0], [52.1, 885.0], [52.2, 885.0], [52.3, 886.0], [52.4, 886.0], [52.5, 886.0], [52.6, 886.0], [52.7, 887.0], [52.8, 887.0], [52.9, 887.0], [53.0, 887.0], [53.1, 887.0], [53.2, 887.0], [53.3, 888.0], [53.4, 888.0], [53.5, 888.0], [53.6, 888.0], [53.7, 888.0], [53.8, 889.0], [53.9, 889.0], [54.0, 889.0], [54.1, 889.0], [54.2, 889.0], [54.3, 890.0], [54.4, 890.0], [54.5, 890.0], [54.6, 890.0], [54.7, 890.0], [54.8, 891.0], [54.9, 891.0], [55.0, 891.0], [55.1, 891.0], [55.2, 891.0], [55.3, 891.0], [55.4, 892.0], [55.5, 892.0], [55.6, 892.0], [55.7, 892.0], [55.8, 892.0], [55.9, 893.0], [56.0, 893.0], [56.1, 893.0], [56.2, 893.0], [56.3, 893.0], [56.4, 894.0], [56.5, 894.0], [56.6, 894.0], [56.7, 894.0], [56.8, 894.0], [56.9, 895.0], [57.0, 895.0], [57.1, 895.0], [57.2, 895.0], [57.3, 895.0], [57.4, 896.0], [57.5, 896.0], [57.6, 896.0], [57.7, 896.0], [57.8, 896.0], [57.9, 896.0], [58.0, 897.0], [58.1, 897.0], [58.2, 897.0], [58.3, 897.0], [58.4, 897.0], [58.5, 898.0], [58.6, 898.0], [58.7, 898.0], [58.8, 898.0], [58.9, 899.0], [59.0, 899.0], [59.1, 899.0], [59.2, 899.0], [59.3, 899.0], [59.4, 900.0], [59.5, 900.0], [59.6, 900.0], [59.7, 900.0], [59.8, 900.0], [59.9, 901.0], [60.0, 901.0], [60.1, 901.0], [60.2, 901.0], [60.3, 901.0], [60.4, 902.0], [60.5, 902.0], [60.6, 902.0], [60.7, 902.0], [60.8, 902.0], [60.9, 903.0], [61.0, 903.0], [61.1, 903.0], [61.2, 903.0], [61.3, 904.0], [61.4, 904.0], [61.5, 904.0], [61.6, 904.0], [61.7, 904.0], [61.8, 905.0], [61.9, 905.0], [62.0, 905.0], [62.1, 905.0], [62.2, 905.0], [62.3, 906.0], [62.4, 906.0], [62.5, 906.0], [62.6, 906.0], [62.7, 906.0], [62.8, 907.0], [62.9, 907.0], [63.0, 907.0], [63.1, 907.0], [63.2, 908.0], [63.3, 908.0], [63.4, 908.0], [63.5, 908.0], [63.6, 908.0], [63.7, 909.0], [63.8, 909.0], [63.9, 909.0], [64.0, 909.0], [64.1, 909.0], [64.2, 910.0], [64.3, 910.0], [64.4, 910.0], [64.5, 910.0], [64.6, 910.0], [64.7, 911.0], [64.8, 911.0], [64.9, 911.0], [65.0, 911.0], [65.1, 912.0], [65.2, 912.0], [65.3, 912.0], [65.4, 912.0], [65.5, 912.0], [65.6, 913.0], [65.7, 913.0], [65.8, 913.0], [65.9, 913.0], [66.0, 914.0], [66.1, 914.0], [66.2, 914.0], [66.3, 914.0], [66.4, 914.0], [66.5, 915.0], [66.6, 915.0], [66.7, 915.0], [66.8, 915.0], [66.9, 916.0], [67.0, 916.0], [67.1, 916.0], [67.2, 916.0], [67.3, 916.0], [67.4, 917.0], [67.5, 917.0], [67.6, 917.0], [67.7, 917.0], [67.8, 917.0], [67.9, 918.0], [68.0, 918.0], [68.1, 918.0], [68.2, 918.0], [68.3, 919.0], [68.4, 919.0], [68.5, 919.0], [68.6, 919.0], [68.7, 920.0], [68.8, 920.0], [68.9, 920.0], [69.0, 920.0], [69.1, 921.0], [69.2, 921.0], [69.3, 921.0], [69.4, 921.0], [69.5, 921.0], [69.6, 922.0], [69.7, 922.0], [69.8, 922.0], [69.9, 922.0], [70.0, 923.0], [70.1, 923.0], [70.2, 923.0], [70.3, 923.0], [70.4, 924.0], [70.5, 924.0], [70.6, 924.0], [70.7, 924.0], [70.8, 924.0], [70.9, 925.0], [71.0, 925.0], [71.1, 925.0], [71.2, 925.0], [71.3, 926.0], [71.4, 926.0], [71.5, 926.0], [71.6, 926.0], [71.7, 927.0], [71.8, 927.0], [71.9, 927.0], [72.0, 927.0], [72.1, 928.0], [72.2, 928.0], [72.3, 928.0], [72.4, 928.0], [72.5, 929.0], [72.6, 929.0], [72.7, 929.0], [72.8, 929.0], [72.9, 930.0], [73.0, 930.0], [73.1, 930.0], [73.2, 930.0], [73.3, 931.0], [73.4, 931.0], [73.5, 931.0], [73.6, 931.0], [73.7, 932.0], [73.8, 932.0], [73.9, 932.0], [74.0, 932.0], [74.1, 933.0], [74.2, 933.0], [74.3, 933.0], [74.4, 933.0], [74.5, 934.0], [74.6, 934.0], [74.7, 934.0], [74.8, 934.0], [74.9, 935.0], [75.0, 935.0], [75.1, 935.0], [75.2, 935.0], [75.3, 936.0], [75.4, 936.0], [75.5, 936.0], [75.6, 937.0], [75.7, 937.0], [75.8, 937.0], [75.9, 937.0], [76.0, 938.0], [76.1, 938.0], [76.2, 938.0], [76.3, 938.0], [76.4, 939.0], [76.5, 939.0], [76.6, 939.0], [76.7, 939.0], [76.8, 940.0], [76.9, 940.0], [77.0, 940.0], [77.1, 941.0], [77.2, 941.0], [77.3, 941.0], [77.4, 941.0], [77.5, 942.0], [77.6, 942.0], [77.7, 942.0], [77.8, 942.0], [77.9, 943.0], [78.0, 943.0], [78.1, 943.0], [78.2, 944.0], [78.3, 944.0], [78.4, 944.0], [78.5, 945.0], [78.6, 945.0], [78.7, 945.0], [78.8, 945.0], [78.9, 946.0], [79.0, 946.0], [79.1, 946.0], [79.2, 947.0], [79.3, 947.0], [79.4, 947.0], [79.5, 948.0], [79.6, 948.0], [79.7, 948.0], [79.8, 949.0], [79.9, 949.0], [80.0, 949.0], [80.1, 949.0], [80.2, 950.0], [80.3, 950.0], [80.4, 950.0], [80.5, 951.0], [80.6, 951.0], [80.7, 951.0], [80.8, 952.0], [80.9, 952.0], [81.0, 952.0], [81.1, 953.0], [81.2, 953.0], [81.3, 953.0], [81.4, 953.0], [81.5, 954.0], [81.6, 954.0], [81.7, 954.0], [81.8, 955.0], [81.9, 955.0], [82.0, 955.0], [82.1, 956.0], [82.2, 956.0], [82.3, 956.0], [82.4, 957.0], [82.5, 957.0], [82.6, 957.0], [82.7, 958.0], [82.8, 958.0], [82.9, 958.0], [83.0, 959.0], [83.1, 959.0], [83.2, 959.0], [83.3, 960.0], [83.4, 960.0], [83.5, 960.0], [83.6, 961.0], [83.7, 961.0], [83.8, 961.0], [83.9, 962.0], [84.0, 962.0], [84.1, 962.0], [84.2, 963.0], [84.3, 963.0], [84.4, 964.0], [84.5, 964.0], [84.6, 964.0], [84.7, 965.0], [84.8, 965.0], [84.9, 965.0], [85.0, 966.0], [85.1, 966.0], [85.2, 966.0], [85.3, 967.0], [85.4, 967.0], [85.5, 968.0], [85.6, 968.0], [85.7, 968.0], [85.8, 969.0], [85.9, 969.0], [86.0, 969.0], [86.1, 970.0], [86.2, 970.0], [86.3, 971.0], [86.4, 971.0], [86.5, 971.0], [86.6, 972.0], [86.7, 972.0], [86.8, 973.0], [86.9, 973.0], [87.0, 973.0], [87.1, 974.0], [87.2, 974.0], [87.3, 975.0], [87.4, 975.0], [87.5, 976.0], [87.6, 976.0], [87.7, 976.0], [87.8, 977.0], [87.9, 977.0], [88.0, 978.0], [88.1, 978.0], [88.2, 979.0], [88.3, 979.0], [88.4, 980.0], [88.5, 980.0], [88.6, 981.0], [88.7, 981.0], [88.8, 982.0], [88.9, 982.0], [89.0, 983.0], [89.1, 983.0], [89.2, 984.0], [89.3, 984.0], [89.4, 985.0], [89.5, 985.0], [89.6, 986.0], [89.7, 986.0], [89.8, 987.0], [89.9, 987.0], [90.0, 988.0], [90.1, 988.0], [90.2, 989.0], [90.3, 989.0], [90.4, 990.0], [90.5, 991.0], [90.6, 991.0], [90.7, 992.0], [90.8, 992.0], [90.9, 993.0], [91.0, 993.0], [91.1, 994.0], [91.2, 994.0], [91.3, 995.0], [91.4, 996.0], [91.5, 996.0], [91.6, 997.0], [91.7, 997.0], [91.8, 998.0], [91.9, 999.0], [92.0, 999.0], [92.1, 1000.0], [92.2, 1001.0], [92.3, 1001.0], [92.4, 1002.0], [92.5, 1002.0], [92.6, 1003.0], [92.7, 1004.0], [92.8, 1004.0], [92.9, 1005.0], [93.0, 1006.0], [93.1, 1006.0], [93.2, 1007.0], [93.3, 1008.0], [93.4, 1009.0], [93.5, 1009.0], [93.6, 1010.0], [93.7, 1011.0], [93.8, 1012.0], [93.9, 1012.0], [94.0, 1013.0], [94.1, 1014.0], [94.2, 1015.0], [94.3, 1016.0], [94.4, 1017.0], [94.5, 1017.0], [94.6, 1018.0], [94.7, 1019.0], [94.8, 1020.0], [94.9, 1021.0], [95.0, 1022.0], [95.1, 1023.0], [95.2, 1024.0], [95.3, 1025.0], [95.4, 1026.0], [95.5, 1027.0], [95.6, 1028.0], [95.7, 1029.0], [95.8, 1030.0], [95.9, 1031.0], [96.0, 1032.0], [96.1, 1034.0], [96.2, 1035.0], [96.3, 1036.0], [96.4, 1037.0], [96.5, 1038.0], [96.6, 1040.0], [96.7, 1041.0], [96.8, 1042.0], [96.9, 1044.0], [97.0, 1045.0], [97.1, 1047.0], [97.2, 1048.0], [97.3, 1050.0], [97.4, 1051.0], [97.5, 1053.0], [97.6, 1055.0], [97.7, 1057.0], [97.8, 1059.0], [97.9, 1061.0], [98.0, 1063.0], [98.1, 1066.0], [98.2, 1068.0], [98.3, 1071.0], [98.4, 1074.0], [98.5, 1077.0], [98.6, 1080.0], [98.7, 1083.0], [98.8, 1087.0], [98.9, 1091.0], [99.0, 1095.0], [99.1, 1101.0], [99.2, 1107.0], [99.3, 1114.0], [99.4, 1122.0], [99.5, 1135.0], [99.6, 1149.0], [99.7, 1171.0], [99.8, 1225.0], [99.9, 1327.0], [100.0, 1741.0]], "isOverall": false, "label": "extract", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 3.0, "minX": 100.0, "maxY": 73249.0, "series": [{"data": [[600.0, 3197.0], [700.0, 13024.0], [800.0, 73249.0], [200.0, 930.0], [900.0, 51192.0], [1000.0, 11039.0], [1100.0, 1059.0], [1200.0, 190.0], [300.0, 839.0], [1300.0, 90.0], [1400.0, 44.0], [1500.0, 43.0], [1600.0, 8.0], [400.0, 804.0], [100.0, 154.0], [1700.0, 3.0], [500.0, 935.0]], "isOverall": false, "label": "extract", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1700.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 53.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 154012.0, "series": [{"data": [[0.0, 2735.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 154012.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 53.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 134.13735187086036, "minX": 1.6660914E12, "maxY": 196.0, "series": [{"data": [[1.6660914E12, 196.0], [1.66609206E12, 193.84396998530178], [1.666092E12, 196.0], [1.6660917E12, 196.0], [1.66609212E12, 134.13735187086036], [1.66609182E12, 196.0], [1.66609176E12, 196.0], [1.66609146E12, 196.0], [1.66609188E12, 196.0], [1.66609158E12, 196.0], [1.66609152E12, 196.0], [1.66609164E12, 196.0], [1.66609194E12, 196.0]], "isOverall": false, "label": "196", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66609212E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 173.75, "minX": 1.0, "maxY": 917.9411201531823, "series": [{"data": [[2.0, 192.8], [3.0, 193.33333333333334], [4.0, 173.75], [5.0, 176.5], [6.0, 197.33333333333334], [7.0, 188.15384615384613], [8.0, 193.41666666666666], [9.0, 193.66666666666666], [10.0, 197.33333333333334], [11.0, 199.29166666666666], [12.0, 198.5], [13.0, 200.42857142857142], [14.0, 200.15384615384616], [15.0, 215.52941176470588], [16.0, 220.25], [17.0, 200.83333333333331], [18.0, 207.11111111111111], [19.0, 209.72727272727272], [20.0, 219.625], [21.0, 211.9047619047619], [22.0, 222.9310344827586], [23.0, 228.5], [24.0, 237.2941176470588], [25.0, 229.75], [26.0, 234.09090909090907], [27.0, 238.66666666666666], [28.0, 242.3888888888889], [29.0, 254.0], [30.0, 249.1666666666667], [31.0, 242.8888888888889], [33.0, 243.25], [32.0, 262.6666666666667], [35.0, 262.6404494382022], [34.0, 254.98275862068962], [37.0, 286.2], [36.0, 254.79999999999998], [39.0, 267.0], [38.0, 273.59999999999997], [41.0, 262.48214285714295], [40.0, 254.25], [43.0, 265.2], [42.0, 281.45454545454544], [45.0, 285.26666666666665], [44.0, 286.8064516129031], [47.0, 290.13043478260875], [46.0, 282.4444444444444], [49.0, 288.2888888888889], [48.0, 276.17391304347836], [51.0, 309.57142857142856], [50.0, 279.7222222222222], [53.0, 262.0], [52.0, 299.56666666666666], [55.0, 293.6067415730338], [54.0, 317.0], [57.0, 295.42857142857144], [56.0, 296.04687500000006], [59.0, 318.7954545454546], [58.0, 315.8805970149255], [61.0, 338.47368421052636], [60.0, 362.54545454545456], [63.0, 342.43902439024384], [62.0, 343.5], [67.0, 341.7777777777777], [66.0, 361.0422535211267], [65.0, 342.265306122449], [64.0, 346.12500000000006], [71.0, 393.3125], [70.0, 353.6], [69.0, 366.8888888888889], [68.0, 375.73333333333335], [75.0, 385.86746987951807], [74.0, 372.75], [73.0, 408.18367346938794], [72.0, 400.8461538461538], [79.0, 411.77464788732385], [78.0, 406.59375000000006], [77.0, 402.0361445783132], [76.0, 402.1136363636364], [83.0, 450.9999999999999], [82.0, 439.2941176470587], [81.0, 411.53191489361706], [80.0, 442.9890109890111], [87.0, 520.9999999999999], [86.0, 525.6612903225806], [85.0, 525.9259259259258], [84.0, 455.47999999999996], [91.0, 437.0], [90.0, 488.94117647058823], [89.0, 474.74666666666667], [88.0, 475.65945945945924], [95.0, 515.3939393939395], [94.0, 498.69565217391306], [93.0, 505.3225806451614], [92.0, 450.0], [99.0, 524.422222222222], [98.0, 516.3888888888889], [97.0, 501.76470588235287], [96.0, 460.0], [103.0, 539.4054054054051], [102.0, 545.3684210526316], [101.0, 533.0909090909091], [100.0, 532.875], [107.0, 588.6865671641791], [106.0, 594.52], [105.0, 629.8888888888889], [104.0, 567.9333333333334], [111.0, 598.6111111111112], [110.0, 601.4444444444445], [109.0, 601.5405405405405], [108.0, 606.3181818181819], [115.0, 551.1923076923076], [114.0, 559.7804878048779], [113.0, 567.8333333333335], [112.0, 549.375], [119.0, 601.2727272727271], [118.0, 572.9800000000002], [117.0, 540.9333333333334], [116.0, 570.1428571428571], [123.0, 612.5932203389831], [122.0, 617.0], [121.0, 594.3636363636363], [120.0, 597.025641025641], [127.0, 648.1333333333336], [126.0, 678.1509433962264], [125.0, 627.2307692307692], [124.0, 636.6136363636363], [135.0, 662.6285714285714], [134.0, 654.608695652174], [133.0, 647.6666666666666], [132.0, 622.1666666666666], [131.0, 670.4666666666666], [130.0, 673.5454545454546], [129.0, 685.3796296296296], [128.0, 702.5555555555555], [143.0, 681.5333333333333], [142.0, 709.1666666666667], [141.0, 698.8000000000001], [140.0, 685.5897435897438], [139.0, 673.919191919192], [138.0, 663.5454545454545], [137.0, 672.0212765957448], [136.0, 658.1176470588234], [151.0, 698.4482758620688], [150.0, 705.1978021978022], [149.0, 697.475], [148.0, 692.0109890109887], [147.0, 703.2666666666667], [146.0, 712.75], [145.0, 704.0109289617487], [159.0, 772.3], [158.0, 775.1165644171776], [157.0, 782.05291005291], [156.0, 773.470588235294], [155.0, 763.6078431372548], [154.0, 771.0461538461537], [153.0, 755.225806451613], [152.0, 717.5569620253164], [167.0, 801.3653846153845], [166.0, 768.7941176470589], [165.0, 759.4330708661415], [164.0, 765.4749999999998], [163.0, 787.7142857142857], [162.0, 756.5555555555555], [161.0, 760.9610389610388], [160.0, 767.5079365079364], [175.0, 845.7058823529413], [174.0, 837.5681818181816], [173.0, 848.3857142857139], [172.0, 833.9277108433736], [171.0, 853.6923076923077], [170.0, 813.8387096774196], [169.0, 820.75], [168.0, 820.6153846153845], [183.0, 866.5480349344975], [182.0, 840.4497041420119], [181.0, 841.3768115942029], [180.0, 851.5652173913044], [179.0, 887.75], [178.0, 837.8548387096777], [177.0, 826.9111111111113], [176.0, 823.957295373665], [191.0, 886.9122155132393], [190.0, 884.1397557666207], [189.0, 879.9492857142856], [188.0, 863.1869918699186], [187.0, 859.2857142857142], [186.0, 881.3000000000001], [185.0, 887.7424242424242], [184.0, 871.9], [196.0, 891.6189230847962], [195.0, 917.9411201531823], [194.0, 904.691842900302], [193.0, 883.9030100334443], [192.0, 881.4798534798532], [1.0, 193.25]], "isOverall": false, "label": "extract", "isController": false}, {"data": [[191.5940497448976, 876.2451977040882]], "isOverall": false, "label": "extract-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 196.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 0.0, "minX": 1.6660914E12, "maxY": 2.87873534E7, "series": [{"data": [[1.6660914E12, 2098713.2], [1.66609206E12, 2.8225706033333335E7], [1.666092E12, 2.824977935E7], [1.6660917E12, 2.8304691716666665E7], [1.66609212E12, 2.40731615E7], [1.66609182E12, 2.7968772866666667E7], [1.66609176E12, 2.732006395E7], [1.66609146E12, 2.8355912666666668E7], [1.66609188E12, 2.828601245E7], [1.66609158E12, 2.87873534E7], [1.66609152E12, 2.8418387583333332E7], [1.66609164E12, 2.8614220533333335E7], [1.66609194E12, 2.8065818083333332E7]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6660914E12, 0.0], [1.66609206E12, 0.0], [1.666092E12, 0.0], [1.6660917E12, 0.0], [1.66609212E12, 0.0], [1.66609182E12, 0.0], [1.66609176E12, 0.0], [1.66609146E12, 0.0], [1.66609188E12, 0.0], [1.66609158E12, 0.0], [1.66609152E12, 0.0], [1.66609164E12, 0.0], [1.66609194E12, 0.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66609212E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 658.2261827003805, "minX": 1.6660914E12, "maxY": 1113.9950049950041, "series": [{"data": [[1.6660914E12, 1113.9950049950041], [1.66609206E12, 901.1973389030697], [1.666092E12, 907.7729099057293], [1.6660917E12, 876.0947980324975], [1.66609212E12, 658.2261827003805], [1.66609182E12, 919.1193119624678], [1.66609176E12, 924.7961142137971], [1.66609146E12, 869.3491500369544], [1.66609188E12, 907.9999999999991], [1.66609158E12, 856.4037859483058], [1.66609152E12, 867.1677238530771], [1.66609164E12, 860.9972167289199], [1.66609194E12, 914.3509877119324]], "isOverall": false, "label": "extract", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66609212E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 655.6786414108423, "minX": 1.6660914E12, "maxY": 1107.895104895104, "series": [{"data": [[1.6660914E12, 1107.895104895104], [1.66609206E12, 898.7182640983975], [1.666092E12, 905.3160253438368], [1.6660917E12, 873.7441496497237], [1.66609212E12, 655.6786414108423], [1.66609182E12, 916.638154808442], [1.66609176E12, 922.3432706678217], [1.66609146E12, 866.9625277161889], [1.66609188E12, 905.5633585429842], [1.66609158E12, 854.0755005460495], [1.66609152E12, 864.7937748930502], [1.66609164E12, 858.6431553504689], [1.66609194E12, 911.8771193031567]], "isOverall": false, "label": "extract", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66609212E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.6660914E12, "maxY": 4.9E-324, "series": [{"data": [[1.6660914E12, 0.0], [1.66609206E12, 0.0], [1.666092E12, 0.0], [1.6660917E12, 0.0], [1.66609212E12, 0.0], [1.66609182E12, 0.0], [1.66609176E12, 0.0], [1.66609146E12, 0.0], [1.66609188E12, 0.0], [1.66609158E12, 0.0], [1.66609152E12, 0.0], [1.66609164E12, 0.0], [1.66609194E12, 0.0]], "isOverall": false, "label": "extract", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66609212E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 150.0, "minX": 1.6660914E12, "maxY": 1741.0, "series": [{"data": [[1.6660914E12, 1741.0], [1.66609206E12, 1258.0], [1.666092E12, 1236.0], [1.6660917E12, 1187.0], [1.66609212E12, 1123.0], [1.66609182E12, 1264.0], [1.66609176E12, 1337.0], [1.66609146E12, 1261.0], [1.66609188E12, 1222.0], [1.66609158E12, 1197.0], [1.66609152E12, 1243.0], [1.66609164E12, 1314.0], [1.66609194E12, 1215.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6660914E12, 654.0], [1.66609206E12, 724.0], [1.666092E12, 746.0], [1.6660917E12, 600.0], [1.66609212E12, 150.0], [1.66609182E12, 741.0], [1.66609176E12, 727.0], [1.66609146E12, 597.0], [1.66609188E12, 745.0], [1.66609158E12, 586.0], [1.66609152E12, 587.0], [1.66609164E12, 595.0], [1.66609194E12, 754.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6660914E12, 1396.6000000000001], [1.66609206E12, 992.0], [1.666092E12, 999.0], [1.6660917E12, 969.0], [1.66609212E12, 899.0], [1.66609182E12, 1012.0], [1.66609176E12, 1026.0], [1.66609146E12, 966.0], [1.66609188E12, 998.0], [1.66609158E12, 948.0], [1.66609152E12, 963.0], [1.66609164E12, 957.0], [1.66609194E12, 1006.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6660914E12, 1600.0], [1.66609206E12, 1084.0], [1.666092E12, 1089.0], [1.6660917E12, 1059.0], [1.66609212E12, 1003.0], [1.66609182E12, 1098.0900000000001], [1.66609176E12, 1129.0], [1.66609146E12, 1064.6900000000005], [1.66609188E12, 1082.0], [1.66609158E12, 1033.0], [1.66609152E12, 1054.4099999999999], [1.66609164E12, 1080.0], [1.66609194E12, 1095.4099999999999]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6660914E12, 1511.6], [1.66609206E12, 1025.0], [1.666092E12, 1028.0], [1.6660917E12, 1002.0], [1.66609212E12, 939.0], [1.66609182E12, 1043.0], [1.66609176E12, 1060.0], [1.66609146E12, 999.0], [1.66609188E12, 1027.0], [1.66609158E12, 976.0], [1.66609152E12, 994.0], [1.66609164E12, 992.0], [1.66609194E12, 1036.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66609212E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 176.0, "minX": 1.0, "maxY": 1397.0, "series": [{"data": [[9.0, 185.0], [19.0, 176.0], [36.0, 187.5], [59.0, 194.0], [69.0, 1164.0], [78.0, 206.5], [98.0, 212.0], [118.0, 233.0], [134.0, 262.0], [149.0, 1397.0], [144.0, 513.5], [153.0, 270.0], [167.0, 288.0], [170.0, 1251.5], [175.0, 1081.0], [174.0, 1012.5], [183.0, 293.0], [191.0, 1009.0], [184.0, 952.0], [190.0, 887.0], [189.0, 659.0], [187.0, 495.5], [185.0, 388.5], [196.0, 731.5], [198.0, 916.5], [193.0, 955.0], [197.0, 974.5], [199.0, 977.0], [194.0, 546.0], [195.0, 350.0], [192.0, 302.0], [203.0, 912.0], [201.0, 968.0], [205.0, 914.0], [204.0, 965.0], [207.0, 918.0], [200.0, 943.0], [202.0, 898.0], [206.0, 897.0], [215.0, 892.0], [208.0, 903.0], [211.0, 904.0], [213.0, 906.0], [212.0, 906.0], [214.0, 900.0], [210.0, 913.0], [209.0, 921.0], [219.0, 889.0], [222.0, 876.0], [218.0, 890.0], [216.0, 894.0], [221.0, 885.0], [220.0, 878.0], [223.0, 881.0], [217.0, 893.0], [224.0, 869.0], [228.0, 859.0], [231.0, 851.0], [225.0, 865.0], [229.0, 864.0], [230.0, 853.0], [226.0, 867.0], [227.0, 867.0], [237.0, 844.0], [238.0, 836.0], [236.0, 850.0], [234.0, 855.0], [232.0, 849.0], [235.0, 845.0], [233.0, 849.0], [239.0, 839.5], [241.0, 840.0], [240.0, 833.0], [242.0, 835.5], [1.0, 248.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 242.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 174.0, "minX": 1.0, "maxY": 1389.0, "series": [{"data": [[9.0, 183.0], [19.0, 174.0], [36.0, 186.0], [59.0, 192.0], [69.0, 1136.0], [78.0, 204.5], [98.0, 210.0], [118.0, 230.0], [134.0, 259.0], [149.0, 1389.0], [144.0, 511.5], [153.0, 268.0], [167.0, 287.0], [170.0, 1246.0], [175.0, 1079.0], [174.0, 1010.5], [183.0, 291.0], [191.0, 1006.0], [184.0, 950.0], [190.0, 885.0], [189.0, 655.0], [187.0, 492.5], [185.0, 386.5], [196.0, 728.5], [198.0, 914.0], [193.0, 950.0], [197.0, 971.5], [199.0, 975.0], [194.0, 543.0], [195.0, 348.0], [192.0, 300.0], [203.0, 910.0], [201.0, 965.0], [205.0, 911.0], [204.0, 962.0], [207.0, 915.0], [200.0, 940.0], [202.0, 895.5], [206.0, 894.0], [215.0, 890.0], [208.0, 900.0], [211.0, 902.0], [213.0, 904.0], [212.0, 904.0], [214.0, 897.0], [210.0, 911.0], [209.0, 918.0], [219.0, 886.0], [222.0, 874.0], [218.0, 888.0], [216.0, 891.0], [221.0, 882.0], [220.0, 875.0], [223.0, 879.0], [217.0, 891.0], [224.0, 867.0], [228.0, 857.0], [231.0, 848.0], [225.0, 863.0], [229.0, 862.0], [230.0, 850.0], [226.0, 865.0], [227.0, 865.0], [237.0, 842.0], [238.0, 834.0], [236.0, 848.0], [234.0, 853.0], [232.0, 846.0], [235.0, 842.0], [233.0, 847.0], [239.0, 837.0], [241.0, 838.0], [240.0, 831.0], [242.0, 832.0], [1.0, 247.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 242.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 19.95, "minX": 1.6660914E12, "maxY": 228.91666666666666, "series": [{"data": [[1.6660914E12, 19.95], [1.66609206E12, 215.35], [1.666092E12, 215.7], [1.6660917E12, 223.61666666666667], [1.66609212E12, 175.45], [1.66609182E12, 213.16666666666666], [1.66609176E12, 211.9], [1.66609146E12, 225.5], [1.66609188E12, 215.96666666666667], [1.66609158E12, 228.91666666666666], [1.66609152E12, 225.96666666666667], [1.66609164E12, 227.55], [1.66609194E12, 214.3]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66609212E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 16.683333333333334, "minX": 1.6660914E12, "maxY": 228.91666666666666, "series": [{"data": [[1.6660914E12, 16.683333333333334], [1.66609206E12, 215.45], [1.666092E12, 215.7], [1.6660917E12, 223.63333333333333], [1.66609212E12, 178.61666666666667], [1.66609182E12, 213.16666666666666], [1.66609176E12, 211.88333333333333], [1.66609146E12, 225.5], [1.66609188E12, 215.96666666666667], [1.66609158E12, 228.91666666666666], [1.66609152E12, 225.96666666666667], [1.66609164E12, 227.55], [1.66609194E12, 214.3]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66609212E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 16.683333333333334, "minX": 1.6660914E12, "maxY": 228.91666666666666, "series": [{"data": [[1.6660914E12, 16.683333333333334], [1.66609206E12, 215.45], [1.666092E12, 215.7], [1.6660917E12, 223.63333333333333], [1.66609212E12, 178.61666666666667], [1.66609182E12, 213.16666666666666], [1.66609176E12, 211.88333333333333], [1.66609146E12, 225.5], [1.66609188E12, 215.96666666666667], [1.66609158E12, 228.91666666666666], [1.66609152E12, 225.96666666666667], [1.66609164E12, 227.55], [1.66609194E12, 214.3]], "isOverall": false, "label": "extract-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66609212E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 16.683333333333334, "minX": 1.6660914E12, "maxY": 228.91666666666666, "series": [{"data": [[1.6660914E12, 16.683333333333334], [1.66609206E12, 215.45], [1.666092E12, 215.7], [1.6660917E12, 223.63333333333333], [1.66609212E12, 178.61666666666667], [1.66609182E12, 213.16666666666666], [1.66609176E12, 211.88333333333333], [1.66609146E12, 225.5], [1.66609188E12, 215.96666666666667], [1.66609158E12, 228.91666666666666], [1.66609152E12, 225.96666666666667], [1.66609164E12, 227.55], [1.66609194E12, 214.3]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66609212E12, "title": "Total Transactions Per Second"}},
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

