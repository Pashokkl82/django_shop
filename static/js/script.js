$(document).ready(function(){
    var form = $('#form_buying_product');
    console.log(form);

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!






// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    function basketUpdating(product_id, nmb, is_delete) {
        var data = {};
        data.product_id = product_id;
        data.nmb = nmb;

        data.is_delete = is_delete;
        var csrf_token = $('#form_buying_product [name="csrfmiddlewaretoken"]').val();
        data['csrfmiddlewaretoken'] = csrf_token;

        var url = form.attr("action");
        console.log(data)
        $.ajax({
            url: url,
            type: 'POST',
            data: data,
            cache: true,
            success: function (data) {
                console.log("OK");
                console.log(data.products_total_nmb);
                if (data.products_total_nmb || data.products_total_nmb == 0) {
                    $('#basket_total_nmb').text("(" + data.products_total_nmb + ")");
                    console.log(data.products);
                    $('.basket-items ul').html("");
                    $.each(data.products, function (k, v) {
                        $('.basket-items ul').append('<li>' + v.name + ', ' + v.nmb + 'шт. ' + 'по ' + v.price_per_item + ' RUB ' +
                            '<a class="delete-item" href="" data-product_id="'+v.id+'">x</a>' +
                            '</li>');
                    });
                }
            },
            error: function () {
                console.log("error")
            }
        })
    }

    form.on('submit', function (e) {
        e.preventDefault();
        console.log('123');
        var nmb = $('#number').val();
        console.log(nmb);
        var submit_btn = $('#submit_btn');
        var product_id = submit_btn.data("product_id");
        var name = submit_btn.data("name");
        var price = submit_btn.data("price");
        console.log(product_id);
        console.log(name);
        console.log(price);

        basketUpdating(product_id, nmb, is_delete=false)


    });

    function showBasket(){
        // $('.basket-items').removeClass('d-none');
        $('.basket-items').toggleClass('d-none');

    };


    $('.basket-container').on('click', function(e) {
        e.preventDefault();
        showBasket()
    });

    $(document).on('click', '.delete-item', function(e){
        e.preventDefault();
        product_id = $(this).data("product_id");
        nmb=0;
        basketUpdating(product_id, nmb, is_delete='true');
    });
    // $('.basket-container').mouseover(function() {
    //     // showBasket()
    //     $('.basket-items').removeClass('d-none');
    // })
    //
    // $('.basket-container').mouseout(function() {
    //     // showBasket()
    //     $('.basket-items').addClass('d-none');
    // })

    function calculatingBasketAmount(){
        var total_order_amount = 0
        $('.total-product-in-basket-amount').each(function(){
            total_order_amount = total_order_amount + parseFloat($(this).text())
        });
        $('#total_order_amount').text(total_order_amount.toFixed(2));
    };

    calculatingBasketAmount()

    $(document).on('change', ".product-in-basket-nmb", function(){
        var current_nmb = $(this).val();
        var current_tr = $(this).closest('tr');
        console.log(current_nmb);
        var current_price = parseFloat(current_tr.find('.product-price').text()).toFixed(2);
        var total_amount = parseFloat(current_nmb*current_price).toFixed(2);
        current_tr.find('.total-product-in-basket-amount').text(total_amount);
        calculatingBasketAmount();

    });

    $('.next').click(function () {
        var currentImage = $('.img.curry');
        var currentImageIndex = $('.img.curry').index();
        var nextImageIndex = currentImageIndex + 1;
        var nextImage = $('.img').eq(nextImageIndex);
        currentImage.fadeOut(1000);
        currentImage.removeClass('curry');

        if (nextImageIndex == ($('.img.last').index() + 1)){
            $('.img').eq(0).fadeIn(1000);
            $('.img').eq(0).addClass('curry');
        } else {
            nextImage.fadeIn(1000);
            nextImage.addClass('curry');
        }
    });

    $('.prev').click(function () {
        var currentImage = $('.img.curry');
        var currentImageIndex = $('.img.curry').index();
        var prevImageIndex = currentImageIndex - 1;
        var prevImage = $('.img').eq(prevImageIndex);

        currentImage.fadeOut(1000);
        currentImage.removeClass('curry');
        prevImage.fadeIn(1000);
        prevImage.addClass('curry');
    });


});
