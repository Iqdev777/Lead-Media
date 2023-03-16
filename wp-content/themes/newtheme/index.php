<?php get_header();?>
<div class="content">
    <div class="lead_form">
        <h3>Просто оставьте заявку и получите консльтацию по всем вопросам</h3>

        <div class="form_content">
            <textarea cols="40" id="ask" rows="10" name="text" placeholder="Задайте вопрос"></textarea>
            <div class="form_input">
                <input type="text" id="name" placeholder="Ваше имя">
                <input type="text" id="email" placeholder="Ваш email">
            </div>
            <div class="form_input">
                <input type="text" id="phone" placeholder="+7(__)__-__-__"/>
                <button id="send">Получить консультацию</button>
            </div>
        </div>
    </div>
</div>
<?php get_footer();?>
