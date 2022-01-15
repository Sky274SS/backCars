run:
	sudo docker run -d -p 8000:8000 --rm --name apartment_backend_container skymirs/apartment_backend
stop:
	sudo docker stop apartment_backend_container