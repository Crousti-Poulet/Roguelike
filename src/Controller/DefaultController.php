<?php

namespace App\Controller;

use App\Controller\DefaultController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\Routing\Annotation\Route;


class DefaultController extends Controller
{
    /** @Route("/", name="homePage") **/
    public function homeAction(Request $request)
    {
        return $this->render('DefaultPages/home.html.twig');
    }
}
