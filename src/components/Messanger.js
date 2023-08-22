import React, {useState} from 'react';

function Messanger(){
	const [classTeg, setClassTeg] = useState("messenger-links");

	function openMessanger(){
		if(classTeg === "messenger-links"){
			setClassTeg("messenger-links show");
	}else{
		setClassTeg("messenger-links");
	}
}
    return (
	<>

		  <div className="messenger">
		  <div title="Чат с менеджером" className="messenger-btn" onClick={openMessanger}><img
				  src="/file/2/chat.svg"
				  alt="Чат с менеджером"
			  /></div>
		  <div id="messenger-links" className={classTeg}>
			<a title="phone" href="tel:+79093802519" target="_blank"><img
					src="/file/2/icons8-phone.svg"
					alt="phone"
				/>
			</a>
			<a title="Telegramm" href="https://t.me/kopiprint34" target="_blank"><img
					  src="/file/2/telegramm.svg"
					  alt="Вконтакте"
				  />
			</a>
			<a title="Viber" href="viber://chat?number=%2B+79093802519" target="_blank"><img
					  src="/file/2/icons8-viber.svg"
					  alt="Viber"
				  />
			</a>
			<a title="Email" href="mailto:kopi34@yandex.ru" target="_blank"><img
					src="/file/2/icons8-email-96.png"
					alt="Email"
				/>
			</a>
		  </div>
	  </div>
	  </>
        
    );
};

export default Messanger;