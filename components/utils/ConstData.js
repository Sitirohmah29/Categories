const UserList = [
    {id:1, username:"mira", email:"mira@student.ibik.ac.id", password:"mira@123"},
    {id:2, username:"carlos", email:"carlos@student.ibik.ac.id", password:"carlos@321"}
]

const ListBook = [
    {id:1, title:"Cinderella", img:"https://i0.wp.com/storiestogrowby.org/wp-content/uploads/2018/04/05.png?fit=900%2C900&ssl=1", author:"Sophie", rating:"1", views:100, sinopsis:"", story:"" },
    {id:2, title:"Snow White And The Seven Dwarfs", img:"https://i0.wp.com/storiestogrowby.org/wp-content/uploads/2019/04/Snow-White-and-the-Seven-Dwarfs-Cover.png?fit=300%2C300&ssl=1", author:"nunu", rating:"2", views:100, sinopsis:"", story:"" },
    {id:3, title:"Aladdin And The Magic Lamp", img:"https://i0.wp.com/storiestogrowby.org/wp-content/uploads/2019/07/Aladdin-Bedtime-Story-Cover.png?fit=350%2C350&ssl=1", author:"rohmah", rating:"3", views:100, sinopsis:"", story:"" },
    {id:4, title:"Rapunzel", img:"https://i0.wp.com/storiestogrowby.org/wp-content/uploads/2018/01/Cover-2.png?fit=350%2C350&ssl=1", author:"naila", rating:"4", views:100, sinopsis:"", story:"" },
    {id:5, title:"The Snow Queen", img:"https://i0.wp.com/storiestogrowby.org/wp-content/uploads/2018/01/350x350.png?fit=350%2C350&ssl=1", author:"andin", rating:"5", views:100, sinopsis:"", story:"" },
]

const Book = [
    {id:1, title:"Cinderella", img:"https://i0.wp.com/storiestogrowby.org/wp-content/uploads/2018/04/05.png?fit=900%2C900&ssl=1", author:"Sophie", rating:"1", views:100, sinopsis:"The fairytale of Cinderella, a young girl who finds out that dreams really can come true.", story:"" },
    {id:2, title:"Snow White And The Seven Dwarfs", img:"https://i0.wp.com/storiestogrowby.org/wp-content/uploads/2019/04/Snow-White-and-the-Seven-Dwarfs-Cover.png?fit=300%2C300&ssl=1", author:"nunu", rating:"2", views:100, sinopsis:"The fairytale of Snow White, who is the fairest of them all, with a modern twist.", story:"" },
    {id:3, title:"Aladdin And The Magic Lamp", img:"https://i0.wp.com/storiestogrowby.org/wp-content/uploads/2019/07/Aladdin-Bedtime-Story-Cover.png?fit=350%2C350&ssl=1", author:"rohmah", rating:"3", views:100, sinopsis:"Aladdin, the Genie, and the Magic Lamp work to impress the princess who wishes to be a commoner.", story:"" },
    {id:4, title:"Rapunzel", img:"https://i0.wp.com/storiestogrowby.org/wp-content/uploads/2018/01/Cover-2.png?fit=350%2C350&ssl=1", author:"naila", rating:"4", views:100, sinopsis:"An evil witch has trapped Rapunzel in a tower. Can her long hair or love save her?", story:"" },
    {id:5, title:"The Snow Queen", img:"https://i0.wp.com/storiestogrowby.org/wp-content/uploads/2018/01/350x350.png?fit=350%2C350&ssl=1", author:"andin", rating:"5", views:100, sinopsis:"Gerda and Kai struggle to fight the Snow Queen and find the balance between Good and Evil.", story:"" },
    {id:6, title:"Book 6", img:"https://i0.wp.com/storiestogrowby.org/wp-content/uploads/2018/04/05.png?fit=900%2C900&ssl=1", author:"Sophie", rating:"1", views:100, sinopsis:"", story:"" },
    {id:7, title:"Book 7", img:"https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/07/attachment_78846510-e1500057445998.jpg?auto=format&q=60&fit=max&w=930", author:"nunu", rating:"2", views:100, sinopsis:"", story:"" },
    {id:8, title:"Book 8", img:"https://i0.wp.com/storiestogrowby.org/wp-content/uploads/2019/07/Aladdin-Bedtime-Story-Cover.png?fit=350%2C350&ssl=1", author:"rohmah", rating:"3", views:100, sinopsis:"", story:"" },
    {id:9, title:"Book 9", img:"https://i0.wp.com/storiestogrowby.org/wp-content/uploads/2018/01/Cover-2.png?fit=350%2C350&ssl=1", author:"naila", rating:"4", views:100, sinopsis:"", story:"" },
    {id:10, title:"Cinderella0", img:"https://i0.wp.com/storiestogrowby.org/wp-content/uploads/2018/01/350x350.png?fit=350%2C350&ssl=1", author:"andin", rating:"5", views:100, sinopsis:"", story:"" },

]

const ListCateg = [
    {id:1, name:"Recomendations", books:[1,3,5]},
    {id:2, name:"Recently", books:[6,5,4]},
    {id:3, name:"Populer", books:[3,2,1]},
]

const Genres = [
    {id:1, name:"Fiksi", icon:"", books:[1,3,5], aktif:"true"},
    {id:2, name:"Non Fiksi", icon:"", books:[1,3,5]},
    {id:3, name:"Komedi", icon:"", books:[1,3,5]},
    {id:4, name:"Horor", icon:"", books:[1,3,5]},
    {id:5, name:"Hewan", icon:"", books:[1,3,5]},
    {id:6, name:"Kerajaan", icon:"", books:[1,3,5]},
    {id:7, name:"Aksi", icon:"", books:[1,3,5]},
    {id:8, name:"Fiksi Ilmiah", icon:"", books:[1,3,5]},
    {id:9, name:"Edukasi", icon:"", books:[1,3,5]},
    {id:10, name:"Romansa", icon:"", books:[1,3,5]},
]

const History = [
    {user_id:1, book_id:1, viewed_at:"2024-05-20 10:00"},
    {user_id:1, book_id:2, viewed_at:"2024-05-20 10:00"},
]

const MyFavorite = [
    {user_id:1, books:[3,2,1]},
    {user_id:2, books:[4,2,3]}
]

export {UserList, ListBook, ListCateg, History, Genres, MyFavorite, Book}