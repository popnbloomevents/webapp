export type Category="Birthdays"|"Baptisms"|"Milestones"|"Grab & Go"|"Themed Events"|"Video Guestbook";
export type PortfolioItem={src:string;alt:string;caption:string;category:Category;shape:"wide"|"tall"|"standard"};
export const portfolio:PortfolioItem[]=[
{src:"/images/mirae-dessert-table-wide.jpg",alt:"Floral first birthday dessert table with balloon arch",caption:"Styled Dessert Table",category:"Birthdays",shape:"wide"},
{src:"/images/baptism-full-setup.jpg",alt:"Blue, cream and gold baptism balloon installation",caption:"Baptism Styling",category:"Baptisms",shape:"tall"},
{src:"/images/kpop-demon-hunters-1.png",alt:"Purple and pink KPOP themed balloon backdrop",caption:"KPOP Theme",category:"Themed Events",shape:"standard"},
{src:"/images/minion-full-setup.jpg",alt:"Blue and yellow character birthday backdrop",caption:"Full Backdrop Styling",category:"Themed Events",shape:"wide"},
{src:"/images/paw-patrol-balloon-stack.jpg",alt:"Character balloon stack for a third birthday",caption:"Grab & Go",category:"Grab & Go",shape:"tall"},
{src:"/images/baptism-balloon-pair.jpg",alt:"Personalized baptism bubble balloon pair",caption:"Personalized Balloons",category:"Baptisms",shape:"standard"},
{src:"/images/princess-7-outdoor.jpg",alt:"Princess unicorn balloon arrangement for a seventh birthday",caption:"Balloon Gift Set",category:"Grab & Go",shape:"tall"},
{src:"/images/gold-40th-birthday.jpg",alt:"Illuminated gold fortieth birthday balloon arch",caption:"Milestone Birthday",category:"Milestones",shape:"tall"},
{src:"/images/video-guestbook-close.jpg",alt:"Vintage video guestbook surrounded by coral flowers",caption:"Video Guestbook",category:"Video Guestbook",shape:"standard"},
{src:"/images/kpop-demon-hunters-2.png",alt:"KPOP birthday dessert and backdrop styling",caption:"Themed Event Styling",category:"Themed Events",shape:"tall"},
{src:"/images/baptism-balloon-detail.jpg",alt:"Personalized baptism balloon floral detail",caption:"Meaningful Details",category:"Baptisms",shape:"tall"},
{src:"/images/princess-7-indoor.jpg",alt:"Indoor princess balloon arrangement",caption:"Character Theme",category:"Birthdays",shape:"tall"},
{src:"/images/kpop-demon-hunters-3.png",alt:"KPOP birthday gift table and balloon installation",caption:"Full Party Moment",category:"Themed Events",shape:"standard"},
{src:"/images/minion-detail.jpg",alt:"Minion themed birthday backdrop detail",caption:"Kids’ Birthday Setup",category:"Birthdays",shape:"tall"},
{src:"/images/baptism-balloon-column.jpg",alt:"Cream and gold personalized balloon column",caption:"Personalized Column",category:"Baptisms",shape:"tall"},
];
