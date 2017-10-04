﻿var bell_jar = {"0004": {"action": "GET_TOKEN", "check": "", "owner": "PLAYER", "value": "", "parent_id": "0000", "contents": "[Enter the Lab]", "dialog_depth": 1, "child_ids": ["0005"], "label": "0004", "target": "INTRO"}, "0015": {"action": "", "check": "", "owner": "SPEAKER", "value": "", "parent_id": "0014", "contents": "There is the door that leads back outside. On another wall there's a small door marked \"private\".", "dialog_depth": 2, "child_ids": ["0016", "0021"], "label": "0015", "target": ""}, "0083": {"action": "", "check": "", "owner": "PLAYER", "value": "", "parent_id": "0079", "contents": "[Move closer]", "dialog_depth": 1, "child_ids": ["0084"], "label": "0083", "target": ""}, "0080": {"action": "GO_TO", "check": "", "owner": "PLAYER", "value": "", "parent_id": "0057", "contents": "[Look at the table]", "dialog_depth": 1, "child_ids": [], "label": "0080", "target": "0079"}, "0091": {"action": "", "check": "", "owner": "PLAYER", "value": "", "parent_id": "0090", "contents": "[Move the bell jar]", "dialog_depth": 9, "child_ids": ["0092"], "label": "0091", "target": ""}, "0107": {"action": "", "contents": "\"Do you believe this is the real world? That's the real world in there! This is the bell jar and now you've trapped us both!\"", "owner": "SPEAKER", "value": "", "parent_id": "0106", "check": "", "dialog_depth": 8, "child_ids": ["0108"], "label": "0107", "target": ""}, "0021": {"action": "GET_TOKEN", "check": "", "owner": "PLAYER", "value": "", "parent_id": "0015", "contents": "[Open the door]", "dialog_depth": 3, "child_ids": ["0022"], "label": "0021", "target": "PRIVATE_KNOCK"}, "0109": {"action": "", "contents": "\"That wasn't me! That was your Doctor Keller. He's free now in the real world, and I'm trapped here.\"", "owner": "SPEAKER", "value": "", "parent_id": "0108", "check": "", "dialog_depth": 10, "child_ids": ["0110", "0113"], "label": "0109", "target": ""}, "0110": {"action": "", "contents": "[Go home, eat some Ramen and try to forget about Doctor Keller's troublesome conundrum. There are enough problems in this world without creating a door to a pocket dimention in a bell jar. What was he thinking!]", "owner": "PLAYER", "value": "", "parent_id": "0109", "check": "", "dialog_depth": 11, "child_ids": ["0111"], "label": "0110", "target": ""}, "0022": {"action": "", "check": "", "owner": "SPEAKER", "value": "", "parent_id": "0021", "contents": "You turn the handle and open the door.", "dialog_depth": 4, "child_ids": ["0023"], "label": "0022", "target": ""}, "0027": {"action": "GET_TOKEN", "check": "==", "owner": "SPEAKER", "value": "FALSE", "parent_id": "0026", "contents": "On the desk is an open diary. You try to read it but the writing is unreadable.", "dialog_depth": 4, "child_ids": ["0028", "0031"], "label": "0027", "target": "DRS_DIARY"}, "0057": {"action": "", "check": "", "owner": "SPEAKER", "value": "", "parent_id": null, "contents": "The door opens to reveal a secret lab! A giant machine is in the corner, there is a control console and a sturdy looking table with a bell jar on it.", "dialog_depth": 0, "child_ids": ["0058", "0059", "0080", "0081"], "label": "0057", "target": ""}, "0067": {"action": "GO_TO", "contents": "[Don't sit in the chair, that would probably be bad!]", "owner": "PLAYER", "value": "", "parent_id": "0065", "check": "", "dialog_depth": 7, "child_ids": [], "label": "0067", "target": "0057"}, "0009": {"action": "", "check": "", "owner": "SPEAKER", "value": "", "parent_id": "0008", "contents": "Dense calculations cover evry paper. You can't understand a word of it.", "dialog_depth": 2, "child_ids": ["0010"], "label": "0009", "target": ""}, "0106": {"action": "", "contents": "[Ask him what's wrong]", "owner": "PLAYER", "value": "", "parent_id": "0105", "check": "", "dialog_depth": 7, "child_ids": ["0107"], "label": "0106", "target": ""}, "0108": {"action": "", "value": "", "parent_id": "0107", "contents": "\"So what about the letter? You invited me here!\"", "child_ids": ["0109"], "target": "", "check": "", "owner": "PLAYER", "dialog_depth": 9, "label": "0108"}, "0013": {"action": "GO_TO", "check": "", "owner": "PLAYER", "value": "", "parent_id": "0012", "contents": "[Ignore the equipment]", "dialog_depth": 3, "child_ids": [], "label": "0013", "target": "0007"}, "0079": {"action": "", "check": "", "owner": "SPEAKER", "value": "", "parent_id": null, "contents": "On the table is a big bell jar. Inside is a model village. Wait! As you look closer...", "dialog_depth": 0, "child_ids": ["0083"], "label": "0079", "target": ""}, "0122": {"action": "", "value": "", "parent_id": "0121", "check": "", "child_ids": ["0123"], "contents": "There is some kind of Blender phone here.", "target": "", "dialog_depth": 4, "owner": "SPEAKER", "label": "0122"}, "0086": {"action": "", "check": "", "owner": "SPEAKER", "value": "", "parent_id": "0085", "contents": "It is a man, he's wearing a scientists clothes. You recognize him as Doctor Keller!", "dialog_depth": 4, "child_ids": ["0087"], "label": "0086", "target": ""}, "0068": {"action": "", "contents": "As you sit down you notice some reading classes.", "owner": "SPEAKER", "value": "", "parent_id": "0066", "check": "", "dialog_depth": 8, "child_ids": ["0069", "0072"], "label": "0068", "target": ""}, "0037": {"action": "GET_TOKEN", "contents": "[Look at the bookcase again]", "owner": "PLAYER", "value": "TRUE", "parent_id": "0025", "check": "==", "dialog_depth": 3, "child_ids": ["0038"], "label": "0037", "target": "FIRST_GLANCE"}, "0102": {"action": "", "contents": "[Try to extract the Doctor from the bell jar]", "owner": "PLAYER", "value": "", "parent_id": "0097", "check": "", "dialog_depth": 3, "child_ids": ["0103"], "label": "0102", "target": ""}, "0084": {"action": "", "check": "", "owner": "SPEAKER", "value": "", "parent_id": "0083", "contents": "It's not a model! Ther are small buildings in the bell jar. There are people and horses. One of the people looks familiar...", "dialog_depth": 2, "child_ids": ["0085"], "label": "0084", "target": ""}, "0115": {"action": "", "value": "", "parent_id": "0114", "check": "", "child_ids": ["0119"], "contents": "\"Yes\"", "target": "", "dialog_depth": 13, "owner": "PLAYER", "label": "0115"}, "0092": {"action": "", "check": "", "owner": "SPEAKER", "value": "", "parent_id": "0091", "contents": "It's very heavy. As you try to shift it, the buildings inside move around like there's an earthquake. People are running and waving their hands.", "dialog_depth": 10, "child_ids": ["0093"], "label": "0092", "target": ""}, "0088": {"action": "", "check": "", "owner": "SPEAKER", "value": "", "parent_id": "0087", "contents": "The doctor sees you. He is waving back. He looks very agitated.", "dialog_depth": 6, "child_ids": ["0089"], "label": "0088", "target": ""}, "0029": {"action": "SET_TOKEN", "check": "", "owner": "SPEAKER", "value": "TRUE", "parent_id": "0028", "contents": "You pick it up and put it in your jacket.", "dialog_depth": 6, "child_ids": ["0030"], "label": "0029", "target": "DRS_DIARY"}, "0099": {"action": "", "contents": "[Try to enter the bell jar]", "owner": "PLAYER", "value": "", "parent_id": "0097", "check": "", "dialog_depth": 3, "child_ids": ["0100"], "label": "0099", "target": ""}, "0114": {"action": "", "value": "", "parent_id": "0113", "check": "", "child_ids": ["0115", "0116"], "contents": "\"Do you know anything about quantum Mechanics?\"", "target": "", "dialog_depth": 12, "owner": "SPEAKER", "label": "0114"}, "0061": {"action": "", "contents": "[Look in the closet]", "owner": "PLAYER", "value": "", "parent_id": "0060", "check": "", "dialog_depth": 3, "child_ids": ["0062"], "label": "0061", "target": ""}, "0008": {"action": "", "check": "", "owner": "PLAYER", "value": "", "parent_id": "0007", "contents": "[Read the papers]", "dialog_depth": 1, "child_ids": ["0009"], "label": "0008", "target": ""}, "0082": {"action": "", "contents": "There is a control console. It is very complicated.", "owner": "SPEAKER", "value": "", "parent_id": null, "dialog_depth": 0, "check": "", "child_ids": ["0096", "0098"], "label": "0082", "target": ""}, "0000": {"action": "SET_TOKEN", "check": "", "owner": "SPEAKER", "value": "FALSE", "parent_id": null, "contents": "It's a hot and humid August Afternoon. The sun beats down. Ahead of you is the University.", "dialog_depth": 0, "child_ids": ["0001", "0004"], "label": "0000", "target": "GAME_OVER"}, "0112": {"action": "", "contents": ":)", "owner": "PLAYER", "value": "", "parent_id": "0111", "check": "", "dialog_depth": 13, "child_ids": [], "label": "0112", "target": ""}, "0024": {"action": "SET_TOKEN", "check": "", "owner": "PLAYER", "value": "FALSE", "parent_id": "0018", "contents": "[look around]", "dialog_depth": 1, "child_ids": ["0025"], "label": "0024", "target": "FIRST_GLANCE"}, "0053": {"action": "", "contents": "There are stairs going down in to the dusty darkness. At the bottom is a another door. Behind you is the secret door leading back to the office.", "owner": "SPEAKER", "value": "", "parent_id": null, "check": "", "dialog_depth": 0, "child_ids": ["0055", "0056"], "label": "0053", "target": ""}, "0093": {"action": "", "check": "", "owner": "PLAYER", "value": "", "parent_id": "0092", "contents": "[Use sign language to communicate doctor]", "dialog_depth": 11, "child_ids": ["0094"], "label": "0093", "target": ""}, "0096": {"action": "GET_TOKEN", "contents": "[Try to operate the console]", "owner": "PLAYER", "value": "", "parent_id": "0082", "check": "", "dialog_depth": 1, "child_ids": ["0097"], "label": "0096", "target": "INSTRUCTIONS"}, "0123": {"action": "GO_TO", "value": "", "parent_id": "0122", "check": "", "child_ids": [], "target": "0052", "contents": "[Pick it up, and look at the walls]", "owner": "PLAYER", "dialog_depth": 5, "label": "0123"}, "0028": {"action": "", "check": "", "owner": "PLAYER", "value": "", "parent_id": "0027", "contents": "[Pick up the diary]", "dialog_depth": 5, "child_ids": ["0029"], "label": "0028", "target": ""}, "0023": {"action": "GO_TO", "check": "", "owner": "PLAYER", "value": "", "parent_id": "0022", "contents": "[Look inside]", "dialog_depth": 5, "child_ids": [], "label": "0023", "target": "0018"}, "0117": {"action": "", "value": "", "parent_id": "0116", "check": "", "child_ids": ["0118"], "contents": "\"Then be quiet and go and get me some coffee.\"", "target": "", "dialog_depth": 14, "owner": "SPEAKER", "label": "0117"}, "0033": {"action": "GO_TO", "contents": "[Look around]", "owner": "PLAYER", "value": "", "parent_id": "0032", "check": "", "dialog_depth": 5, "child_ids": [], "label": "0033", "target": "0025"}, "0048": {"action": "GO_TO", "contents": "[Look around]", "owner": "PLAYER", "value": "", "parent_id": "0047", "check": "", "dialog_depth": 3, "child_ids": [], "label": "0048", "target": "0025"}, "0007": {"action": "", "check": "", "owner": "SPEAKER", "value": "", "parent_id": null, "contents": "Doctor Thomas' lab is large and disorganized. There are several tables covered with lab equipment and various papers.", "dialog_depth": 0, "child_ids": ["0008", "0011", "0014"], "label": "0007", "target": ""}, "0031": {"action": "GO_TO", "check": "", "owner": "PLAYER", "value": "", "parent_id": "0027", "contents": "[Look around]", "dialog_depth": 5, "child_ids": [], "label": "0031", "target": "0025"}, "0026": {"action": "", "check": "", "owner": "PLAYER", "value": "", "parent_id": "0025", "contents": "[Look at the desk]", "dialog_depth": 3, "child_ids": ["0027", "0032"], "label": "0026", "target": ""}, "0071": {"action": "", "contents": "[Read the diary]", "owner": "PLAYER", "value": "", "parent_id": "0070", "check": "", "dialog_depth": 11, "child_ids": ["0075"], "label": "0071", "target": ""}, "0072": {"action": "", "contents": "[look at the machine]", "owner": "PLAYER", "value": "", "parent_id": "0068", "check": "", "dialog_depth": 9, "child_ids": ["0073"], "label": "0072", "target": ""}, "0111": {"action": "", "contents": "THE END.", "owner": "SPEAKER", "value": "", "parent_id": "0110", "check": "", "dialog_depth": 12, "child_ids": ["0112"], "label": "0111", "target": ""}, "0113": {"action": "", "value": "", "parent_id": "0109", "check": "", "child_ids": ["0114"], "contents": "\"Can't you use the machine to go back in to the bell jar?\"", "target": "", "dialog_depth": 11, "owner": "PLAYER", "label": "0113"}, "0036": {"action": "GO_TO", "contents": "[Look around]", "owner": "PLAYER", "value": "", "parent_id": "0035", "check": "", "dialog_depth": 5, "child_ids": [], "label": "0036", "target": "0025"}, "0044": {"action": "", "contents": "The secret door leads to a dark corridor.", "owner": "SPEAKER", "value": "", "parent_id": null, "check": "", "dialog_depth": 0, "child_ids": ["0046", "0049"], "label": "0044", "target": ""}, "0118": {"action": "GO_TO", "value": "", "parent_id": "0117", "check": "", "child_ids": [], "contents": "[Resign yourself to your new job]", "target": "0111", "dialog_depth": 15, "owner": "PLAYER", "label": "0118"}, "0034": {"action": "GET_TOKEN", "contents": "[look at the bookcase]", "owner": "PLAYER", "value": "FALSE", "parent_id": "0025", "check": "==", "dialog_depth": 3, "child_ids": ["0035"], "label": "0034", "target": "FIRST_GLANCE"}, "0116": {"action": "", "value": "", "parent_id": "0114", "check": "", "child_ids": ["0117"], "contents": "\"No\"", "target": "", "dialog_depth": 13, "owner": "PLAYER", "label": "0116"}, "0050": {"action": "", "contents": "It's too dark to go down the corridor.", "owner": "SPEAKER", "value": "", "parent_id": "0049", "check": "", "dialog_depth": 2, "child_ids": ["0051", "0121"], "label": "0050", "target": ""}, "0097": {"action": "", "contents": "What do you want to do with it?", "owner": "SPEAKER", "value": "", "parent_id": "0096", "check": "", "dialog_depth": 2, "child_ids": ["0099", "0102"], "label": "0097", "target": ""}, "0001": {"action": "", "check": "", "owner": "PLAYER", "value": "", "parent_id": "0000", "contents": "[Check your pockets]", "dialog_depth": 1, "child_ids": ["0002"], "label": "0001", "target": ""}, "0069": {"action": "", "contents": "[Put on the reading glasses]", "owner": "PLAYER", "value": "", "parent_id": "0068", "check": "", "dialog_depth": 9, "child_ids": ["0070", "0077"], "label": "0069", "target": ""}, "0103": {"action": "", "contents": "You work the controls, at first it seems to have no effect, but you soon hear muffled curses coming from the closet attached to the big machine.", "owner": "SPEAKER", "value": "", "parent_id": "0102", "check": "", "dialog_depth": 4, "child_ids": ["0104"], "label": "0103", "target": ""}, "0098": {"action": "GO_TO", "contents": "[Look around again]", "owner": "PLAYER", "value": "", "parent_id": "0082", "check": "", "dialog_depth": 1, "child_ids": [], "label": "0098", "target": "0057"}, "0043": {"action": "GO_TO", "contents": "[Look at the book case again]", "owner": "PLAYER", "value": "", "parent_id": "0040", "check": "", "dialog_depth": 7, "child_ids": [], "label": "0043", "target": "0038"}, "0105": {"action": "", "contents": "The Doctor is sitting in the chair. He doesn't look very happy to be out of the jar.", "owner": "SPEAKER", "value": "", "parent_id": "0104", "check": "", "dialog_depth": 6, "child_ids": ["0106"], "label": "0105", "target": ""}, "0100": {"action": "", "contents": "That's not a good idea. Obviously the Doctor can't get out, so how would you?", "owner": "SPEAKER", "value": "", "parent_id": "0099", "check": "", "dialog_depth": 4, "child_ids": ["0101"], "label": "0100", "target": ""}, "0018": {"action": "SET_TOKEN", "check": "", "owner": "SPEAKER", "value": "FALSE", "parent_id": null, "contents": "Through the open door you can see a small office.", "dialog_depth": 0, "child_ids": ["0024"], "label": "0018", "target": "DRS_DIARY"}, "0041": {"action": "", "contents": "[Pull the bookcase]", "owner": "PLAYER", "value": "", "parent_id": "0038", "check": "", "dialog_depth": 5, "child_ids": ["0042"], "label": "0041", "target": ""}, "0003": {"action": "GO_TO", "check": "", "owner": "PLAYER", "value": "", "parent_id": "0002", "contents": "[Put the note back in your pocket]", "dialog_depth": 3, "child_ids": [], "label": "0003", "target": "0000"}, "0046": {"action": "", "contents": "[Go back to the office]", "owner": "PLAYER", "value": "", "parent_id": "0044", "check": "", "dialog_depth": 1, "child_ids": ["0047"], "label": "0046", "target": ""}, "0056": {"action": "GO_TO", "check": "", "owner": "PLAYER", "value": "", "parent_id": "0053", "contents": "[Go down the stairs and through the door]", "dialog_depth": 1, "child_ids": [], "label": "0056", "target": "0057"}, "0020": {"action": "GO_TO", "check": "", "owner": "PLAYER", "value": "", "parent_id": "0017", "contents": "[Look around the lab]", "dialog_depth": 5, "child_ids": [], "label": "0020", "target": "0007"}, "0019": {"action": "GO_TO", "check": "", "owner": "PLAYER", "value": "", "parent_id": "0017", "contents": "[Open the door marked \"Private\"]", "dialog_depth": 5, "child_ids": [], "label": "0019", "target": "0018"}, "0006": {"action": "GO_TO", "check": "", "owner": "PLAYER", "value": "", "parent_id": "0005", "contents": "[Go in to the Doctor's office]", "dialog_depth": 3, "child_ids": [], "label": "0006", "target": "0007"}, "0011": {"action": "", "check": "", "owner": "PLAYER", "value": "", "parent_id": "0007", "contents": "[Look at the equipment]", "dialog_depth": 1, "child_ids": ["0012"], "label": "0011", "target": ""}, "0014": {"action": "", "check": "", "owner": "PLAYER", "value": "", "parent_id": "0007", "contents": "[Check for exits]", "dialog_depth": 1, "child_ids": ["0015"], "label": "0014", "target": ""}, "0032": {"action": "GET_TOKEN", "contents": "The desk is empty.", "owner": "SPEAKER", "value": "TRUE", "parent_id": "0026", "check": "==", "dialog_depth": 4, "child_ids": ["0033"], "label": "0032", "target": "DRS_DIARY"}, "0055": {"action": "GO_TO", "contents": "[Go back to the office]", "owner": "PLAYER", "value": "", "parent_id": "0053", "check": "", "dialog_depth": 1, "child_ids": [], "label": "0055", "target": "0025"}, "0017": {"action": "SET_TOKEN", "check": "", "owner": "SPEAKER", "value": "", "parent_id": "0016", "contents": "There's no answer to your knock.", "dialog_depth": 4, "child_ids": ["0019", "0020"], "label": "0017", "target": "PRIVATE_KNOCK"}, "0090": {"action": "", "check": "", "owner": "SPEAKER", "value": "", "parent_id": "0089", "contents": "He can't hear you. The bell jar is quite thick.", "dialog_depth": 8, "child_ids": ["0091"], "label": "0090", "target": ""}, "0005": {"action": "", "check": "", "owner": "SPEAKER", "value": "", "parent_id": "0004", "contents": "You go inside the Lab, down a hallway and to a door marked \"Dr Thomas Keller\".", "dialog_depth": 2, "child_ids": ["0006"], "label": "0005", "target": ""}, "0063": {"action": "", "contents": "[Look more closely]", "owner": "PLAYER", "value": "", "parent_id": "0062", "check": "", "dialog_depth": 5, "child_ids": ["0065"], "label": "0063", "target": ""}, "0052": {"action": "", "contents": "There is a light switch here. You flick it on and the corridor is illuminated with dusty light.", "owner": "SPEAKER", "value": "", "parent_id": "0051", "check": "", "dialog_depth": 4, "child_ids": ["0054"], "label": "0052", "target": ""}, "0078": {"action": "GO_TO", "check": "", "owner": "PLAYER", "value": "", "parent_id": "0077", "contents": "[Go back to the secret lab]", "dialog_depth": 11, "child_ids": [], "label": "0078", "target": "0057"}, "0035": {"action": "SET_TOKEN", "contents": "At first glance you don't notice anything strange.", "owner": "SPEAKER", "value": "TRUE", "parent_id": "0034", "check": "", "dialog_depth": 4, "child_ids": ["0036"], "label": "0035", "target": "FIRST_GLANCE"}, "0081": {"action": "GO_TO", "check": "", "owner": "PLAYER", "value": "", "parent_id": "0057", "contents": "[look at the console]", "dialog_depth": 1, "child_ids": [], "label": "0081", "target": "0082"}, "0060": {"action": "", "contents": "It looks like a giant ray gun pointing in to a closet.", "owner": "SPEAKER", "value": "", "parent_id": "0059", "check": "", "dialog_depth": 2, "child_ids": ["0061"], "label": "0060", "target": ""}, "0104": {"action": "", "contents": "[Look inside the machine's closet]", "owner": "PLAYER", "value": "", "parent_id": "0103", "check": "", "dialog_depth": 5, "child_ids": ["0105"], "label": "0104", "target": ""}, "0042": {"action": "", "contents": "The book case slides aside to reveal a secret door.", "owner": "SPEAKER", "value": "", "parent_id": "0041", "check": "", "dialog_depth": 6, "child_ids": ["0045"], "label": "0042", "target": ""}, "0051": {"action": "", "contents": "Check the walls.", "owner": "PLAYER", "value": "", "parent_id": "0050", "check": "", "dialog_depth": 3, "child_ids": ["0052"], "label": "0051", "target": ""}, "0038": {"action": "", "contents": "There are scratches on the floor near the edge of the book case.", "owner": "SPEAKER", "value": "", "parent_id": "0037", "check": "", "dialog_depth": 4, "child_ids": ["0039", "0041"], "label": "0038", "target": ""}, "0094": {"action": "", "check": "", "owner": "SPEAKER", "value": "", "parent_id": "0093", "contents": "Really? Even if you know sign language, the doctor doesn't.", "dialog_depth": 12, "child_ids": ["0095"], "label": "0094", "target": ""}, "0025": {"action": "", "check": "", "owner": "SPEAKER", "value": "", "parent_id": "0024", "contents": "You see a desk and a bookcase. There are more papers and equipment in one corner.", "dialog_depth": 2, "child_ids": ["0026", "0034", "0037"], "label": "0025", "target": ""}, "0012": {"action": "", "check": "", "owner": "SPEAKER", "value": "", "parent_id": "0011", "contents": "There are pipes, beakers, electrical machines, and more scattered around the lab. Who knows what any of this stuff does.", "dialog_depth": 2, "child_ids": ["0013"], "label": "0012", "target": ""}, "0070": {"action": "GET_TOKEN", "contents": "You rember the Doctor's Diary! You look at it with the reading glasses but it still doesn't make sense. Until... Suddendly you see the refelction of the diray in the mirror. It is mirror writing!h ", "owner": "SPEAKER", "value": "TRUE", "parent_id": "0069", "check": "==", "dialog_depth": 10, "child_ids": ["0071"], "label": "0070", "target": "DRS_DIARY"}, "0030": {"action": "GO_TO", "check": "", "owner": "PLAYER", "value": "", "parent_id": "0029", "contents": "[Look around]", "dialog_depth": 7, "child_ids": [], "label": "0030", "target": "0025"}, "0077": {"action": "", "check": "", "owner": "SPEAKER", "value": "", "parent_id": "0069", "contents": "You put on the glasses, but feel stupid. You take them off again.", "dialog_depth": 10, "child_ids": ["0078"], "label": "0077", "target": ""}, "0002": {"action": "SET_TOKEN", "check": "", "owner": "SPEAKER", "value": "", "parent_id": "0001", "contents": "There is a note from a Doctor Thomas Keller.\\n\" Come to my lab as soon as you can. I've got something amazing to show you.\"", "dialog_depth": 2, "child_ids": ["0003"], "label": "0002", "target": "INTRO"}, "0054": {"action": "GO_TO", "contents": "[Go down the corridor]", "owner": "PLAYER", "value": "", "parent_id": "0052", "check": "", "dialog_depth": 5, "child_ids": [], "label": "0054", "target": "0053"}, "0059": {"action": "", "contents": "[Look at the machine]", "owner": "PLAYER", "value": "", "parent_id": "0057", "check": "", "dialog_depth": 1, "child_ids": ["0060"], "label": "0059", "target": ""}, "0089": {"action": "", "check": "", "owner": "PLAYER", "value": "", "parent_id": "0088", "contents": "[Shout to the Doctor]", "dialog_depth": 7, "child_ids": ["0090"], "label": "0089", "target": ""}, "0039": {"action": "", "contents": "[Push the book case]", "owner": "PLAYER", "value": "", "parent_id": "0038", "check": "", "dialog_depth": 5, "child_ids": ["0040"], "label": "0039", "target": ""}, "0065": {"action": "", "contents": "There is a comfortable chair surrounded by mirrored panels.", "owner": "SPEAKER", "value": "", "parent_id": "0063", "check": "", "dialog_depth": 6, "child_ids": ["0066", "0067"], "label": "0065", "target": ""}, "0058": {"action": "GO_TO", "check": "", "owner": "PLAYER", "value": "", "parent_id": "0057", "contents": "[Go back to the office]", "dialog_depth": 1, "child_ids": [], "label": "0058", "target": "0025"}, "0087": {"action": "", "check": "", "owner": "PLAYER", "value": "", "parent_id": "0086", "contents": "[Wave to the doctor]", "dialog_depth": 5, "child_ids": ["0088"], "label": "0087", "target": ""}, "0073": {"action": "", "contents": "You don't notice anything more about the machine. Maybe you should look around the secret lab more.", "owner": "SPEAKER", "value": "", "parent_id": "0072", "check": "", "dialog_depth": 10, "child_ids": ["0074"], "label": "0073", "target": ""}, "0075": {"action": "SET_TOKEN", "contents": "The Diary contains detailed instructions on how to operate the control console. Doctor Keller gives detailed technical descriptions about what the machine does, but you can't understand it.", "owner": "SPEAKER", "value": "", "parent_id": "0071", "check": "", "dialog_depth": 12, "child_ids": ["0076"], "label": "0075", "target": "INSTRUCTIONS"}, "0085": {"action": "", "check": "", "owner": "PLAYER", "value": "", "parent_id": "0084", "contents": "[Look more closely]", "dialog_depth": 3, "child_ids": ["0086"], "label": "0085", "target": ""}, "0016": {"action": "", "check": "", "owner": "PLAYER", "value": "", "parent_id": "0015", "contents": "[Knock on the door marked \"private\"]", "dialog_depth": 3, "child_ids": ["0017"], "label": "0016", "target": ""}, "0095": {"action": "GO_TO", "check": "", "owner": "PLAYER", "value": "", "parent_id": "0094", "contents": "[Go back to the secret lab and think of something else]", "dialog_depth": 13, "child_ids": [], "label": "0095", "target": "0057"}, "0045": {"action": "GO_TO", "contents": "[Open the secret door]", "owner": "PLAYER", "value": "", "parent_id": "0042", "check": "", "dialog_depth": 7, "child_ids": [], "label": "0045", "target": "0044"}, "0120": {"action": "GO_TO", "value": "", "parent_id": "0119", "check": "", "child_ids": [], "target": "0117", "contents": "\"No\"", "owner": "PLAYER", "dialog_depth": 15, "label": "0120"}, "0047": {"action": "", "contents": "The book case slides back on a spring mechanism, hiding the secret door again.", "owner": "SPEAKER", "value": "", "parent_id": "0046", "check": "", "dialog_depth": 2, "child_ids": ["0048"], "label": "0047", "target": ""}, "0121": {"action": "", "value": "", "parent_id": "0050", "check": "", "child_ids": ["0122"], "contents": "[Check the floor]", "target": "", "dialog_depth": 3, "owner": "PLAYER", "label": "0121"}, "0076": {"action": "GO_TO", "contents": "[Go back to the lab]", "owner": "PLAYER", "value": "", "parent_id": "0075", "check": "", "dialog_depth": 13, "child_ids": [], "label": "0076", "target": "0057"}, "0040": {"action": "", "contents": "The book case is firmly against the wall.", "owner": "SPEAKER", "value": "", "parent_id": "0039", "check": "", "dialog_depth": 6, "child_ids": ["0043"], "label": "0040", "target": ""}, "0119": {"action": "", "value": "", "parent_id": "0115", "check": "", "child_ids": ["0120"], "contents": "\"Really?\"", "target": "", "dialog_depth": 14, "owner": "SPEAKER", "label": "0119"}, "0010": {"action": "GO_TO", "check": "", "owner": "PLAYER", "value": "", "parent_id": "0009", "contents": "[Put down the paper]", "dialog_depth": 3, "child_ids": [], "label": "0010", "target": "0007"}, "0074": {"action": "GO_TO", "contents": "[Go back to the lab]", "owner": "PLAYER", "value": "", "parent_id": "0073", "check": "", "dialog_depth": 11, "child_ids": [], "label": "0074", "target": "0057"}, "0101": {"action": "GO_TO", "contents": "[Think again]", "owner": "PLAYER", "value": "", "parent_id": "0100", "check": "", "dialog_depth": 5, "child_ids": [], "label": "0101", "target": "0097"}, "0064": {"action": "GO_TO", "contents": "[Look around the secret lab]", "owner": "PLAYER", "value": "", "parent_id": "0062", "check": "", "dialog_depth": 5, "child_ids": [], "label": "0064", "target": "0057"}, "0062": {"action": "", "contents": "The closet is faced with mirrored panels.", "owner": "SPEAKER", "value": "", "parent_id": "0061", "check": "", "dialog_depth": 4, "child_ids": ["0063", "0064"], "label": "0062", "target": ""}, "0066": {"action": "", "contents": "[Sit in the chair]", "owner": "PLAYER", "value": "", "parent_id": "0065", "check": "", "dialog_depth": 7, "child_ids": ["0068"], "label": "0066", "target": ""}, "0049": {"action": "", "contents": "[Go down the corridor]", "owner": "PLAYER", "value": "", "parent_id": "0044", "check": "", "dialog_depth": 1, "child_ids": ["0050"], "label": "0049", "target": ""}}