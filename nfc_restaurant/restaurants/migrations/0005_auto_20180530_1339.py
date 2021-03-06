# Generated by Django 2.0.5 on 2018-05-30 13:39

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('restaurants', '0004_auto_20180528_1636'),
    ]

    operations = [
        migrations.CreateModel(
            name='OrderMenuTransaction',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('quantity', models.PositiveSmallIntegerField()),
                ('status', models.CharField(choices=[('PENDING', 'Pending'), ('SERVED', 'Served'), ('CANCELED', 'Canceled')], max_length=8)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('served_at', models.DateTimeField()),
                ('menu', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='restaurants.Menu')),
                ('order', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='restaurants.Order')),
            ],
        ),
        migrations.RemoveField(
            model_name='ordertransaction',
            name='menu',
        ),
        migrations.RemoveField(
            model_name='ordertransaction',
            name='order',
        ),
        migrations.RemoveField(
            model_name='ordertransaction',
            name='table',
        ),
        migrations.RemoveField(
            model_name='table',
            name='ordered_menus',
        ),
        migrations.DeleteModel(
            name='OrderTransaction',
        ),
        migrations.AddField(
            model_name='order',
            name='menus',
            field=models.ManyToManyField(related_name='orders', through='restaurants.OrderMenuTransaction', to='restaurants.Menu'),
        ),
    ]
