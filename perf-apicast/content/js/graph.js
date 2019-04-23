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
        data: {"result": {"minY": 91.0, "minX": 0.0, "maxY": 5405.0, "series": [{"data": [[0.0, 91.0], [0.1, 204.0], [0.2, 425.0], [0.3, 528.0], [0.4, 740.0], [0.5, 948.0], [0.6, 1060.0], [0.7, 1152.0], [0.8, 1180.0], [0.9, 1251.0], [1.0, 1395.0], [1.1, 1459.0], [1.2, 1561.0], [1.3, 1687.0], [1.4, 1741.0], [1.5, 1757.0], [1.6, 1848.0], [1.7, 1935.0], [1.8, 2028.0], [1.9, 2037.0], [2.0, 2050.0], [2.1, 2054.0], [2.2, 2058.0], [2.3, 2062.0], [2.4, 2074.0], [2.5, 2082.0], [2.6, 2089.0], [2.7, 2092.0], [2.8, 2094.0], [2.9, 2097.0], [3.0, 2103.0], [3.1, 2105.0], [3.2, 2109.0], [3.3, 2116.0], [3.4, 2122.0], [3.5, 2130.0], [3.6, 2139.0], [3.7, 2148.0], [3.8, 2150.0], [3.9, 2155.0], [4.0, 2162.0], [4.1, 2173.0], [4.2, 2178.0], [4.3, 2180.0], [4.4, 2180.0], [4.5, 2184.0], [4.6, 2186.0], [4.7, 2196.0], [4.8, 2202.0], [4.9, 2212.0], [5.0, 2219.0], [5.1, 2221.0], [5.2, 2227.0], [5.3, 2233.0], [5.4, 2236.0], [5.5, 2238.0], [5.6, 2242.0], [5.7, 2246.0], [5.8, 2247.0], [5.9, 2247.0], [6.0, 2249.0], [6.1, 2258.0], [6.2, 2265.0], [6.3, 2269.0], [6.4, 2271.0], [6.5, 2273.0], [6.6, 2276.0], [6.7, 2281.0], [6.8, 2283.0], [6.9, 2286.0], [7.0, 2288.0], [7.1, 2288.0], [7.2, 2293.0], [7.3, 2294.0], [7.4, 2295.0], [7.5, 2297.0], [7.6, 2298.0], [7.7, 2299.0], [7.8, 2302.0], [7.9, 2304.0], [8.0, 2307.0], [8.1, 2309.0], [8.2, 2312.0], [8.3, 2316.0], [8.4, 2320.0], [8.5, 2322.0], [8.6, 2325.0], [8.7, 2326.0], [8.8, 2327.0], [8.9, 2328.0], [9.0, 2331.0], [9.1, 2335.0], [9.2, 2340.0], [9.3, 2342.0], [9.4, 2343.0], [9.5, 2346.0], [9.6, 2348.0], [9.7, 2349.0], [9.8, 2354.0], [9.9, 2356.0], [10.0, 2359.0], [10.1, 2360.0], [10.2, 2361.0], [10.3, 2362.0], [10.4, 2364.0], [10.5, 2365.0], [10.6, 2367.0], [10.7, 2368.0], [10.8, 2372.0], [10.9, 2373.0], [11.0, 2374.0], [11.1, 2378.0], [11.2, 2379.0], [11.3, 2382.0], [11.4, 2383.0], [11.5, 2385.0], [11.6, 2386.0], [11.7, 2387.0], [11.8, 2390.0], [11.9, 2390.0], [12.0, 2392.0], [12.1, 2395.0], [12.2, 2396.0], [12.3, 2398.0], [12.4, 2402.0], [12.5, 2403.0], [12.6, 2403.0], [12.7, 2405.0], [12.8, 2406.0], [12.9, 2407.0], [13.0, 2408.0], [13.1, 2410.0], [13.2, 2411.0], [13.3, 2412.0], [13.4, 2414.0], [13.5, 2415.0], [13.6, 2417.0], [13.7, 2418.0], [13.8, 2418.0], [13.9, 2420.0], [14.0, 2422.0], [14.1, 2424.0], [14.2, 2424.0], [14.3, 2426.0], [14.4, 2428.0], [14.5, 2430.0], [14.6, 2430.0], [14.7, 2430.0], [14.8, 2432.0], [14.9, 2433.0], [15.0, 2435.0], [15.1, 2435.0], [15.2, 2436.0], [15.3, 2438.0], [15.4, 2439.0], [15.5, 2440.0], [15.6, 2441.0], [15.7, 2442.0], [15.8, 2443.0], [15.9, 2444.0], [16.0, 2444.0], [16.1, 2445.0], [16.2, 2445.0], [16.3, 2446.0], [16.4, 2447.0], [16.5, 2448.0], [16.6, 2449.0], [16.7, 2449.0], [16.8, 2450.0], [16.9, 2451.0], [17.0, 2452.0], [17.1, 2453.0], [17.2, 2453.0], [17.3, 2455.0], [17.4, 2455.0], [17.5, 2456.0], [17.6, 2456.0], [17.7, 2457.0], [17.8, 2458.0], [17.9, 2459.0], [18.0, 2461.0], [18.1, 2461.0], [18.2, 2462.0], [18.3, 2462.0], [18.4, 2464.0], [18.5, 2464.0], [18.6, 2465.0], [18.7, 2465.0], [18.8, 2466.0], [18.9, 2466.0], [19.0, 2466.0], [19.1, 2467.0], [19.2, 2468.0], [19.3, 2469.0], [19.4, 2471.0], [19.5, 2472.0], [19.6, 2472.0], [19.7, 2473.0], [19.8, 2473.0], [19.9, 2474.0], [20.0, 2474.0], [20.1, 2475.0], [20.2, 2475.0], [20.3, 2476.0], [20.4, 2477.0], [20.5, 2477.0], [20.6, 2477.0], [20.7, 2478.0], [20.8, 2479.0], [20.9, 2480.0], [21.0, 2480.0], [21.1, 2481.0], [21.2, 2482.0], [21.3, 2483.0], [21.4, 2484.0], [21.5, 2484.0], [21.6, 2485.0], [21.7, 2486.0], [21.8, 2486.0], [21.9, 2486.0], [22.0, 2487.0], [22.1, 2488.0], [22.2, 2489.0], [22.3, 2490.0], [22.4, 2491.0], [22.5, 2492.0], [22.6, 2492.0], [22.7, 2492.0], [22.8, 2493.0], [22.9, 2494.0], [23.0, 2494.0], [23.1, 2496.0], [23.2, 2496.0], [23.3, 2498.0], [23.4, 2498.0], [23.5, 2499.0], [23.6, 2500.0], [23.7, 2500.0], [23.8, 2501.0], [23.9, 2502.0], [24.0, 2502.0], [24.1, 2502.0], [24.2, 2503.0], [24.3, 2504.0], [24.4, 2504.0], [24.5, 2505.0], [24.6, 2506.0], [24.7, 2506.0], [24.8, 2508.0], [24.9, 2509.0], [25.0, 2510.0], [25.1, 2510.0], [25.2, 2510.0], [25.3, 2511.0], [25.4, 2512.0], [25.5, 2512.0], [25.6, 2513.0], [25.7, 2513.0], [25.8, 2513.0], [25.9, 2515.0], [26.0, 2516.0], [26.1, 2516.0], [26.2, 2517.0], [26.3, 2517.0], [26.4, 2517.0], [26.5, 2518.0], [26.6, 2519.0], [26.7, 2520.0], [26.8, 2521.0], [26.9, 2524.0], [27.0, 2524.0], [27.1, 2525.0], [27.2, 2525.0], [27.3, 2526.0], [27.4, 2527.0], [27.5, 2528.0], [27.6, 2529.0], [27.7, 2530.0], [27.8, 2531.0], [27.9, 2531.0], [28.0, 2532.0], [28.1, 2532.0], [28.2, 2532.0], [28.3, 2533.0], [28.4, 2533.0], [28.5, 2534.0], [28.6, 2534.0], [28.7, 2535.0], [28.8, 2536.0], [28.9, 2536.0], [29.0, 2537.0], [29.1, 2537.0], [29.2, 2537.0], [29.3, 2539.0], [29.4, 2540.0], [29.5, 2540.0], [29.6, 2540.0], [29.7, 2541.0], [29.8, 2542.0], [29.9, 2543.0], [30.0, 2544.0], [30.1, 2545.0], [30.2, 2545.0], [30.3, 2545.0], [30.4, 2547.0], [30.5, 2547.0], [30.6, 2549.0], [30.7, 2550.0], [30.8, 2551.0], [30.9, 2551.0], [31.0, 2552.0], [31.1, 2553.0], [31.2, 2554.0], [31.3, 2555.0], [31.4, 2555.0], [31.5, 2556.0], [31.6, 2557.0], [31.7, 2558.0], [31.8, 2559.0], [31.9, 2559.0], [32.0, 2560.0], [32.1, 2562.0], [32.2, 2562.0], [32.3, 2562.0], [32.4, 2564.0], [32.5, 2565.0], [32.6, 2566.0], [32.7, 2566.0], [32.8, 2567.0], [32.9, 2567.0], [33.0, 2568.0], [33.1, 2569.0], [33.2, 2570.0], [33.3, 2570.0], [33.4, 2571.0], [33.5, 2572.0], [33.6, 2573.0], [33.7, 2574.0], [33.8, 2575.0], [33.9, 2576.0], [34.0, 2576.0], [34.1, 2577.0], [34.2, 2577.0], [34.3, 2578.0], [34.4, 2579.0], [34.5, 2579.0], [34.6, 2579.0], [34.7, 2581.0], [34.8, 2581.0], [34.9, 2582.0], [35.0, 2584.0], [35.1, 2585.0], [35.2, 2586.0], [35.3, 2586.0], [35.4, 2587.0], [35.5, 2588.0], [35.6, 2589.0], [35.7, 2591.0], [35.8, 2591.0], [35.9, 2592.0], [36.0, 2593.0], [36.1, 2594.0], [36.2, 2595.0], [36.3, 2596.0], [36.4, 2598.0], [36.5, 2598.0], [36.6, 2601.0], [36.7, 2602.0], [36.8, 2602.0], [36.9, 2604.0], [37.0, 2605.0], [37.1, 2607.0], [37.2, 2607.0], [37.3, 2608.0], [37.4, 2609.0], [37.5, 2610.0], [37.6, 2611.0], [37.7, 2611.0], [37.8, 2612.0], [37.9, 2613.0], [38.0, 2614.0], [38.1, 2614.0], [38.2, 2616.0], [38.3, 2619.0], [38.4, 2622.0], [38.5, 2623.0], [38.6, 2624.0], [38.7, 2625.0], [38.8, 2626.0], [38.9, 2628.0], [39.0, 2628.0], [39.1, 2629.0], [39.2, 2630.0], [39.3, 2631.0], [39.4, 2632.0], [39.5, 2632.0], [39.6, 2633.0], [39.7, 2634.0], [39.8, 2634.0], [39.9, 2636.0], [40.0, 2637.0], [40.1, 2640.0], [40.2, 2641.0], [40.3, 2641.0], [40.4, 2643.0], [40.5, 2645.0], [40.6, 2650.0], [40.7, 2651.0], [40.8, 2652.0], [40.9, 2653.0], [41.0, 2653.0], [41.1, 2655.0], [41.2, 2656.0], [41.3, 2658.0], [41.4, 2660.0], [41.5, 2660.0], [41.6, 2661.0], [41.7, 2662.0], [41.8, 2666.0], [41.9, 2669.0], [42.0, 2669.0], [42.1, 2673.0], [42.2, 2674.0], [42.3, 2675.0], [42.4, 2677.0], [42.5, 2679.0], [42.6, 2680.0], [42.7, 2682.0], [42.8, 2683.0], [42.9, 2684.0], [43.0, 2685.0], [43.1, 2685.0], [43.2, 2686.0], [43.3, 2690.0], [43.4, 2690.0], [43.5, 2692.0], [43.6, 2693.0], [43.7, 2695.0], [43.8, 2696.0], [43.9, 2697.0], [44.0, 2699.0], [44.1, 2701.0], [44.2, 2702.0], [44.3, 2703.0], [44.4, 2706.0], [44.5, 2707.0], [44.6, 2707.0], [44.7, 2709.0], [44.8, 2711.0], [44.9, 2711.0], [45.0, 2713.0], [45.1, 2715.0], [45.2, 2716.0], [45.3, 2717.0], [45.4, 2719.0], [45.5, 2720.0], [45.6, 2721.0], [45.7, 2723.0], [45.8, 2724.0], [45.9, 2725.0], [46.0, 2725.0], [46.1, 2727.0], [46.2, 2729.0], [46.3, 2730.0], [46.4, 2732.0], [46.5, 2734.0], [46.6, 2735.0], [46.7, 2735.0], [46.8, 2737.0], [46.9, 2739.0], [47.0, 2742.0], [47.1, 2743.0], [47.2, 2744.0], [47.3, 2745.0], [47.4, 2746.0], [47.5, 2747.0], [47.6, 2748.0], [47.7, 2749.0], [47.8, 2750.0], [47.9, 2753.0], [48.0, 2756.0], [48.1, 2756.0], [48.2, 2757.0], [48.3, 2759.0], [48.4, 2761.0], [48.5, 2764.0], [48.6, 2767.0], [48.7, 2770.0], [48.8, 2773.0], [48.9, 2776.0], [49.0, 2777.0], [49.1, 2779.0], [49.2, 2782.0], [49.3, 2785.0], [49.4, 2787.0], [49.5, 2789.0], [49.6, 2792.0], [49.7, 2792.0], [49.8, 2793.0], [49.9, 2795.0], [50.0, 2797.0], [50.1, 2797.0], [50.2, 2802.0], [50.3, 2803.0], [50.4, 2804.0], [50.5, 2808.0], [50.6, 2810.0], [50.7, 2812.0], [50.8, 2813.0], [50.9, 2815.0], [51.0, 2818.0], [51.1, 2819.0], [51.2, 2820.0], [51.3, 2822.0], [51.4, 2824.0], [51.5, 2827.0], [51.6, 2828.0], [51.7, 2830.0], [51.8, 2831.0], [51.9, 2832.0], [52.0, 2836.0], [52.1, 2838.0], [52.2, 2843.0], [52.3, 2845.0], [52.4, 2849.0], [52.5, 2850.0], [52.6, 2853.0], [52.7, 2857.0], [52.8, 2861.0], [52.9, 2862.0], [53.0, 2863.0], [53.1, 2866.0], [53.2, 2870.0], [53.3, 2871.0], [53.4, 2883.0], [53.5, 2893.0], [53.6, 2901.0], [53.7, 2910.0], [53.8, 2913.0], [53.9, 2916.0], [54.0, 2919.0], [54.1, 2922.0], [54.2, 2924.0], [54.3, 2926.0], [54.4, 2928.0], [54.5, 2933.0], [54.6, 2938.0], [54.7, 2940.0], [54.8, 2942.0], [54.9, 2955.0], [55.0, 2957.0], [55.1, 2962.0], [55.2, 2968.0], [55.3, 2972.0], [55.4, 2978.0], [55.5, 2993.0], [55.6, 3001.0], [55.7, 3007.0], [55.8, 3013.0], [55.9, 3015.0], [56.0, 3025.0], [56.1, 3033.0], [56.2, 3035.0], [56.3, 3037.0], [56.4, 3041.0], [56.5, 3053.0], [56.6, 3063.0], [56.7, 3081.0], [56.8, 3083.0], [56.9, 3087.0], [57.0, 3088.0], [57.1, 3094.0], [57.2, 3103.0], [57.3, 3110.0], [57.4, 3120.0], [57.5, 3122.0], [57.6, 3127.0], [57.7, 3132.0], [57.8, 3135.0], [57.9, 3143.0], [58.0, 3156.0], [58.1, 3163.0], [58.2, 3166.0], [58.3, 3168.0], [58.4, 3172.0], [58.5, 3182.0], [58.6, 3191.0], [58.7, 3201.0], [58.8, 3207.0], [58.9, 3209.0], [59.0, 3212.0], [59.1, 3218.0], [59.2, 3220.0], [59.3, 3222.0], [59.4, 3232.0], [59.5, 3239.0], [59.6, 3246.0], [59.7, 3250.0], [59.8, 3256.0], [59.9, 3258.0], [60.0, 3263.0], [60.1, 3271.0], [60.2, 3272.0], [60.3, 3275.0], [60.4, 3276.0], [60.5, 3280.0], [60.6, 3286.0], [60.7, 3287.0], [60.8, 3290.0], [60.9, 3294.0], [61.0, 3299.0], [61.1, 3304.0], [61.2, 3309.0], [61.3, 3311.0], [61.4, 3316.0], [61.5, 3318.0], [61.6, 3324.0], [61.7, 3327.0], [61.8, 3333.0], [61.9, 3336.0], [62.0, 3343.0], [62.1, 3349.0], [62.2, 3358.0], [62.3, 3363.0], [62.4, 3374.0], [62.5, 3382.0], [62.6, 3396.0], [62.7, 3401.0], [62.8, 3414.0], [62.9, 3432.0], [63.0, 3460.0], [63.1, 3476.0], [63.2, 3487.0], [63.3, 3499.0], [63.4, 3507.0], [63.5, 3513.0], [63.6, 3518.0], [63.7, 3520.0], [63.8, 3536.0], [63.9, 3544.0], [64.0, 3545.0], [64.1, 3552.0], [64.2, 3559.0], [64.3, 3561.0], [64.4, 3571.0], [64.5, 3577.0], [64.6, 3579.0], [64.7, 3590.0], [64.8, 3594.0], [64.9, 3601.0], [65.0, 3603.0], [65.1, 3609.0], [65.2, 3611.0], [65.3, 3615.0], [65.4, 3621.0], [65.5, 3625.0], [65.6, 3630.0], [65.7, 3631.0], [65.8, 3636.0], [65.9, 3638.0], [66.0, 3640.0], [66.1, 3645.0], [66.2, 3651.0], [66.3, 3656.0], [66.4, 3661.0], [66.5, 3663.0], [66.6, 3665.0], [66.7, 3669.0], [66.8, 3675.0], [66.9, 3685.0], [67.0, 3689.0], [67.1, 3695.0], [67.2, 3700.0], [67.3, 3703.0], [67.4, 3708.0], [67.5, 3709.0], [67.6, 3710.0], [67.7, 3717.0], [67.8, 3723.0], [67.9, 3728.0], [68.0, 3732.0], [68.1, 3739.0], [68.2, 3748.0], [68.3, 3755.0], [68.4, 3761.0], [68.5, 3764.0], [68.6, 3768.0], [68.7, 3772.0], [68.8, 3774.0], [68.9, 3780.0], [69.0, 3783.0], [69.1, 3788.0], [69.2, 3790.0], [69.3, 3796.0], [69.4, 3797.0], [69.5, 3802.0], [69.6, 3803.0], [69.7, 3807.0], [69.8, 3810.0], [69.9, 3813.0], [70.0, 3817.0], [70.1, 3819.0], [70.2, 3822.0], [70.3, 3824.0], [70.4, 3827.0], [70.5, 3830.0], [70.6, 3835.0], [70.7, 3844.0], [70.8, 3849.0], [70.9, 3853.0], [71.0, 3853.0], [71.1, 3857.0], [71.2, 3860.0], [71.3, 3861.0], [71.4, 3867.0], [71.5, 3868.0], [71.6, 3870.0], [71.7, 3873.0], [71.8, 3875.0], [71.9, 3877.0], [72.0, 3881.0], [72.1, 3889.0], [72.2, 3894.0], [72.3, 3897.0], [72.4, 3898.0], [72.5, 3902.0], [72.6, 3906.0], [72.7, 3907.0], [72.8, 3908.0], [72.9, 3909.0], [73.0, 3914.0], [73.1, 3916.0], [73.2, 3918.0], [73.3, 3920.0], [73.4, 3923.0], [73.5, 3926.0], [73.6, 3929.0], [73.7, 3930.0], [73.8, 3933.0], [73.9, 3934.0], [74.0, 3934.0], [74.1, 3935.0], [74.2, 3937.0], [74.3, 3939.0], [74.4, 3942.0], [74.5, 3942.0], [74.6, 3948.0], [74.7, 3950.0], [74.8, 3951.0], [74.9, 3954.0], [75.0, 3955.0], [75.1, 3956.0], [75.2, 3958.0], [75.3, 3961.0], [75.4, 3962.0], [75.5, 3964.0], [75.6, 3967.0], [75.7, 3969.0], [75.8, 3971.0], [75.9, 3972.0], [76.0, 3973.0], [76.1, 3975.0], [76.2, 3977.0], [76.3, 3978.0], [76.4, 3980.0], [76.5, 3981.0], [76.6, 3982.0], [76.7, 3984.0], [76.8, 3988.0], [76.9, 3990.0], [77.0, 3990.0], [77.1, 3992.0], [77.2, 3996.0], [77.3, 3998.0], [77.4, 4000.0], [77.5, 4001.0], [77.6, 4003.0], [77.7, 4006.0], [77.8, 4008.0], [77.9, 4011.0], [78.0, 4015.0], [78.1, 4018.0], [78.2, 4018.0], [78.3, 4024.0], [78.4, 4028.0], [78.5, 4033.0], [78.6, 4039.0], [78.7, 4042.0], [78.8, 4046.0], [78.9, 4047.0], [79.0, 4047.0], [79.1, 4049.0], [79.2, 4052.0], [79.3, 4057.0], [79.4, 4060.0], [79.5, 4062.0], [79.6, 4063.0], [79.7, 4064.0], [79.8, 4067.0], [79.9, 4069.0], [80.0, 4072.0], [80.1, 4076.0], [80.2, 4079.0], [80.3, 4083.0], [80.4, 4085.0], [80.5, 4086.0], [80.6, 4094.0], [80.7, 4101.0], [80.8, 4103.0], [80.9, 4106.0], [81.0, 4110.0], [81.1, 4111.0], [81.2, 4116.0], [81.3, 4118.0], [81.4, 4120.0], [81.5, 4124.0], [81.6, 4126.0], [81.7, 4130.0], [81.8, 4131.0], [81.9, 4134.0], [82.0, 4137.0], [82.1, 4140.0], [82.2, 4145.0], [82.3, 4150.0], [82.4, 4154.0], [82.5, 4156.0], [82.6, 4159.0], [82.7, 4162.0], [82.8, 4165.0], [82.9, 4169.0], [83.0, 4170.0], [83.1, 4172.0], [83.2, 4175.0], [83.3, 4181.0], [83.4, 4182.0], [83.5, 4187.0], [83.6, 4191.0], [83.7, 4194.0], [83.8, 4198.0], [83.9, 4204.0], [84.0, 4206.0], [84.1, 4210.0], [84.2, 4214.0], [84.3, 4226.0], [84.4, 4234.0], [84.5, 4241.0], [84.6, 4245.0], [84.7, 4246.0], [84.8, 4253.0], [84.9, 4258.0], [85.0, 4266.0], [85.1, 4279.0], [85.2, 4283.0], [85.3, 4288.0], [85.4, 4304.0], [85.5, 4309.0], [85.6, 4318.0], [85.7, 4319.0], [85.8, 4325.0], [85.9, 4329.0], [86.0, 4332.0], [86.1, 4339.0], [86.2, 4340.0], [86.3, 4346.0], [86.4, 4352.0], [86.5, 4356.0], [86.6, 4362.0], [86.7, 4366.0], [86.8, 4367.0], [86.9, 4371.0], [87.0, 4376.0], [87.1, 4383.0], [87.2, 4387.0], [87.3, 4394.0], [87.4, 4398.0], [87.5, 4403.0], [87.6, 4408.0], [87.7, 4412.0], [87.8, 4420.0], [87.9, 4425.0], [88.0, 4428.0], [88.1, 4434.0], [88.2, 4449.0], [88.3, 4451.0], [88.4, 4451.0], [88.5, 4455.0], [88.6, 4460.0], [88.7, 4462.0], [88.8, 4468.0], [88.9, 4470.0], [89.0, 4474.0], [89.1, 4475.0], [89.2, 4481.0], [89.3, 4489.0], [89.4, 4505.0], [89.5, 4521.0], [89.6, 4530.0], [89.7, 4540.0], [89.8, 4557.0], [89.9, 4564.0], [90.0, 4579.0], [90.1, 4587.0], [90.2, 4592.0], [90.3, 4605.0], [90.4, 4619.0], [90.5, 4623.0], [90.6, 4624.0], [90.7, 4630.0], [90.8, 4642.0], [90.9, 4650.0], [91.0, 4657.0], [91.1, 4665.0], [91.2, 4670.0], [91.3, 4685.0], [91.4, 4691.0], [91.5, 4698.0], [91.6, 4701.0], [91.7, 4702.0], [91.8, 4708.0], [91.9, 4710.0], [92.0, 4713.0], [92.1, 4716.0], [92.2, 4723.0], [92.3, 4729.0], [92.4, 4730.0], [92.5, 4734.0], [92.6, 4741.0], [92.7, 4753.0], [92.8, 4759.0], [92.9, 4761.0], [93.0, 4766.0], [93.1, 4767.0], [93.2, 4774.0], [93.3, 4780.0], [93.4, 4789.0], [93.5, 4791.0], [93.6, 4795.0], [93.7, 4799.0], [93.8, 4824.0], [93.9, 4829.0], [94.0, 4833.0], [94.1, 4842.0], [94.2, 4842.0], [94.3, 4847.0], [94.4, 4853.0], [94.5, 4859.0], [94.6, 4860.0], [94.7, 4861.0], [94.8, 4864.0], [94.9, 4867.0], [95.0, 4869.0], [95.1, 4874.0], [95.2, 4882.0], [95.3, 4884.0], [95.4, 4890.0], [95.5, 4893.0], [95.6, 4896.0], [95.7, 4896.0], [95.8, 4899.0], [95.9, 4901.0], [96.0, 4905.0], [96.1, 4920.0], [96.2, 4924.0], [96.3, 4930.0], [96.4, 4937.0], [96.5, 4948.0], [96.6, 4951.0], [96.7, 4953.0], [96.8, 4967.0], [96.9, 4976.0], [97.0, 4989.0], [97.1, 4991.0], [97.2, 5002.0], [97.3, 5037.0], [97.4, 5043.0], [97.5, 5044.0], [97.6, 5052.0], [97.7, 5062.0], [97.8, 5067.0], [97.9, 5069.0], [98.0, 5083.0], [98.1, 5089.0], [98.2, 5094.0], [98.3, 5101.0], [98.4, 5106.0], [98.5, 5131.0], [98.6, 5138.0], [98.7, 5145.0], [98.8, 5158.0], [98.9, 5166.0], [99.0, 5169.0], [99.1, 5183.0], [99.2, 5219.0], [99.3, 5228.0], [99.4, 5240.0], [99.5, 5270.0], [99.6, 5296.0], [99.7, 5348.0], [99.8, 5382.0], [99.9, 5387.0]], "isOverall": false, "label": "Home Page", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 370.0, "series": [{"data": [[0.0, 1.0], [600.0, 1.0], [700.0, 2.0], [800.0, 2.0], [900.0, 2.0], [1000.0, 3.0], [1100.0, 4.0], [1200.0, 3.0], [1300.0, 3.0], [1400.0, 3.0], [1500.0, 3.0], [1600.0, 5.0], [1700.0, 3.0], [1800.0, 3.0], [1900.0, 3.0], [2000.0, 36.0], [2100.0, 52.0], [2200.0, 84.0], [2300.0, 133.0], [2400.0, 321.0], [2500.0, 370.0], [2600.0, 215.0], [2700.0, 176.0], [2800.0, 98.0], [2900.0, 57.0], [3000.0, 45.0], [3100.0, 43.0], [3200.0, 68.0], [3300.0, 47.0], [3400.0, 19.0], [3500.0, 45.0], [3600.0, 64.0], [3700.0, 67.0], [3800.0, 85.0], [3900.0, 141.0], [4000.0, 94.0], [4100.0, 91.0], [4200.0, 44.0], [4300.0, 60.0], [4500.0, 26.0], [4600.0, 38.0], [4400.0, 54.0], [4700.0, 61.0], [4800.0, 60.0], [4900.0, 39.0], [5000.0, 32.0], [5100.0, 25.0], [5200.0, 13.0], [5300.0, 10.0], [5400.0, 1.0], [100.0, 1.0], [200.0, 1.0], [300.0, 1.0], [400.0, 3.0], [500.0, 2.0]], "isOverall": false, "label": "Home Page", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 5400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 7.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2831.0, "series": [{"data": [[0.0, 7.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 25.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 2831.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 81.12017167381975, "minX": 1.55427414E12, "maxY": 100.0, "series": [{"data": [[1.5542742E12, 100.0], [1.55427426E12, 81.12017167381975], [1.55427414E12, 99.53598200899552]], "isOverall": false, "label": "Scenario 1", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.55427426E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 721.0, "minX": 1.0, "maxY": 3220.2541337167486, "series": [{"data": [[2.0, 2976.0], [3.0, 2970.0], [4.0, 2978.0], [5.0, 3027.0], [6.0, 2968.0], [7.0, 3059.0], [8.0, 3001.0], [9.0, 2985.0], [10.0, 3017.0], [11.0, 1542.0], [12.0, 2956.0], [13.0, 2928.0], [14.0, 3006.0], [15.0, 2967.0], [16.0, 1581.5], [17.0, 3041.0], [18.0, 2956.0], [19.0, 3019.0], [20.0, 2926.0], [21.0, 2933.0], [22.0, 2919.0], [23.0, 1563.0], [24.0, 2830.0], [25.0, 2842.0], [26.0, 2866.0], [27.0, 2843.0], [28.0, 2854.0], [29.0, 2857.0], [30.0, 2831.0], [31.0, 2836.0], [33.0, 2833.0], [32.0, 2811.0], [35.0, 2822.0], [34.0, 2820.0], [37.0, 2764.0], [36.0, 2853.0], [39.0, 2828.0], [38.0, 2789.0], [40.0, 1588.0], [41.0, 2861.0], [43.0, 2824.0], [42.0, 2748.0], [45.0, 2831.0], [44.0, 2808.0], [47.0, 2776.0], [46.0, 2819.0], [48.0, 1596.0], [49.0, 1564.0], [51.0, 2683.0], [50.0, 2677.0], [52.0, 1573.0], [53.0, 2658.0], [55.0, 2672.0], [54.0, 2716.0], [57.0, 1491.5], [56.0, 2532.0], [58.0, 1491.0], [59.0, 2540.0], [61.0, 2504.0], [60.0, 2486.0], [63.0, 2494.0], [62.0, 2561.0], [65.0, 2566.0], [64.0, 2483.0], [73.0, 1582.5], [81.0, 721.0], [83.0, 2525.0], [85.0, 740.0], [94.0, 824.5], [100.0, 3220.2541337167486], [1.0, 2958.0]], "isOverall": false, "label": "Home Page", "isController": false}, {"data": [[98.24729304924905, 3197.217953195943]], "isOverall": false, "label": "Home Page-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 0.0, "minX": 1.55427414E12, "maxY": 29022.1, "series": [{"data": [[1.5542742E12, 27842.4], [1.55427426E12, 5005.616666666667], [1.55427414E12, 29022.1]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.5542742E12, 0.0], [1.55427426E12, 0.0], [1.55427414E12, 0.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.55427426E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 2574.3819742489277, "minX": 1.55427414E12, "maxY": 3664.3179012345695, "series": [{"data": [[1.5542742E12, 3664.3179012345695], [1.55427426E12, 2574.3819742489277], [1.55427414E12, 2852.2098950524773]], "isOverall": false, "label": "Home Page", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.55427426E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 2574.3519313304714, "minX": 1.55427414E12, "maxY": 3664.304012345675, "series": [{"data": [[1.5542742E12, 3664.304012345675], [1.55427426E12, 2574.3519313304714], [1.55427414E12, 2852.186656671666]], "isOverall": false, "label": "Home Page", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.55427426E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.9355322338830593, "minX": 1.55427414E12, "maxY": 1.3896604938271595, "series": [{"data": [[1.5542742E12, 1.3896604938271595], [1.55427426E12, 1.3433476394849795], [1.55427414E12, 0.9355322338830593]], "isOverall": false, "label": "Home Page", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.55427426E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 91.0, "minX": 1.55427414E12, "maxY": 5405.0, "series": [{"data": [[1.5542742E12, 5405.0], [1.55427426E12, 3059.0], [1.55427414E12, 4761.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.5542742E12, 2191.0], [1.55427426E12, 2246.0], [1.55427414E12, 91.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.5542742E12, 4892.3], [1.55427426E12, 2897.7999999999997], [1.55427414E12, 3965.5]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.5542742E12, 5283.389999999999], [1.55427426E12, 3036.24], [1.55427414E12, 4700.3]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.5542742E12, 5065.15], [1.55427426E12, 2976.6], [1.55427414E12, 4111.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.55427426E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 153.0, "minX": 3.0, "maxY": 5017.0, "series": [{"data": [[33.0, 2588.0], [32.0, 2376.0], [34.0, 2493.5], [3.0, 153.0], [8.0, 4470.5], [10.0, 5017.0], [11.0, 4890.0], [12.0, 4366.5], [14.0, 4103.5], [15.0, 4236.5], [16.0, 4097.5], [17.0, 3232.0], [18.0, 4086.0], [19.0, 4614.5], [20.0, 4273.0], [21.0, 3655.0], [22.0, 3633.0], [23.0, 3990.5], [24.0, 2799.0], [25.0, 2693.0], [26.0, 3015.5], [27.0, 2483.0], [28.0, 2682.5], [29.0, 2574.0], [30.0, 2475.0], [31.0, 2508.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 34.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 153.0, "minX": 3.0, "maxY": 5017.0, "series": [{"data": [[33.0, 2588.0], [32.0, 2376.0], [34.0, 2493.5], [3.0, 153.0], [8.0, 4470.5], [10.0, 5017.0], [11.0, 4890.0], [12.0, 4366.5], [14.0, 4103.5], [15.0, 4236.5], [16.0, 4097.5], [17.0, 3232.0], [18.0, 4086.0], [19.0, 4614.5], [20.0, 4273.0], [21.0, 3655.0], [22.0, 3633.0], [23.0, 3990.5], [24.0, 2799.0], [25.0, 2693.0], [26.0, 3015.5], [27.0, 2483.0], [28.0, 2682.5], [29.0, 2574.0], [30.0, 2475.0], [31.0, 2508.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 34.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 2.7, "minX": 1.55427414E12, "maxY": 23.483333333333334, "series": [{"data": [[1.5542742E12, 21.533333333333335], [1.55427426E12, 2.7], [1.55427414E12, 23.483333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.55427426E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 3.8833333333333333, "minX": 1.55427414E12, "maxY": 22.233333333333334, "series": [{"data": [[1.5542742E12, 21.6], [1.55427426E12, 3.8833333333333333], [1.55427414E12, 22.233333333333334]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.55427426E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 3.8833333333333333, "minX": 1.55427414E12, "maxY": 22.233333333333334, "series": [{"data": [[1.5542742E12, 21.6], [1.55427426E12, 3.8833333333333333], [1.55427414E12, 22.233333333333334]], "isOverall": false, "label": "Home Page-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.55427426E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 3.8833333333333333, "minX": 1.55427414E12, "maxY": 22.233333333333334, "series": [{"data": [[1.5542742E12, 21.6], [1.55427426E12, 3.8833333333333333], [1.55427414E12, 22.233333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.55427426E12, "title": "Total Transactions Per Second"}},
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

