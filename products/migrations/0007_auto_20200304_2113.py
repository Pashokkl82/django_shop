# Generated by Django 3.0.3 on 2020-03-04 18:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0006_auto_20200228_1421'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='price',
            field=models.DecimalField(decimal_places=2, default=1, max_digits=10),
        ),
    ]