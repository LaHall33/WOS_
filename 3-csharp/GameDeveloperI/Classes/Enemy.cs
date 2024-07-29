namespace GameDeveloperI.Classes;

public class Enemy
{
    public string Name { get; set; }
    public int Health { get; set; }
    public List<Attack> AttackList { get; set; }

    public Enemy(string name, int health, List<Attack> attackList)  //Constructor to initialize name, health, and attack list.
    {
        Name = name;
        Health = health;
        AttackList = attackList;
    }
    public Enemy(string name)                                       //Constructor to initialize name with default health and empty attack list.
    {
        Name = name;
        Health = 100;
        AttackList = new List<Attack>();
    }

    public virtual string DisplayEnemyName()                        // Method to display enemy names
    {
        return $"Enemy Name: {Name}";
    }

    public string DisplayAttacks()                                  // Method to display attack list
    {
        var attackDescriptions = new List<string>();
        foreach (var attack in AttackList)
        {
            attackDescriptions.Add(attack.DisplayDamage());
        }
        return string.Join("\n", attackDescriptions);
    }

    public string RandomAttack()                                    // Method for a random attack
    {
        Random random = new Random();

        int index = random.Next(AttackList.Count);

        var attack = AttackList[index];

        return $"{Name} attacked with {attack.Name} and caused {attack.DamageAmount} points in damage!";
    }
}