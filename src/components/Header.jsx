import $ from 'jquery';

export default function Header() {

    const slowScroll = (id) => {
        $('html, body').animate({
            scrollTop: $(id).offset().top
        }, 500);
    }

    (() => {
        $(document).on('scroll', function () {
            if ($(window).scrollTop() === 0) {
                $('header').removeClass('fixed')
            } else {
                $('header').attr('class', 'fixed')
            }
        })
    })();

    return (
        <>
            <header>
                <div id="logo" onClick={() => slowScroll('#top')}>
                    <span>cuff notes</span>
                </div>
                <div id="about">
                    <a href="" title="Posts" onClick={() => slowScroll('#main')}>Posts</a>
                    <a href="" title="About" onClick={() => slowScroll('#about')}>About</a>
                    <a href="" title="Contacts" onClick={() => slowScroll('#contacts')}>Contacts</a>
                    <a href="" title="FAQ" onClick={() => slowScroll('#faq')}>FAQ</a>
                </div>
            </header>
        </>
    )
}
