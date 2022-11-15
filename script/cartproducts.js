
$("#cartProducts").html(localStorage.getItem("cart"));

calculateTotal();

$(".clearCart").click(function () {
    localStorage.removeItem("cart");
    localStorage.removeItem("carticon");
    location.reload();
});

$(".totalProduct").change(function () {
    let value = $(this).val();
    let prid = $(this).data("prid");
    let price = $(this).data("price");

    let amount = Number.parseFloat(price) * value;

    $(`#amount_${prid}`).text(amount);
    $(`#amount_${prid}`).attr('data-amount', amount);

    $(this).attr("value", value);

    localStorage.setItem("cart", $("#cartProducts").html());
    calculateTotal();


});

$(".deleteRow").click(function () {

    let dataID = $(this).data("id");
    $(`tr[data-id="${dataID}"]`).remove();
    localStorage.setItem("cart", $("#cartProducts").html());
    let countRowProducts = $("#cartProducts >tr").length;
    if (countRowProducts - 1) {
        localStorage.removeItem("cart");
        localStorage.removeItem("carticon");
        location.reload();
    }
    calculateTotal();
});


function calculateTotal() {

    if (!(localStorage.getItem("cart") == null)) {
        let totals = 0;
        let getAllAmount = $("td[data-amount]");
        for (let index = 0; index < getAllAmount.length; index++) {
            let total = Number.parseFloat(getAllAmount[index].getAttribute("data-amount"));
            totals += total;
        }

        let totalTvsh = (totals / 100) * 10 + totals;

        let footer = `
            <tr>
                <td colspan="4" class="text-end">SubTotal</td>
                <td>${(totals).toFixed(2)}</td>
            </tr>
            <tr >
                <td colspan="4" class="text-end">TVSH 10%</td>
                <td>${(totals * 0.10).toFixed(2)}</td>
            </tr>
            <tr >
                <td colspan="4" class="text-end">Total</td>
                <td>$${(totalTvsh).toFixed(2)}</td>
            </tr>`;

        $("#setFooter").html(footer);
    }
    else {
        $("#setFooter").html('');
    }
}
