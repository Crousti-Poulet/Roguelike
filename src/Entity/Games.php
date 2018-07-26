<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\GamesRepository")
 */
class Games
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $title;

    /**
     * @ORM\Column(type="text")
     */
    private $description;

    /**
     * @ORM\Column(type="date")
     */
    private $release_date;

    /**
     * @ORM\Column(type="float", nullable=true)
     */
    private $avg_rate;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $ratings_nb;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $studio;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $img_path;

    public function getId()
    {
        return $this->id;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): self
    {
        $this->title = $title;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getReleaseDate(): ?\DateTimeInterface
    {
        return $this->release_date;
    }

    public function setReleaseDate(\DateTimeInterface $release_date): self
    {
        $this->release_date = $release_date;

        return $this;
    }

    public function getAvgRate(): ?float
    {
        return $this->avg_rate;
    }

    public function setAvgRate(?float $avg_rate): self
    {
        $this->avg_rate = $avg_rate;

        return $this;
    }

    public function getRatingsNb(): ?int
    {
        return $this->ratings_nb;
    }

    public function setRatingsNb(?int $ratings_nb): self
    {
        $this->ratings_nb = $ratings_nb;

        return $this;
    }

    public function getStudio(): ?string
    {
        return $this->studio;
    }

    public function setStudio(string $studio): self
    {
        $this->studio = $studio;

        return $this;
    }

    public function getImgPath(): ?string
    {
        return $this->img_path;
    }

    public function setImgPath(string $img_path): self
    {
        $this->img_path = $img_path;

        return $this;
    }
}
