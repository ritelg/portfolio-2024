deploy: 
	rsync -avz --exclude-from ./exclude-rsync.txt -e "ssh -o StrictHostKeyChecking=no -p ${{ secrets.SERVER_PORT }}" ./ ${{ secrets.SERVER_USER }}@${{ secrets.SERVER_IP }}:/home/${{ secrets.SERVER_USER }}/portfolio/