"use strict"
 
let winningTickets = [
        {tixNum: "1001001", expires: "2022-09-05", prize: 100000},
        {tixNum: "1298711", expires: "2022-10-10" , prize: 250000},
        {tixNum: "1309182", expires: "2022-12-30" , prize: 500000},
        {tixNum: "1456171", expires: "2023-01-20", prize: 1000000},
        {tixNum: "3332871", expires: "2022-05-20", prize: 1000000},
        {tixNum: "4651529", expires: "2022-12-15", prize: 100000},
        {tixNum: "5019181", expires: "2023-01-31", prize: 250000},
        {tixNum: "5168261", expires: "2023-03-01", prize: 1000000},
        {tixNum: "6761529", expires: "2022-12-15", prize: 250000},
        {tixNum: "7778172", expires: "2023-01-15", prize: 5000000},
        {tixNum: "8751426", expires: "2020-09-15", prize: 100000}
        ];

        window.onload = () => {
            loadWinningTicketsTable()
        }

        function loadWinningTicketsTable() {
            const tbody = document.getElementById("winningTicketsTblBody")
            for (let i = 0; i < winningTickets.length; i++) {
                buildTicketRow(tbody, winningTickets[i]);
            }
        }

        function buildTicketRow(tbody, ticket) {
            console.log(tbody, ticket);
            const row = tbody.insertRow();
            const ticketNumber = row.insertCell(0);
            ticketNumber.innerHTML = ticket.tixNum;


            const ticketPrize = row.insertCell(1);
            ticketPrize.innerHTML = ticket.prize;

            const ticketExpires = row.insertCell(2);
            ticketExpires.innerHTML = ticket.expires;

            let cell4 = row.insertCell(3);
            let btn = document.createElement("button");
            btn.innerHTML = "Delete";
            btn.onclick = function () {
                let myTR = btn.parentElement.parentElement;
                let ticketNumber = myTR.firstChild.innerHTML;
                alert(ticketNumber);
                myTR.remove();
            }
            cell4.appendChild(btn);

        }