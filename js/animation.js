$(function () {
    // スクロール時の処理
    $(window).scroll(function () {
        // 対象要素に初期状態のスタイルを付与
        $(".scrollAnim").addClass("ready");
    
        // ウィンドウの高さを取得
        const windowHeight = $(this).height();
  
        // 現在の座標を取得
        const scrollAmount = $(this).scrollTop();
  
        $(".ready").each(function () {
            // 対象要素の座標を取得
            const targetPosition = $(this).offset().top;
  
            // 対象要素が画面内に入った時の処理
            if (scrollAmount > targetPosition - windowHeight + 60) {
                $(this).addClass("active");
            } else {
                $(this).removeClass("active");
            }
        
            // 座標カウンター
            $("#no").html(scrollAmount);
        });
    });
});