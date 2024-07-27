import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Import useNavigate
import { FaPlayCircle, FaBars } from 'react-icons/fa';

const lessonsData = {
  1: [
    { id: 1, title: 'Lesson 1', description: 'Description for Lesson 1 Arabic', videoUrl: 'https://www.youtube.com/watch?v=B0LiH8ZDL6E&list=PLA2sIXNgNKf5S6ZPzKN_kQ951Ub0NpYnR&index=1&pp=iAQB' },
    { id: 2, title: 'Lesson 2', description: 'Description for Lesson 2 Arabic', videoUrl: 'https://www.youtube.com/watch?v=H-NUIngNnCA&list=PLA2sIXNgNKf5S6ZPzKN_kQ951Ub0NpYnR&index=2&pp=iAQB' },
    { id: 3, title: 'Lesson 3', description: 'Description for Lesson 3 Arabic', videoUrl: 'https://www.youtube.com/watch?v=giVlfadJBcw&list=PLA2sIXNgNKf5S6ZPzKN_kQ951Ub0NpYnR&index=3&pp=iAQB' },
    { id: 4, title: 'Lesson 4', description: 'Description for Lesson 4 Arabic', videoUrl: 'https://www.youtube.com/watch?v=NyLZhkWbakg&list=PLA2sIXNgNKf5S6ZPzKN_kQ951Ub0NpYnR&index=4&pp=iAQB' },
    { id: 5, title: 'Lesson 5', description: 'Description for Lesson 5 Arabic', videoUrl: 'https://www.youtube.com/watch?v=2fgvyzQU69M&list=PLA2sIXNgNKf5S6ZPzKN_kQ951Ub0NpYnR&index=5&pp=iAQB' },
    { id: 6, title: 'Lesson 6', description: 'Description for Lesson 6 Arabic', videoUrl: 'https://www.youtube.com/watch?v=Ol-VsCENDyk&list=PLA2sIXNgNKf5S6ZPzKN_kQ951Ub0NpYnR&index=6&pp=iAQB' },
    { id: 7, title: 'Lesson 7', description: 'Description for Lesson 7 Arabic', videoUrl: 'https://www.youtube.com/watch?v=CZtqVYZrHU4&list=PLA2sIXNgNKf5S6ZPzKN_kQ951Ub0NpYnR&index=7&pp=iAQB' },
    { id: 8, title: 'Lesson 8', description: 'Description for Lesson 8 Arabic', videoUrl: 'https://www.youtube.com/watch?v=LA7_-UJW0RU&list=PLA2sIXNgNKf5S6ZPzKN_kQ951Ub0NpYnR&index=8&pp=iAQB' },

  ],
  2: [
    { id: 1, title: 'Lesson 1', description: 'Description for Lesson 1 English', videoUrl: 'https://www.youtube.com/watch?v=6KFbGbICRL4&list=PLA2sIXNgNKf7_eiFMYJVmCsEwJJ74ZrDc&index=1&pp=iAQB' },
    { id: 2, title: 'Lesson 2', description: 'Description for Lesson 2 English', videoUrl: 'https://www.youtube.com/watch?v=0zNJkEXPHG4&list=PLA2sIXNgNKf7_eiFMYJVmCsEwJJ74ZrDc&index=2&pp=iAQB' },
    { id: 3, title: 'Lesson 3', description: 'Description for Lesson 3 English', videoUrl: 'https://www.youtube.com/watch?v=XA-yRKavE-4&list=PLA2sIXNgNKf7_eiFMYJVmCsEwJJ74ZrDc&index=3&pp=iAQB' },
    { id: 4, title: 'Lesson 4', description: 'Description for Lesson 4 English', videoUrl: 'https://www.youtube.com/watch?v=UKt0IIfL_Tk&list=PLA2sIXNgNKf7_eiFMYJVmCsEwJJ74ZrDc&index=4&pp=iAQB' },
    { id: 5, title: 'Lesson 5', description: 'Description for Lesson 5 English', videoUrl: 'https://www.youtube.com/watch?v=xIzWlkKKSj0&list=PLA2sIXNgNKf7_eiFMYJVmCsEwJJ74ZrDc&index=5&pp=iAQB' },
    { id: 6, title: 'Lesson 6', description: 'Description for Lesson 6 English', videoUrl: 'https://www.youtube.com/watch?v=i2rxDbXD450&list=PLA2sIXNgNKf7_eiFMYJVmCsEwJJ74ZrDc&index=6&pp=iAQB' },
    { id: 7, title: 'Lesson 7', description: 'Description for Lesson 7 English', videoUrl: 'https://www.youtube.com/watch?v=7fHaXkx9vnM&list=PLA2sIXNgNKf7_eiFMYJVmCsEwJJ74ZrDc&index=7&pp=iAQB' },
    { id: 8, title: 'Lesson 8', description: 'Description for Lesson 8 English', videoUrl: 'https://www.youtube.com/watch?v=pWysvHuRhY8&list=PLA2sIXNgNKf7_eiFMYJVmCsEwJJ74ZrDc&index=8&pp=iAQB' },
    { id: 9, title: 'Lesson 9', description: 'Description for Lesson 9 English', videoUrl: 'https://www.youtube.com/watch?v=w_c1KDqzU6o&list=PLA2sIXNgNKf7_eiFMYJVmCsEwJJ74ZrDc&index=9&pp=iAQB' },
  ],
  3: [
    { id: 1, title: 'Lesson 1', description: 'Description for Lesson 1 Mathmatics', videoUrl: 'https://www.youtube.com/watch?v=WgM3HS-2yPc&list=PLOofE1KOTUEJHHzV5gWAPL_jgqFGQ7UCg&index=1&pp=iAQB' },
    { id: 2, title: 'Lesson 2', description: 'Description for Lesson 2 Mathmatics', videoUrl: 'https://www.youtube.com/watch?v=gjPZYajtVJU&list=PLOofE1KOTUEJHHzV5gWAPL_jgqFGQ7UCg&index=2&pp=iAQB' },
    { id: 3, title: 'Lesson 3', description: 'Description for Lesson 3 Mathmatics', videoUrl: 'https://www.youtube.com/watch?v=vlIcRC6TRDU&list=PLOofE1KOTUEJHHzV5gWAPL_jgqFGQ7UCg&index=3&pp=iAQB' },
    { id: 4, title: 'Lesson 4', description: 'Description for Lesson 4 Mathmatics', videoUrl: 'https://www.youtube.com/watch?v=zmYBSKvbRYE&list=PLOofE1KOTUEJHHzV5gWAPL_jgqFGQ7UCg&index=4&pp=iAQB' },
    { id: 5, title: 'Lesson 5', description: 'Description for Lesson 5 Mathmatics', videoUrl: 'https://www.youtube.com/watch?v=AypTToADJTM&list=PLOofE1KOTUEJHHzV5gWAPL_jgqFGQ7UCg&index=5&pp=iAQB' },
    { id: 6, title: 'Lesson 6', description: 'Description for Lesson 6 Mathmatics', videoUrl: 'https://www.youtube.com/watch?v=OusDqoOcBQw&list=PLOofE1KOTUEJHHzV5gWAPL_jgqFGQ7UCg&index=6&pp=iAQB' },

    { id: 7, title: 'Lesson 7', description: 'Description for Lesson 7 Mathmatics', videoUrl: 'https://www.youtube.com/watch?v=YKSqVdcmohw&list=PLOofE1KOTUEJHHzV5gWAPL_jgqFGQ7UCg&index=7&pp=iAQB' },
    { id: 8, title: 'Lesson 8', description: 'Description for Lesson 8 Mathmatics', videoUrl: 'https://www.youtube.com/watch?v=y2_ddyt8r4c&list=PLOofE1KOTUEJHHzV5gWAPL_jgqFGQ7UCg&index=8&pp=iAQB' },
    { id: 9, title: 'Lesson 9', description: 'Description for Lesson 9 Mathmatics', videoUrl: 'https://www.youtube.com/watch?v=msizCaxQVCY&list=PLOofE1KOTUEJHHzV5gWAPL_jgqFGQ7UCg&index=9&pp=iAQB' },
    { id: 10, title: 'Lesson 10', description: 'Description for Lesson 10 Mathmatics', videoUrl: 'https://www.youtube.com/watch?v=-1ZudsOmIJA&list=PLOofE1KOTUEJHHzV5gWAPL_jgqFGQ7UCg&index=10&pp=iAQB' },
  ],
  4: [
    { id: 1, title: 'Lesson 1', description: 'Description for Lesson 1 Physics', videoUrl: 'https://www.youtube.com/watch?v=2NTW7BSSEG8&list=PLG4SdbUov5hThSGAA52GVuL4XndFlHywd&index=1&pp=iAQB' },
    { id: 2, title: 'Lesson 2', description: 'Description for Lesson 2 Physics', videoUrl: 'https://www.youtube.com/watch?v=M5w64KJKIcY&list=PLG4SdbUov5hThSGAA52GVuL4XndFlHywd&index=2&pp=iAQB' },
    { id: 3, title: 'Lesson 3', description: 'Description for Lesson 3 Physics', videoUrl: 'https://www.youtube.com/watch?v=zw3XxZCRY-M&list=PLG4SdbUov5hThSGAA52GVuL4XndFlHywd&index=3&pp=iAQB' },
    { id: 4, title: 'Lesson 4', description: 'Description for Lesson 4 Physics', videoUrl: 'https://www.youtube.com/watch?v=kyes7AcZcF8&list=PLG4SdbUov5hThSGAA52GVuL4XndFlHywd&index=4&pp=iAQB' },
    { id: 5, title: 'Lesson 5', description: 'Description for Lesson 5 Physics', videoUrl: 'https://www.youtube.com/watch?v=QUmril_OO38&list=PLG4SdbUov5hThSGAA52GVuL4XndFlHywd&index=5&pp=iAQB' },
    { id: 6, title: 'Lesson 6', description: 'Description for Lesson 6 Physics', videoUrl: 'https://www.youtube.com/watch?v=zmoO66QAQxs&list=PLG4SdbUov5hThSGAA52GVuL4XndFlHywd&index=6&pp=iAQB' },

    { id: 7, title: 'Lesson 7', description: 'Description for Lesson 7 Physics', videoUrl: 'https://www.youtube.com/watch?v=a0a2Awhu1NA&list=PLG4SdbUov5hSjKZhU4bHLlo-lBlbGbzUJ&index=1&pp=iAQB' },
    { id: 8, title: 'Lesson 8', description: 'Description for Lesson 8 Physics', videoUrl: 'https://www.youtube.com/watch?v=jk5JGiuJCJ0&list=PLG4SdbUov5hSjKZhU4bHLlo-lBlbGbzUJ&index=2&pp=iAQB' },
    { id: 9, title: 'Lesson 9', description: 'Description for Lesson 9 Physics', videoUrl: 'https://www.youtube.com/watch?v=UrwdYz4B3cI&list=PLG4SdbUov5hSjKZhU4bHLlo-lBlbGbzUJ&index=3&pp=iAQB' },
    { id: 10, title: 'Lesson 10', description: 'Description for Lesson 10 Physics', videoUrl: 'https://www.youtube.com/watch?v=0CPiYb4N7IU&list=PLG4SdbUov5hSjKZhU4bHLlo-lBlbGbzUJ&index=4&pp=iAQB' },
    { id: 11, title: 'Lesson 11', description: 'Description for Lesson 11 Physics', videoUrl: 'https://www.youtube.com/watch?v=qIRdUI3GaOM&list=PLG4SdbUov5hSjKZhU4bHLlo-lBlbGbzUJ&index=7&pp=iAQB' },

  ],
  5: [
    { id: 1, title: 'Lesson 1', description: 'Description for Lesson 1 Chemistry', videoUrl: 'https://www.youtube.com/watch?v=-6EARSMwEZs&list=PLA2sIXNgNKf7QXZZ7s9GlkfutCeBI_v4N&index=1&pp=iAQB' },
    { id: 2, title: 'Lesson 2', description: 'Description for Lesson 2  Chemistry', videoUrl: 'https://www.youtube.com/watch?v=nL3eSDc8Uh4&list=PLA2sIXNgNKf7QXZZ7s9GlkfutCeBI_v4N&index=2&pp=iAQB' },
    { id: 3, title: 'Lesson 3', description: 'Description for Lesson 3  Chemistry', videoUrl: 'https://www.youtube.com/watch?v=FdpfSCLnzyg&list=PLA2sIXNgNKf7QXZZ7s9GlkfutCeBI_v4N&index=3&pp=iAQB' },
    { id: 4, title: 'Lesson 4', description: 'Description for Lesson 4  Chemistry', videoUrl: 'https://www.youtube.com/watch?v=JuxhW1Zsq84&list=PLA2sIXNgNKf7QXZZ7s9GlkfutCeBI_v4N&index=4&pp=iAQB' },
    { id: 5, title: 'Lesson 5', description: 'Description for Lesson 5  Chemistry', videoUrl: 'https://www.youtube.com/watch?v=KOerf1UvEfc&list=PLA2sIXNgNKf7QXZZ7s9GlkfutCeBI_v4N&index=5&pp=iAQB' },
    { id: 6, title: 'Lesson 6', description: 'Description for Lesson 6  Chemistry', videoUrl: 'https://www.youtube.com/watch?v=Uvkxnaa2EPU&list=PLA2sIXNgNKf7QXZZ7s9GlkfutCeBI_v4N&index=6&pp=iAQB' },

    { id: 7, title: 'Lesson 7', description: 'Description for Lesson 7  Chemistry', videoUrl: 'https://www.youtube.com/watch?v=k5Z3nJ-x8kI&list=PLA2sIXNgNKf7QXZZ7s9GlkfutCeBI_v4N&index=7&pp=iAQB' },
    { id: 8, title: 'Lesson 8', description: 'Description for Lesson 8  Chemistry', videoUrl: 'https://www.youtube.com/watch?v=66TZf6gfA_k&list=PLA2sIXNgNKf7QXZZ7s9GlkfutCeBI_v4N&index=8&pp=iAQB' },
    { id: 9, title: 'Lesson 9', description: 'Description for Lesson 9  Chemistry', videoUrl: 'https://www.youtube.com/watch?v=FgWEX3BGtso&list=PLA2sIXNgNKf7QXZZ7s9GlkfutCeBI_v4N&index=9&pp=iAQB' },
    { id: 10, title: 'Lesson 10', description: 'Description for Lesson 10  Chemistry', videoUrl: 'https://www.youtube.com/watch?v=PeOvcNewqrA&list=PLA2sIXNgNKf7QXZZ7s9GlkfutCeBI_v4N&index=10&pp=iAQB' },
    { id: 11, title: 'Lesson 11', description: 'Description for Lesson 11  Chemistry', videoUrl: 'https://www.youtube.com/watch?v=uVr5o9czSjU&list=PLA2sIXNgNKf7QXZZ7s9GlkfutCeBI_v4N&index=11&pp=iAQB' },
  ],
  6: [
    { id: 1, title: 'Lesson 1', description: 'Description for Lesson 1 History', videoUrl: 'https://www.youtube.com/watch?v=ADNFBJ4jtcc&list=PLA2sIXNgNKf7zFI67_PvOsej2JQDAjrCX&index=1&pp=iAQB' },
    { id: 2, title: 'Lesson 2', description: 'Description for Lesson 2 History', videoUrl: 'https://www.youtube.com/watch?v=CBGgoCfeYZo&list=PLA2sIXNgNKf7zFI67_PvOsej2JQDAjrCX&index=2&pp=iAQB' },
    { id: 3, title: 'Lesson 3', description: 'Description for Lesson 3 History', videoUrl: 'https://www.youtube.com/watch?v=QYD0kJgmHR4&list=PLA2sIXNgNKf7zFI67_PvOsej2JQDAjrCX&index=3&pp=iAQB' },
    { id: 4, title: 'Lesson 4', description: 'Description for Lesson 4 History', videoUrl: 'https://www.youtube.com/watch?v=b3sfq-FCEWk&list=PLA2sIXNgNKf7zFI67_PvOsej2JQDAjrCX&index=4&pp=iAQB' },
    { id: 5, title: 'Lesson 5', description: 'Description for Lesson 5 History', videoUrl: 'https://www.youtube.com/watch?v=mgKZss3qvAU&list=PLA2sIXNgNKf7zFI67_PvOsej2JQDAjrCX&index=5&pp=iAQB' },
    { id: 6, title: 'Lesson 6', description: 'Description for Lesson 6 History', videoUrl: 'https://www.youtube.com/watch?v=JRH8h-yMq2c&list=PLA2sIXNgNKf7zFI67_PvOsej2JQDAjrCX&index=6&pp=iAQB' },
    { id: 7, title: 'Lesson 7', description: 'Description for Lesson 7 History', videoUrl: 'https://www.youtube.com/watch?v=FByxYeUkAfM&list=PLA2sIXNgNKf7zFI67_PvOsej2JQDAjrCX&index=7&pp=iAQB' },
    { id: 8, title: 'Lesson 8', description: 'Description for Lesson 8 History', videoUrl: 'https://www.youtube.com/watch?v=P6iFT1XAnr0&list=PLA2sIXNgNKf7zFI67_PvOsej2JQDAjrCX&index=8&pp=iAQB' },
  ],
  7: [
    { id: 1, title: 'Lesson 1', description: 'Description for Lesson 1  Biology', videoUrl: 'https://www.youtube.com/watch?v=BZip_XL5v1o&list=PLA2sIXNgNKf6fhWDdO9Op-_d-dYmXk4WQ&index=1&pp=iAQB' },
    { id: 2, title: 'Lesson 2', description: 'Description for Lesson 2  Biology', videoUrl: 'https://www.youtube.com/watch?v=WE1k9SmRgs4&list=PLA2sIXNgNKf6fhWDdO9Op-_d-dYmXk4WQ&index=2&pp=iAQB' },
    { id: 3, title: 'Lesson 3', description: 'Description for Lesson 3  Biology', videoUrl: 'https://www.youtube.com/watch?v=WoATlVdrcdw&list=PLA2sIXNgNKf6fhWDdO9Op-_d-dYmXk4WQ&index=3&pp=iAQB' },
    { id: 4, title: 'Lesson 4', description: 'Description for Lesson 4  Biology', videoUrl: 'https://www.youtube.com/watch?v=Jr6aqsE9S54&list=PLA2sIXNgNKf6fhWDdO9Op-_d-dYmXk4WQ&index=4&pp=iAQB' },
    { id: 5, title: 'Lesson 5', description: 'Description for Lesson 5  Biology', videoUrl: 'https://www.youtube.com/watch?v=k0QOBv8xGSA&list=PLA2sIXNgNKf6fhWDdO9Op-_d-dYmXk4WQ&index=5&pp=iAQB' },
    { id: 6, title: 'Lesson 6', description: 'Description for Lesson 6  Biology', videoUrl: 'https://www.youtube.com/watch?v=PksMSAwStkU&list=PLA2sIXNgNKf6fhWDdO9Op-_d-dYmXk4WQ&index=6&pp=iAQB' },

    { id: 7, title: 'Lesson 7', description: 'Description for Lesson 7  Biology', videoUrl: 'https://www.youtube.com/watch?v=OfekNwtXsBc&list=PLA2sIXNgNKf6fhWDdO9Op-_d-dYmXk4WQ&index=7&pp=iAQB' },
    { id: 8, title: 'Lesson 8', description: 'Description for Lesson 8  Biology', videoUrl: 'https://www.youtube.com/watch?v=HuVSoyaAsto&list=PLA2sIXNgNKf6fhWDdO9Op-_d-dYmXk4WQ&index=8&pp=iAQB' },
    { id: 9, title: 'Lesson 9', description: 'Description for Lesson 9  Biology', videoUrl: 'https://www.youtube.com/watch?v=gsYRrtGc2I4&list=PLA2sIXNgNKf6fhWDdO9Op-_d-dYmXk4WQ&index=9&pp=iAQB' },
    { id: 10, title: 'Lesson 10', description: 'Description for Lesson 10  Biology', videoUrl: 'https://www.youtube.com/watch?v=AlranojEWWw&list=PLA2sIXNgNKf6fhWDdO9Op-_d-dYmXk4WQ&index=10&pp=iAQB' },
    { id: 11, title: 'Lesson 11', description: 'Description for Lesson 11  Biology', videoUrl: 'https://www.youtube.com/watch?v=OnP_l1rKiHs&list=PLA2sIXNgNKf6fhWDdO9Op-_d-dYmXk4WQ&index=11&pp=iAQB' },
  ],
  8: [
    { id: 1, title: 'Lesson 1', description: 'Description for Lesson 1 Technology', videoUrl: 'https://www.youtube.com/watch?v=XBQWT0H69i4&list=PLA2sIXNgNKf7tUulyQdFphKDNF1RKrqik&index=1&pp=iAQB' },
    { id: 2, title: 'Lesson 2', description: 'Description for Lesson 2 Technology', videoUrl: 'https://www.youtube.com/watch?v=Fs482ACmUAA&list=PLA2sIXNgNKf7tUulyQdFphKDNF1RKrqik&index=2&pp=iAQB' },
    { id: 3, title: 'Lesson 3', description: 'Description for Lesson 3 Technology', videoUrl: 'https://www.youtube.com/watch?v=0R9dl0TJ300&list=PLA2sIXNgNKf7tUulyQdFphKDNF1RKrqik&index=3&pp=iAQB' },
    { id: 4, title: 'Lesson 4', description: 'Description for Lesson 4 Technology', videoUrl: 'https://www.youtube.com/watch?v=Wh2Yrvh-y-E&list=PLA2sIXNgNKf7tUulyQdFphKDNF1RKrqik&index=4&pp=iAQB' },
    { id: 5, title: 'Lesson 5', description: 'Description for Lesson 5 Technology', videoUrl: 'https://www.youtube.com/watch?v=0d6kHj1AK2E&list=PLA2sIXNgNKf7tUulyQdFphKDNF1RKrqik&index=5&pp=iAQB' },
    { id: 6, title: 'Lesson 6', description: 'Description for Lesson 6 Technology', videoUrl: 'https://www.youtube.com/watch?v=Eh1Bawy4xi8&list=PLA2sIXNgNKf61_JPi4qAo6A5Oqv_lp9Ew&index=6&pp=iAQB' },
    { id: 7, title: 'Lesson 7', description: 'Description for Lesson 7 Technology', videoUrl: 'https://www.youtube.com/watch?v=mKTbcvS1TQM&list=PLA2sIXNgNKf7tUulyQdFphKDNF1RKrqik&index=7&pp=iAQB' },
    { id: 8, title: 'Lesson 8', description: 'Description for Lesson 8 Technology', videoUrl: 'https://www.youtube.com/watch?v=DZjoYZlWL4E&list=PLA2sIXNgNKf7tUulyQdFphKDNF1RKrqik&index=8&pp=iAQB' },
  ],
  // Add similar structure for other courses if needed
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

const F2Lessons = () => {
  const { courseId } = useParams();
  const lessons = lessonsData[courseId] || [];
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [mobileSidebarVisible, setMobileSidebarVisible] = useState(false);
  const navigate = useNavigate(); // Create navigate function

  const handleLessonClick = (lesson) => {
    setSelectedLesson(lesson);
  };

  const handleGoBack = () => {
    navigate('/form2'); // Navigate to Form2 page
  };
  const toggleMobileSidebar = () => {
    setMobileSidebarVisible(!mobileSidebarVisible);
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
          <h4 className="text-xl font-semibold mb-4">Other Lessons in this Course :</h4>
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
                Form 2 Lesson {selectedLesson.id}
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

export default F2Lessons;
