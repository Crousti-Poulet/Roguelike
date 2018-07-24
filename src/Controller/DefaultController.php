<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Request;

class DefaultController extends Controller
{
		/**
     * @route("/", name="homePage"")
     */
    public function homeAction(Request $request)
    {
        return $this->render('DefaultPages/home.html.twig');
    }
}

?>