export function API() {
    const post = [
        {
            'author': 'Yaba Ernesto',
            'comment': 'Uma publicacao sobre qualquer coisa!'
        },
        {
            'author': 'Joilson Capemba',
            'comment': 'Esta publicacao e sobre tecnologia, voltado para area de programacao!'
        },
        {
            'author': 'Miguel Leite',
            'comment': 'Que tal nos falarmos sobre PHP!'
        },
    ];

    const profilesChat = [
        {
            img: '',
            name: ''
        },
        {
            img: '',
            name: ''
        },
        {
            img: '',
            name: ''
        },
        {
            img: '',
            name: ''
        },
        {
            img: '',
            name: ''
        }
    ];

    return {
        post,
        profilesChat
    };
}
