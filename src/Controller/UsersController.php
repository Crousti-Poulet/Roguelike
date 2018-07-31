<?php

namespace App\Controller;

use App\Entity\Users;
use App\Form\registrationForm;
use App\Controller\UsersController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

Class UsersController extends Controller
{
    /** @Route
     * ("/account", name="createAccount") 
     */
    public function createAccountAction(request $request)
    {
        $form = $this->createForm(registrationForm::class);
       
        if(!empty($_POST)) {
            $user = new Users();
            $user->setCreatedAt('5415641');
            $user->setName('Octopus');
            $user->setPassword('Octopus');
            $user->setEmail('Octopus');
            $em = $this->getDoctrine()->getManager();
            $em->persist($user);
            $em->flush();
        }

        return $this->render('UsersPages/createAccount.html.twig', [
            'registrationForm' => $form->createView()
        ]);
        
    }
}