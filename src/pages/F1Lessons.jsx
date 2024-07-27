import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Import useNavigate
import { FaPlayCircle, FaBars } from 'react-icons/fa'; // Assuming FaBars is the menu bar icon

const lessonsData = {
  1: [
    { id: 1, title: 'Lesson 1', description: 'Description for Lesson 1 Arabic', videoUrl: 'https://www.youtube.com/watch?v=O7OXqETTZRU&list=PLA2sIXNgNKf6z_M5g_s0e2Yte13ic7ten&index=1&pp=iAQB' },
    { id: 2, title: 'Lesson 2', description: 'Description for Lesson 2 Arabic', videoUrl: 'https://www.youtube.com/watch?v=jdxA0EeAH3o&list=PLA2sIXNgNKf6z_M5g_s0e2Yte13ic7ten&index=2&pp=iAQB' },
    { id: 3, title: 'Lesson 3', description: 'Description for Lesson 3 Arabic', videoUrl: 'https://www.youtube.com/watch?v=9bXLAbZIhzQ&list=PLA2sIXNgNKf6z_M5g_s0e2Yte13ic7ten&index=3&pp=iAQB' },
    { id: 4, title: 'Lesson 4', description: 'Description for Lesson 4 Arabic', videoUrl: 'https://www.youtube.com/watch?v=F54keQjGsgs&list=PLA2sIXNgNKf6z_M5g_s0e2Yte13ic7ten&index=4&pp=iAQB' },
    { id: 5, title: 'Lesson 5', description: 'Description for Lesson 5 Arabic', videoUrl: 'https://www.youtube.com/watch?v=S0MZ6G5ODeY&list=PLA2sIXNgNKf6z_M5g_s0e2Yte13ic7ten&index=5&pp=iAQB' },
    { id: 6, title: 'Lesson 6', description: 'Description for Lesson 6 Arabic', videoUrl: 'https://www.youtube.com/watch?v=Gq9_KMST4CQ&list=PLA2sIXNgNKf6z_M5g_s0e2Yte13ic7ten&index=6&pp=iAQB' },
    { id: 7, title: 'Lesson 7', description: 'Description for Lesson 7 Arabic', videoUrl: 'https://www.youtube.com/watch?v=6hgvOKHcixU&list=PLA2sIXNgNKf6z_M5g_s0e2Yte13ic7ten&index=7&pp=iAQB' },
    { id: 8, title: 'Lesson 8', description: 'Description for Lesson 8 Arabic', videoUrl: 'https://www.youtube.com/watch?v=XaIlORuFuPs&list=PLA2sIXNgNKf6z_M5g_s0e2Yte13ic7ten&index=8&pp=iAQB' },
  ],
  2: [
    { id: 1, title: 'Lesson 1', description: 'Description for Lesson 1 English', videoUrl: 'https://www.youtube.com/watch?v=H1d1M7-_yJw&list=PLA2sIXNgNKf7eP9-J6G5LSpIuvf9TBQXC&index=1&pp=iAQB' },
    { id: 2, title: 'Lesson 2', description: 'Description for Lesson 2 English', videoUrl: 'https://www.youtube.com/watch?v=wxPQiTbqkTc&list=PLA2sIXNgNKf7eP9-J6G5LSpIuvf9TBQXC&index=2&pp=iAQB' },
    { id: 3, title: 'Lesson 3', description: 'Description for Lesson 3 English', videoUrl: 'https://www.youtube.com/watch?v=fKljmGCLz0A&list=PLA2sIXNgNKf7eP9-J6G5LSpIuvf9TBQXC&index=3&pp=iAQB' },
    { id: 4, title: 'Lesson 4', description: 'Description for Lesson 4 English', videoUrl: 'https://www.youtube.com/watch?v=uhFXhF9CJc8&list=PLA2sIXNgNKf7eP9-J6G5LSpIuvf9TBQXC&index=4&pp=iAQB' },
    { id: 5, title: 'Lesson 5', description: 'Description for Lesson 5 English', videoUrl: 'https://www.youtube.com/watch?v=P9I8QDvPp7s&list=PLA2sIXNgNKf7eP9-J6G5LSpIuvf9TBQXC&index=5&pp=iAQB' },
    { id: 6, title: 'Lesson 6', description: 'Description for Lesson 6 English', videoUrl: 'https://www.youtube.com/watch?v=e9tngbq2CLY&list=PLA2sIXNgNKf7eP9-J6G5LSpIuvf9TBQXC&index=6&pp=iAQB' },

    { id: 7, title: 'Lesson 7', description: 'Description for Lesson 7 English', videoUrl: 'https://www.youtube.com/watch?v=771T9o9umP0&list=PLA2sIXNgNKf7eP9-J6G5LSpIuvf9TBQXC&index=7&pp=iAQB' },
    { id: 8, title: 'Lesson 8', description: 'Description for Lesson 8 English', videoUrl: 'https://www.youtube.com/watch?v=GaFz89SzlMo&list=PLA2sIXNgNKf7eP9-J6G5LSpIuvf9TBQXC&index=8&pp=iAQB' },
    { id: 9, title: 'Lesson 9', description: 'Description for Lesson 9 English', videoUrl: 'https://www.youtube.com/watch?v=nKNCtFG_s8c&list=PLA2sIXNgNKf7eP9-J6G5LSpIuvf9TBQXC&index=9&pp=iAQB' },
  ],
  3: [
    { id: 1, title: 'Lesson 1', description: 'Description for Lesson 1 Mathmatics', videoUrl: 'https://www.youtube.com/watch?v=U2trQXLFK9U&list=PLA2sIXNgNKf6KPGQr2Nhdft61ZtCVCcI9&index=1&pp=iAQB' },
    { id: 2, title: 'Lesson 2', description: 'Description for Lesson 2 Mathmatics', videoUrl: 'https://www.youtube.com/watch?v=Alfe47FS2a4&list=PLA2sIXNgNKf6KPGQr2Nhdft61ZtCVCcI9&index=2&pp=iAQB' },
    { id: 3, title: 'Lesson 3', description: 'Description for Lesson 3 Mathmatics', videoUrl: 'https://www.youtube.com/watch?v=Ndz0kkBBJU0&list=PLA2sIXNgNKf6KPGQr2Nhdft61ZtCVCcI9&index=3&pp=iAQB' },
    { id: 4, title: 'Lesson 4', description: 'Description for Lesson 4 Mathmatics', videoUrl: 'https://www.youtube.com/watch?v=5_eLyT8l4wE&list=PLA2sIXNgNKf6KPGQr2Nhdft61ZtCVCcI9&index=4&pp=iAQB' },
    { id: 5, title: 'Lesson 5', description: 'Description for Lesson 5 Mathmatics', videoUrl: 'https://www.youtube.com/watch?v=-YvA4Rzwotc&list=PLA2sIXNgNKf6KPGQr2Nhdft61ZtCVCcI9&index=5&pp=iAQB' },
    { id: 6, title: 'Lesson 6', description: 'Description for Lesson 6 Mathmatics', videoUrl: 'https://www.youtube.com/watch?v=D-skV1K6hj0&list=PLA2sIXNgNKf6KPGQr2Nhdft61ZtCVCcI9&index=6&pp=iAQB' },

    { id: 7, title: 'Lesson 7', description: 'Description for Lesson 7 Mathmatics', videoUrl: 'https://www.youtube.com/watch?v=E26zv4fYhls&list=PLA2sIXNgNKf6KPGQr2Nhdft61ZtCVCcI9&index=7&pp=iAQB' },
    { id: 8, title: 'Lesson 8', description: 'Description for Lesson 8 Mathmatics', videoUrl: 'https://www.youtube.com/watch?v=7qGkQWFyrYM&list=PLA2sIXNgNKf6KPGQr2Nhdft61ZtCVCcI9&index=8&pp=iAQB' },
    { id: 9, title: 'Lesson 9', description: 'Description for Lesson 9 Mathmatics', videoUrl: 'https://www.youtube.com/watch?v=ht6e5WLprvo&list=PLA2sIXNgNKf6KPGQr2Nhdft61ZtCVCcI9&index=9&pp=iAQB' },
    { id: 10, title: 'Lesson 10', description: 'Description for Lesson 10 Mathmatics', videoUrl: 'https://www.youtube.com/watch?v=VTxmpe3NkAo&list=PLA2sIXNgNKf6KPGQr2Nhdft61ZtCVCcI9&index=10&pp=iAQB' },
  ],
  4: [
    { id: 1, title: 'Lesson 1', description: 'Description for Lesson 1 Physics', videoUrl: 'https://www.youtube.com/watch?v=c93NB6Bae4g&list=PLG4SdbUov5hSMV24J9XdGhuwVQGnKLkox&index=3&pp=iAQB' },
    { id: 2, title: 'Lesson 2', description: 'Description for Lesson 2 Physics', videoUrl: 'https://www.youtube.com/watch?v=TgKd-61x-ns&list=PLG4SdbUov5hSMV24J9XdGhuwVQGnKLkox&index=2&pp=iAQB' },
    { id: 3, title: 'Lesson 3', description: 'Description for Lesson 3 Physics', videoUrl: 'https://www.youtube.com/watch?v=UUrh-aft-zo&list=PLG4SdbUov5hSMV24J9XdGhuwVQGnKLkox&index=1&pp=iAQB' },
    { id: 4, title: 'Lesson 4', description: 'Description for Lesson 4 Physics', videoUrl: 'https://www.youtube.com/watch?v=vayBCbis0ng&list=PLG4SdbUov5hSMV24J9XdGhuwVQGnKLkox&index=4&pp=iAQB' },
    { id: 5, title: 'Lesson 5', description: 'Description for Lesson 5 Physics', videoUrl: 'https://www.youtube.com/watch?v=rOFpTn7fQMY&list=PLG4SdbUov5hSMV24J9XdGhuwVQGnKLkox&index=6&pp=iAQB' },
    { id: 6, title: 'Lesson 6', description: 'Description for Lesson 6 Physics', videoUrl: 'https://www.youtube.com/watch?v=PpPy6nxM0pE&list=PLG4SdbUov5hSMV24J9XdGhuwVQGnKLkox&index=5&pp=iAQB' },

    { id: 7, title: 'Lesson 7', description: 'Description for Lesson 7 Physics', videoUrl: 'https://www.youtube.com/watch?v=XVtDGCl3TZk&list=PLG4SdbUov5hQsL1PYNm1jtWM6hj0Oe6ck&index=4&pp=iAQB' },
    { id: 8, title: 'Lesson 8', description: 'Description for Lesson 8 Physics', videoUrl: 'https://www.youtube.com/watch?v=OK4w_l0LUqs&list=PLG4SdbUov5hQsL1PYNm1jtWM6hj0Oe6ck&index=3&pp=iAQB' },
    { id: 9, title: 'Lesson 9', description: 'Description for Lesson 9 Physics', videoUrl: 'https://www.youtube.com/watch?v=28eM5Wj0E6U&list=PLG4SdbUov5hQsL1PYNm1jtWM6hj0Oe6ck&index=2&pp=iAQB' },
    { id: 10, title: 'Lesson 10', description: 'Description for Lesson 10 Physics', videoUrl: 'https://www.youtube.com/watch?v=NEqxVMVDeiQ&list=PLG4SdbUov5hQsL1PYNm1jtWM6hj0Oe6ck&index=1&pp=iAQB' },
    { id: 11, title: 'Lesson 11', description: 'Description for Lesson 11 Physics', videoUrl: 'https://www.youtube.com/watch?v=cqcYjDIuBEo&list=PLG4SdbUov5hQsL1PYNm1jtWM6hj0Oe6ck&index=5&pp=iAQB' },

  ],
  5: [
    { id: 1, title: 'Lesson 1', description: 'Description for Lesson 1 Chemistry', videoUrl: 'https://www.youtube.com/watch?v=fAOuXW2fszY&list=PLA2sIXNgNKf53Jbufr_Pw2HMgvxkWXucD&index=1&pp=iAQB' },
    { id: 2, title: 'Lesson 2', description: 'Description for Lesson 2  Chemistry', videoUrl: 'https://www.youtube.com/watch?v=7LObY3ITBZw&list=PLA2sIXNgNKf53Jbufr_Pw2HMgvxkWXucD&index=2&pp=iAQB' },
    { id: 3, title: 'Lesson 3', description: 'Description for Lesson 3  Chemistry', videoUrl: 'https://www.youtube.com/watch?v=FIx37aKBI1c&list=PLA2sIXNgNKf53Jbufr_Pw2HMgvxkWXucD&index=3&pp=iAQB' },
    { id: 4, title: 'Lesson 4', description: 'Description for Lesson 4  Chemistry', videoUrl: 'https://www.youtube.com/watch?v=_WZDj7cZyF8&list=PLA2sIXNgNKf53Jbufr_Pw2HMgvxkWXucD&index=4&pp=iAQB' },
    { id: 5, title: 'Lesson 5', description: 'Description for Lesson 5  Chemistry', videoUrl: 'https://www.youtube.com/watch?v=Y1EOt4sMsbU&list=PLA2sIXNgNKf53Jbufr_Pw2HMgvxkWXucD&index=5&pp=iAQB' },
    { id: 6, title: 'Lesson 6', description: 'Description for Lesson 6  Chemistry', videoUrl: 'https://www.youtube.com/watch?v=4FK0SCI1O6Q&list=PLA2sIXNgNKf53Jbufr_Pw2HMgvxkWXucD&index=6&pp=iAQB' },

    { id: 7, title: 'Lesson 7', description: 'Description for Lesson 7  Chemistry', videoUrl: 'https://www.youtube.com/watch?v=tPIdJa9iMws&list=PLA2sIXNgNKf53Jbufr_Pw2HMgvxkWXucD&index=7&pp=iAQB' },
    { id: 8, title: 'Lesson 8', description: 'Description for Lesson 8  Chemistry', videoUrl: 'https://www.youtube.com/watch?v=RY1q1_5e93k&list=PLA2sIXNgNKf53Jbufr_Pw2HMgvxkWXucD&index=8&pp=iAQB' },
    { id: 9, title: 'Lesson 9', description: 'Description for Lesson 9  Chemistry', videoUrl: 'https://www.youtube.com/watch?v=hHoPGKZYuLo&list=PLA2sIXNgNKf53Jbufr_Pw2HMgvxkWXucD&index=9&pp=iAQB' },
    { id: 10, title: 'Lesson 10', description: 'Description for Lesson 10  Chemistry', videoUrl: 'https://www.youtube.com/watch?v=p0EQODIKD5Y&list=PLA2sIXNgNKf53Jbufr_Pw2HMgvxkWXucD&index=10&pp=iAQB' },
    { id: 11, title: 'Lesson 11', description: 'Description for Lesson 11  Chemistry', videoUrl: 'https://www.youtube.com/watch?v=_wWAufId38U&list=PLA2sIXNgNKf53Jbufr_Pw2HMgvxkWXucD&index=11&pp=iAQB' },
  ],

  6: [
    { id: 1, title: 'Lesson 1', description: 'Description for Lesson 1 History', videoUrl: 'https://www.youtube.com/watch?v=w3n17OCouyo&list=PLA2sIXNgNKf4G-THC94dPR3IkrzhvEoAq&index=1&pp=iAQB' },
    { id: 2, title: 'Lesson 2', description: 'Description for Lesson 2 History', videoUrl: 'https://www.youtube.com/watch?v=yjdPJvYC_FE&list=PLA2sIXNgNKf4G-THC94dPR3IkrzhvEoAq&index=2&pp=iAQB' },
    { id: 3, title: 'Lesson 3', description: 'Description for Lesson 3 History', videoUrl: 'https://www.youtube.com/watch?v=Y_-A5rIn7Vs&list=PLA2sIXNgNKf4G-THC94dPR3IkrzhvEoAq&index=3&pp=iAQB' },
    { id: 4, title: 'Lesson 4', description: 'Description for Lesson 4 History', videoUrl: 'https://www.youtube.com/watch?v=DftgHZSYR30&list=PLA2sIXNgNKf4G-THC94dPR3IkrzhvEoAq&index=4&pp=iAQB' },
    { id: 5, title: 'Lesson 5', description: 'Description for Lesson 5 History', videoUrl: 'https://www.youtube.com/watch?v=hZ1WFxGbT10&list=PLA2sIXNgNKf4G-THC94dPR3IkrzhvEoAq&index=5&pp=iAQB' },
    { id: 6, title: 'Lesson 6', description: 'Description for Lesson 6 History', videoUrl: 'https://www.youtube.com/watch?v=jgndFem6d3c&list=PLA2sIXNgNKf4G-THC94dPR3IkrzhvEoAq&index=6&pp=iAQB' },
    { id: 7, title: 'Lesson 7', description: 'Description for Lesson 7 History', videoUrl: 'https://www.youtube.com/watch?v=fmMbYYnQl2Q&list=PLA2sIXNgNKf4G-THC94dPR3IkrzhvEoAq&index=7&pp=iAQB' },
    { id: 8, title: 'Lesson 8', description: 'Description for Lesson 8 History', videoUrl: 'https://www.youtube.com/watch?v=hJ-BUeS9HTU&list=PLA2sIXNgNKf4G-THC94dPR3IkrzhvEoAq&index=8&pp=iAQB' },
  ],
  7: [
    { id: 1, title: 'Lesson 1', description: 'Description for Lesson 1 Biology', videoUrl: 'https://www.youtube.com/watch?v=fKwAmOuYDps&list=PLA2sIXNgNKf5mw5Ek3LJgo5w-t8g15IRv&index=1&pp=iAQB' },
    { id: 2, title: 'Lesson 2', description: 'Description for Lesson 2  Biology', videoUrl: 'https://www.youtube.com/watch?v=73MouUz_Gzk&list=PLA2sIXNgNKf5mw5Ek3LJgo5w-t8g15IRv&index=2&pp=iAQB' },
    { id: 3, title: 'Lesson 3', description: 'Description for Lesson 3  Biology', videoUrl: 'https://www.youtube.com/watch?v=QbZVsDtIOMc&list=PLA2sIXNgNKf5mw5Ek3LJgo5w-t8g15IRv&index=3&pp=iAQB' },
    { id: 4, title: 'Lesson 4', description: 'Description for Lesson 4  Biology', videoUrl: 'https://www.youtube.com/watch?v=gcRNrCaiAo0&list=PLA2sIXNgNKf5mw5Ek3LJgo5w-t8g15IRv&index=4&pp=iAQB' },
    { id: 5, title: 'Lesson 5', description: 'Description for Lesson 5  Biology', videoUrl: 'https://www.youtube.com/watch?v=wRQLFAjIsEI&list=PLA2sIXNgNKf5mw5Ek3LJgo5w-t8g15IRv&index=5&pp=iAQB' },
    { id: 6, title: 'Lesson 6', description: 'Description for Lesson 6  Biology', videoUrl: 'https://www.youtube.com/watch?v=aWC8K7J6nbs&list=PLA2sIXNgNKf5mw5Ek3LJgo5w-t8g15IRv&index=6&pp=iAQB' },

    { id: 7, title: 'Lesson 7', description: 'Description for Lesson 7  Biology', videoUrl: 'https://www.youtube.com/watch?v=P0Gmt3gATJY&list=PLA2sIXNgNKf5mw5Ek3LJgo5w-t8g15IRv&index=7&pp=iAQB' },
    { id: 8, title: 'Lesson 8', description: 'Description for Lesson 8  Biology', videoUrl: 'https://www.youtube.com/watch?v=4IF3iaLmbn4&list=PLA2sIXNgNKf5mw5Ek3LJgo5w-t8g15IRv&index=8&pp=iAQB' },
    { id: 9, title: 'Lesson 9', description: 'Description for Lesson 9  Biology', videoUrl: 'https://www.youtube.com/watch?v=3eANR5vhm9E&list=PLA2sIXNgNKf5mw5Ek3LJgo5w-t8g15IRv&index=9&pp=iAQB' },
    { id: 10, title: 'Lesson 10', description: 'Description for Lesson 10  Biology', videoUrl: 'https://www.youtube.com/watch?v=5a39DwKEL0k&list=PLA2sIXNgNKf5mw5Ek3LJgo5w-t8g15IRv&index=10&pp=iAQB' },
    { id: 11, title: 'Lesson 11', description: 'Description for Lesson 11  Biology', videoUrl: 'https://www.youtube.com/watch?v=U9MZaxgYvrg&list=PLA2sIXNgNKf5mw5Ek3LJgo5w-t8g15IRv&index=11&pp=iAQB' },
  ],
  8: [
    { id: 1, title: 'Lesson 1', description: 'Description for Lesson 1 Soomaali', videoUrl: 'https://www.youtube.com/watch?v=QWlUrTI1No4&list=PLA2sIXNgNKf61_JPi4qAo6A5Oqv_lp9Ew&index=1&pp=iAQB' },
    { id: 2, title: 'Lesson 2', description: 'Description for Lesson 2 Soomaali', videoUrl: 'https://www.youtube.com/watch?v=wzAQipb8T_w&list=PLA2sIXNgNKf61_JPi4qAo6A5Oqv_lp9Ew&index=2&pp=iAQB' },
    { id: 3, title: 'Lesson 3', description: 'Description for Lesson 3 Soomaali', videoUrl: 'https://www.youtube.com/watch?v=zIlBEf34eQk&list=PLA2sIXNgNKf61_JPi4qAo6A5Oqv_lp9Ew&index=3&pp=iAQB' },
    { id: 4, title: 'Lesson 4', description: 'Description for Lesson 4 Soomaali', videoUrl: 'https://www.youtube.com/watch?v=SrWuFUWc-K8&list=PLA2sIXNgNKf61_JPi4qAo6A5Oqv_lp9Ew&index=4&pp=iAQB' },
    { id: 5, title: 'Lesson 5', description: 'Description for Lesson 5 Soomaali', videoUrl: 'https://www.youtube.com/watch?v=gTHU57kTlv0&list=PLA2sIXNgNKf61_JPi4qAo6A5Oqv_lp9Ew&index=5&pp=iAQB' },
    { id: 6, title: 'Lesson 6', description: 'Description for Lesson 6 Soomaali', videoUrl: 'https://www.youtube.com/watch?v=Eh1Bawy4xi8&list=PLA2sIXNgNKf61_JPi4qAo6A5Oqv_lp9Ew&index=6&pp=iAQB' },
    { id: 7, title: 'Lesson 7', description: 'Description for Lesson 7 Soomaali', videoUrl: 'https://www.youtube.com/watch?v=7ONFET0Ty6s&list=PLA2sIXNgNKf61_JPi4qAo6A5Oqv_lp9Ew&index=7&pp=iAQB' },
    { id: 8, title: 'Lesson 8', description: 'Description for Lesson 8 Soomaali', videoUrl: 'https://www.youtube.com/watch?v=BMOz2U7g228&list=PLA2sIXNgNKf61_JPi4qAo6A5Oqv_lp9Ew&index=8&pp=iAQB' },
  ],
};



