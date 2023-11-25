function createOrder(amount, order_desc) {
	var button = $ipsp.get('button');
	button.setMerchantId(1535764);
	button.setAmount(amount, 'USD', true);
	button.setResponseUrl('https://grsd-way.kyiv.ua//thank-you-page.html');
	button.setHost('pay.fondy.eu'); 
     
        return button.getUrl(); 
} 


document.addEventListener('DOMContentLoaded', function() {
    // Отримати елемент за допомогою класу
    var orderElement = document.querySelector('.order-modal__summ span');
  
    // Функція для отримання суми з елементу та виклику createOrder
    function createOrderWithAmount() {
      // Отримати текстовий вміст елементу
      var orderAmountWithSymbol = orderElement.textContent || orderElement.innerText;
  
      // Видалити символ "$" та отримати числове значення
      var orderAmount = parseFloat(orderAmountWithSymbol.replace('$', ''));
  
      // Викликати функцію createOrder та передати значення з елементу
      var orderUrl = createOrder(orderAmount, 'Ваш опис покупки');
  
      // Робіть що-небудь із змінною orderUrl, наприклад, перенаправлення на сторінку оплати
     window.location.href = orderUrl;
    }
  
    // Додати обробник події для кнопки
    var createOrderButton = document.getElementById('createOrderButton');
    createOrderButton.addEventListener('click', createOrderWithAmount);
  });