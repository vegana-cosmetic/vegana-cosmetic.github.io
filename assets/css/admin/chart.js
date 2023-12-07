
const xValues1 = ["Skincare", "HairCare", "Bodycare", "Beauty tools & Accesories"];
const yValues1 = [1002, 250, 567, 180];
const barColors1 = '#000';

new Chart("chart1", {
    type: "bar",
    data: {
    labels: xValues1,
    datasets: [{
        backgroundColor: barColors1,
        data: yValues1,
        hoverBorderWidth: 1,
        hoverBorderColor: '#000'
    }]
    },
    options:{
        title: {
            display: true,
            text: 'Số lượng các sản phẩm của danh mục đã tiêu thụ',
            fontSize: 14,
        },
        legend: {
            display: false
        }
    }
});