const convertToEmbedURL = (url) => {
  const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = url.match(regex);
  if (match && match[1]) {
    const videoId = match[1];
    const urlObj = new URL(url);
    const playlist = urlObj.searchParams.get('list');
    return playlist ? `https://www.youtube.com/embed/${videoId}?list=${playlist}` : `https://www.youtube.com/embed/${videoId}`;
  }
  return url;
};

const F1Lessons = () => {
  const { courseId } = useParams();
  const lessons = lessonsData[courseId] || [];
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [mobileSidebarVisible, setMobileSidebarVisible] = useState(false); // State for mobile sidebar visibility
  const navigate = useNavigate(); // Create navigate function

  const handleLessonClick = (lesson) => {
    setSelectedLesson(lesson);
  };

  const toggleMobileSidebar = () => {
    setMobileSidebarVisible(!mobileSidebarVisible);
  };

  const handleGoBack = () => {
    navigate('/courses'); // Navigate to Form2 page
  };

  return (
    <div className="container mx-auto p-4 my-8">
      {/* Mobile Menu Bar Icon */}
      <div className="md:hidden flex justify-end mb-4">
        <button onClick={toggleMobileSidebar} className="text-gray-600 focus:outline-none">
          <FaBars size={24} />
        </button>
      </div>

      <div className="flex flex-col md:flex-row">
        {/* Sidebar for Desktop */}
        <div className={`md:w-1/4 bg-gray-200 p-4 rounded-lg ${mobileSidebarVisible ? 'block md:hidden' : 'hidden md:block'}`}>
        <button onClick={handleGoBack} className="flex items-center ml-16 justify-center px-4 py-2 bg-green-500 text-white font-bold rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
            <span className="ml-2">Go Back</span>
          </button>
          <h4 className="text-xl font-semibold mt-4 mb-4">Other Lessons in this Course:</h4>
          <div className="space-y-2">
            {lessons.map((lesson) => (
              <button
                key={lesson.id}
                onClick={() => handleLessonClick(lesson)}
                className="flex items-center w-full text-left p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-800 transition duration-300"
              >
                <FaPlayCircle className="mr-2 text-blue ml-16" />
                {lesson.title}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content Area */}
        <div className="md:w-3/4 mt-4 md:mt-0 md:ml-4">
          <h2 className="text-3xl font-bold mb-8">
            {selectedLesson ? (
              <div className="flex items-center justify-center">
                Form 1 Lesson {selectedLesson.id}
              </div>
            ) : (
              'Lessons'
            )}
          </h2>

          {selectedLesson ? (
            <div className="bg-white rounded-lg shadow-lg p-6">
              {selectedLesson.videoUrl.includes('youtube.com') ? (
                <iframe
                  width="100%"
                  height="480"
                  src={convertToEmbedURL(selectedLesson.videoUrl)}
                  title={selectedLesson.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg mb-4"
                ></iframe>
              ) : (
                <video controls src={selectedLesson.videoUrl} className={`w-full rounded-lg mb-4 ${mobileSidebarVisible ? 'md:hidden' : ''}`}></video>
              )}
              <p className="text-gray-700">{selectedLesson.description}</p>
            </div>
          ) : (
            <p className="text-center text-gray-700">Please select a lesson to view its content.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default F1Lessons;
