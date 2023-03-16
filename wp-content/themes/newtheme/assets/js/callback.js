document.addEventListener('DOMContentLoaded', function() {
    let maskOptions = {
        mask: '+7(000)000-00-00',
        lazy: false
    }
    let mask = new IMask(document.getElementById('phone'), maskOptions);


    function clear () {
        document.getElementById('ask').value = ''
        document.getElementById('name').value = ''
        document.getElementById('email').value = ''
        document.getElementById('phone').value = ''
    }

    document.getElementById('send').addEventListener('click', function () {
        let ask = document.getElementById('ask').value.replace(/( |<([^>]+)>)/ig ,"").trim()

        let name = document.getElementById('name').value.replace(/( |<([^>]+)>)/ig ,"").trim()

        let email = document.getElementById('email').value.replace(/( |<([^>]+)>)/ig ,"").trim()

        let phone = document.getElementById('phone').value

        let valid = function validate() {
            if (ask.length <10 || ask.length >170) {
                alert('“Задайте вопрос”: максимум 170 символов, минимум 10 символов')
                document.getElementById('ask').classList.add('error')
                return false
            } else {
                document.getElementById('ask').classList.remove('error')
            }

            if (!mask.masked.isComplete) {
                document.getElementById('phone').classList.add('error')
                alert('Номер телефона не корректный')
                return false
            } else {
                document.getElementById('phone').classList.remove('error')
            }



            if (name.length === 0) {
                alert('Не заполено поле Имя')
                document.getElementById('name').classList.add('error')
                return false
            } else {
                document.getElementById('name').classList.remove('error')
            }

            if (email.length === 0) {
                alert('Не заполено поле email')
                document.getElementById('email').classList.add('error')
                return false
            } else {
                document.getElementById('email').classList.remove('error')
            }

            return true
        }

        if (valid()) {
            const body = {
                ask: ask,
                name: name,
                email: email,
                phone: phone
            }
            let response = fetch('http://localhost/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(body)
            })

            response.then((data => {
                alert('Форма отправлена')
                clear()
                return data.json()
            }),(reason => {
                return reason.json()
            })).catch((error) => {
               return error;
            });
        }


    })

});
