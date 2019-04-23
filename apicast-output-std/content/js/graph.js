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
        data: {"result": {"minY": 165.0, "minX": 0.0, "maxY": 3748.0, "series": [{"data": [[0.0, 165.0], [0.1, 279.0], [0.2, 463.0], [0.3, 582.0], [0.4, 676.0], [0.5, 923.0], [0.6, 1021.0], [0.7, 1107.0], [0.8, 1212.0], [0.9, 1380.0], [1.0, 1491.0], [1.1, 1635.0], [1.2, 1712.0], [1.3, 1841.0], [1.4, 2002.0], [1.5, 2043.0], [1.6, 2175.0], [1.7, 2221.0], [1.8, 2245.0], [1.9, 2257.0], [2.0, 2263.0], [2.1, 2271.0], [2.2, 2275.0], [2.3, 2283.0], [2.4, 2286.0], [2.5, 2292.0], [2.6, 2299.0], [2.7, 2303.0], [2.8, 2307.0], [2.9, 2312.0], [3.0, 2317.0], [3.1, 2319.0], [3.2, 2320.0], [3.3, 2324.0], [3.4, 2326.0], [3.5, 2326.0], [3.6, 2328.0], [3.7, 2331.0], [3.8, 2334.0], [3.9, 2337.0], [4.0, 2341.0], [4.1, 2344.0], [4.2, 2346.0], [4.3, 2348.0], [4.4, 2352.0], [4.5, 2355.0], [4.6, 2356.0], [4.7, 2359.0], [4.8, 2360.0], [4.9, 2362.0], [5.0, 2364.0], [5.1, 2367.0], [5.2, 2369.0], [5.3, 2371.0], [5.4, 2372.0], [5.5, 2374.0], [5.6, 2375.0], [5.7, 2377.0], [5.8, 2378.0], [5.9, 2380.0], [6.0, 2381.0], [6.1, 2382.0], [6.2, 2382.0], [6.3, 2384.0], [6.4, 2384.0], [6.5, 2387.0], [6.6, 2389.0], [6.7, 2389.0], [6.8, 2392.0], [6.9, 2393.0], [7.0, 2393.0], [7.1, 2394.0], [7.2, 2395.0], [7.3, 2395.0], [7.4, 2397.0], [7.5, 2398.0], [7.6, 2398.0], [7.7, 2399.0], [7.8, 2400.0], [7.9, 2401.0], [8.0, 2401.0], [8.1, 2402.0], [8.2, 2404.0], [8.3, 2404.0], [8.4, 2405.0], [8.5, 2406.0], [8.6, 2407.0], [8.7, 2409.0], [8.8, 2410.0], [8.9, 2412.0], [9.0, 2413.0], [9.1, 2414.0], [9.2, 2414.0], [9.3, 2415.0], [9.4, 2415.0], [9.5, 2416.0], [9.6, 2417.0], [9.7, 2418.0], [9.8, 2418.0], [9.9, 2419.0], [10.0, 2419.0], [10.1, 2420.0], [10.2, 2421.0], [10.3, 2422.0], [10.4, 2423.0], [10.5, 2425.0], [10.6, 2425.0], [10.7, 2426.0], [10.8, 2426.0], [10.9, 2427.0], [11.0, 2427.0], [11.1, 2428.0], [11.2, 2429.0], [11.3, 2430.0], [11.4, 2430.0], [11.5, 2432.0], [11.6, 2433.0], [11.7, 2434.0], [11.8, 2435.0], [11.9, 2436.0], [12.0, 2436.0], [12.1, 2437.0], [12.2, 2438.0], [12.3, 2440.0], [12.4, 2442.0], [12.5, 2443.0], [12.6, 2444.0], [12.7, 2445.0], [12.8, 2446.0], [12.9, 2446.0], [13.0, 2446.0], [13.1, 2448.0], [13.2, 2449.0], [13.3, 2449.0], [13.4, 2449.0], [13.5, 2450.0], [13.6, 2450.0], [13.7, 2451.0], [13.8, 2452.0], [13.9, 2453.0], [14.0, 2454.0], [14.1, 2455.0], [14.2, 2455.0], [14.3, 2456.0], [14.4, 2457.0], [14.5, 2458.0], [14.6, 2459.0], [14.7, 2459.0], [14.8, 2460.0], [14.9, 2461.0], [15.0, 2461.0], [15.1, 2462.0], [15.2, 2464.0], [15.3, 2464.0], [15.4, 2465.0], [15.5, 2466.0], [15.6, 2466.0], [15.7, 2467.0], [15.8, 2468.0], [15.9, 2469.0], [16.0, 2470.0], [16.1, 2470.0], [16.2, 2471.0], [16.3, 2472.0], [16.4, 2473.0], [16.5, 2474.0], [16.6, 2475.0], [16.7, 2476.0], [16.8, 2477.0], [16.9, 2478.0], [17.0, 2478.0], [17.1, 2479.0], [17.2, 2479.0], [17.3, 2480.0], [17.4, 2481.0], [17.5, 2482.0], [17.6, 2483.0], [17.7, 2483.0], [17.8, 2484.0], [17.9, 2484.0], [18.0, 2485.0], [18.1, 2486.0], [18.2, 2487.0], [18.3, 2487.0], [18.4, 2488.0], [18.5, 2489.0], [18.6, 2490.0], [18.7, 2491.0], [18.8, 2491.0], [18.9, 2493.0], [19.0, 2494.0], [19.1, 2494.0], [19.2, 2495.0], [19.3, 2495.0], [19.4, 2496.0], [19.5, 2497.0], [19.6, 2497.0], [19.7, 2498.0], [19.8, 2499.0], [19.9, 2501.0], [20.0, 2501.0], [20.1, 2502.0], [20.2, 2503.0], [20.3, 2505.0], [20.4, 2505.0], [20.5, 2506.0], [20.6, 2507.0], [20.7, 2507.0], [20.8, 2508.0], [20.9, 2509.0], [21.0, 2509.0], [21.1, 2510.0], [21.2, 2511.0], [21.3, 2511.0], [21.4, 2512.0], [21.5, 2513.0], [21.6, 2514.0], [21.7, 2515.0], [21.8, 2515.0], [21.9, 2516.0], [22.0, 2516.0], [22.1, 2517.0], [22.2, 2518.0], [22.3, 2519.0], [22.4, 2520.0], [22.5, 2520.0], [22.6, 2521.0], [22.7, 2522.0], [22.8, 2523.0], [22.9, 2525.0], [23.0, 2526.0], [23.1, 2527.0], [23.2, 2527.0], [23.3, 2528.0], [23.4, 2529.0], [23.5, 2529.0], [23.6, 2530.0], [23.7, 2531.0], [23.8, 2531.0], [23.9, 2532.0], [24.0, 2533.0], [24.1, 2534.0], [24.2, 2535.0], [24.3, 2535.0], [24.4, 2536.0], [24.5, 2536.0], [24.6, 2537.0], [24.7, 2539.0], [24.8, 2539.0], [24.9, 2540.0], [25.0, 2540.0], [25.1, 2541.0], [25.2, 2542.0], [25.3, 2542.0], [25.4, 2542.0], [25.5, 2543.0], [25.6, 2543.0], [25.7, 2545.0], [25.8, 2546.0], [25.9, 2546.0], [26.0, 2547.0], [26.1, 2547.0], [26.2, 2549.0], [26.3, 2550.0], [26.4, 2551.0], [26.5, 2552.0], [26.6, 2553.0], [26.7, 2553.0], [26.8, 2554.0], [26.9, 2555.0], [27.0, 2556.0], [27.1, 2556.0], [27.2, 2557.0], [27.3, 2558.0], [27.4, 2559.0], [27.5, 2560.0], [27.6, 2560.0], [27.7, 2561.0], [27.8, 2562.0], [27.9, 2562.0], [28.0, 2564.0], [28.1, 2565.0], [28.2, 2567.0], [28.3, 2567.0], [28.4, 2568.0], [28.5, 2568.0], [28.6, 2569.0], [28.7, 2569.0], [28.8, 2569.0], [28.9, 2569.0], [29.0, 2570.0], [29.1, 2571.0], [29.2, 2571.0], [29.3, 2572.0], [29.4, 2574.0], [29.5, 2575.0], [29.6, 2575.0], [29.7, 2576.0], [29.8, 2576.0], [29.9, 2577.0], [30.0, 2577.0], [30.1, 2577.0], [30.2, 2577.0], [30.3, 2579.0], [30.4, 2579.0], [30.5, 2580.0], [30.6, 2580.0], [30.7, 2580.0], [30.8, 2581.0], [30.9, 2581.0], [31.0, 2582.0], [31.1, 2582.0], [31.2, 2583.0], [31.3, 2583.0], [31.4, 2584.0], [31.5, 2584.0], [31.6, 2584.0], [31.7, 2584.0], [31.8, 2585.0], [31.9, 2585.0], [32.0, 2585.0], [32.1, 2587.0], [32.2, 2587.0], [32.3, 2588.0], [32.4, 2588.0], [32.5, 2589.0], [32.6, 2589.0], [32.7, 2590.0], [32.8, 2590.0], [32.9, 2592.0], [33.0, 2593.0], [33.1, 2594.0], [33.2, 2594.0], [33.3, 2595.0], [33.4, 2598.0], [33.5, 2598.0], [33.6, 2599.0], [33.7, 2599.0], [33.8, 2600.0], [33.9, 2600.0], [34.0, 2602.0], [34.1, 2603.0], [34.2, 2603.0], [34.3, 2604.0], [34.4, 2605.0], [34.5, 2606.0], [34.6, 2606.0], [34.7, 2607.0], [34.8, 2608.0], [34.9, 2608.0], [35.0, 2609.0], [35.1, 2609.0], [35.2, 2610.0], [35.3, 2610.0], [35.4, 2611.0], [35.5, 2612.0], [35.6, 2612.0], [35.7, 2613.0], [35.8, 2613.0], [35.9, 2614.0], [36.0, 2614.0], [36.1, 2615.0], [36.2, 2615.0], [36.3, 2616.0], [36.4, 2617.0], [36.5, 2617.0], [36.6, 2618.0], [36.7, 2619.0], [36.8, 2619.0], [36.9, 2620.0], [37.0, 2620.0], [37.1, 2620.0], [37.2, 2621.0], [37.3, 2622.0], [37.4, 2623.0], [37.5, 2623.0], [37.6, 2623.0], [37.7, 2624.0], [37.8, 2625.0], [37.9, 2626.0], [38.0, 2626.0], [38.1, 2626.0], [38.2, 2628.0], [38.3, 2628.0], [38.4, 2629.0], [38.5, 2629.0], [38.6, 2630.0], [38.7, 2630.0], [38.8, 2630.0], [38.9, 2631.0], [39.0, 2632.0], [39.1, 2632.0], [39.2, 2632.0], [39.3, 2634.0], [39.4, 2634.0], [39.5, 2635.0], [39.6, 2635.0], [39.7, 2636.0], [39.8, 2637.0], [39.9, 2637.0], [40.0, 2638.0], [40.1, 2639.0], [40.2, 2640.0], [40.3, 2640.0], [40.4, 2641.0], [40.5, 2642.0], [40.6, 2644.0], [40.7, 2644.0], [40.8, 2644.0], [40.9, 2645.0], [41.0, 2645.0], [41.1, 2645.0], [41.2, 2646.0], [41.3, 2647.0], [41.4, 2647.0], [41.5, 2647.0], [41.6, 2648.0], [41.7, 2648.0], [41.8, 2648.0], [41.9, 2648.0], [42.0, 2649.0], [42.1, 2649.0], [42.2, 2650.0], [42.3, 2651.0], [42.4, 2651.0], [42.5, 2651.0], [42.6, 2652.0], [42.7, 2653.0], [42.8, 2653.0], [42.9, 2654.0], [43.0, 2654.0], [43.1, 2655.0], [43.2, 2655.0], [43.3, 2657.0], [43.4, 2657.0], [43.5, 2658.0], [43.6, 2659.0], [43.7, 2659.0], [43.8, 2660.0], [43.9, 2660.0], [44.0, 2660.0], [44.1, 2661.0], [44.2, 2661.0], [44.3, 2662.0], [44.4, 2662.0], [44.5, 2663.0], [44.6, 2664.0], [44.7, 2664.0], [44.8, 2665.0], [44.9, 2665.0], [45.0, 2666.0], [45.1, 2667.0], [45.2, 2667.0], [45.3, 2668.0], [45.4, 2668.0], [45.5, 2669.0], [45.6, 2669.0], [45.7, 2670.0], [45.8, 2670.0], [45.9, 2671.0], [46.0, 2672.0], [46.1, 2673.0], [46.2, 2673.0], [46.3, 2674.0], [46.4, 2675.0], [46.5, 2675.0], [46.6, 2676.0], [46.7, 2677.0], [46.8, 2678.0], [46.9, 2678.0], [47.0, 2679.0], [47.1, 2679.0], [47.2, 2680.0], [47.3, 2680.0], [47.4, 2680.0], [47.5, 2681.0], [47.6, 2681.0], [47.7, 2682.0], [47.8, 2683.0], [47.9, 2684.0], [48.0, 2684.0], [48.1, 2685.0], [48.2, 2685.0], [48.3, 2686.0], [48.4, 2686.0], [48.5, 2687.0], [48.6, 2687.0], [48.7, 2688.0], [48.8, 2689.0], [48.9, 2690.0], [49.0, 2690.0], [49.1, 2691.0], [49.2, 2692.0], [49.3, 2692.0], [49.4, 2692.0], [49.5, 2692.0], [49.6, 2693.0], [49.7, 2693.0], [49.8, 2693.0], [49.9, 2693.0], [50.0, 2694.0], [50.1, 2695.0], [50.2, 2695.0], [50.3, 2696.0], [50.4, 2696.0], [50.5, 2697.0], [50.6, 2698.0], [50.7, 2698.0], [50.8, 2698.0], [50.9, 2699.0], [51.0, 2700.0], [51.1, 2700.0], [51.2, 2700.0], [51.3, 2700.0], [51.4, 2701.0], [51.5, 2702.0], [51.6, 2702.0], [51.7, 2702.0], [51.8, 2703.0], [51.9, 2704.0], [52.0, 2704.0], [52.1, 2704.0], [52.2, 2705.0], [52.3, 2705.0], [52.4, 2706.0], [52.5, 2706.0], [52.6, 2707.0], [52.7, 2708.0], [52.8, 2708.0], [52.9, 2708.0], [53.0, 2709.0], [53.1, 2710.0], [53.2, 2710.0], [53.3, 2710.0], [53.4, 2711.0], [53.5, 2711.0], [53.6, 2712.0], [53.7, 2712.0], [53.8, 2712.0], [53.9, 2712.0], [54.0, 2714.0], [54.1, 2714.0], [54.2, 2714.0], [54.3, 2714.0], [54.4, 2715.0], [54.5, 2715.0], [54.6, 2716.0], [54.7, 2716.0], [54.8, 2717.0], [54.9, 2718.0], [55.0, 2718.0], [55.1, 2718.0], [55.2, 2718.0], [55.3, 2719.0], [55.4, 2719.0], [55.5, 2719.0], [55.6, 2720.0], [55.7, 2720.0], [55.8, 2721.0], [55.9, 2721.0], [56.0, 2722.0], [56.1, 2722.0], [56.2, 2723.0], [56.3, 2723.0], [56.4, 2724.0], [56.5, 2725.0], [56.6, 2726.0], [56.7, 2726.0], [56.8, 2727.0], [56.9, 2727.0], [57.0, 2727.0], [57.1, 2728.0], [57.2, 2729.0], [57.3, 2730.0], [57.4, 2730.0], [57.5, 2731.0], [57.6, 2732.0], [57.7, 2733.0], [57.8, 2733.0], [57.9, 2733.0], [58.0, 2734.0], [58.1, 2735.0], [58.2, 2735.0], [58.3, 2736.0], [58.4, 2736.0], [58.5, 2737.0], [58.6, 2737.0], [58.7, 2737.0], [58.8, 2738.0], [58.9, 2738.0], [59.0, 2739.0], [59.1, 2739.0], [59.2, 2740.0], [59.3, 2740.0], [59.4, 2741.0], [59.5, 2742.0], [59.6, 2742.0], [59.7, 2743.0], [59.8, 2743.0], [59.9, 2744.0], [60.0, 2744.0], [60.1, 2745.0], [60.2, 2745.0], [60.3, 2746.0], [60.4, 2747.0], [60.5, 2747.0], [60.6, 2748.0], [60.7, 2749.0], [60.8, 2749.0], [60.9, 2750.0], [61.0, 2750.0], [61.1, 2751.0], [61.2, 2752.0], [61.3, 2753.0], [61.4, 2753.0], [61.5, 2754.0], [61.6, 2754.0], [61.7, 2755.0], [61.8, 2755.0], [61.9, 2756.0], [62.0, 2756.0], [62.1, 2756.0], [62.2, 2757.0], [62.3, 2758.0], [62.4, 2758.0], [62.5, 2759.0], [62.6, 2760.0], [62.7, 2761.0], [62.8, 2761.0], [62.9, 2762.0], [63.0, 2762.0], [63.1, 2762.0], [63.2, 2763.0], [63.3, 2764.0], [63.4, 2765.0], [63.5, 2765.0], [63.6, 2766.0], [63.7, 2767.0], [63.8, 2768.0], [63.9, 2768.0], [64.0, 2768.0], [64.1, 2770.0], [64.2, 2770.0], [64.3, 2772.0], [64.4, 2773.0], [64.5, 2773.0], [64.6, 2774.0], [64.7, 2774.0], [64.8, 2775.0], [64.9, 2775.0], [65.0, 2776.0], [65.1, 2776.0], [65.2, 2776.0], [65.3, 2777.0], [65.4, 2777.0], [65.5, 2778.0], [65.6, 2779.0], [65.7, 2780.0], [65.8, 2781.0], [65.9, 2781.0], [66.0, 2782.0], [66.1, 2782.0], [66.2, 2783.0], [66.3, 2784.0], [66.4, 2785.0], [66.5, 2785.0], [66.6, 2786.0], [66.7, 2787.0], [66.8, 2788.0], [66.9, 2789.0], [67.0, 2791.0], [67.1, 2792.0], [67.2, 2792.0], [67.3, 2793.0], [67.4, 2794.0], [67.5, 2794.0], [67.6, 2795.0], [67.7, 2796.0], [67.8, 2797.0], [67.9, 2797.0], [68.0, 2798.0], [68.1, 2798.0], [68.2, 2798.0], [68.3, 2799.0], [68.4, 2799.0], [68.5, 2800.0], [68.6, 2801.0], [68.7, 2801.0], [68.8, 2801.0], [68.9, 2802.0], [69.0, 2802.0], [69.1, 2803.0], [69.2, 2803.0], [69.3, 2804.0], [69.4, 2804.0], [69.5, 2805.0], [69.6, 2806.0], [69.7, 2806.0], [69.8, 2807.0], [69.9, 2807.0], [70.0, 2808.0], [70.1, 2809.0], [70.2, 2810.0], [70.3, 2810.0], [70.4, 2811.0], [70.5, 2811.0], [70.6, 2812.0], [70.7, 2813.0], [70.8, 2813.0], [70.9, 2815.0], [71.0, 2815.0], [71.1, 2816.0], [71.2, 2816.0], [71.3, 2817.0], [71.4, 2819.0], [71.5, 2821.0], [71.6, 2821.0], [71.7, 2821.0], [71.8, 2822.0], [71.9, 2823.0], [72.0, 2824.0], [72.1, 2825.0], [72.2, 2826.0], [72.3, 2826.0], [72.4, 2827.0], [72.5, 2829.0], [72.6, 2830.0], [72.7, 2830.0], [72.8, 2832.0], [72.9, 2832.0], [73.0, 2833.0], [73.1, 2834.0], [73.2, 2835.0], [73.3, 2836.0], [73.4, 2836.0], [73.5, 2837.0], [73.6, 2838.0], [73.7, 2839.0], [73.8, 2839.0], [73.9, 2839.0], [74.0, 2840.0], [74.1, 2841.0], [74.2, 2842.0], [74.3, 2843.0], [74.4, 2844.0], [74.5, 2844.0], [74.6, 2846.0], [74.7, 2847.0], [74.8, 2850.0], [74.9, 2851.0], [75.0, 2852.0], [75.1, 2852.0], [75.2, 2853.0], [75.3, 2854.0], [75.4, 2854.0], [75.5, 2856.0], [75.6, 2857.0], [75.7, 2858.0], [75.8, 2858.0], [75.9, 2859.0], [76.0, 2860.0], [76.1, 2862.0], [76.2, 2862.0], [76.3, 2863.0], [76.4, 2865.0], [76.5, 2865.0], [76.6, 2866.0], [76.7, 2867.0], [76.8, 2868.0], [76.9, 2870.0], [77.0, 2872.0], [77.1, 2873.0], [77.2, 2875.0], [77.3, 2875.0], [77.4, 2876.0], [77.5, 2877.0], [77.6, 2878.0], [77.7, 2879.0], [77.8, 2880.0], [77.9, 2881.0], [78.0, 2882.0], [78.1, 2882.0], [78.2, 2884.0], [78.3, 2884.0], [78.4, 2885.0], [78.5, 2886.0], [78.6, 2887.0], [78.7, 2888.0], [78.8, 2889.0], [78.9, 2891.0], [79.0, 2893.0], [79.1, 2893.0], [79.2, 2895.0], [79.3, 2896.0], [79.4, 2897.0], [79.5, 2898.0], [79.6, 2899.0], [79.7, 2900.0], [79.8, 2901.0], [79.9, 2903.0], [80.0, 2904.0], [80.1, 2905.0], [80.2, 2907.0], [80.3, 2909.0], [80.4, 2910.0], [80.5, 2911.0], [80.6, 2912.0], [80.7, 2912.0], [80.8, 2914.0], [80.9, 2916.0], [81.0, 2917.0], [81.1, 2918.0], [81.2, 2921.0], [81.3, 2922.0], [81.4, 2923.0], [81.5, 2925.0], [81.6, 2926.0], [81.7, 2929.0], [81.8, 2929.0], [81.9, 2931.0], [82.0, 2933.0], [82.1, 2933.0], [82.2, 2934.0], [82.3, 2936.0], [82.4, 2937.0], [82.5, 2940.0], [82.6, 2940.0], [82.7, 2942.0], [82.8, 2944.0], [82.9, 2946.0], [83.0, 2948.0], [83.1, 2950.0], [83.2, 2951.0], [83.3, 2952.0], [83.4, 2955.0], [83.5, 2956.0], [83.6, 2958.0], [83.7, 2960.0], [83.8, 2963.0], [83.9, 2965.0], [84.0, 2968.0], [84.1, 2970.0], [84.2, 2970.0], [84.3, 2972.0], [84.4, 2973.0], [84.5, 2975.0], [84.6, 2977.0], [84.7, 2981.0], [84.8, 2982.0], [84.9, 2983.0], [85.0, 2985.0], [85.1, 2986.0], [85.2, 2988.0], [85.3, 2991.0], [85.4, 2994.0], [85.5, 2997.0], [85.6, 3000.0], [85.7, 3001.0], [85.8, 3004.0], [85.9, 3006.0], [86.0, 3009.0], [86.1, 3011.0], [86.2, 3013.0], [86.3, 3015.0], [86.4, 3017.0], [86.5, 3019.0], [86.6, 3020.0], [86.7, 3021.0], [86.8, 3024.0], [86.9, 3029.0], [87.0, 3031.0], [87.1, 3032.0], [87.2, 3034.0], [87.3, 3035.0], [87.4, 3037.0], [87.5, 3040.0], [87.6, 3041.0], [87.7, 3043.0], [87.8, 3046.0], [87.9, 3049.0], [88.0, 3049.0], [88.1, 3051.0], [88.2, 3058.0], [88.3, 3062.0], [88.4, 3063.0], [88.5, 3064.0], [88.6, 3066.0], [88.7, 3069.0], [88.8, 3079.0], [88.9, 3081.0], [89.0, 3084.0], [89.1, 3089.0], [89.2, 3094.0], [89.3, 3098.0], [89.4, 3107.0], [89.5, 3112.0], [89.6, 3118.0], [89.7, 3121.0], [89.8, 3127.0], [89.9, 3129.0], [90.0, 3133.0], [90.1, 3140.0], [90.2, 3142.0], [90.3, 3145.0], [90.4, 3153.0], [90.5, 3155.0], [90.6, 3159.0], [90.7, 3165.0], [90.8, 3174.0], [90.9, 3177.0], [91.0, 3182.0], [91.1, 3187.0], [91.2, 3189.0], [91.3, 3194.0], [91.4, 3196.0], [91.5, 3199.0], [91.6, 3200.0], [91.7, 3204.0], [91.8, 3206.0], [91.9, 3208.0], [92.0, 3210.0], [92.1, 3213.0], [92.2, 3214.0], [92.3, 3218.0], [92.4, 3219.0], [92.5, 3222.0], [92.6, 3226.0], [92.7, 3229.0], [92.8, 3232.0], [92.9, 3235.0], [93.0, 3237.0], [93.1, 3240.0], [93.2, 3243.0], [93.3, 3249.0], [93.4, 3254.0], [93.5, 3256.0], [93.6, 3260.0], [93.7, 3263.0], [93.8, 3271.0], [93.9, 3273.0], [94.0, 3276.0], [94.1, 3276.0], [94.2, 3278.0], [94.3, 3285.0], [94.4, 3291.0], [94.5, 3293.0], [94.6, 3296.0], [94.7, 3298.0], [94.8, 3301.0], [94.9, 3304.0], [95.0, 3311.0], [95.1, 3313.0], [95.2, 3317.0], [95.3, 3320.0], [95.4, 3325.0], [95.5, 3330.0], [95.6, 3334.0], [95.7, 3337.0], [95.8, 3342.0], [95.9, 3344.0], [96.0, 3345.0], [96.1, 3347.0], [96.2, 3352.0], [96.3, 3356.0], [96.4, 3359.0], [96.5, 3367.0], [96.6, 3370.0], [96.7, 3371.0], [96.8, 3375.0], [96.9, 3378.0], [97.0, 3381.0], [97.1, 3383.0], [97.2, 3385.0], [97.3, 3386.0], [97.4, 3390.0], [97.5, 3392.0], [97.6, 3395.0], [97.7, 3398.0], [97.8, 3401.0], [97.9, 3404.0], [98.0, 3409.0], [98.1, 3411.0], [98.2, 3414.0], [98.3, 3420.0], [98.4, 3424.0], [98.5, 3430.0], [98.6, 3431.0], [98.7, 3440.0], [98.8, 3441.0], [98.9, 3446.0], [99.0, 3450.0], [99.1, 3462.0], [99.2, 3473.0], [99.3, 3477.0], [99.4, 3485.0], [99.5, 3494.0], [99.6, 3511.0], [99.7, 3531.0], [99.8, 3552.0], [99.9, 3562.0], [100.0, 3748.0]], "isOverall": false, "label": "Home Page", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 562.0, "series": [{"data": [[600.0, 3.0], [700.0, 2.0], [800.0, 1.0], [900.0, 2.0], [1000.0, 3.0], [1100.0, 3.0], [1200.0, 3.0], [1300.0, 4.0], [1400.0, 2.0], [1500.0, 2.0], [100.0, 1.0], [1600.0, 3.0], [1700.0, 3.0], [1800.0, 3.0], [1900.0, 1.0], [2000.0, 4.0], [2100.0, 4.0], [2200.0, 31.0], [2300.0, 167.0], [2400.0, 389.0], [2500.0, 448.0], [2600.0, 558.0], [2700.0, 562.0], [2800.0, 362.0], [2900.0, 193.0], [3000.0, 120.0], [3100.0, 72.0], [200.0, 3.0], [3200.0, 104.0], [3300.0, 96.0], [3400.0, 59.0], [3500.0, 11.0], [3600.0, 2.0], [3700.0, 1.0], [300.0, 1.0], [400.0, 3.0], [500.0, 2.0]], "isOverall": false, "label": "Home Page", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3700.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 8.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3195.0, "series": [{"data": [[0.0, 8.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 25.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 3195.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 89.2950819672131, "minX": 1.55421168E12, "maxY": 100.0, "series": [{"data": [[1.55421174E12, 100.0], [1.55421168E12, 89.2950819672131], [1.5542118E12, 97.25480471171733]], "isOverall": false, "label": "Scenario 1", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.5542118E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 615.0, "minX": 1.0, "maxY": 2893.0, "series": [{"data": [[2.0, 2692.0], [3.0, 2692.0], [4.0, 2721.0], [5.0, 2710.0], [6.0, 2670.0], [7.0, 2687.0], [8.0, 2763.0], [9.0, 2649.0], [10.0, 2711.0], [11.0, 2766.0], [12.0, 2691.0], [13.0, 2640.0], [14.0, 2733.0], [15.0, 2661.0], [16.0, 2647.0], [17.0, 2600.0], [18.0, 2623.0], [19.0, 1392.5], [20.0, 2581.0], [21.0, 2629.0], [22.0, 2581.0], [23.0, 2599.0], [24.0, 2614.0], [25.0, 2609.0], [26.0, 2542.0], [27.0, 2593.0], [28.0, 2535.0], [29.0, 2527.0], [30.0, 2514.0], [31.0, 2525.0], [32.0, 1441.5], [33.0, 1416.0], [35.0, 2609.0], [34.0, 2557.0], [36.0, 1396.5], [37.0, 2623.0], [39.0, 2540.0], [38.0, 2571.0], [41.0, 2657.0], [40.0, 2619.0], [43.0, 2536.0], [42.0, 2549.0], [44.0, 1107.0], [45.0, 2661.0], [47.0, 2678.0], [46.0, 2701.0], [49.0, 2834.0], [48.0, 2713.0], [51.0, 1603.5], [50.0, 2741.0], [53.0, 1612.0], [52.0, 2871.0], [55.0, 2766.0], [54.0, 2864.0], [57.0, 2798.0], [56.0, 2838.0], [59.0, 2781.0], [58.0, 2774.0], [61.0, 2768.0], [60.0, 2893.0], [62.0, 1286.6666666666665], [63.0, 2825.0], [66.0, 2804.0], [65.0, 2772.0], [64.0, 2754.0], [69.0, 2776.0], [73.0, 615.0], [78.0, 654.0], [79.0, 676.0], [88.0, 740.0], [93.0, 786.0], [96.0, 2766.0], [100.0, 2722.5928753180683], [1.0, 2724.0]], "isOverall": false, "label": "Home Page", "isController": false}, {"data": [[98.42596034696426, 2711.2273853779525]], "isOverall": false, "label": "Home Page-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 0.0, "minX": 1.55421168E12, "maxY": 34195.6, "series": [{"data": [[1.55421174E12, 33086.5], [1.55421168E12, 1514.8333333333333], [1.5542118E12, 34195.6]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.55421174E12, 0.0], [1.55421168E12, 0.0], [1.5542118E12, 0.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.5542118E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1386.2622950819668, "minX": 1.55421168E12, "maxY": 2828.552123552127, "series": [{"data": [[1.55421174E12, 2828.552123552127], [1.55421168E12, 1386.2622950819668], [1.5542118E12, 2648.3013019218856]], "isOverall": false, "label": "Home Page", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.5542118E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1385.983606557377, "minX": 1.55421168E12, "maxY": 2828.537966537967, "series": [{"data": [[1.55421174E12, 2828.537966537967], [1.55421168E12, 1385.983606557377], [1.5542118E12, 2648.289522628639]], "isOverall": false, "label": "Home Page", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.5542118E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.7799132052076875, "minX": 1.55421168E12, "maxY": 4.868852459016393, "series": [{"data": [[1.55421174E12, 0.9375804375804379], [1.55421168E12, 4.868852459016393], [1.5542118E12, 0.7799132052076875]], "isOverall": false, "label": "Home Page", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.5542118E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 165.0, "minX": 1.55421168E12, "maxY": 3748.0, "series": [{"data": [[1.55421174E12, 3617.0], [1.55421168E12, 2373.0], [1.5542118E12, 3748.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.55421174E12, 2257.0], [1.55421168E12, 165.0], [1.5542118E12, 2221.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.55421174E12, 3237.0], [1.55421168E12, 2259.6], [1.5542118E12, 2891.8]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.55421174E12, 3440.45], [1.55421168E12, 2373.0], [1.5542118E12, 3493.0199999999995]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.55421174E12, 3344.25], [1.55421168E12, 2326.2], [1.5542118E12, 3192.5]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.5542118E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 497.0, "minX": 15.0, "maxY": 3134.0, "series": [{"data": [[33.0, 2756.0], [32.0, 2643.5], [15.0, 497.0], [18.0, 2799.0], [19.0, 3134.0], [20.0, 3030.0], [21.0, 2733.0], [22.0, 2777.0], [23.0, 2609.0], [24.0, 2800.5], [25.0, 2730.0], [26.0, 2769.0], [27.0, 2672.0], [28.0, 2527.0], [29.0, 2696.0], [30.0, 2519.5], [31.0, 2648.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 33.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 497.0, "minX": 15.0, "maxY": 3134.0, "series": [{"data": [[33.0, 2756.0], [32.0, 2643.5], [15.0, 497.0], [18.0, 2799.0], [19.0, 3134.0], [20.0, 3030.0], [21.0, 2733.0], [22.0, 2777.0], [23.0, 2609.0], [24.0, 2800.5], [25.0, 2730.0], [26.0, 2769.0], [27.0, 2672.0], [28.0, 2527.0], [29.0, 2696.0], [30.0, 2519.5], [31.0, 2648.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 33.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 2.25, "minX": 1.55421168E12, "maxY": 25.8, "series": [{"data": [[1.55421174E12, 25.8], [1.55421168E12, 2.25], [1.5542118E12, 25.75]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.5542118E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.0166666666666666, "minX": 1.55421168E12, "maxY": 26.883333333333333, "series": [{"data": [[1.55421174E12, 25.9], [1.55421168E12, 1.0166666666666666], [1.5542118E12, 26.883333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.5542118E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.0166666666666666, "minX": 1.55421168E12, "maxY": 26.883333333333333, "series": [{"data": [[1.55421174E12, 25.9], [1.55421168E12, 1.0166666666666666], [1.5542118E12, 26.883333333333333]], "isOverall": false, "label": "Home Page-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.5542118E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.0166666666666666, "minX": 1.55421168E12, "maxY": 26.883333333333333, "series": [{"data": [[1.55421174E12, 25.9], [1.55421168E12, 1.0166666666666666], [1.5542118E12, 26.883333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.5542118E12, "title": "Total Transactions Per Second"}},
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

