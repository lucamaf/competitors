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
        data: {"result": {"minY": 3.0, "minX": 0.0, "maxY": 1290.0, "series": [{"data": [[0.0, 3.0], [0.1, 3.0], [0.2, 4.0], [0.3, 4.0], [0.4, 4.0], [0.5, 4.0], [0.6, 4.0], [0.7, 4.0], [0.8, 4.0], [0.9, 4.0], [1.0, 4.0], [1.1, 4.0], [1.2, 4.0], [1.3, 4.0], [1.4, 5.0], [1.5, 5.0], [1.6, 5.0], [1.7, 5.0], [1.8, 5.0], [1.9, 5.0], [2.0, 5.0], [2.1, 5.0], [2.2, 5.0], [2.3, 5.0], [2.4, 5.0], [2.5, 5.0], [2.6, 5.0], [2.7, 5.0], [2.8, 5.0], [2.9, 5.0], [3.0, 5.0], [3.1, 5.0], [3.2, 5.0], [3.3, 6.0], [3.4, 6.0], [3.5, 6.0], [3.6, 6.0], [3.7, 6.0], [3.8, 6.0], [3.9, 6.0], [4.0, 6.0], [4.1, 6.0], [4.2, 6.0], [4.3, 6.0], [4.4, 6.0], [4.5, 6.0], [4.6, 6.0], [4.7, 6.0], [4.8, 6.0], [4.9, 6.0], [5.0, 6.0], [5.1, 6.0], [5.2, 6.0], [5.3, 7.0], [5.4, 7.0], [5.5, 7.0], [5.6, 7.0], [5.7, 7.0], [5.8, 7.0], [5.9, 7.0], [6.0, 7.0], [6.1, 7.0], [6.2, 7.0], [6.3, 7.0], [6.4, 7.0], [6.5, 7.0], [6.6, 7.0], [6.7, 7.0], [6.8, 7.0], [6.9, 7.0], [7.0, 7.0], [7.1, 7.0], [7.2, 7.0], [7.3, 7.0], [7.4, 8.0], [7.5, 8.0], [7.6, 8.0], [7.7, 8.0], [7.8, 8.0], [7.9, 8.0], [8.0, 8.0], [8.1, 8.0], [8.2, 8.0], [8.3, 8.0], [8.4, 8.0], [8.5, 8.0], [8.6, 8.0], [8.7, 8.0], [8.8, 8.0], [8.9, 8.0], [9.0, 8.0], [9.1, 8.0], [9.2, 8.0], [9.3, 8.0], [9.4, 9.0], [9.5, 9.0], [9.6, 9.0], [9.7, 9.0], [9.8, 9.0], [9.9, 9.0], [10.0, 9.0], [10.1, 9.0], [10.2, 9.0], [10.3, 9.0], [10.4, 9.0], [10.5, 9.0], [10.6, 9.0], [10.7, 9.0], [10.8, 9.0], [10.9, 9.0], [11.0, 9.0], [11.1, 9.0], [11.2, 9.0], [11.3, 9.0], [11.4, 10.0], [11.5, 10.0], [11.6, 10.0], [11.7, 10.0], [11.8, 10.0], [11.9, 10.0], [12.0, 10.0], [12.1, 10.0], [12.2, 10.0], [12.3, 10.0], [12.4, 10.0], [12.5, 10.0], [12.6, 10.0], [12.7, 10.0], [12.8, 10.0], [12.9, 10.0], [13.0, 10.0], [13.1, 10.0], [13.2, 10.0], [13.3, 10.0], [13.4, 11.0], [13.5, 11.0], [13.6, 11.0], [13.7, 11.0], [13.8, 11.0], [13.9, 11.0], [14.0, 11.0], [14.1, 11.0], [14.2, 11.0], [14.3, 11.0], [14.4, 11.0], [14.5, 11.0], [14.6, 11.0], [14.7, 11.0], [14.8, 11.0], [14.9, 11.0], [15.0, 12.0], [15.1, 12.0], [15.2, 12.0], [15.3, 12.0], [15.4, 12.0], [15.5, 12.0], [15.6, 12.0], [15.7, 12.0], [15.8, 12.0], [15.9, 12.0], [16.0, 12.0], [16.1, 12.0], [16.2, 12.0], [16.3, 12.0], [16.4, 12.0], [16.5, 12.0], [16.6, 12.0], [16.7, 12.0], [16.8, 12.0], [16.9, 12.0], [17.0, 13.0], [17.1, 13.0], [17.2, 13.0], [17.3, 13.0], [17.4, 13.0], [17.5, 13.0], [17.6, 13.0], [17.7, 13.0], [17.8, 13.0], [17.9, 13.0], [18.0, 13.0], [18.1, 13.0], [18.2, 13.0], [18.3, 13.0], [18.4, 13.0], [18.5, 14.0], [18.6, 14.0], [18.7, 14.0], [18.8, 14.0], [18.9, 14.0], [19.0, 14.0], [19.1, 14.0], [19.2, 14.0], [19.3, 14.0], [19.4, 14.0], [19.5, 14.0], [19.6, 14.0], [19.7, 14.0], [19.8, 14.0], [19.9, 15.0], [20.0, 15.0], [20.1, 15.0], [20.2, 15.0], [20.3, 15.0], [20.4, 15.0], [20.5, 15.0], [20.6, 15.0], [20.7, 15.0], [20.8, 15.0], [20.9, 15.0], [21.0, 15.0], [21.1, 15.0], [21.2, 16.0], [21.3, 16.0], [21.4, 16.0], [21.5, 16.0], [21.6, 16.0], [21.7, 16.0], [21.8, 16.0], [21.9, 16.0], [22.0, 16.0], [22.1, 16.0], [22.2, 16.0], [22.3, 16.0], [22.4, 17.0], [22.5, 17.0], [22.6, 17.0], [22.7, 17.0], [22.8, 17.0], [22.9, 17.0], [23.0, 17.0], [23.1, 17.0], [23.2, 17.0], [23.3, 17.0], [23.4, 17.0], [23.5, 17.0], [23.6, 17.0], [23.7, 18.0], [23.8, 18.0], [23.9, 18.0], [24.0, 18.0], [24.1, 18.0], [24.2, 18.0], [24.3, 18.0], [24.4, 18.0], [24.5, 18.0], [24.6, 18.0], [24.7, 18.0], [24.8, 19.0], [24.9, 19.0], [25.0, 19.0], [25.1, 19.0], [25.2, 19.0], [25.3, 19.0], [25.4, 19.0], [25.5, 19.0], [25.6, 19.0], [25.7, 19.0], [25.8, 19.0], [25.9, 20.0], [26.0, 20.0], [26.1, 20.0], [26.2, 20.0], [26.3, 20.0], [26.4, 20.0], [26.5, 20.0], [26.6, 20.0], [26.7, 20.0], [26.8, 20.0], [26.9, 21.0], [27.0, 21.0], [27.1, 21.0], [27.2, 21.0], [27.3, 21.0], [27.4, 21.0], [27.5, 21.0], [27.6, 21.0], [27.7, 22.0], [27.8, 22.0], [27.9, 22.0], [28.0, 22.0], [28.1, 22.0], [28.2, 22.0], [28.3, 22.0], [28.4, 22.0], [28.5, 22.0], [28.6, 22.0], [28.7, 23.0], [28.8, 23.0], [28.9, 23.0], [29.0, 23.0], [29.1, 23.0], [29.2, 23.0], [29.3, 23.0], [29.4, 23.0], [29.5, 24.0], [29.6, 24.0], [29.7, 24.0], [29.8, 24.0], [29.9, 24.0], [30.0, 24.0], [30.1, 24.0], [30.2, 24.0], [30.3, 25.0], [30.4, 25.0], [30.5, 25.0], [30.6, 25.0], [30.7, 25.0], [30.8, 25.0], [30.9, 25.0], [31.0, 25.0], [31.1, 26.0], [31.2, 26.0], [31.3, 26.0], [31.4, 26.0], [31.5, 26.0], [31.6, 26.0], [31.7, 26.0], [31.8, 26.0], [31.9, 27.0], [32.0, 27.0], [32.1, 27.0], [32.2, 27.0], [32.3, 27.0], [32.4, 27.0], [32.5, 27.0], [32.6, 27.0], [32.7, 27.0], [32.8, 28.0], [32.9, 28.0], [33.0, 28.0], [33.1, 28.0], [33.2, 28.0], [33.3, 28.0], [33.4, 28.0], [33.5, 28.0], [33.6, 29.0], [33.7, 29.0], [33.8, 29.0], [33.9, 29.0], [34.0, 29.0], [34.1, 29.0], [34.2, 29.0], [34.3, 29.0], [34.4, 30.0], [34.5, 30.0], [34.6, 30.0], [34.7, 30.0], [34.8, 30.0], [34.9, 30.0], [35.0, 30.0], [35.1, 31.0], [35.2, 31.0], [35.3, 31.0], [35.4, 31.0], [35.5, 31.0], [35.6, 31.0], [35.7, 31.0], [35.8, 31.0], [35.9, 32.0], [36.0, 32.0], [36.1, 32.0], [36.2, 32.0], [36.3, 32.0], [36.4, 32.0], [36.5, 32.0], [36.6, 32.0], [36.7, 33.0], [36.8, 33.0], [36.9, 33.0], [37.0, 33.0], [37.1, 33.0], [37.2, 33.0], [37.3, 33.0], [37.4, 34.0], [37.5, 34.0], [37.6, 34.0], [37.7, 34.0], [37.8, 34.0], [37.9, 34.0], [38.0, 34.0], [38.1, 35.0], [38.2, 35.0], [38.3, 35.0], [38.4, 35.0], [38.5, 35.0], [38.6, 35.0], [38.7, 35.0], [38.8, 36.0], [38.9, 36.0], [39.0, 36.0], [39.1, 36.0], [39.2, 36.0], [39.3, 36.0], [39.4, 36.0], [39.5, 37.0], [39.6, 37.0], [39.7, 37.0], [39.8, 37.0], [39.9, 37.0], [40.0, 38.0], [40.1, 38.0], [40.2, 38.0], [40.3, 38.0], [40.4, 38.0], [40.5, 38.0], [40.6, 39.0], [40.7, 39.0], [40.8, 39.0], [40.9, 39.0], [41.0, 39.0], [41.1, 39.0], [41.2, 40.0], [41.3, 40.0], [41.4, 40.0], [41.5, 40.0], [41.6, 40.0], [41.7, 41.0], [41.8, 41.0], [41.9, 41.0], [42.0, 41.0], [42.1, 41.0], [42.2, 42.0], [42.3, 42.0], [42.4, 42.0], [42.5, 42.0], [42.6, 42.0], [42.7, 42.0], [42.8, 42.0], [42.9, 43.0], [43.0, 43.0], [43.1, 43.0], [43.2, 43.0], [43.3, 43.0], [43.4, 44.0], [43.5, 44.0], [43.6, 44.0], [43.7, 44.0], [43.8, 44.0], [43.9, 44.0], [44.0, 45.0], [44.1, 45.0], [44.2, 45.0], [44.3, 45.0], [44.4, 45.0], [44.5, 46.0], [44.6, 46.0], [44.7, 46.0], [44.8, 46.0], [44.9, 47.0], [45.0, 47.0], [45.1, 47.0], [45.2, 47.0], [45.3, 48.0], [45.4, 48.0], [45.5, 48.0], [45.6, 48.0], [45.7, 49.0], [45.8, 49.0], [45.9, 49.0], [46.0, 49.0], [46.1, 49.0], [46.2, 50.0], [46.3, 50.0], [46.4, 50.0], [46.5, 50.0], [46.6, 50.0], [46.7, 51.0], [46.8, 51.0], [46.9, 51.0], [47.0, 51.0], [47.1, 51.0], [47.2, 51.0], [47.3, 52.0], [47.4, 52.0], [47.5, 52.0], [47.6, 52.0], [47.7, 52.0], [47.8, 53.0], [47.9, 53.0], [48.0, 53.0], [48.1, 53.0], [48.2, 53.0], [48.3, 54.0], [48.4, 54.0], [48.5, 54.0], [48.6, 54.0], [48.7, 55.0], [48.8, 55.0], [48.9, 55.0], [49.0, 55.0], [49.1, 56.0], [49.2, 56.0], [49.3, 56.0], [49.4, 56.0], [49.5, 57.0], [49.6, 57.0], [49.7, 57.0], [49.8, 57.0], [49.9, 58.0], [50.0, 58.0], [50.1, 58.0], [50.2, 58.0], [50.3, 58.0], [50.4, 59.0], [50.5, 59.0], [50.6, 59.0], [50.7, 59.0], [50.8, 60.0], [50.9, 60.0], [51.0, 60.0], [51.1, 60.0], [51.2, 60.0], [51.3, 61.0], [51.4, 61.0], [51.5, 61.0], [51.6, 62.0], [51.7, 62.0], [51.8, 62.0], [51.9, 62.0], [52.0, 63.0], [52.1, 63.0], [52.2, 63.0], [52.3, 63.0], [52.4, 64.0], [52.5, 64.0], [52.6, 64.0], [52.7, 65.0], [52.8, 65.0], [52.9, 65.0], [53.0, 65.0], [53.1, 66.0], [53.2, 66.0], [53.3, 66.0], [53.4, 67.0], [53.5, 67.0], [53.6, 67.0], [53.7, 67.0], [53.8, 67.0], [53.9, 68.0], [54.0, 68.0], [54.1, 68.0], [54.2, 68.0], [54.3, 69.0], [54.4, 69.0], [54.5, 69.0], [54.6, 69.0], [54.7, 70.0], [54.8, 70.0], [54.9, 70.0], [55.0, 71.0], [55.1, 71.0], [55.2, 71.0], [55.3, 72.0], [55.4, 72.0], [55.5, 72.0], [55.6, 73.0], [55.7, 73.0], [55.8, 73.0], [55.9, 74.0], [56.0, 74.0], [56.1, 74.0], [56.2, 74.0], [56.3, 75.0], [56.4, 75.0], [56.5, 75.0], [56.6, 75.0], [56.7, 76.0], [56.8, 76.0], [56.9, 76.0], [57.0, 76.0], [57.1, 77.0], [57.2, 77.0], [57.3, 77.0], [57.4, 78.0], [57.5, 78.0], [57.6, 78.0], [57.7, 79.0], [57.8, 79.0], [57.9, 79.0], [58.0, 80.0], [58.1, 80.0], [58.2, 80.0], [58.3, 80.0], [58.4, 81.0], [58.5, 81.0], [58.6, 81.0], [58.7, 82.0], [58.8, 82.0], [58.9, 82.0], [59.0, 83.0], [59.1, 83.0], [59.2, 83.0], [59.3, 83.0], [59.4, 84.0], [59.5, 84.0], [59.6, 84.0], [59.7, 85.0], [59.8, 85.0], [59.9, 85.0], [60.0, 85.0], [60.1, 86.0], [60.2, 86.0], [60.3, 86.0], [60.4, 87.0], [60.5, 87.0], [60.6, 87.0], [60.7, 88.0], [60.8, 88.0], [60.9, 88.0], [61.0, 89.0], [61.1, 89.0], [61.2, 89.0], [61.3, 90.0], [61.4, 90.0], [61.5, 90.0], [61.6, 90.0], [61.7, 91.0], [61.8, 91.0], [61.9, 92.0], [62.0, 92.0], [62.1, 92.0], [62.2, 93.0], [62.3, 93.0], [62.4, 93.0], [62.5, 94.0], [62.6, 94.0], [62.7, 95.0], [62.8, 95.0], [62.9, 95.0], [63.0, 96.0], [63.1, 96.0], [63.2, 96.0], [63.3, 96.0], [63.4, 97.0], [63.5, 97.0], [63.6, 97.0], [63.7, 98.0], [63.8, 98.0], [63.9, 99.0], [64.0, 99.0], [64.1, 99.0], [64.2, 100.0], [64.3, 100.0], [64.4, 100.0], [64.5, 101.0], [64.6, 101.0], [64.7, 102.0], [64.8, 102.0], [64.9, 103.0], [65.0, 103.0], [65.1, 104.0], [65.2, 104.0], [65.3, 104.0], [65.4, 105.0], [65.5, 106.0], [65.6, 106.0], [65.7, 106.0], [65.8, 107.0], [65.9, 107.0], [66.0, 108.0], [66.1, 109.0], [66.2, 109.0], [66.3, 110.0], [66.4, 110.0], [66.5, 111.0], [66.6, 111.0], [66.7, 112.0], [66.8, 112.0], [66.9, 113.0], [67.0, 113.0], [67.1, 113.0], [67.2, 114.0], [67.3, 114.0], [67.4, 115.0], [67.5, 115.0], [67.6, 115.0], [67.7, 116.0], [67.8, 116.0], [67.9, 117.0], [68.0, 117.0], [68.1, 118.0], [68.2, 118.0], [68.3, 119.0], [68.4, 119.0], [68.5, 120.0], [68.6, 120.0], [68.7, 121.0], [68.8, 121.0], [68.9, 122.0], [69.0, 122.0], [69.1, 122.0], [69.2, 123.0], [69.3, 124.0], [69.4, 125.0], [69.5, 125.0], [69.6, 126.0], [69.7, 126.0], [69.8, 127.0], [69.9, 127.0], [70.0, 128.0], [70.1, 128.0], [70.2, 129.0], [70.3, 129.0], [70.4, 129.0], [70.5, 130.0], [70.6, 130.0], [70.7, 131.0], [70.8, 131.0], [70.9, 132.0], [71.0, 132.0], [71.1, 133.0], [71.2, 133.0], [71.3, 134.0], [71.4, 135.0], [71.5, 135.0], [71.6, 136.0], [71.7, 136.0], [71.8, 137.0], [71.9, 138.0], [72.0, 139.0], [72.1, 139.0], [72.2, 139.0], [72.3, 140.0], [72.4, 140.0], [72.5, 141.0], [72.6, 141.0], [72.7, 142.0], [72.8, 143.0], [72.9, 143.0], [73.0, 144.0], [73.1, 145.0], [73.2, 145.0], [73.3, 146.0], [73.4, 146.0], [73.5, 147.0], [73.6, 147.0], [73.7, 148.0], [73.8, 148.0], [73.9, 149.0], [74.0, 149.0], [74.1, 150.0], [74.2, 151.0], [74.3, 152.0], [74.4, 153.0], [74.5, 153.0], [74.6, 154.0], [74.7, 155.0], [74.8, 155.0], [74.9, 156.0], [75.0, 156.0], [75.1, 157.0], [75.2, 157.0], [75.3, 158.0], [75.4, 159.0], [75.5, 159.0], [75.6, 160.0], [75.7, 160.0], [75.8, 161.0], [75.9, 162.0], [76.0, 162.0], [76.1, 163.0], [76.2, 164.0], [76.3, 165.0], [76.4, 166.0], [76.5, 167.0], [76.6, 168.0], [76.7, 168.0], [76.8, 169.0], [76.9, 169.0], [77.0, 169.0], [77.1, 170.0], [77.2, 171.0], [77.3, 172.0], [77.4, 173.0], [77.5, 173.0], [77.6, 174.0], [77.7, 175.0], [77.8, 175.0], [77.9, 176.0], [78.0, 176.0], [78.1, 177.0], [78.2, 177.0], [78.3, 178.0], [78.4, 179.0], [78.5, 179.0], [78.6, 180.0], [78.7, 181.0], [78.8, 182.0], [78.9, 182.0], [79.0, 183.0], [79.1, 183.0], [79.2, 184.0], [79.3, 185.0], [79.4, 186.0], [79.5, 186.0], [79.6, 187.0], [79.7, 188.0], [79.8, 189.0], [79.9, 190.0], [80.0, 190.0], [80.1, 192.0], [80.2, 192.0], [80.3, 193.0], [80.4, 194.0], [80.5, 195.0], [80.6, 196.0], [80.7, 197.0], [80.8, 198.0], [80.9, 199.0], [81.0, 200.0], [81.1, 200.0], [81.2, 201.0], [81.3, 202.0], [81.4, 202.0], [81.5, 203.0], [81.6, 204.0], [81.7, 206.0], [81.8, 207.0], [81.9, 208.0], [82.0, 209.0], [82.1, 211.0], [82.2, 212.0], [82.3, 212.0], [82.4, 213.0], [82.5, 214.0], [82.6, 215.0], [82.7, 217.0], [82.8, 217.0], [82.9, 218.0], [83.0, 219.0], [83.1, 221.0], [83.2, 222.0], [83.3, 224.0], [83.4, 225.0], [83.5, 226.0], [83.6, 227.0], [83.7, 228.0], [83.8, 229.0], [83.9, 230.0], [84.0, 231.0], [84.1, 233.0], [84.2, 234.0], [84.3, 235.0], [84.4, 236.0], [84.5, 237.0], [84.6, 238.0], [84.7, 240.0], [84.8, 241.0], [84.9, 241.0], [85.0, 243.0], [85.1, 244.0], [85.2, 245.0], [85.3, 247.0], [85.4, 248.0], [85.5, 249.0], [85.6, 250.0], [85.7, 252.0], [85.8, 253.0], [85.9, 255.0], [86.0, 256.0], [86.1, 258.0], [86.2, 259.0], [86.3, 261.0], [86.4, 263.0], [86.5, 264.0], [86.6, 265.0], [86.7, 266.0], [86.8, 267.0], [86.9, 269.0], [87.0, 270.0], [87.1, 272.0], [87.2, 273.0], [87.3, 274.0], [87.4, 276.0], [87.5, 278.0], [87.6, 279.0], [87.7, 280.0], [87.8, 282.0], [87.9, 283.0], [88.0, 284.0], [88.1, 285.0], [88.2, 286.0], [88.3, 287.0], [88.4, 289.0], [88.5, 290.0], [88.6, 292.0], [88.7, 294.0], [88.8, 295.0], [88.9, 297.0], [89.0, 298.0], [89.1, 300.0], [89.2, 303.0], [89.3, 305.0], [89.4, 307.0], [89.5, 308.0], [89.6, 310.0], [89.7, 312.0], [89.8, 315.0], [89.9, 317.0], [90.0, 320.0], [90.1, 322.0], [90.2, 323.0], [90.3, 324.0], [90.4, 326.0], [90.5, 329.0], [90.6, 332.0], [90.7, 333.0], [90.8, 335.0], [90.9, 337.0], [91.0, 339.0], [91.1, 342.0], [91.2, 344.0], [91.3, 347.0], [91.4, 348.0], [91.5, 350.0], [91.6, 352.0], [91.7, 355.0], [91.8, 356.0], [91.9, 359.0], [92.0, 364.0], [92.1, 366.0], [92.2, 368.0], [92.3, 371.0], [92.4, 374.0], [92.5, 376.0], [92.6, 378.0], [92.7, 381.0], [92.8, 385.0], [92.9, 387.0], [93.0, 388.0], [93.1, 391.0], [93.2, 393.0], [93.3, 396.0], [93.4, 399.0], [93.5, 403.0], [93.6, 407.0], [93.7, 410.0], [93.8, 414.0], [93.9, 416.0], [94.0, 419.0], [94.1, 421.0], [94.2, 426.0], [94.3, 431.0], [94.4, 433.0], [94.5, 436.0], [94.6, 439.0], [94.7, 443.0], [94.8, 447.0], [94.9, 451.0], [95.0, 454.0], [95.1, 456.0], [95.2, 461.0], [95.3, 466.0], [95.4, 470.0], [95.5, 474.0], [95.6, 480.0], [95.7, 486.0], [95.8, 489.0], [95.9, 495.0], [96.0, 500.0], [96.1, 505.0], [96.2, 510.0], [96.3, 513.0], [96.4, 518.0], [96.5, 529.0], [96.6, 536.0], [96.7, 540.0], [96.8, 547.0], [96.9, 552.0], [97.0, 559.0], [97.1, 565.0], [97.2, 571.0], [97.3, 574.0], [97.4, 578.0], [97.5, 586.0], [97.6, 594.0], [97.7, 599.0], [97.8, 608.0], [97.9, 619.0], [98.0, 630.0], [98.1, 641.0], [98.2, 649.0], [98.3, 654.0], [98.4, 661.0], [98.5, 667.0], [98.6, 677.0], [98.7, 695.0], [98.8, 708.0], [98.9, 723.0], [99.0, 746.0], [99.1, 767.0], [99.2, 773.0], [99.3, 804.0], [99.4, 839.0], [99.5, 871.0], [99.6, 926.0], [99.7, 971.0], [99.8, 1033.0], [99.9, 1104.0]], "isOverall": false, "label": "Home Page", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 5.0, "minX": 0.0, "maxY": 6587.0, "series": [{"data": [[0.0, 6587.0], [600.0, 105.0], [700.0, 57.0], [200.0, 831.0], [800.0, 27.0], [900.0, 19.0], [1000.0, 17.0], [1100.0, 5.0], [300.0, 446.0], [1200.0, 6.0], [100.0, 1732.0], [400.0, 264.0], [500.0, 176.0]], "isOverall": false, "label": "Home Page", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 410.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 9862.0, "series": [{"data": [[0.0, 9862.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 410.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 98.45898989899008, "minX": 1.55427378E12, "maxY": 100.0, "series": [{"data": [[1.55427384E12, 100.0], [1.5542739E12, 99.69797904191618], [1.55427378E12, 98.45898989899008]], "isOverall": false, "label": "Scenario 1", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.5542739E12, "title": "Active Threads Over Time"}},
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
        fixTimeStamps(infos.data.result.series, 7200000);
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
        data: {"result": {"minY": 5.0, "minX": 1.0, "maxY": 1023.0, "series": [{"data": [[2.0, 268.0], [3.0, 91.0], [9.0, 228.0], [13.0, 181.0], [16.0, 127.0], [19.0, 156.0], [27.0, 180.0], [29.0, 191.75], [30.0, 211.0], [33.0, 163.0], [32.0, 1023.0], [34.0, 166.0], [35.0, 163.5], [36.0, 191.4], [37.0, 156.0], [38.0, 51.5], [39.0, 33.0], [40.0, 29.0], [41.0, 19.0], [42.0, 30.0], [43.0, 19.0], [44.0, 25.0], [45.0, 5.0], [47.0, 25.0], [48.0, 20.5], [49.0, 25.0], [50.0, 18.0], [51.0, 15.0], [53.0, 23.0], [55.0, 34.0], [58.0, 269.25], [59.0, 42.0], [60.0, 30.5], [62.0, 338.4285714285714], [63.0, 441.5], [64.0, 346.0], [68.0, 74.0], [69.0, 36.0], [70.0, 469.0], [73.0, 167.33333333333331], [75.0, 55.0], [77.0, 69.0], [78.0, 72.33333333333334], [79.0, 97.0], [80.0, 261.0], [81.0, 150.66666666666666], [83.0, 87.0], [84.0, 48.0], [85.0, 65.0], [86.0, 54.5], [87.0, 30.5], [88.0, 56.5], [90.0, 24.25], [92.0, 9.0], [93.0, 14.0], [94.0, 12.0], [95.0, 14.0], [96.0, 9.0], [97.0, 10.0], [98.0, 12.0], [99.0, 8.0], [100.0, 119.92462113757107], [1.0, 246.0]], "isOverall": false, "label": "Home Page", "isController": false}, {"data": [[99.55013629283457, 120.12957554517114]], "isOverall": false, "label": "Home Page-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 0.0, "minX": 1.55427378E12, "maxY": 100022.91666666667, "series": [{"data": [[1.55427384E12, 100022.91666666667], [1.5542739E12, 52148.53333333333], [1.55427378E12, 48667.083333333336]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.55427384E12, 0.0], [1.5542739E12, 0.0], [1.55427378E12, 0.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.5542739E12, "title": "Bytes Throughput Over Time"}},
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
        fixTimeStamps(infos.data.result.series, 7200000);
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
        data: {"result": {"minY": 37.75595959595964, "minX": 1.55427378E12, "maxY": 197.65119760479035, "series": [{"data": [[1.55427384E12, 119.49287804878041], [1.5542739E12, 197.65119760479035], [1.55427378E12, 37.75595959595964]], "isOverall": false, "label": "Home Page", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.5542739E12, "title": "Response Time Over Time"}},
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
        fixTimeStamps(infos.data.result.series, 7200000);
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
        data: {"result": {"minY": 37.73939393939399, "minX": 1.55427378E12, "maxY": 197.63959580838272, "series": [{"data": [[1.55427384E12, 119.48331707317101], [1.5542739E12, 197.63959580838272], [1.55427378E12, 37.73939393939399]], "isOverall": false, "label": "Home Page", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.5542739E12, "title": "Latencies Over Time"}},
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
        fixTimeStamps(infos.data.result.series, 7200000);
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
        data: {"result": {"minY": 1.2638473053892227, "minX": 1.55427378E12, "maxY": 1.5354146341463428, "series": [{"data": [[1.55427384E12, 1.5354146341463428], [1.5542739E12, 1.2638473053892227], [1.55427378E12, 1.307878787878784]], "isOverall": false, "label": "Home Page", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.5542739E12, "title": "Connect Time Over Time"}},
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
        fixTimeStamps(infos.data.result.series, 7200000);
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
        data: {"result": {"minY": 3.0, "minX": 1.55427378E12, "maxY": 1290.0, "series": [{"data": [[1.55427384E12, 1290.0], [1.5542739E12, 1243.0], [1.55427378E12, 508.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.55427384E12, 3.0], [1.5542739E12, 4.0], [1.55427378E12, 3.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.55427384E12, 310.0], [1.5542739E12, 449.7000000000003], [1.55427378E12, 86.40000000000009]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.55427384E12, 676.7399999999998], [1.5542739E12, 936.9399999999996], [1.55427378E12, 283.9599999999991]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.55427384E12, 450.6999999999998], [1.5542739E12, 595.0499999999997], [1.55427378E12, 128.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.5542739E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
        fixTimeStamps(infos.data.result.series, 7200000);
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
    data: {"result": {"minY": 16.5, "minX": 12.0, "maxY": 347.0, "series": [{"data": [[54.0, 172.5], [58.0, 319.0], [60.0, 146.5], [62.0, 176.5], [67.0, 152.0], [64.0, 70.0], [68.0, 220.5], [71.0, 119.0], [69.0, 347.0], [75.0, 184.5], [74.0, 120.0], [73.0, 181.0], [72.0, 64.0], [76.0, 19.5], [78.0, 147.5], [79.0, 155.0], [77.0, 175.0], [83.0, 31.0], [82.0, 62.5], [80.0, 271.0], [81.0, 168.0], [86.0, 30.0], [84.0, 43.5], [87.0, 35.0], [85.0, 17.0], [89.0, 25.0], [88.0, 63.0], [90.0, 27.0], [91.0, 96.5], [93.0, 41.5], [92.0, 31.0], [94.0, 49.0], [95.0, 30.0], [96.0, 54.0], [98.0, 16.5], [97.0, 23.0], [99.0, 31.0], [100.0, 259.0], [12.0, 213.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 100.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 16.5, "minX": 12.0, "maxY": 347.0, "series": [{"data": [[54.0, 172.5], [58.0, 319.0], [60.0, 146.5], [62.0, 176.5], [67.0, 152.0], [64.0, 69.5], [68.0, 220.5], [71.0, 119.0], [69.0, 347.0], [75.0, 184.5], [74.0, 120.0], [73.0, 181.0], [72.0, 64.0], [76.0, 19.5], [78.0, 147.5], [79.0, 155.0], [77.0, 175.0], [83.0, 31.0], [82.0, 62.5], [80.0, 271.0], [81.0, 168.0], [86.0, 30.0], [84.0, 43.5], [87.0, 35.0], [85.0, 17.0], [89.0, 25.0], [88.0, 63.0], [90.0, 27.0], [91.0, 96.5], [93.0, 41.5], [92.0, 31.0], [94.0, 49.0], [95.0, 30.0], [96.0, 54.0], [98.0, 16.5], [97.0, 23.0], [99.0, 31.0], [100.0, 259.0], [12.0, 213.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 100.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 41.28333333333333, "minX": 1.55427378E12, "maxY": 85.65, "series": [{"data": [[1.55427384E12, 85.65], [1.5542739E12, 44.266666666666666], [1.55427378E12, 41.28333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.5542739E12, "title": "Hits Per Second"}},
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
        fixTimeStamps(infos.data.result.series, 7200000);
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
        data: {"result": {"minY": 41.25, "minX": 1.55427378E12, "maxY": 85.41666666666667, "series": [{"data": [[1.55427384E12, 85.41666666666667], [1.5542739E12, 44.53333333333333], [1.55427378E12, 41.25]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.5542739E12, "title": "Codes Per Second"}},
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
        fixTimeStamps(infos.data.result.series, 7200000);
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
        data: {"result": {"minY": 41.25, "minX": 1.55427378E12, "maxY": 85.41666666666667, "series": [{"data": [[1.55427384E12, 85.41666666666667], [1.5542739E12, 44.53333333333333], [1.55427378E12, 41.25]], "isOverall": false, "label": "Home Page-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.5542739E12, "title": "Transactions Per Second"}},
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
        fixTimeStamps(infos.data.result.series, 7200000);
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
        data: {"result": {"minY": 41.25, "minX": 1.55427378E12, "maxY": 85.41666666666667, "series": [{"data": [[1.55427384E12, 85.41666666666667], [1.5542739E12, 44.53333333333333], [1.55427378E12, 41.25]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.5542739E12, "title": "Total Transactions Per Second"}},
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
        fixTimeStamps(infos.data.result.series, 7200000);
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

