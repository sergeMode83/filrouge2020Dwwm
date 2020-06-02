let modal = null


const openModal = function(e)
{
	e.preventDefault()
	
	modal = document.querySelector(e.target.getAttribute('href'))
	modal.style.display = null
	modal.removeAttribute('aria-hidden')
	modal.setAttribute('aria-modal','true')
	modal.addEventListener('click', closeModal)
	modal.querySelector('.js-modal-close').addEventListener('click', closeModal)
	modal.querySelector('.js-modal-stop').addEventListener('click', stopPropagation)
	document.getElementById('header').style.display = 'none';
}
/* ferme le modal au click */
const closeModal = function(e)
{
	if(modal === null) return
	
	e.preventDefault()
	modal.setAttribute('aria-hidden', 'true')
	modal.removeAttribute('aria-modal')
	modal.removeEventListener('click', closeModal)
	modal.querySelector('.js-modal-close').removeEventListener('click', closeModal)
	modal.querySelector('.js-modal-stop').removeEventListener('click', stopPropagation)
	const hideModal = function() {
		modal.style.display = "none"
		document.getElementById('header').style.display = 'block';
		modal.removeEventListener('animationend', hideModal)
		modal = null
	}
	modal.addEventListener('animationend',hideModal)
	
}

/* Empeche propogation du click sur le modal */
const stopPropagation = function(e)
{
	e.stopPropagation()
}

document.querySelectorAll('.js-modal').forEach(a => 
{
	a.addEventListener('click', openModal)
	
})

/* Fermer avec la Touche Echap */

window.addEventListener('keydown',function(e)
{
		if(e.key === "Escape" || e.key === "Esc"){
				closeModal(e)
		}
})
